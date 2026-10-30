const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const uploadedLogo = 'C:/Users/matheus/.gemini/antigravity/brain/d282077b-5c14-4b4c-8bab-0a15731ccaee/.user_uploaded/media_1793374794591_f6eafee9.png';
const uploadedPhoto = 'C:/Users/matheus/.gemini/antigravity/brain/d282077b-5c14-4b4c-8bab-0a15731ccaee/.user_uploaded/media_1793374802886_d20240be.jpg';

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

  console.log('1. Copying Logo & Hero Photo for Mariana Leão Advocacia...');
  const logoBuf = fs.readFileSync(uploadedLogo);
  const photoBuf = fs.readFileSync(uploadedPhoto);

  fs.writeFileSync('public/logo.png', logoBuf);
  fs.writeFileSync('public/logo-horizontal.png', logoBuf);
  fs.writeFileSync('public/logo-mariana.png', logoBuf);

  fs.writeFileSync('public/dra-mariana.jpg', photoBuf);
  fs.writeFileSync('public/dra-mariana-leao.jpg', photoBuf);
  fs.writeFileSync('public/hero.jpg', photoBuf);
  fs.writeFileSync('public/portrait.jpg', photoBuf);

  // Extract ML Emblem (crop x: 300 to 735, y: 25 to 305) and trim
  const mlEmblemBuf = await sharp(logoBuf)
    .extract({ left: 300, top: 25, width: 435, height: 280 })
    .trim()
    .png()
    .toBuffer();
  fs.writeFileSync('public/logo-emblem.png', mlEmblemBuf);

  // Square Emblem (512x512) centered on transparent canvas
  const emblemSquare = await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
    .composite([{
      input: await sharp(mlEmblemBuf).resize(460, 460, { fit: 'contain' }).toBuffer(),
      gravity: 'center'
    }])
    .png()
    .toBuffer();

  fs.writeFileSync('public/emblem.png', emblemSquare);
  fs.writeFileSync('public/emblema-mariana.png', emblemSquare);

  // Create Luxury Dark Obsidian Badge with Metallic Gold Ring & Centered ML Emblem
  console.log('2. Creating high-visibility Favicon Badge...');
  const badgeSvg = Buffer.from(`
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#211910"/>
          <stop offset="60%" stop-color="#120e09"/>
          <stop offset="100%" stop-color="#080604"/>
        </radialGradient>
        <linearGradient id="goldRing" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#8a551e"/>
          <stop offset="25%" stop-color="#c89e63"/>
          <stop offset="50%" stop-color="#fcecb1"/>
          <stop offset="75%" stop-color="#d6b178"/>
          <stop offset="100%" stop-color="#7b4a10"/>
        </linearGradient>
        <linearGradient id="innerRing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fdf8d4"/>
          <stop offset="50%" stop-color="#c89e63"/>
          <stop offset="100%" stop-color="#8a551e"/>
        </linearGradient>
      </defs>

      <!-- Background Circle -->
      <circle cx="256" cy="256" r="252" fill="url(#bgGrad)"/>
      
      <!-- Outer and Inner Gold Rings -->
      <circle cx="256" cy="256" r="240" fill="none" stroke="url(#goldRing)" stroke-width="8"/>
      <circle cx="256" cy="256" r="226" fill="none" stroke="url(#innerRing)" stroke-width="2.5" stroke-dasharray="8 6" opacity="0.85"/>
    </svg>
  `);

  const badgeBase = await sharp(badgeSvg).png().toBuffer();

  // Composite the actual ML emblem onto the luxury badge base
  const emblemResized = await sharp(mlEmblemBuf)
    .resize(360, 260, { fit: 'contain' })
    .toBuffer();

  const luxuryBadge = await sharp(badgeBase)
    .composite([{
      input: emblemResized,
      gravity: 'center'
    }])
    .png()
    .toBuffer();

  console.log('3. Generating Multi-resolution icons & Favicons...');
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

  console.log('Mariana Leão Assets & Favicons generated successfully!');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
