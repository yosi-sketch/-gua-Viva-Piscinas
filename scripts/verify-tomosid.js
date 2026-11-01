const fs = require('fs');
const path = require('path');

console.log('=== VERIFICAÇÃO INTEGRAL — TOMOSID · DR. FREDERICO CAMBRAIA ===\n');

let failed = false;

// 1. Assets check
console.log('1. Verificando arquivos de imagem, logo e favicons...');
const requiredFiles = [
  'public/logo.png',
  'public/logo-dark.png',
  'public/logo.svg',
  'public/logo-dark.svg',
  'public/logo-emblem.png',
  'public/fachada-clinica.jpg',
  'public/og-image.jpg',
  'public/favicon.ico',
  'public/icon.png',
  'public/apple-icon.png',
  'public/icon-192x192.png',
  'public/icon-48x48.png',
  'public/icon-32x32.png',
  'public/icon-16x16.png',
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

// 2. Legacy check: Ensure no traces of previous clinics remain!
console.log('\n2. Verificando ausência de rastros da clínica/projeto anterior...');
const legacyTerms = [
  'são camilo',
  'sao camilo',
  'nova serrana',
  'camilo',
  'frank',
  'eduardo',
  'odontologia',
  'cirurgião dentista',
  'igarapé',
  'igarape',
  'meg',
  'puericultura',
  'calçadista',
  'calcadista',
  'orelhinha',
  '553732262910'
];

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
    const regex = new RegExp(`\\b${term}\\b`, 'gi');
    const matches = content.match(regex);
    if (matches) {
      console.error(`  ✗ Rastro encontrado em ${f}: "${term}" (${matches.length}x)`);
      failed = true;
    }
  }
}

// 3. Official contact and technical data validation
console.log('\n3. Validando dados oficiais da TOMOSID e Dr. Frederico Cambraia...');
const pageContent = fs.readFileSync('app/page.tsx', 'utf8');
const layoutContent = fs.readFileSync('app/layout.tsx', 'utf8');

const checks = [
  { label: 'Dr. Frederico Cambraia presente no page.tsx', test: pageContent.includes('Dr. Frederico Cambraia') },
  { label: 'CRM-MG 34752 presente no page.tsx', test: pageContent.includes('34752') },
  { label: 'RQE 10424 presente no page.tsx', test: pageContent.includes('10424') },
  { label: 'Telefone WhatsApp (35) 99976-0750 presente no page.tsx', test: pageContent.includes('5535999760750') },
  { label: 'Endereço R. Dom Pedro II, 337 presente no page.tsx', test: pageContent.includes('Dom Pedro II, 337') },
  { label: 'Campo Belo presente no page.tsx', test: pageContent.includes('Campo Belo') },
  { label: 'Instagram @tomosidoficial presente no page.tsx', test: pageContent.includes('tomosidoficial') },
  { label: 'Avaliação 4,2 no page.tsx', test: pageContent.includes('4,2') },
  { label: '124 avaliações no page.tsx', test: pageContent.includes('124') },
  { label: 'Fachada oficial utilizada no page.tsx', test: pageContent.includes('fachada-clinica.jpg') },
  { label: 'Mapeamento de Endometriose presente', test: pageContent.includes('Endometriose') },
  { label: 'HyCoSy presente', test: pageContent.includes('HyCoSy') },
  { label: 'Ecocardiografia Fetal presente', test: pageContent.includes('Ecofetal') || pageContent.includes('Ecocardiografia Fetal') },
  { label: 'Biópsias presente', test: pageContent.includes('Biópsias') },
  { label: 'Tomografia Computadorizada presente', test: pageContent.includes('Tomografia Computadorizada') },
  { label: 'Ressonância Magnética presente', test: pageContent.includes('Ressonância Magnética') },
  { label: 'Schema.org DiagnosticLab no layout.tsx', test: layoutContent.includes('DiagnosticLab') }
];

for (const c of checks) {
  if (c.test) {
    console.log(`  ✓ ${c.label}`);
  } else {
    console.error(`  ✗ FALHA: ${c.label}`);
    failed = true;
  }
}

if (failed) {
  console.error('\n❌ VERIFICAÇÃO FALHOU: Corrija os pontos acima.');
  process.exit(1);
} else {
  console.log('\n✅ TODAS AS VERIFICAÇÕES PASSARAM COM SUCESSO! 100% LIMPO E ALINHADO.');
}
