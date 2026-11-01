const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function processAssets() {
  console.log('Processing official Clínica São Camilo assets...');

  // Trim the transparent border around public/logo.png to get tight bounding box
  const trimmedLogoBuffer = await sharp('public/logo.png')
    .trim()
    .toBuffer();

  const trimmedMeta = await sharp(trimmedLogoBuffer).metadata();
  console.log('Trimmed logo size:', trimmedMeta.width, 'x', trimmedMeta.height);

  // Save the crisp trimmed logo as public/logo.png
  await sharp(trimmedLogoBuffer).toFile('public/logo.png');

  // Let's create an emblem-only image (the green-teal droplet shape)
  // Let's find where the text starts or extract the symbol
  // In the logo, the shape encompasses the text "SÃO CAMILO", but let's check its full dimensions
  // The shape itself IS the container for the logo!
  // Let's create a square emblem by placing the trimmed logo centered in a rounded or transparent canvas
  const size512 = 512;
  
  // Make a beautiful 512x512 icon for favicon / app icon
  // We fit the logo inside with some padding, or fit the droplet shape
  const iconBuffer = await sharp(trimmedLogoBuffer)
    .resize(460, 460, {
      fit: 'inside',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .toBuffer();

  const iconMeta = await sharp(iconBuffer).metadata();
  const leftPad = Math.floor((512 - iconMeta.width) / 2);
  const topPad = Math.floor((512 - iconMeta.height) / 2);

  // Transparent 512x512 icon
  await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
    .composite([{ input: iconBuffer, top: topPad, left: leftPad }])
    .png()
    .toFile('public/icon.png');

  // Also write to app/icon.png
  fs.copyFileSync('public/icon.png', 'app/icon.png');

  // Apple touch icon (180x180) - usually on clean white or transparent
  const apple180Buffer = await sharp(trimmedLogoBuffer)
    .resize(150, 150, {
      fit: 'inside',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .toBuffer();
  
  const appleMeta = await sharp(apple180Buffer).metadata();
  const aLeft = Math.floor((180 - appleMeta.width) / 2);
  const aTop = Math.floor((180 - appleMeta.height) / 2);

  await sharp({
    create: {
      width: 180,
      height: 180,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 } // crisp white background for Apple iOS home screen
    }
  })
    .composite([{ input: apple180Buffer, top: aTop, left: aLeft }])
    .png()
    .toFile('public/apple-icon.png');

  fs.copyFileSync('public/apple-icon.png', 'app/apple-icon.png');

  // Sizes: 192, 48, 32, 16
  for (const s of [192, 48, 32, 16]) {
    await sharp('public/icon.png')
      .resize(s, s)
      .png()
      .toFile(`public/icon-${s}x${s}.png`);
  }

  // Favicon.ico (generate 32x32 png as favicon.ico or proper ico buffer)
  // Standard modern browsers read 32x32 PNG in favicon.ico
  const ico32 = await sharp('public/icon.png')
    .resize(32, 32)
    .png()
    .toBuffer();

  // Create valid standard ICO format containing a 32x32 PNG (valid modern ICO)
  // ICO header: 2 bytes reserved (0), 2 bytes type (1 = ICO), 2 bytes count (1)
  // Entry: width (32), height (32), color palette (0), reserved (0), color planes (1), bpp (32), size (N), offset (22)
  const icoHeader = Buffer.alloc(6 + 16);
  icoHeader.writeUInt16LE(0, 0); // reserved
  icoHeader.writeUInt16LE(1, 2); // ICO type
  icoHeader.writeUInt16LE(1, 4); // 1 image
  icoHeader.writeUInt8(32, 6);   // width
  icoHeader.writeUInt8(32, 7);   // height
  icoHeader.writeUInt8(0, 8);    // colors
  icoHeader.writeUInt8(0, 9);    // reserved
  icoHeader.writeUInt16LE(1, 10); // color planes
  icoHeader.writeUInt16LE(32, 12); // bits per pixel
  icoHeader.writeUInt32LE(ico32.length, 14); // image size
  icoHeader.writeUInt32LE(22, 18); // offset

  const icoBuffer = Buffer.concat([icoHeader, ico32]);
  fs.writeFileSync('public/favicon.ico', icoBuffer);
  fs.writeFileSync('app/favicon.ico', icoBuffer);

  // Generate Social OpenGraph Image (1200x630)
  // Background: elegant medical gradient with waves inspired by the banner
  // Logo centered or left-aligned with clinic name, specialties, and location Nova Serrana - MG
  const ogSvg = `
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#023b35" />
          <stop offset="60%" stop-color="#034e46" />
          <stop offset="100%" stop-color="#056b60" />
        </linearGradient>
        <linearGradient id="wave" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#00c3d3" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#01d84b" stop-opacity="0.2" />
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#bg)" />
      <path d="M0 450 C300 400, 600 550, 1200 420 L1200 630 L0 630 Z" fill="url(#wave)" />
      <circle cx="1050" cy="150" r="320" fill="#01becd" opacity="0.08" />
      <circle cx="150" cy="500" r="280" fill="#01d84b" opacity="0.06" />
    </svg>
  `;

  // Scale down the logo for OG composite
  const ogLogo = await sharp('public/logo.png')
    .resize(580, null, { fit: 'inside' })
    .toBuffer();

  const ogBase = await sharp(Buffer.from(ogSvg)).png().toBuffer();

  // Overlay logo and add typography
  const textSvg = `
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <text x="600" y="380" font-family="Montserrat, Arial, sans-serif" font-size="34" font-weight="700" fill="#ffffff" text-anchor="middle">
        Consultas Médicas · Especialidades · Medicina do Trabalho · Vacinas
      </text>
      <text x="600" y="435" font-family="Montserrat, Arial, sans-serif" font-size="24" font-weight="500" fill="#caf0eb" text-anchor="middle">
        R. Antônio Ferreira do Amaral, 136 - Centro · Nova Serrana - MG
      </text>
      <rect x="360" y="475" width="480" height="52" rx="26" fill="#01d84b" />
      <text x="600" y="510" font-family="Montserrat, Arial, sans-serif" font-size="22" font-weight="800" fill="#023b35" text-anchor="middle">
        Agendamentos: (37) 3226-2910 · 4,8 ★ no Google
      </text>
    </svg>
  `;

  const finalOg = await sharp(ogBase)
    .composite([
      { input: ogLogo, top: 110, left: 310 },
      { input: Buffer.from(textSvg), top: 0, left: 0 }
    ])
    .jpeg({ quality: 90 })
    .toFile('public/og-image.jpg');

  console.log('All image assets and favicons generated successfully!');
}

processAssets().catch(console.error);
