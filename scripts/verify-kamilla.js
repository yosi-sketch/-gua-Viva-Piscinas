const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function verify() {
  console.log('🔍 Executing Comprehensive Verification for Clínica Dra. Kamilla...\n');

  let passed = true;

  // 1. Check all required assets in public/
  const requiredPublicAssets = [
    'public/logo.png',
    'public/logo-horizontal.png',
    'public/emblem.png',
    'public/dra-kamilla.jpg',
    'public/equipe-clinica.jpg',
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

  const kamillaMeta = await sharp('public/dra-kamilla.jpg').metadata();
  console.log(`  ✓ public/dra-kamilla.jpg: ${kamillaMeta.width}x${kamillaMeta.height} (${kamillaMeta.format})`);

  const equipeMeta = await sharp('public/equipe-clinica.jpg').metadata();
  console.log(`  ✓ public/equipe-clinica.jpg: ${equipeMeta.width}x${equipeMeta.height} (${equipeMeta.format})`);

  // 4. Verify that page.tsx and layout.tsx contain Dra. Kamilla's data
  console.log('\n4. Verifying Codebase Content & Integrity:');
  const pageContent = fs.readFileSync('app/page.tsx', 'utf-8');
  const layoutContent = fs.readFileSync('app/layout.tsx', 'utf-8');

  const requiredTerms = [
    'Clínica Dra. Kamilla',
    'Dra. Kamilla',
    'CRM-MG 57814',
    '99717-2916',
    '5531997172916',
    'Mateus Leme',
    'Itaúna',
    'R. Pres. Tancredo Neves, 294',
    'Kálica',
    'clinicadrakamilla',
    '611',
  ];

  for (const term of requiredTerms) {
    if (pageContent.includes(term)) {
      console.log(`  ✓ Found in page.tsx: "${term}"`);
    } else {
      console.error(`  ✗ Missing in page.tsx: "${term}"`);
      passed = false;
    }
  }

  // 5. Verify no remnants of previous project
  console.log('\n5. Verifying Zero Residue of Previous Projects:');
  const forbiddenTerms = [
    'laura',
    'melo lopes',
    '248.197',
    'carmo do rio claro',
    'advocacia',
    'oab',
    'previdenciário',
    'criminal',
  ];

  for (const term of forbiddenTerms) {
    const pageRegex = new RegExp(`\\b${term}\\b`, 'i');
    const layoutRegex = new RegExp(`\\b${term}\\b`, 'i');
    if (pageRegex.test(pageContent) || layoutRegex.test(layoutContent)) {
      console.error(`  ✗ Leaked old project term: "${term}"`);
      passed = false;
    } else {
      console.log(`  ✓ Clean: No "${term}" found.`);
    }
  }

  console.log(`\n========================================`);
  if (passed) {
    console.log('✅ ALL VERIFICATIONS PASSED SUCCESSFULLY!');
  } else {
    console.error('❌ SOME CHECKS FAILED!');
    process.exit(1);
  }
}

verify().catch(err => {
  console.error(err);
  process.exit(1);
});
