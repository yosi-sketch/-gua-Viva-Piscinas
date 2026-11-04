const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generate() {
  const logoPath = 'public/logo.png';
  
  // 1. App icon 512x512 with square/circle padding so the logo is crisp and centered
  // Let's create an icon with a crisp background or transparent
  // A subtle aquatic gradient or transparent background with the wave/logo fitting nicely:
  const icon512 = await sharp(logoPath)
    .resize(460, 460, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({
      top: 26,
      bottom: 26,
      left: 26,
      right: 26,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .png()
    .toBuffer();

  fs.writeFileSync('app/icon.png', icon512);
  fs.writeFileSync('public/icon-512x512.png', icon512);

  // 192x192
  const icon192 = await sharp(icon512).resize(192, 192).png().toBuffer();
  fs.writeFileSync('public/icon-192x192.png', icon192);

  // 180x180 apple-icon
  // For apple touch icon, iOS prefers non-transparent background (often white or brand navy/cyan)
  // Let's create apple touch icon with a clean crisp white background or rich deep navy:
  const appleIcon = await sharp({
    create: {
      width: 180,
      height: 180,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    }
  })
    .composite([
      {
        input: await sharp(logoPath).resize(160, 160, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer(),
        gravity: 'center'
      }
    ])
    .png()
    .toBuffer();

  fs.writeFileSync('app/apple-icon.png', appleIcon);
  fs.writeFileSync('public/apple-icon.png', appleIcon);

  // 48x48, 32x32, 16x16
  const icon48 = await sharp(icon512).resize(48, 48).png().toBuffer();
  fs.writeFileSync('public/icon-48x48.png', icon48);

  const icon32 = await sharp(icon512).resize(32, 32).png().toBuffer();
  fs.writeFileSync('public/icon-32x32.png', icon32);

  const icon16 = await sharp(icon512).resize(16, 16).png().toBuffer();
  fs.writeFileSync('public/icon-16x16.png', icon16);

  // favicon.ico (ICO can contain 32x32 PNG)
  fs.writeFileSync('app/favicon.ico', icon32);
  fs.writeFileSync('public/favicon.ico', icon32);

  // OpenGraph Image 1200x630
  // Clean aquatic modern banner with logo, storefront preview badge, and verified info
  const svgBanner = `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#051937" />
        <stop offset="50%" stop-color="#004d7a" />
        <stop offset="100%" stop-color="#008793" />
      </linearGradient>
      <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#ff7e00" />
        <stop offset="100%" stop-color="#ffae00" />
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#bg)" />
    <circle cx="1050" cy="150" r="320" fill="#00b4d8" opacity="0.15" />
    <circle cx="150" cy="550" r="280" fill="#f59e0b" opacity="0.08" />
    
    <!-- Content card -->
    <rect x="70" y="70" width="1060" height="490" rx="28" fill="#ffffff" fill-opacity="0.08" stroke="#ffffff" stroke-opacity="0.2" stroke-width="2" />
    
    <!-- Rating badge -->
    <rect x="120" y="380" width="360" height="56" rx="28" fill="#ffffff" />
    <text x="145" y="416" font-family="system-ui, sans-serif" font-size="22" font-weight="900" fill="#0369a1">★ 4,3 NO GOOGLE</text>
    <text x="325" y="416" font-family="system-ui, sans-serif" font-size="18" font-weight="600" fill="#64748b">(62 avaliações)</text>
    
    <text x="120" y="480" font-family="system-ui, sans-serif" font-size="28" font-weight="800" fill="#ffffff">Av. Portugal, 1879 • Santa Amélia, Belo Horizonte - MG</text>
    <text x="120" y="520" font-family="system-ui, sans-serif" font-size="22" font-weight="600" fill="#bae6fd">Piscinas • Aquecedores • Filtros • Químicos • Manutenção</text>
  </svg>
  `;

  const bannerBase = Buffer.from(svgBanner);
  const logoResized = await sharp(logoPath).resize(620, null).toBuffer();

  const ogImage = await sharp(bannerBase)
    .composite([
      {
        input: logoResized,
        top: 110,
        left: 110
      }
    ])
    .jpeg({ quality: 90 })
    .toBuffer();

  fs.writeFileSync('public/og-image.jpg', ogImage);
  console.log('All icons and OG image created successfully!');
}

generate().catch(err => console.error(err));
