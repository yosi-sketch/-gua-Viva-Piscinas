const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('=== VERIFICAÇÃO INTEGRAL — CLÍNICA SÃO CAMILO ===\n');

let failed = false;

// 1. Assets check
console.log('1. Verificando arquivos de imagem e favicons...');
const requiredFiles = [
  'public/logo.png',
  'public/banner-especialidades.png',
  'public/clinica-atendimento.jpg',
  'public/clinica-estrutura.jpg',
  'public/og-image.jpg',
  'public/favicon.ico',
  'public/icon.png',
  'public/apple-icon.png',
  'public/icon-192x192.png',
  'public/icon-32x32.png',
  'app/favicon.ico',
  'app/icon.png',
  'app/apple-icon.png'
];

for (const f of requiredFiles) {
  if (fs.existsSync(f)) {
    const stat = fs.statSync(f);
    console.log(`  ✓ ${f} (${stat.size} bytes)`);
  } else {
    console.error(`  ✗ ARQUIVO FALTANDO: ${f}`);
    failed = true;
  }
}

// 2. Legacy check
console.log('\n2. Verificando ausência de rastros da clínica/projeto anterior...');
const legacyTerms = ['frank', 'eduardo', 'odontologia', 'cirurgião dentista', 'igarapé', 'meg'];
const filesToCheck = [
  'app/page.tsx',
  'app/layout.tsx',
  'app/globals.css',
  'app/components/GlowingButton.tsx',
  'package.json',
  'PRODUCT.md',
  'README.md'
];

for (const f of filesToCheck) {
  const content = fs.readFileSync(f, 'utf8');
  for (const term of legacyTerms) {
    const regex = new RegExp(term, 'gi');
    const matches = content.match(regex);
    if (matches) {
      console.error(`  ✗ Rastro encontrado em ${f}: "${term}" (${matches.length}x)`);
      failed = true;
    }
  }
}
if (!failed) {
  console.log('  ✓ Nenhum rastro do projeto anterior encontrado nos arquivos principais!');
}

// 3. New information check
console.log('\n3. Verificando dados cadastrais e de contato da Clínica São Camilo...');
const pageContent = fs.readFileSync('app/page.tsx', 'utf8');
const layoutContent = fs.readFileSync('app/layout.tsx', 'utf8');

const checks = [
  { name: 'Nome da Clínica', test: pageContent.includes('Clínica São Camilo') && layoutContent.includes('Clínica São Camilo') },
  { name: 'Cidade (Nova Serrana - MG)', test: pageContent.includes('Nova Serrana') && layoutContent.includes('Nova Serrana') },
  { name: 'Endereço (R. Antônio Ferreira do Amaral, 136)', test: pageContent.includes('Antônio Ferreira do Amaral, 136') },
  { name: 'Telefone formatado (37) 3226-2910', test: pageContent.includes('(37) 3226-2910') },
  { name: 'WhatsApp API 553732262910', test: pageContent.includes('553732262910') },
  { name: 'Avaliação Google 4,8', test: pageContent.includes('4,8') },
  { name: 'Contagem de reviews (203)', test: pageContent.includes('203') },
  { name: 'Instagram oficial clinicasaocamilons', test: pageContent.includes('clinicasaocamilons') }
];

for (const c of checks) {
  if (c.test) {
    console.log(`  ✓ ${c.name}`);
  } else {
    console.error(`  ✗ Falha na validação de: ${c.name}`);
    failed = true;
  }
}

// 4. All 11 specialties from the banner check
console.log('\n4. Verificando as 11 especialidades do banner oficial...');
const bannerSpecialties = [
  'Pediatria',
  'Medicina do Trabalho',
  'Vacinas',
  'Angiologia',
  'Audiometria',
  'Cardiologia',
  'Nutrição',
  'Otorrinolaringologia',
  'Pneumologia',
  'Psiquiatria',
  'Urologia'
];

for (const spec of bannerSpecialties) {
  if (pageContent.includes(spec)) {
    console.log(`  ✓ ${spec}`);
  } else {
    console.error(`  ✗ Especialidade não encontrada: ${spec}`);
    failed = true;
  }
}

// 5. Teste de build
console.log('\n5. Executando build de produção...');
try {
  execSync('npm run build', { stdio: 'pipe' });
  console.log('  ✓ Build de produção concluído com sucesso!');
} catch (err) {
  console.error('  ✗ Falha no build de produção:', err.message);
  failed = true;
}

console.log('\n=== RESULTADO FINAL ===');
if (failed) {
  console.error('❌ FORAM ENCONTRADOS PROBLEMAS.');
  process.exit(1);
} else {
  console.log('✅ TODAS AS VALIDAÇÕES FORAM APROVADAS COM 100% DE SUCESSO!');
}
