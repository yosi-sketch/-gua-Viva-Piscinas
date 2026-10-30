const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const uploadedPhoto = 'C:/Users/matheus/.gemini/antigravity/brain/28b00378-d429-48df-9701-30d2d1ce153c/.user_uploaded/media_1793383320640_e093c2f6.jpg';
const uploadedLogo = 'C:/Users/matheus/.gemini/antigravity/brain/28b00378-d429-48df-9701-30d2d1ce153c/.user_uploaded/media_1793383332903_a92c0ab3.png';

function createIco(images) {
  const count = images.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type 1 = icon
  header.writeUInt16LE(count, 4);

  let offset = 6 + 16 * count;
  const entries = [];
  for (const img of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(img.width === 256 ? 0 : img.width, 0);
    entry.writeUInt8(img.height === 256 ? 0 : img.height, 1);
    entry.writeUInt8(0, 2); // color count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // planes
    entry.writeUInt16LE(32, 6); // bpp
    entry.writeUInt32LE(img.buffer.length, 8); // size
    entry.writeUInt32LE(offset, 12); // offset
    offset += img.buffer.length;
    entries.push(entry);
  }

  return Buffer.concat([header, ...entries, ...images.map(i => i.buffer)]);
}

async function run() {
  if (!fs.existsSync('public')) fs.mkdirSync('public', { recursive: true });

  console.log('1. Processing Logo and Photos...');
  const logoBuf = fs.readFileSync(uploadedLogo);
  const photoBuf = fs.readFileSync(uploadedPhoto);

  // 1. Full trimmed logo (original gold emblem + dark text)
  const trimmedLogo = await sharp(logoBuf).trim().png().toBuffer();
  fs.writeFileSync('public/logo.png', trimmedLogo);
  fs.writeFileSync('public/logo-horizontal.png', trimmedLogo);
  fs.writeFileSync('public/logo-laura.png', trimmedLogo);

  // 2. Photos of Dra. Laura Melo Lopes
  fs.writeFileSync('public/dra-laura.jpg', photoBuf);
  fs.writeFileSync('public/hero.jpg', photoBuf);
  fs.writeFileSync('public/laura-melo-lopes.jpg', photoBuf);
  // Also preserve dra-anna-luiza.jpg for safety in case anything old requests it, but point to Laura's photo
  fs.writeFileSync('public/dra-anna-luiza.jpg', photoBuf);

  // 3. Extract Emblem: Scales + LML monogram (from y=47 to y=490, x=175 to x=850)
  console.log('2. Extracting Emblem (Scales of Justice & LML Monogram)...');
  const emblemRaw = await sharp(logoBuf)
    .extract({ left: 160, top: 40, width: 704, height: 460 })
    .trim()
    .png()
    .toBuffer();

  fs.writeFileSync('public/logo-emblem.png', emblemRaw);

  // Create square emblem 512x512 with transparent background
  const emblemSquare = await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
    .composite([{
      input: await sharp(emblemRaw).resize(460, 460, { fit: 'contain' }).toBuffer(),
      gravity: 'center'
    }])
    .png()
    .toBuffer();

  fs.writeFileSync('public/emblem.png', emblemSquare);

  // 4. White / Light text version of Logo for dark backgrounds
  console.log('3. Generating White/Light text version of logo...');
  const { data: lData, info: lInfo } = await sharp(trimmedLogo).raw().toBuffer({ resolveWithObject: true });
  const whiteLogoData = Buffer.from(lData);
  // The emblem is golden (r > 100, g > 60). The dark text "LAURA MELO LOPES" has low brightness.
  // Transform dark text to elegant ivory / warm champagne #F8F3E6
  for (let i = 0; i < whiteLogoData.length; i += 4) {
    const a = whiteLogoData[i + 3];
    if (a > 30) {
      const r = whiteLogoData[i];
      const g = whiteLogoData[i + 1];
      const b = whiteLogoData[i + 2];
      const brightness = 0.299 * r + 0.587 * g + 0.114 * b;
      
      // If it's the dark text (low brightness)
      if (brightness < 80 && Math.abs(r - g) < 25 && Math.abs(g - b) < 25) {
        // Map to #fbf8f0
        whiteLogoData[i] = 251;     // R
        whiteLogoData[i + 1] = 248; // G
        whiteLogoData[i + 2] = 240; // B
      }
    }
  }

  const whiteLogoBuf = await sharp(whiteLogoData, {
    raw: {
      width: lInfo.width,
      height: lInfo.height,
      channels: 4
    }
  }).png().toBuffer();

  fs.writeFileSync('public/logo-white.png', whiteLogoBuf);
  fs.writeFileSync('public/logo-dark-bg.png', whiteLogoBuf);

  // 5. Generate Favicons: Circular luxury obsidian badge with gold emblem and dual gold rings
  console.log('4. Generating Favicons with circular luxury badge...');
  
  async function generateLuxuryFavicon(size) {
    const canvas = Buffer.alloc(size * size * 4);
    const center = size / 2;
    const rOuter = size / 2 - 1;
    const rInner = size / 2 - Math.max(2, size * 0.05);

    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const dx = x - center + 0.5;
        const dy = y - center + 0.5;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const idx = (y * size + x) * 4;

        if (dist <= rOuter) {
          // Antialiased outer edge
          const edgeAlpha = Math.min(1, Math.max(0, rOuter - dist + 0.5));
          
          if (dist >= rInner) {
            // Gold border ring
            canvas[idx] = 219;     // R #dba54c
            canvas[idx + 1] = 165; // G
            canvas[idx + 2] = 76;  // B
            canvas[idx + 3] = Math.round(255 * edgeAlpha);
          } else {
            // Obsidian background (#0d0b09)
            canvas[idx] = 13;      // R
            canvas[idx + 1] = 11;  // G
            canvas[idx + 2] = 9;   // B
            canvas[idx + 3] = Math.round(255 * edgeAlpha);
          }
        }
      }
    }

    const badgeBg = await sharp(canvas, {
      raw: { width: size, height: size, channels: 4 }
    }).png().toBuffer();

    // Scale emblem into center (around 70% of badge)
    const emblemSize = Math.max(12, Math.round(size * 0.72));
    const scaledEmblem = await sharp(emblemRaw)
      .resize(emblemSize, emblemSize, { fit: 'contain' })
      .toBuffer();

    return sharp(badgeBg)
      .composite([{ input: scaledEmblem, gravity: 'center' }])
      .png()
      .toBuffer();
  }

  const icon16 = await generateLuxuryFavicon(16);
  const icon32 = await generateLuxuryFavicon(32);
  const icon48 = await generateLuxuryFavicon(48);
  const icon64 = await generateLuxuryFavicon(64);
  const icon128 = await generateLuxuryFavicon(128);
  const icon192 = await generateLuxuryFavicon(192);
  const icon256 = await generateLuxuryFavicon(256);
  const icon512 = await generateLuxuryFavicon(512);

  fs.writeFileSync('public/icon-16x16.png', icon16);
  fs.writeFileSync('public/icon-32x32.png', icon32);
  fs.writeFileSync('public/icon-48x48.png', icon48);
  fs.writeFileSync('public/icon-192x192.png', icon192);
  fs.writeFileSync('public/icon.png', icon512);
  fs.writeFileSync('public/apple-icon.png', await generateLuxuryFavicon(180));

  // Also update app/icon.png and app/apple-icon.png
  fs.writeFileSync('app/icon.png', icon512);
  fs.writeFileSync('app/apple-icon.png', await generateLuxuryFavicon(180));

  // Multi-size .ico
  const icoBuf = createIco([
    { width: 16, height: 16, buffer: icon16 },
    { width: 32, height: 32, buffer: icon32 },
    { width: 48, height: 48, buffer: icon48 },
    { width: 64, height: 64, buffer: icon64 },
    { width: 128, height: 128, buffer: icon128 },
    { width: 256, height: 256, buffer: icon256 },
  ]);

  fs.writeFileSync('public/favicon.ico', icoBuf);
  fs.writeFileSync('app/favicon.ico', icoBuf);

  console.log('✅ All assets successfully created in public/ and app/!');
}

run().catch(console.error);
