const fs = require('fs');
const path = require('path');

console.log('=== VERIFICAÇÃO DE INTEGRIDADE: MARIANA LEÃO ADVOCACIA ===\n');

let errors = 0;

// 1. Check all required image assets in public/
const requiredPublicFiles = [
  'public/logo.png',
  'public/logo-horizontal.png',
  'public/logo-mariana.png',
  'public/logo-emblem.png',
  'public/dra-mariana.jpg',
  'public/dra-mariana-leao.jpg',
  'public/mariana-leao-advogada.jpg',
  'public/mariana-leao-sobre.jpg',
  'public/mariana-leao-hero.jpg',
  'public/hero.jpg',
  'public/portrait.jpg',
  'public/emblem.png',
  'public/emblema-mariana.png',
  'public/favicon.ico',
  'public/icon.png',
  'public/icon-16x16.png',
  'public/icon-32x32.png',
  'public/icon-48x48.png',
  'public/icon-192x192.png',
  'public/apple-icon.png',
];

console.log('1. Verificando arquivos públicos obrigatórios:');
for (const file of requiredPublicFiles) {
  if (fs.existsSync(file)) {
    const stats = fs.statSync(file);
    console.log(`  [OK] ${file} (${stats.size} bytes)`);
  } else {
    console.error(`  [ERRO] Arquivo ausente: ${file}`);
    errors++;
  }
}

// 2. Check app icons for Next.js App Router
const requiredAppFiles = [
  'app/favicon.ico',
  'app/icon.png',
  'app/apple-icon.png',
  'app/layout.tsx',
  'app/page.tsx',
  'app/globals.css',
  'app/components/GlowingButton.tsx',
];

console.log('\n2. Verificando arquivos essenciais do App Router:');
for (const file of requiredAppFiles) {
  if (fs.existsSync(file)) {
    const stats = fs.statSync(file);
    console.log(`  [OK] ${file} (${stats.size} bytes)`);
  } else {
    console.error(`  [ERRO] Arquivo ausente: ${file}`);
    errors++;
  }
}

// 3. Scan codebase for any traces of previous client
console.log('\n3. Varredura rigorosa de rastros do cliente anterior no código:');
const forbiddenPatterns = [
  /Nayara/i,
  /Medina/i,
  /Pitangui/i,
  /99835-1816/,
  /184\.540/,
  /Geovane/i,
  /Tangara/i,
];

function scanDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const f of files) {
    if (f === 'node_modules' || f === '.next' || f === '.git' || f === 'setup-nayara-assets.js' || f === 'verify-nayara.js') continue;
    const fullPath = path.join(dir, f);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      scanDir(fullPath);
    } else if (f.endsWith('.tsx') || f.endsWith('.ts') || f.endsWith('.css') || f.endsWith('.json') || f.endsWith('.md')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      for (const pattern of forbiddenPatterns) {
        if (pattern.test(content)) {
          console.error(`  [ERRO] Rastro detectado em ${fullPath}: padrão ${pattern}`);
          errors++;
        }
      }
    }
  }
}

scanDir('app');
scanDir('public');
scanDir('scripts');

// Check package.json, PRODUCT.md, README.md specifically
for (const rootFile of ['package.json', 'PRODUCT.md', 'README.md']) {
  if (fs.existsSync(rootFile)) {
    const content = fs.readFileSync(rootFile, 'utf8');
    for (const pattern of forbiddenPatterns) {
      if (pattern.test(content)) {
        console.error(`  [ERRO] Rastro detectado em ${rootFile}: padrão ${pattern}`);
        errors++;
      }
    }
  }
}

// 4. Verify Mariana Leão Advocacia credentials
console.log('\n4. Verificando dados de Mariana Leão Advocacia:');
const pageContent = fs.readFileSync('app/page.tsx', 'utf8');
const layoutContent = fs.readFileSync('app/layout.tsx', 'utf8');

const assertions = [
  { name: 'Nome no H1 / Page', test: pageContent.includes('Mariana Leão Advocacia') },
  { name: 'Dra. Mariana Leão no Page', test: pageContent.includes('Dra. Mariana Leão') },
  { name: 'WhatsApp (37) 99955-1587 no Page', test: pageContent.includes('99955-1587') },
  { name: 'Oliveira no Page', test: pageContent.includes('Oliveira') },
  { name: 'R. Chagas Sobrinho, 72 no Page', test: pageContent.includes('R. Chagas Sobrinho, 72') },
  { name: 'Instagram @marianaleaoadv no Page', test: pageContent.includes('marianaleaoadv') },
  { name: 'Nota 5,0 no Page', test: pageContent.includes('5,0') },
  { name: 'Virgínia Barbosa nas avaliações', test: pageContent.includes('Virgínia Barbosa') },
  { name: 'Gilberto Dst nas avaliações', test: pageContent.includes('Gilberto Dst') },
  { name: 'Marina Soares nas avaliações', test: pageContent.includes('Marina Soares') },
  { name: 'Karina Ribeiro nas avaliações', test: pageContent.includes('Karina Ribeiro') },
  { name: 'Favicon no layout.tsx com cache busting ?v=ml2', test: layoutContent.includes('/favicon.ico?v=ml2') },
  { name: 'Metadata title no layout.tsx', test: layoutContent.includes('Mariana Leão Advocacia') },
];

for (const a of assertions) {
  if (a.test) {
    console.log(`  [OK] ${a.name}`);
  } else {
    console.error(`  [ERRO] Falha na asserção: ${a.name}`);
    errors++;
  }
}

console.log(`\n=== FIM DA VERIFICAÇÃO: ${errors === 0 ? 'SUCESSO TOTAL (0 ERROS)!' : `${errors} ERROS ENCONTRADOS`} ===`);
process.exit(errors > 0 ? 1 : 0);
