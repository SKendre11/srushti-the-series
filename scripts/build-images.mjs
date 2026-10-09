import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const OUT = 'public/assets';
mkdirSync(OUT, { recursive: true });

const src = 'public/assets/srushti-profile.jpg';

// 1. Generate responsive WebP versions directly from Srushti's real photo
for (const w of [1100, 720, 420]) {
  await sharp(src)
    .resize({ width: w, withoutEnlargement: false })
    .webp({ quality: 90 })
    .toFile(`${OUT}/portrait-${w}.webp`);
  console.log(`Created portrait-${w}.webp`);
}

// 2. Generate og-image.jpg with Srushti Kendre's details
const portraitBuf = await sharp(src)
  .resize({ height: 580, width: 435, fit: 'cover' })
  .webp({ quality: 90 })
  .toBuffer();

const svgOverlay = Buffer.from(`
  <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="g" cx="75%" cy="45%" r="50%">
        <stop offset="0%" stop-color="#e5132b" stop-opacity="0.4"/>
        <stop offset="100%" stop-color="#e5132b" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="1200" height="630" fill="#07070a"/>
    <rect width="1200" height="630" fill="url(#g)"/>
    <text x="72" y="260" font-family="Impact, 'Arial Narrow', sans-serif" font-size="110" fill="#f4f1ec" letter-spacing="4">SRUSHTI</text>
    <text x="76" y="315" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="26" fill="#ff3d5a" letter-spacing="14">THE SERIES</text>
    <text x="76" y="375" font-family="Helvetica, Arial, sans-serif" font-weight="600" font-size="18" fill="#a7a6ad" letter-spacing="4">COMPUTER SCIENCE ENGINEERING STUDENT</text>
    <text x="76" y="410" font-family="Helvetica, Arial, sans-serif" font-weight="600" font-size="18" fill="#46e3a8" letter-spacing="4">ASPIRING FULL-STACK DEVELOPER</text>
  </svg>
`);

await sharp(svgOverlay)
  .composite([
    { input: portraitBuf, top: 25, left: 700 }
  ])
  .jpeg({ quality: 88 })
  .toFile(`${OUT}/og-image.jpg`);

console.log('images built successfully');
