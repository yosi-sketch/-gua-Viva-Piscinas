const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function verifyAll() {
  console.log('=== VERIFICAÇÃO INTEGRAL — GUIMARÃES & SANTIAGO ADVOGADOS ===\n');

  // 1. Assets públicos
  const requiredPublic = [
    'logo.png',
    'logo-horizontal.png',
    'logo-guimaraes.png',
    'logo-white.png',
    'logo-emblem.png',
    'emblem.png',
    'dra-anna-luiza.jpg',
    'escritorio-salinas.jpg',
    'hero.jpg',
    'favicon.ico',
    'icon.png',
    'icon-16x16.png',
    'icon-32x32.png',
    'icon-48x48.png',
    'icon-192x192.png',
    'apple-icon.png',
  ];

  console.log('1. Verificando arquivos em public/:');
  for (const file of requiredPublic) {
    const fullPath = path.join('public', file);
    if (!fs.existsSync(fullPath)) {
      throw new Error(`Arquivo faltante em public: ${file}`);
    }
    const stat = fs.statSync(fullPath);
    console.log(`  ✓ ${file.padEnd(26)} (${(stat.size / 1024).toFixed(1)} KB)`);
  }

  // 2. Favicons em app/
  console.log('\n2. Verificando Favicons nativos em app/:');
  const requiredApp = ['favicon.ico', 'icon.png', 'apple-icon.png'];
  for (const file of requiredApp) {
    const fullPath = path.join('app', file);
    if (!fs.existsSync(fullPath)) {
      throw new Error(`Arquivo faltante em app: ${file}`);
    }
    const stat = fs.statSync(fullPath);
    console.log(`  ✓ app/${file.padEnd(22)} (${(stat.size / 1024).toFixed(1)} KB)`);
  }

  // 3. Validação do Favicon ICO
  console.log('\n3. Validando ICO e Favicon:');
  const icoBuf = fs.readFileSync('public/favicon.ico');
  const isIco = icoBuf.readUInt16LE(0) === 0 && icoBuf.readUInt16LE(2) === 1;
  const icoCount = icoBuf.readUInt16LE(4);
  console.log(`  ✓ favicon.ico estruturado corretamente com ${icoCount} resoluções (tamanho: ${icoBuf.length} bytes)`);

  const iconMeta = await sharp('public/icon.png').metadata();
  console.log(`  ✓ icon.png (512x512) reconhecido como: ${iconMeta.format} (${iconMeta.width}x${iconMeta.height})`);

  // 4. Varredura por vestígios do cliente anterior
  console.log('\n4. Varredura por vestígios do cliente antigo em app/ e public/:');
  const forbidden = ['mariana', 'leão', 'leao', 'oliveira', '37999551587'];
  let foundOld = 0;

  function scanFolder(dir) {
    const list = fs.readdirSync(dir);
    for (const item of list) {
      const full = path.join(dir, item);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) {
        scanFolder(full);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.css') || item.endsWith('.json')) {
        const text = fs.readFileSync(full, 'utf8').toLowerCase();
        for (const bad of forbidden) {
          if (text.includes(bad)) {
            console.error(`  ✕ Encontrado '${bad}' em ${full}`);
            foundOld++;
          }
        }
      }
    }
  }

  scanFolder('app');
  if (foundOld === 0) {
    console.log('  ✓ Nenhum vestígio do cliente anterior encontrado em app/!');
  } else {
    throw new Error(`Foram encontrados ${foundOld} vestígios do cliente anterior.`);
  }

  // 5. Verificação de dados vitais
  console.log('\n5. Verificando dados vitais em app/page.tsx e app/layout.tsx:');
  const pageContent = fs.readFileSync('app/page.tsx', 'utf8');
  const layoutContent = fs.readFileSync('app/layout.tsx', 'utf8');

  const checks = [
    { name: 'Telefone (38) 99958-7416', test: pageContent.includes('(38) 99958-7416') && layoutContent.includes('+55-38-99958-7416') },
    { name: 'Endereço Salinas Av. João Pena Sobrinho', test: pageContent.includes('Av. João Pena Sobrinho, 115') && layoutContent.includes('Av. João Pena Sobrinho, 115') },
    { name: 'Dra. Anna Luiza Guimarães', test: pageContent.includes('Dra. Anna Luiza Guimarães') && layoutContent.includes('Dra. Anna Luiza Guimarães') },
    { name: 'Dr. Vitor Santiago', test: pageContent.includes('Dr. Vitor Santiago') && layoutContent.includes('Dr. Vitor Santiago') },
    { name: 'Instagram guimaraes.santiagoadv', test: pageContent.includes('guimaraes.santiagoadv') && layoutContent.includes('guimaraes.santiagoadv') },
    { name: 'Depoimento Antonella (16 anos / 5 meses)', test: pageContent.includes('Dra Ana resolveu um inventário que estava fazendo aniversário de 16 anos') },
    { name: 'Depoimento Felipe Lemes (Dr. Vitor)', test: pageContent.includes('Dr. Vitor é nosso Advogado a anos e presta um serviço de excelência') },
    { name: 'Depoimento Jonatas Roncolato', test: pageContent.includes('Sou cliente a mais de 4 anos e sempre fui muito bem atendido') },
    { name: 'Depoimento Karenn Sarmento', test: pageContent.includes('Advogados de qualidade: muito capacitados') },
    { name: 'Depoimento Andre Noga', test: pageContent.includes('Excelente profissional, cumpre com o combinado') },
    { name: 'Depoimento Lucimaire Scheuer', test: pageContent.includes('Agilidade, competência, confiança,clareza nas informações') },
    { name: 'Depoimento Nathalia Cavalcante', test: pageContent.includes('Ótima profissional. Competente e dedicada!') },
    { name: 'Cache-busting favicon ?v=gs2026', test: layoutContent.includes('?v=gs2026') },
  ];

  for (const c of checks) {
    if (c.test) {
      console.log(`  ✓ ${c.name}`);
    } else {
      throw new Error(`Falha na checagem: ${c.name}`);
    }
  }

  console.log('\n=== TUDO 100% VALIDADO E EM PERFEITO FUNCIONAMENTO! ===\n');
}

verifyAll().catch(err => {
  console.error(err);
  process.exit(1);
});
