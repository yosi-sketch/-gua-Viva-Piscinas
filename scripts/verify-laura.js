const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function verify() {
  console.log('🔍 Executing Comprehensive Verification for Adv. Laura Melo Lopes...');

  // 1. Assets Check
  console.log('\n--- 1. ASSETS IN PUBLIC & APP ---');
  const requiredPublic = [
    'public/favicon.ico',
    'public/icon.png',
    'public/apple-icon.png',
    'public/icon-16x16.png',
    'public/icon-32x32.png',
    'public/icon-48x48.png',
    'public/icon-192x192.png',
    'public/logo.png',
    'public/logo-white.png',
    'public/logo-horizontal.png',
    'public/logo-emblem.png',
    'public/emblem.png',
    'public/dra-laura.jpg',
    'public/hero.jpg',
    'public/laura-melo-lopes.jpg'
  ];

  const requiredApp = [
    'app/favicon.ico',
    'app/icon.png',
    'app/apple-icon.png'
  ];

  for (const file of [...requiredPublic, ...requiredApp]) {
    if (!fs.existsSync(file)) {
      throw new Error(`Missing asset: ${file}`);
    }
    const stat = fs.statSync(file);
    console.log(`  ✓ ${file} (${(stat.size / 1024).toFixed(1)} KB)`);
  }

  // Check dimensions of key images
  const logoMeta = await sharp('public/logo.png').metadata();
  console.log(`  ✓ public/logo.png: ${logoMeta.width}x${logoMeta.height} (${logoMeta.format})`);
  const logoWhiteMeta = await sharp('public/logo-white.png').metadata();
  console.log(`  ✓ public/logo-white.png: ${logoWhiteMeta.width}x${logoWhiteMeta.height} (${logoWhiteMeta.format})`);
  const emblemMeta = await sharp('public/emblem.png').metadata();
  console.log(`  ✓ public/emblem.png: ${emblemMeta.width}x${emblemMeta.height} (${emblemMeta.format})`);
  const photoMeta = await sharp('public/dra-laura.jpg').metadata();
  console.log(`  ✓ public/dra-laura.jpg: ${photoMeta.width}x${photoMeta.height} (${photoMeta.format})`);

  // 2. Client Info Consistency
  console.log('\n--- 2. CLIENT DATA INTEGRITY ---');
  const pageContent = fs.readFileSync('app/page.tsx', 'utf8');
  const layoutContent = fs.readFileSync('app/layout.tsx', 'utf8');

  const mustInclude = [
    'Laura Melo Lopes',
    'OAB/MG 248.197',
    '5535998763350',
    '(35) 99876-3350',
    'Rua Monsenhor Mário, 405',
    'Carmo do Rio Claro',
    'adv.lauramelolopes',
    'bio.site/adv.lauramelolopes'
  ];

  for (const str of mustInclude) {
    if (!pageContent.includes(str)) {
      throw new Error(`Missing expected string in app/page.tsx: "${str}"`);
    }
    console.log(`  ✓ app/page.tsx includes: "${str}"`);
  }

  // 3. Prova Social Check (10 Reviews)
  console.log('\n--- 3. SOCIAL PROOF (10 REVIEWS) ---');
  const reviewNames = [
    'Carolina Balestra Silva',
    'Igor Lopes',
    'Maria Luiza Freire Andrade',
    'Gabriela Carielo',
    'Stéfanie Sabrine Silva Santos',
    'eduardo barros',
    'Bruno Melo',
    'Lucas Mendes',
    'Tulio Avelino',
    'Marilda Elias'
  ];

  for (const name of reviewNames) {
    if (!pageContent.includes(name)) {
      throw new Error(`Review missing: "${name}"`);
    }
    console.log(`  ✓ Verified review from: ${name}`);
  }

  // 4. Zero Traces of Old Client
  console.log('\n--- 4. OLD CLIENT PURGE VERIFICATION ---');
  const forbiddenPatterns = [
    /guimarães/i,
    /guimaraes/i,
    /santiago/i,
    /salinas/i,
    /vitor/i,
    /anna luiza/i,
    /99958/i,
    /antonella/i,
    /39560/i
  ];

  const sourceFiles = [
    'app/page.tsx',
    'app/layout.tsx',
    'app/globals.css',
    'app/components/GlowingButton.tsx',
    'package.json',
    'README.md',
    'PRODUCT.md'
  ];

  let violations = 0;
  for (const file of sourceFiles) {
    const text = fs.readFileSync(file, 'utf8');
    for (const pat of forbiddenPatterns) {
      if (pat.test(text)) {
        console.error(`  ❌ Forbidden pattern ${pat} found in ${file}`);
        violations++;
      }
    }
  }

  if (violations === 0) {
    console.log('  ✓ ZERO traces of previous client across all files!');
  } else {
    throw new Error(`Found ${violations} violations of previous client text.`);
  }

  console.log('\n🎉 ALL CHECKS PASSED PERFECTLY!');
}

verify().catch(err => {
  console.error(err);
  process.exit(1);
});
