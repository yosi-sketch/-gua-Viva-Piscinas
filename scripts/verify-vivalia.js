const fs = require('fs');
const path = require('path');

console.log('=== VERIFICAÇÃO INTEGRAL — CLÍNICA VIVÁLIA (JUATUBA - MG) ===\n');

// 1. Validar Arquivos em public/
console.log('1. Validando Arquivos Públicos...');
const requiredFiles = [
  'public/logo.png',
  'public/logo-horizontal.png',
  'public/logo-horizontal-light.png',
  'public/logo-emblem.png',
  'public/dr-alessandro-galvao.jpg',
  'public/clinica-espaco-corredor.jpg',
  'public/favicon.ico',
  'public/icon.png',
  'public/apple-icon.png',
  'public/icon-192x192.png',
  'public/og-image.jpg',
  'app/favicon.ico',
  'app/icon.png',
  'app/apple-icon.png',
];

let filesOk = true;
requiredFiles.forEach(file => {
  const exists = fs.existsSync(path.resolve(file));
  const size = exists ? fs.statSync(path.resolve(file)).size : 0;
  console.log(`  [${exists ? 'OK' : 'FAIL'}] ${file} (${size} bytes)`);
  if (!exists || size === 0) filesOk = false;
});

// 2. Validar que não há vestígios do projeto antigo
console.log('\n2. Verificando ausência de vestígios do projeto anterior...');
const sourceFiles = [
  'app/page.tsx',
  'app/layout.tsx',
  'app/globals.css',
  'app/components/GlowingButton.tsx',
  'package.json',
  'PRODUCT.md',
  'README.md',
];

const forbiddenTerms = [
  'TOMOSID',
  'Frederico',
  'Cambraia',
  'Campo Belo',
  '34752',
  '10424',
  '99976-0750',
  '5535999760750',
];

let vestigios = 0;
sourceFiles.forEach(file => {
  const content = fs.readFileSync(path.resolve(file), 'utf8');
  forbiddenTerms.forEach(term => {
    if (content.includes(term)) {
      console.error(`  [ALERTA] Termo "${term}" encontrado em ${file}`);
      vestigios++;
    }
  });
});
if (vestigios === 0) {
  console.log('  [OK] Nenhum rastro da clínica/médico anterior encontrado em todo o código-fonte!');
}

// 3. Validar Dados Oficiais da Clínica Vivália
console.log('\n3. Validando dados oficiais da Clínica Vivália...');
const pageContent = fs.readFileSync(path.resolve('app/page.tsx'), 'utf8');
const layoutContent = fs.readFileSync(path.resolve('app/layout.tsx'), 'utf8');

const checks = [
  { label: 'Nome da Clínica "Clínica Vivália" no page.tsx', test: pageContent.includes('Clínica Vivália') },
  { label: 'Telefone WhatsApp (31) 99662-2315 no page.tsx', test: pageContent.includes('5531996622315') && pageContent.includes('(31) 99662-2315') },
  { label: 'Endereço Av. Tânus Saliba, 71A no page.tsx', test: pageContent.includes('Av. Tânus Saliba, 71A') },
  { label: 'Cidade Juatuba - MG no page.tsx', test: pageContent.includes('Juatuba') },
  { label: 'Dr. Alessandro Galvão citado no page.tsx', test: pageContent.includes('Alessandro Galvão') },
  { label: 'Dr. Elissander citado no page.tsx', test: pageContent.includes('Elissander') },
  { label: 'Avaliação 5,0 estrelas e 71 avaliações no page.tsx', test: pageContent.includes('5,0') && pageContent.includes('71') },
  { label: 'Instagram @clinicavivalia no page.tsx', test: pageContent.includes('clinicavivalia') },
  { label: 'Foto do médico aplicada (/dr-alessandro-galvao.jpg)', test: pageContent.includes('dr-alessandro-galvao.jpg') },
  { label: 'Foto do corredor/espaço aplicada (/clinica-espaco-corredor.jpg)', test: pageContent.includes('clinica-espaco-corredor.jpg') },
  { label: 'Logo oficial aplicado (/logo-horizontal.png)', test: pageContent.includes('logo-horizontal.png') },
  { label: 'Paleta Deep Pine Teal (#066e69) no globals.css', test: fs.readFileSync(path.resolve('app/globals.css'), 'utf8').includes('#066e69') },
  { label: 'Paleta Ochre Gold (#b3844e) no globals.css', test: fs.readFileSync(path.resolve('app/globals.css'), 'utf8').includes('#b3844e') },
  { label: 'Schema JSON-LD MedicalClinic no layout.tsx', test: layoutContent.includes('"@type": "MedicalClinic"') },
];

let checksOk = true;
checks.forEach(c => {
  console.log(`  [${c.test ? 'OK' : 'FAIL'}] ${c.label}`);
  if (!c.test) checksOk = false;
});

console.log('\n=== RESULTADO FINAL ===');
if (filesOk && vestigios === 0 && checksOk) {
  console.log('✅ TODAS AS VALIDAÇÕES PASSARAM COM SUCESSO ABSOLUTO!');
} else {
  console.log('❌ HOUVE FALHAS NA VALIDAÇÃO.');
  process.exit(1);
}
