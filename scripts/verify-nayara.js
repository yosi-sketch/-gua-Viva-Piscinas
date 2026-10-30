const fs = require('fs');
const path = require('path');

console.log('=== VERIFICAÇÃO DE INTEGRIDADE: DRA. NAYARA MEDINA ===\n');

let errors = 0;

// 1. Check all required image assets in public/
const requiredPublicFiles = [
  'public/logo.png',
  'public/logo-horizontal.png',
  'public/logo-nayara.png',
  'public/dra-nayara.jpg',
  'public/hero.jpg',
  'public/portrait.jpg',
  'public/emblem.png',
  'public/emblema-balanca.png',
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
  /Geovane/i,
  /Cláudio/i,
  /Claudio/i,
  /99114-3595/,
  /Praça dos Ex-Combatentes/i,
];

function scanDir(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    if (f === 'node_modules' || f === '.next' || f === '.git') continue;
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

// 4. Verify Dra. Nayara Medina credentials
console.log('\n4. Verificando dados da Dra. Nayara Medina:');
const pageContent = fs.readFileSync('app/page.tsx', 'utf8');
const layoutContent = fs.readFileSync('app/layout.tsx', 'utf8');

const assertions = [
  { name: 'Nome no H1 / Page', test: pageContent.includes('Dra. Nayara Medina') },
  { name: 'OAB/MG 184.540 no Page', test: pageContent.includes('184.540') },
  { name: 'WhatsApp (37) 99835-1816 no Page', test: pageContent.includes('99835-1816') },
  { name: 'Pitangui no Page', test: pageContent.includes('Pitangui') },
  { name: 'R. Maria Tangara, 20 no Page', test: pageContent.includes('R. Maria Tangara, 20') },
  { name: 'Instagram @nayaramedina.adv no Page', test: pageContent.includes('nayaramedina.adv') },
  { name: 'Nota 5,0 no Page', test: pageContent.includes('5,0') },
  { name: 'Paloma Milena nas avaliações', test: pageContent.includes('Paloma Milena') },
  { name: 'Nicholas Henrique nas avaliações', test: pageContent.includes('Nicholas Henrique') },
  { name: 'Daniela Campos nas avaliações', test: pageContent.includes('Daniela Campos') },
  { name: 'Favicon no layout.tsx com cache busting', test: layoutContent.includes('/favicon.ico?v=nm1') },
  { name: 'Metadata title no layout.tsx', test: layoutContent.includes('Dra. Nayara Medina') },
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
