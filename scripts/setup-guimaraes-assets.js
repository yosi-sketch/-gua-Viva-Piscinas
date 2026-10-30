const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const uploadedPhoto = 'C:/Users/matheus/.gemini/antigravity/brain/17a6b44e-e767-4643-913d-74d44d4a19f7/.user_uploaded/media_1793377339999_94877bfc.jpg';
const uploadedLogo = 'C:/Users/matheus/.gemini/antigravity/brain/17a6b44e-e767-4643-913d-74d44d4a19f7/.user_uploaded/media_1793377350915_1eae84d7.png';
const uploadedOffice = 'C:/Users/matheus/.gemini/antigravity/brain/17a6b44e-e767-4643-913d-74d44d4a19f7/.user_uploaded/media_1793377396590_ea80de36.jpg';

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

  console.log('1. Copying base images...');
  const logoBuf = fs.readFileSync(uploadedLogo);
  const photoBuf = fs.readFileSync(uploadedPhoto);
  const officeBuf = fs.readFileSync(uploadedOffice);

  // Trimmed logo
  const trimmedLogo = await sharp(logoBuf).trim().png().toBuffer();
  fs.writeFileSync('public/logo.png', trimmedLogo);
  fs.writeFileSync('public/logo-horizontal.png', trimmedLogo);
  fs.writeFileSync('public/logo-guimaraes.png', trimmedLogo);
  fs.writeFileSync('public/logo-anna-luiza.png', trimmedLogo);

  // Photos
  fs.writeFileSync('public/dra-anna-luiza.jpg', photoBuf);
  fs.writeFileSync('public/dra-anna-luiza-guimaraes.jpg', photoBuf);
  fs.writeFileSync('public/hero.jpg', photoBuf);
  fs.writeFileSync('public/dra-anna.jpg', photoBuf);

  fs.writeFileSync('public/escritorio-salinas.jpg', officeBuf);
  fs.writeFileSync('public/escritorio.jpg', officeBuf);
  fs.writeFileSync('public/sala-reuniao.jpg', officeBuf);

  // 2. Crop the ALG monogram emblem (x: ~360 to ~660, y: 10 to 248)
  console.log('2. Cropping ALG monogram emblem...');
  const emblemRaw = await sharp(logoBuf)
    .extract({ left: 360, top: 10, width: 300, height: 238 })
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
      input: await sharp(emblemRaw).resize(440, 440, { fit: 'contain' }).toBuffer(),
      gravity: 'center'
    }])
    .png()
    .toBuffer();

  fs.writeFileSync('public/emblem.png', emblemSquare);

  // 3. Create radiant metallic gold emblem version for icons & favicons
  const { data: edata, info: einfo } = await sharp(emblemRaw).raw().toBuffer({ resolveWithObject: true });
  const goldData = Buffer.from(edata);
  for (let i = 0; i < goldData.length; i += 4) {
    const a = goldData[i + 3];
    if (a > 40) {
      const r = goldData[i];
      const g = goldData[i + 1];
      const b = goldData[i + 2];
      const brightness = 0.299 * r + 0.587 * g + 0.114 * b;
      if (brightness < 70) {
        const y = Math.floor(i / (einfo.width * 4));
        const factor = y / einfo.height;
        goldData[i] = Math.min(255, Math.floor(252 - factor * 25));
        goldData[i + 1] = Math.min(255, Math.floor(218 - factor * 35));
        goldData[i + 2] = Math.min(255, Math.floor(145 - factor * 50));
      }
    }
  }

  const goldEmblemBuf = await sharp(goldData, {
    raw: { width: einfo.width, height: einfo.height, channels: einfo.channels }
  }).png().toBuffer();
  fs.writeFileSync('public/logo-emblem-gold.png', goldEmblemBuf);

  // 4. Create luxury circular Favicon Badge with dual gold rings and rich obsidian core
  console.log('4. Creating luxury circular Favicon Badge...');
  const badgeSvg = Buffer.from(`
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#241f1a"/>
          <stop offset="60%" stop-color="#120f0c"/>
          <stop offset="100%" stop-color="#080502"/>
        </radialGradient>
        <linearGradient id="goldRing" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#835c32"/>
          <stop offset="25%" stop-color="#c2a366"/>
          <stop offset="50%" stop-color="#fdf8d4"/>
          <stop offset="75%" stop-color="#d4af37"/>
          <stop offset="100%" stop-color="#73491b"/>
        </linearGradient>
        <linearGradient id="innerGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fdf8d4"/>
          <stop offset="50%" stop-color="#c2a366"/>
          <stop offset="100%" stop-color="#835c32"/>
        </linearGradient>
      </defs>

      <circle cx="256" cy="256" r="252" fill="url(#bgGrad)"/>
      <circle cx="256" cy="256" r="242" fill="none" stroke="url(#goldRing)" stroke-width="12"/>
      <circle cx="256" cy="256" r="226" fill="none" stroke="url(#innerGold)" stroke-width="3.5" stroke-dasharray="12 6" opacity="0.95"/>
    </svg>
  `);

  const badgeBase = await sharp(badgeSvg).png().toBuffer();

  const emblemResized = await sharp(goldEmblemBuf)
    .resize(360, 310, { fit: 'contain' })
    .toBuffer();

  const luxuryBadge = await sharp(badgeBase)
    .composite([{
      input: emblemResized,
      gravity: 'center'
    }])
    .png()
    .toBuffer();

  console.log('5. Generating Multi-resolution icons & Favicons...');
  const s512 = await sharp(luxuryBadge).resize(512, 512).png().toBuffer();
  const s192 = await sharp(luxuryBadge).resize(192, 192).png().toBuffer();
  const s180 = await sharp(luxuryBadge).resize(180, 180).png().toBuffer();
  const s48 = await sharp(luxuryBadge).resize(48, 48).png().toBuffer();
  const s32 = await sharp(luxuryBadge).resize(32, 32).png().toBuffer();
  const s16 = await sharp(luxuryBadge).resize(16, 16).png().toBuffer();

  const icoBuffer = createIco([
    { width: 48, height: 48, buffer: s48 },
    { width: 32, height: 32, buffer: s32 },
    { width: 16, height: 16, buffer: s16 }
  ]);

  // Write to public/
  fs.writeFileSync('public/icon.png', s512);
  fs.writeFileSync('public/icon-192x192.png', s192);
  fs.writeFileSync('public/icon-48x48.png', s48);
  fs.writeFileSync('public/icon-32x32.png', s32);
  fs.writeFileSync('public/icon-16x16.png', s16);
  fs.writeFileSync('public/apple-icon.png', s180);
  fs.writeFileSync('public/favicon.ico', icoBuffer);

  // Also write to app/ for Next.js App Router native route handling
  fs.writeFileSync('app/favicon.ico', icoBuffer);
  fs.writeFileSync('app/icon.png', s512);
  fs.writeFileSync('app/apple-icon.png', s180);

  // 6. Generate dark-mode friendly logo with metallic gold/ivory fill
  console.log('6. Generating dark-mode friendly logo...');
  const { data: ldata, info: linfo } = await sharp(trimmedLogo).raw().toBuffer({ resolveWithObject: true });
  const invertedData = Buffer.from(ldata);
  for (let i = 0; i < invertedData.length; i += 4) {
    const a = invertedData[i + 3];
    if (a > 60) {
      const r = invertedData[i];
      const g = invertedData[i + 1];
      const b = invertedData[i + 2];
      const brightness = 0.299 * r + 0.587 * g + 0.114 * b;
      if (brightness < 60) {
        invertedData[i] = 247;
        invertedData[i + 1] = 243;
        invertedData[i + 2] = 230;
      }
    }
  }

  const logoLightForDarkBg = await sharp(invertedData, {
    raw: { width: linfo.width, height: linfo.height, channels: linfo.channels }
  }).png().toBuffer();

  fs.writeFileSync('public/logo-white.png', logoLightForDarkBg);
  fs.writeFileSync('public/logo-dark-mode.png', logoLightForDarkBg);

  console.log('All Guimarães & Santiago Advogados assets generated with precision!');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
