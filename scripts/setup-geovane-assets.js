const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const uploadedLogo = 'C:/Users/matheus/.gemini/antigravity/brain/5032999d-ffe8-4158-b2fd-5cba0615346c/.user_uploaded/media_1793310556920_75152793.png';
const uploadedPortraitDesk = 'C:/Users/matheus/.gemini/antigravity/brain/5032999d-ffe8-4158-b2fd-5cba0615346c/.user_uploaded/media_1793310420133_0096a89d.jpg';
const uploadedPortraitSuit = 'C:/Users/matheus/.gemini/antigravity/brain/5032999d-ffe8-4158-b2fd-5cba0615346c/.user_uploaded/media_1793310577071_8c512eee.jpg';

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

async function setupGeovaneAssets() {
  if (!fs.existsSync('public')) fs.mkdirSync('public', { recursive: true });

  console.log('--- 1. Processing Official Dr. Geovane Martins Logo & Emblem ---');
  const logoBuf = fs.readFileSync(uploadedLogo);
  fs.writeFileSync('public/logo.png', logoBuf);
  fs.writeFileSync('public/logo-horizontal.png', logoBuf);
  fs.writeFileSync('public/logo-geovane.png', logoBuf);

  // Extract the golden scales of justice emblem precisely:
  // bounds: minX: 317, maxX: 705, minY: 18, maxY: 382
  const emblemCrop = await sharp(logoBuf)
    .extract({ left: 315, top: 16, width: 393, height: 368 })
    .png()
    .toBuffer();

  // Create high-res 512x512 emblem centered with a subtle luxury margin
  const emblemSquare = await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
    .composite([{
      input: await sharp(emblemCrop).resize(450, 450, { fit: 'contain' }).toBuffer(),
      gravity: 'center'
    }])
    .png()
    .toBuffer();

  fs.writeFileSync('public/emblema-geovane.png', emblemSquare);
  fs.writeFileSync('public/emblema-balanca.png', emblemSquare);
  fs.writeFileSync('public/emblem.png', emblemSquare);

  // Dark-backed onyx disc with gold border for crisp, luxury favicon visibility on any browser tab
  const darkDiscSvg = Buffer.from(`
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="discGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#191e28"/>
          <stop offset="85%" stop-color="#0e1219"/>
          <stop offset="100%" stop-color="#080a0e"/>
        </radialGradient>
        <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fdeea6"/>
          <stop offset="45%" stop-color="#d4a843"/>
          <stop offset="100%" stop-color="#7d4e13"/>
        </linearGradient>
      </defs>
      <circle cx="256" cy="256" r="248" fill="url(#discGrad)" stroke="url(#borderGrad)" stroke-width="8"/>
    </svg>
  `);

  const faviconBase = await sharp(darkDiscSvg)
    .composite([{
      input: await sharp(emblemCrop).resize(380, 380, { fit: 'contain' }).toBuffer(),
      gravity: 'center'
    }])
    .png()
    .toBuffer();

  // Generate Favicons & Icons in multiple resolutions
  console.log('--- 2. Generating Favicon & Web App Icons ---');
  const s512 = await sharp(faviconBase).resize(512, 512).png().toBuffer();
  const s192 = await sharp(faviconBase).resize(192, 192).png().toBuffer();
  const s180 = await sharp(faviconBase).resize(180, 180).png().toBuffer();
  const s48  = await sharp(faviconBase).resize(48, 48).png().toBuffer();
  const s32  = await sharp(faviconBase).resize(32, 32).png().toBuffer();
  const s16  = await sharp(faviconBase).resize(16, 16).png().toBuffer();

  fs.writeFileSync('public/icon.png', s512);
  fs.writeFileSync('public/icon-192x192.png', s192);
  fs.writeFileSync('public/apple-icon.png', s180);
  fs.writeFileSync('public/icon-48x48.png', s48);
  fs.writeFileSync('public/icon-32x32.png', s32);
  fs.writeFileSync('public/icon-16x16.png', s16);

  const icoBuf = createIco([
    { width: 16, height: 16, buffer: s16 },
    { width: 32, height: 32, buffer: s32 },
    { width: 48, height: 48, buffer: s48 }
  ]);
  fs.writeFileSync('public/favicon.ico', icoBuf);

  // Copy directly to app/ for Next.js App Router root icon handling
  fs.writeFileSync('app/favicon.ico', icoBuf);
  fs.writeFileSync('app/icon.png', s512);
  fs.writeFileSync('app/apple-icon.png', s180);

  console.log('--- 3. Processing Portraits & Photos of Dr. Geovane Martins ---');
  // High-res portrait in black suit (Hero & Institutional Profile)
  const portraitSuitBuf = fs.readFileSync(uploadedPortraitSuit);
  fs.writeFileSync('public/dr-geovane-martins.jpg', portraitSuitBuf);
  fs.writeFileSync('public/hero.jpg', portraitSuitBuf);
  fs.writeFileSync('public/dr-geovane.jpg', portraitSuitBuf);

  // High-res portrait at office desk with laptop & clasped hands (About & Consultation)
  const portraitDeskBuf = fs.readFileSync(uploadedPortraitDesk);
  fs.writeFileSync('public/dr-geovane-escritorio.jpg', portraitDeskBuf);
  fs.writeFileSync('public/portrait.jpg', portraitDeskBuf);
  fs.writeFileSync('public/escritorio.jpg', portraitDeskBuf);
  fs.writeFileSync('public/atendimento.jpg', portraitDeskBuf);

  console.log('All Dr. Geovane Martins assets generated successfully!');
}

setupGeovaneAssets().catch(err => {
  console.error(err);
  process.exit(1);
});
