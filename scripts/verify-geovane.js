const fs = require('fs');
const path = require('path');

console.log('=== VERIFICAÇÃO AUTOMATIZADA: ADVOCACIA DR. GEOVANE MARTINS ===\n');

let errors = 0;

// 1. Verificar arquivos na pasta public/
const requiredPublicFiles = [
  'logo.png',
  'emblem.png',
  'emblema-balanca.png',
  'hero.jpg',
  'portrait.jpg',
  'dr-geovane-martins.jpg',
  'dr-geovane-escritorio.jpg',
  'favicon.ico',
  'icon.png',
  'apple-icon.png',
  'icon-192x192.png',
  'icon-48x48.png',
  'icon-32x32.png',
  'icon-16x16.png',
];

console.log('[1/4] Verificando arquivos públicos...');
for (const file of requiredPublicFiles) {
  const fullPath = path.join('public', file);
  if (fs.existsSync(fullPath)) {
    const stats = fs.statSync(fullPath);
    console.log(`  ✓ public/${file} (${stats.size} bytes)`);
  } else {
    console.error(`  ✗ public/${file} NÃO ENCONTRADO!`);
    errors++;
  }
}

// 2. Verificar arquivos na pasta app/
const requiredAppFiles = [
  'favicon.ico',
  'icon.png',
  'apple-icon.png',
  'globals.css',
  'layout.tsx',
  'page.tsx',
];

console.log('\n[2/4] Verificando arquivos em app/...');
for (const file of requiredAppFiles) {
  const fullPath = path.join('app', file);
  if (fs.existsSync(fullPath)) {
    const stats = fs.statSync(fullPath);
    console.log(`  ✓ app/${file} (${stats.size} bytes)`);
  } else {
    console.error(`  ✗ app/${file} NÃO ENCONTRADO!`);
    errors++;
  }
}

// 3. Verificar ausência de referências ao cliente anterior
console.log('\n[3/4] Verificando se restou qualquer rastro do cliente anterior...');
const filesToCheck = [
  'app/page.tsx',
  'app/layout.tsx',
  'app/globals.css',
  'app/components/GlowingButton.tsx',
  'package.json',
  'README.md',
  'PRODUCT.md',
];

const bannedPatterns = [
  /juscelino/i,
  /bocai[uú]va/i,
  /99849/i,
  /ojuscelinogermano/i,
  /juscelinoadv/i,
];

for (const relPath of filesToCheck) {
  if (fs.existsSync(relPath)) {
    const content = fs.readFileSync(relPath, 'utf8');
    for (const pattern of bannedPatterns) {
      if (pattern.test(content)) {
        console.error(`  ✗ ALERTA: Encontrado padrão proibido ${pattern} em ${relPath}!`);
        errors++;
      }
    }
  }
}

if (errors === 0) {
  console.log('  ✓ Nenhum rastro do cliente anterior encontrado em nenhum arquivo!');
}

// 4. Verificar dados do Dr. Geovane Martins
console.log('\n[4/4] Verificando dados oficiais do Dr. Geovane Martins...');
const pageContent = fs.readFileSync('app/page.tsx', 'utf8');
const layoutContent = fs.readFileSync('app/layout.tsx', 'utf8');

const requiredStrings = [
  'Dr. Geovane Martins',
  'Advocacia Dr. Geovane Martins',
  '99114-3595',
  '5537991143595',
  'Praça dos Ex-Combatentes, 33',
  'Cláudio, MG',
  'geovanemartinsadv@gmail.com',
  '@geovanemartinsadv',
  'Marcilio Carneiro',
  'Daniel Amaral',
  'Élida Ferreira',
  '5,0',
  '26 avaliações',
];

for (const str of requiredStrings) {
  if (pageContent.includes(str) || layoutContent.includes(str)) {
    console.log(`  ✓ Dados presentes: "${str}"`);
  } else {
    console.error(`  ✗ DADOS AUSENTES: "${str}"!`);
    errors++;
  }
}

console.log('\n=== RESULTADO DA VERIFICAÇÃO ===');
if (errors === 0) {
  console.log('STATUS: SUCESSO ABSOLUTO (0 erros encontrados).');
} else {
  console.error(`STATUS: FALHA (${errors} erros encontrados).`);
  process.exit(1);
}
