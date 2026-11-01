const sharp = require('sharp');
const fs = require('fs');

async function generateAllAssets() {
  console.log('Generating official TOMOSID assets with refined sober ruby palette...');

  const emblemBuffer = fs.readFileSync('public/logo-emblem.png');

  // Helper to create square icon with rounded dark background or transparent
  async function createIcon(size, withBackground = false) {
    const pad = Math.round(size * 0.12);
    const innerSize = size - pad * 2;
    
    const resizedEmblem = await sharp(emblemBuffer)
      .resize(innerSize, innerSize, { fit: 'inside' })
      .toBuffer();
      
    const emblemMeta = await sharp(resizedEmblem).metadata();
    const left = Math.floor((size - emblemMeta.width) / 2);
    const top = Math.floor((size - emblemMeta.height) / 2);

    if (withBackground) {
      const svgBg = `<svg width="${size}" height="${size}">
        <rect width="${size}" height="${size}" rx="${Math.round(size * 0.22)}" fill="#121316"/>
        <rect x="1" y="1" width="${size - 2}" height="${size - 2}" rx="${Math.round(size * 0.22)}" fill="none" stroke="#991b1b" stroke-width="${Math.max(1, Math.round(size * 0.02))}" stroke-opacity="0.4"/>
      </svg>`;
      
      return sharp(Buffer.from(svgBg))
        .composite([{ input: resizedEmblem, left, top }])
        .png()
        .toBuffer();
    } else {
      return sharp({
        create: {
          width: size,
          height: size,
          channels: 4,
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        }
      })
        .composite([{ input: resizedEmblem, left, top }])
        .png()
        .toBuffer();
    }
  }

  // Generate Favicon & App Icons
  const icon16 = await createIcon(16, true);
  const icon32 = await createIcon(32, true);
  const icon48 = await createIcon(48, true);
  const icon180 = await createIcon(180, true);
  const icon192 = await createIcon(192, true);
  const icon512 = await createIcon(512, true);

  fs.writeFileSync('public/icon-16x16.png', icon16);
  fs.writeFileSync('public/icon-32x32.png', icon32);
  fs.writeFileSync('public/icon-48x48.png', icon48);
  fs.writeFileSync('public/apple-icon.png', icon180);
  fs.writeFileSync('public/icon-192x192.png', icon192);
  fs.writeFileSync('public/icon.png', icon512);

  fs.writeFileSync('app/apple-icon.png', icon180);
  fs.writeFileSync('app/icon.png', icon512);

  function createIco(images) {
    const count = images.length;
    const header = Buffer.alloc(6);
    header.writeUInt16LE(0, 0);
    header.writeUInt16LE(1, 2);
    header.writeUInt16LE(count, 4);

    let offset = 6 + 16 * count;
    const dirEntries = [];

    images.forEach(({ size, buffer }) => {
      const entry = Buffer.alloc(16);
      entry[0] = size === 256 ? 0 : size;
      entry[1] = size === 256 ? 0 : size;
      entry[2] = 0;
      entry[3] = 0;
      entry.writeUInt16LE(1, 4);
      entry.writeUInt16LE(32, 6);
      entry.writeUInt32LE(buffer.length, 8);
      entry.writeUInt32LE(offset, 12);
      dirEntries.push(entry);
      offset += buffer.length;
    });

    return Buffer.concat([header, ...dirEntries, ...images.map(img => img.buffer)]);
  }

  const icoBuffer = createIco([
    { size: 16, buffer: icon16 },
    { size: 32, buffer: icon32 },
    { size: 48, buffer: icon48 }
  ]);
  fs.writeFileSync('public/favicon.ico', icoBuffer);
  fs.writeFileSync('app/favicon.ico', icoBuffer);

  // Generate High-Res Brand Logos with refined ruby
  const emblemForLogo = await sharp(emblemBuffer)
    .resize(110, 102, { fit: 'contain' })
    .toBuffer();

  const emblemBase64 = emblemForLogo.toString('base64');

  // Light mode logo
  const logoLightSvg = `<svg width="520" height="110" viewBox="0 0 520 110" xmlns="http://www.w3.org/2000/svg">
    <image href="data:image/png;base64,${emblemBase64}" x="4" y="4" width="105" height="98"/>
    <g transform="translate(122, 18)">
      <text x="0" y="40" font-family="Montserrat, system-ui, -apple-system, sans-serif" font-weight="900" font-size="42" letter-spacing="-0.02em">
        <tspan fill="#0f172a">TOMO</tspan><tspan fill="#991b1b">SID</tspan>
      </text>
      <text x="2" y="60" font-family="Montserrat, system-ui, -apple-system, sans-serif" font-weight="700" font-size="12" fill="#475569" letter-spacing="0.22em">
        DIAGNÓSTICO POR IMAGEM
      </text>
      <text x="2" y="78" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-weight="600" font-size="11.5" fill="#64748b" letter-spacing="0.05em">
        Dr. Frederico Cambraia · CRM-MG 34752
      </text>
    </g>
  </svg>`;

  await sharp(Buffer.from(logoLightSvg))
    .png()
    .toFile('public/logo.png');

  // Dark mode logo
  const logoDarkSvg = `<svg width="520" height="110" viewBox="0 0 520 110" xmlns="http://www.w3.org/2000/svg">
    <image href="data:image/png;base64,${emblemBase64}" x="4" y="4" width="105" height="98"/>
    <g transform="translate(122, 18)">
      <text x="0" y="40" font-family="Montserrat, system-ui, -apple-system, sans-serif" font-weight="900" font-size="42" letter-spacing="-0.02em">
        <tspan fill="#ffffff">TOMO</tspan><tspan fill="#ef4444">SID</tspan>
      </text>
      <text x="2" y="60" font-family="Montserrat, system-ui, -apple-system, sans-serif" font-weight="700" font-size="12" fill="#cbd5e1" letter-spacing="0.22em">
        DIAGNÓSTICO POR IMAGEM
      </text>
      <text x="2" y="78" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-weight="600" font-size="11.5" fill="#f87171" letter-spacing="0.05em">
        Dr. Frederico Cambraia · CRM-MG 34752
      </text>
    </g>
  </svg>`;

  await sharp(Buffer.from(logoDarkSvg))
    .png()
    .toFile('public/logo-dark.png');

  fs.writeFileSync('public/logo.svg', logoLightSvg);
  fs.writeFileSync('public/logo-dark.svg', logoDarkSvg);
  console.log('Logos regenerated successfully with refined ruby tone!');
}

generateAllAssets().catch(console.error);
