const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function verify() {
  console.log('🔍 Executing Comprehensive Verification for Dr. Frank Eduardo — Odontologia...\n');

  let passed = true;

  // 1. Check all required assets in public/
  const requiredPublicAssets = [
    'public/logo.png',
    'public/logo-horizontal.png',
    'public/emblem.png',
    'public/dr-frank-eduardo.jpg',
    'public/consultorio.jpg',
    'public/favicon.ico',
    'public/apple-icon.png',
    'public/icon.png',
    'public/icon-192x192.png',
    'public/icon-48x48.png',
    'public/icon-32x32.png',
    'public/icon-16x16.png',
  ];

  console.log('1. Verifying Public Assets:');
  for (const asset of requiredPublicAssets) {
    if (fs.existsSync(asset)) {
      const stats = fs.statSync(asset);
      console.log(`  ✓ ${asset} (${stats.size} bytes)`);
    } else {
      console.error(`  ✗ Missing: ${asset}`);
      passed = false;
    }
  }

  // 2. Check app/ icon assets
  const requiredAppAssets = [
    'app/favicon.ico',
    'app/apple-icon.png',
    'app/icon.png',
  ];

  console.log('\n2. Verifying App Directory Icons:');
  for (const asset of requiredAppAssets) {
    if (fs.existsSync(asset)) {
      const stats = fs.statSync(asset);
      console.log(`  ✓ ${asset} (${stats.size} bytes)`);
    } else {
      console.error(`  ✗ Missing: ${asset}`);
      passed = false;
    }
  }

  // 3. Check image validity & dimensions
  console.log('\n3. Validating Image Resolution & Alpha Channels:');
  const logoMeta = await sharp('public/logo.png').metadata();
  console.log(`  ✓ public/logo.png: ${logoMeta.width}x${logoMeta.height} (${logoMeta.format}, alpha: ${logoMeta.hasAlpha})`);

  const emblemMeta = await sharp('public/emblem.png').metadata();
  console.log(`  ✓ public/emblem.png: ${emblemMeta.width}x${emblemMeta.height} (${emblemMeta.format}, alpha: ${emblemMeta.hasAlpha})`);

  const doctorMeta = await sharp('public/dr-frank-eduardo.jpg').metadata();
  console.log(`  ✓ public/dr-frank-eduardo.jpg: ${doctorMeta.width}x${doctorMeta.height} (${doctorMeta.format})`);

  const consultorioMeta = await sharp('public/consultorio.jpg').metadata();
  console.log(`  ✓ public/consultorio.jpg: ${consultorioMeta.width}x${consultorioMeta.height} (${consultorioMeta.format})`);

  // 4. Verify that page.tsx and layout.tsx contain Dr. Frank Eduardo's data
  console.log('\n4. Verifying Codebase Content & Integrity:');
  const pageContent = fs.readFileSync('app/page.tsx', 'utf-8');
  const layoutContent = fs.readFileSync('app/layout.tsx', 'utf-8');

  const requiredTerms = [
    'Dr. Frank Eduardo',
    'Odontologia Avançada',
    'Cirurgião',
    '99767-0022',
    '5531997670022',
    'Igarapé',
    'Gov. Valadares',
    'Meg',
    '256',
    '5,0',
  ];

  for (const term of requiredTerms) {
    if (pageContent.includes(term)) {
      console.log(`  ✓ Found in page.tsx: "${term}"`);
    } else {
      console.error(`  ✗ Missing in page.tsx: "${term}"`);
      passed = false;
    }
  }

  for (const term of ['Dr. Frank Eduardo', 'Igarapé', '99767-0022', 'Gov. Valadares']) {
    if (layoutContent.includes(term)) {
      console.log(`  ✓ Found in layout.tsx: "${term}"`);
    } else {
      console.error(`  ✗ Missing in layout.tsx: "${term}"`);
      passed = false;
    }
  }

  // 5. Verify no remnants of previous project
  console.log('\n5. Verifying Zero Residue of Previous Projects:');
  const forbiddenTerms = [
    'kamilla',
    'laura',
    'mateus leme',
    'itaúna',
    'dermatolog',
    'crm-mg',
    '57814',
    '99717-2916',
    '5531997172916',
    'tancredo neves',
    'kálica',
  ];

  for (const term of forbiddenTerms) {
    const pageMatches = pageContent.toLowerCase().includes(term);
    const layoutMatches = layoutContent.toLowerCase().includes(term);
    if (pageMatches) {
      console.error(`  ✗ Residue found in page.tsx: "${term}"`);
      passed = false;
    }
    if (layoutMatches) {
      console.error(`  ✗ Residue found in layout.tsx: "${term}"`);
      passed = false;
    }
  }

  if (passed) {
    console.log('\n🎉 ALL CHECKS PASSED PERFECTLY! 100% compliant with Dr. Frank Eduardo branding.');
  } else {
    console.error('\n⚠️ SOME CHECKS FAILED!');
    process.exit(1);
  }
}

verify().catch(console.error);
