const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const uploadedLogo = 'C:/Users/matheus/.gemini/antigravity/brain/921b7eda-8ed9-4712-ade0-873492e6aad5/.user_uploaded/media_1793363159005_dc10e474.png';
const uploadedPhoto = 'C:/Users/matheus/.gemini/antigravity/brain/921b7eda-8ed9-4712-ade0-873492e6aad5/.user_uploaded/media_1793363150907_20b019a9.jpg';

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

  console.log('1. Copying Logo & Hero Photo...');
  const logoBuf = fs.readFileSync(uploadedLogo);
  const photoBuf = fs.readFileSync(uploadedPhoto);

  fs.writeFileSync('public/logo.png', logoBuf);
  fs.writeFileSync('public/logo-horizontal.png', logoBuf);
  fs.writeFileSync('public/logo-nayara.png', logoBuf);

  fs.writeFileSync('public/dra-nayara.jpg', photoBuf);
  fs.writeFileSync('public/dra-nayara-medina.jpg', photoBuf);
  fs.writeFileSync('public/hero.jpg', photoBuf);
  fs.writeFileSync('public/portrait.jpg', photoBuf);

  // Extract the name mark Nayara MEDINA (x: 14 to 700, y: 34 to 308)
  const nameMarkCrop = await sharp(logoBuf)
    .extract({ left: 14, top: 34, width: 686, height: 274 })
    .png()
    .toBuffer();
  fs.writeFileSync('public/name-mark.png', nameMarkCrop);

  // Square Emblem (512x512) centered
  const emblemSquare = await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
    .composite([{
      input: await sharp(nameMarkCrop).resize(460, 460, { fit: 'contain' }).toBuffer(),
      gravity: 'center'
    }])
    .png()
    .toBuffer();

  fs.writeFileSync('public/emblema-nayara.png', emblemSquare);
  fs.writeFileSync('public/emblema-balanca.png', emblemSquare);
  fs.writeFileSync('public/emblem.png', emblemSquare);

  // Design high-visibility Luxury Favicon Badge:
  // Circular obsidian base (#0c0906) with warm amber-gold double border,
  // featuring NM monogram and Balanca motif
  const faviconSvg = Buffer.from(`
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#241a13"/>
          <stop offset="60%" stop-color="#140f0a"/>
          <stop offset="100%" stop-color="#0a0704"/>
        </radialGradient>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fff8f0"/>
          <stop offset="20%" stop-color="#fedaa8"/>
          <stop offset="45%" stop-color="#f59e38"/>
          <stop offset="70%" stop-color="#df7418"/>
          <stop offset="100%" stop-color="#9a4e0b"/>
        </linearGradient>
        <linearGradient id="goldRing" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#8e3d06"/>
          <stop offset="35%" stop-color="#df7418"/>
          <stop offset="70%" stop-color="#fbaf53"/>
          <stop offset="100%" stop-color="#fff4e6"/>
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <!-- Background Circle -->
      <circle cx="256" cy="256" r="250" fill="url(#bgGrad)"/>
      
      <!-- Outer and Inner Gold Rings -->
      <circle cx="256" cy="256" r="238" fill="none" stroke="url(#goldRing)" stroke-width="7"/>
      <circle cx="256" cy="256" r="224" fill="none" stroke="url(#goldGrad)" stroke-width="2.5" stroke-dasharray="7 5" opacity="0.8"/>

      <!-- Scales of Justice Top Accent -->
      <g transform="translate(256, 128) scale(0.95)" stroke="url(#goldGrad)" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <line x1="-70" y1="0" x2="70" y2="0" />
        <circle cx="0" y="-12" r="8" fill="url(#goldGrad)" />
        <line x1="0" y1="-4" x2="0" y2="30" />
        <!-- Left Pan -->
        <line x1="-60" y1="0" x2="-75" y2="34" />
        <line x1="-60" y1="0" x2="-45" y2="34" />
        <path d="M-85,34 Q-60,50 -35,34 Z" fill="url(#goldGrad)" opacity="0.9" />
        <!-- Right Pan -->
        <line x1="60" y1="0" x2="45" y2="34" />
        <line x1="60" y1="0" x2="75" y2="34" />
        <path d="M35,34 Q60,50 85,34 Z" fill="url(#goldGrad)" opacity="0.9" />
      </g>

      <!-- NM Monogram Typography -->
      <text x="256" y="344" 
            font-family="Georgia, 'Times New Roman', serif" 
            font-size="166" 
            font-weight="bold" 
            letter-spacing="5"
            text-anchor="middle" 
            fill="url(#goldGrad)" 
            filter="url(#glow)">
        NM
      </text>

      <!-- Subtitle DRA. NAYARA MEDINA -->
      <text x="256" y="415" 
            font-family="'Helvetica Neue', Arial, sans-serif" 
            font-size="24" 
            font-weight="700" 
            letter-spacing="7" 
            text-anchor="middle" 
            fill="#faebd7">
        NAYARA MEDINA
      </text>
      
      <!-- Bottom Arc Accent -->
      <circle cx="256" cy="448" r="4.5" fill="#df7418" />
    </svg>
  `);

  const faviconBase = await sharp(faviconSvg).png().toBuffer();

  console.log('2. Generating Multi-resolution icons & Favicons...');
  const s512 = await sharp(faviconBase).resize(512, 512).png().toBuffer();
  const s192 = await sharp(faviconBase).resize(192, 192).png().toBuffer();
  const s180 = await sharp(faviconBase).resize(180, 180).png().toBuffer();
  const s48 = await sharp(faviconBase).resize(48, 48).png().toBuffer();
  const s32 = await sharp(faviconBase).resize(32, 32).png().toBuffer();
  const s16 = await sharp(faviconBase).resize(16, 16).png().toBuffer();

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

  console.log('Assets setup successfully completed!');
}
run().catch(err => {
  console.error(err);
  process.exit(1);
});
