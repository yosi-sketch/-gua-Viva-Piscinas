const sharp = require('sharp');

async function analyzeLogo() {
  const logoPath = 'public/logo-tomo.png';
  const { data, info } = await sharp(logoPath)
    .raw()
    .toBuffer({ resolveWithObject: true });
  
  const colorMap = {};
  for (let i = 0; i < data.length; i += 4) {
    const a = data[i + 3];
    if (a > 150) {
      const r = Math.round(data[i] / 8) * 8;
      const g = Math.round(data[i + 1] / 8) * 8;
      const b = Math.round(data[i + 2] / 8) * 8;
      // exclude pure white / transparent background
      if (r > 245 && g > 245 && b > 245) continue;
      const key = `${r},${g},${b}`;
      colorMap[key] = (colorMap[key] || 0) + 1;
    }
  }

  const toHex = (r, g, b) => '#' + [r, g, b].map(x => Math.min(255, x).toString(16).padStart(2, '0')).join('');

  const sorted = Object.entries(colorMap).sort((a,b) => b[1] - a[1]).slice(0, 30);
  console.log('Top Logo Colors:');
  sorted.forEach(([key, count]) => {
    const [r, g, b] = key.split(',').map(Number);
    console.log(toHex(r, g, b), count, `rgb(${r},${g},${b})`);
  });
}

analyzeLogo().catch(console.error);
