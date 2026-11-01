const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imgLogo = 'C:/Users/matheus/.gemini/antigravity/brain/04a4cd9b-ca91-4129-b975-df9926006a6e/.user_uploaded/media_1793568954098_42a48578.png';
const imgDoctor = 'C:/Users/matheus/.gemini/antigravity/brain/04a4cd9b-ca91-4129-b975-df9926006a6e/.user_uploaded/media_1793568933807_61c8f840.jpg';
const imgCorredor = 'C:/Users/matheus/.gemini/antigravity/brain/04a4cd9b-ca91-4129-b975-df9926006a6e/.user_uploaded/media_1793568583628_a0f397e2.jpg';

const pubDir = path.resolve('public');
const appDir = path.resolve('app');
if (!fs.existsSync(pubDir)) fs.mkdirSync(pubDir, { recursive: true });

async function processAssets() {
  // 1. Copy full logo
  await sharp(imgLogo).toFile(path.join(pubDir, 'logo.png'));
  console.log('Saved public/logo.png');

  // 2. Crop emblem (minX: 319, maxX: 745, minY: 0, maxY: 436)
  await sharp(imgLogo)
    .extract({ left: 314, top: 0, width: 436, height: 437 })
    .toFile(path.join(pubDir, 'logo-emblem.png'));
  console.log('Saved public/logo-emblem.png');

  // 3. Save corridor and doctor photos
  await sharp(imgDoctor).jpeg({ quality: 92 }).toFile(path.join(pubDir, 'dr-alessandro-galvao.jpg'));
  await sharp(imgDoctor).jpeg({ quality: 92 }).toFile(path.join(pubDir, 'equipe-medica.jpg'));
  await sharp(imgCorredor).jpeg({ quality: 92 }).toFile(path.join(pubDir, 'clinica-espaco-corredor.jpg'));
  await sharp(imgCorredor).jpeg({ quality: 92 }).toFile(path.join(pubDir, 'fachada-clinica.jpg'));
  console.log('Saved clinic photos in public');

  // 4. Generate favicons & app icons using the emblem with padding
  const emblemBuf = await sharp(imgLogo)
    .extract({ left: 314, top: 0, width: 436, height: 437 })
    .toBuffer();

  const makeIcon = async (size, outPath) => {
    const pad = Math.round(size * 0.08);
    const innerSize = size - (pad * 2);
    const resized = await sharp(emblemBuf).resize(innerSize, innerSize, { fit: 'contain' }).toBuffer();
    await sharp({
      create: {
        width: size,
        height: size,
        channels: 4,
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      }
    })
    .composite([{ input: resized, top: pad, left: pad }])
    .png()
    .toFile(outPath);
  };

  await makeIcon(512, path.join(pubDir, 'icon.png'));
  await makeIcon(192, path.join(pubDir, 'icon-192x192.png'));
  await makeIcon(180, path.join(pubDir, 'apple-icon.png'));
  await makeIcon(48, path.join(pubDir, 'icon-48x48.png'));
  await makeIcon(32, path.join(pubDir, 'icon-32x32.png'));
  await makeIcon(16, path.join(pubDir, 'icon-16x16.png'));

  // Also make favicon.ico from 32x32 png
  const icon32Buf = await sharp(path.join(pubDir, 'icon-32x32.png')).toBuffer();
  fs.writeFileSync(path.join(pubDir, 'favicon.ico'), icon32Buf);

  // Copy to app/ for App Router conventions
  fs.copyFileSync(path.join(pubDir, 'favicon.ico'), path.join(appDir, 'favicon.ico'));
  fs.copyFileSync(path.join(pubDir, 'icon.png'), path.join(appDir, 'icon.png'));
  fs.copyFileSync(path.join(pubDir, 'apple-icon.png'), path.join(appDir, 'apple-icon.png'));
  console.log('Saved icons and favicons in public and app');

  // 5. Generate OpenGraph Image (1200 x 630)
  const ogEmblem = await sharp(emblemBuf).resize(200, 200).toBuffer();
  const ogSvg = Buffer.from(`
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#022927" />
          <stop offset="50%" stop-color="#044441" />
          <stop offset="100%" stop-color="#066e69" />
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#bg)" />
      <circle cx="1060" cy="160" r="340" fill="#b3844e" opacity="0.15" />
      <circle cx="160" cy="560" r="280" fill="#0d8a84" opacity="0.2" />
      
      <rect x="80" y="80" width="300" height="38" rx="19" fill="#b3844e" fill-opacity="0.25" stroke="#b3844e" stroke-width="1.5" />
      <text x="230" y="104" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="2">JUATUBA - MG · CENTRO MÉDICO</text>
      
      <text x="80" y="215" font-family="system-ui, -apple-system, sans-serif" font-size="62" font-weight="900" fill="#ffffff" letter-spacing="-1">CLÍNICA VIVÁLIA</text>
      <text x="80" y="270" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="bold" fill="#e8c293">Acolhimento Humanizado e Ético</text>
      
      <text x="80" y="345" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="bold" fill="#ffffff">★ 5,0 no Google · 71 avaliações de pacientes</text>
      <text x="80" y="385" font-family="system-ui, -apple-system, sans-serif" font-size="19" fill="#d2eae8">Consultas com especialistas, exames e cuidado para toda a sua família.</text>
      <text x="80" y="420" font-family="system-ui, -apple-system, sans-serif" font-size="18" fill="#d2eae8">Av. Tânus Saliba, 71A - Centro · Juatuba - MG</text>
      
      <rect x="80" y="475" width="360" height="64" rx="14" fill="#25D366" />
      <text x="260" y="515" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="bold" fill="#ffffff" text-anchor="middle">WhatsApp: (31) 99662-2315</text>
    </svg>
  `);

  await sharp(ogSvg)
    .composite([{ input: ogEmblem, top: 120, left: 900 }])
    .jpeg({ quality: 92 })
    .toFile(path.join(pubDir, 'og-image.jpg'));
  console.log('Saved public/og-image.jpg');
}

processAssets().catch(err => {
  console.error(err);
  process.exit(1);
});
