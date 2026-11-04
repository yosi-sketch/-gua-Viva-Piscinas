const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const urls = [
  'https://aguavivapiscinas.com.br/wp-content/uploads/2018/01/d8c486_b059a7d49df04e4b9941424c3c2abf8e_mv2.jpg',
  'https://aguavivapiscinas.com.br/wp-content/uploads/2018/01/d8c486_921996adbd934f59af97f04b4908b46c_mv2.jpg',
  'https://aguavivapiscinas.com.br/wp-content/uploads/2018/01/d8c486_ee407eb3ee184d66ae2a4cd90427a0fb_mv2.jpg',
  'https://aguavivapiscinas.com.br/wp-content/uploads/2018/01/d8c486_1737d862d2ce4746b18239be56e4db5a_mv2_d_2630_2484_s_4_2.jpg',
  'https://aguavivapiscinas.com.br/wp-content/uploads/2018/01/d8c486_1689e0cfbac8474e9c00c01f198fe879_mv2.jpg',
  'https://aguavivapiscinas.com.br/wp-content/uploads/2018/01/d8c486_6af6d660c5f14089b3e9460ea4e85d0d_mv2.jpg',
  'https://aguavivapiscinas.com.br/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-09-at-13.07.09-800x600.jpeg',
  'https://aguavivapiscinas.com.br/wp-content/uploads/2018/01/WhatsApp-Image-2016-08-26-at-12.26.41-1.jpeg'
];

async function download(url, dest) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve);
      }
      if (res.statusCode !== 200) {
        console.log(`Failed ${url}: ${res.statusCode}`);
        return resolve(false);
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Saved: ${dest}`);
        resolve(true);
      });
    }).on('error', (err) => {
      console.log(`Error ${url}: ${err.message}`);
      resolve(false);
    });
  });
}

(async () => {
  let i = 1;
  for (const u of urls) {
    const ext = path.extname(u).split('?')[0] || '.jpg';
    await download(u, path.join('public', `piscina-obra-${i}${ext}`));
    i++;
  }
})();
