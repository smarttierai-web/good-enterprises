const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = '/Users/babukumar/.gemini/antigravity-ide/brain/b6f7c42d-b023-4f85-9686-139161f69006/.user_uploaded/media_1792488463126.jpg';
const outputDir = '/Users/babukumar/projects/good-enterprises/public/assets';
const publicDir = '/Users/babukumar/projects/good-enterprises/public';

async function main() {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const image = sharp(inputPath);
  const metadata = await image.metadata();
  console.log('Original dimensions:', metadata.width, metadata.height);

  // Read raw pixels to find bounding box of non-white pixels
  const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
  
  let minX = info.width, minY = info.height, maxX = 0, maxY = 0;
  // Also find emblem bounding box (the top part: "GE" swirl)
  let emblemMaxY = 0;

  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const idx = (y * info.width + x) * info.channels;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      
      // If not almost white
      if (r < 240 || g < 240 || b < 240) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  console.log(`Bounding box: x: ${minX}..${maxX}, y: ${minY}..${maxY}`);
  const pad = 12;
  const cropLeft = Math.max(0, minX - pad);
  const cropTop = Math.max(0, minY - pad);
  const cropWidth = Math.min(info.width - cropLeft, (maxX - minX) + pad * 2);
  const cropHeight = Math.min(info.height - cropTop, (maxY - minY) + pad * 2);

  console.log(`Cropped dimensions: ${cropWidth}x${cropHeight}`);

  // Create clean logo with transparent background where pixels are close to white
  const croppedRaw = await sharp(inputPath)
    .extract({ left: cropLeft, top: cropTop, width: cropWidth, height: cropHeight })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const pixelData = croppedRaw.data;
  for (let i = 0; i < pixelData.length; i += 4) {
    const r = pixelData[i];
    const g = pixelData[i + 1];
    const b = pixelData[i + 2];
    
    // Calculate distance from white
    const brightness = (r + g + b) / 3;
    if (r > 240 && g > 240 && b > 240) {
      pixelData[i + 3] = 0; // transparent
    } else if (r > 220 && g > 220 && b > 220) {
      const factor = (255 - brightness) / 35;
      pixelData[i + 3] = Math.max(0, Math.min(255, Math.floor(factor * 255)));
    }
  }

  // Save transparent logo
  await sharp(pixelData, {
    raw: {
      width: croppedRaw.info.width,
      height: croppedRaw.info.height,
      channels: 4
    }
  })
  .png()
  .toFile(path.join(outputDir, 'logo.png'));
  console.log('Saved logo.png');

  // Also save a version on white background
  await sharp(inputPath)
    .extract({ left: cropLeft, top: cropTop, width: cropWidth, height: cropHeight })
    .png()
    .toFile(path.join(outputDir, 'logo-white-bg.png'));
  console.log('Saved logo-white-bg.png');

  // Extract emblem (the crescent and GE)
  // Let's find the vertical gap between the emblem and "GOOD ENTERPRISES"
  // Scan rows in croppedRaw to find horizontal slice with very few non-white pixels
  let textStartY = 0;
  for (let y = 50; y < cropHeight - 20; y++) {
    let rowNonWhite = 0;
    for (let x = 0; x < cropWidth; x++) {
      const idx = (y * cropWidth + x) * 4;
      if (pixelData[idx + 3] > 50) {
        rowNonWhite++;
      }
    }
    // "GOOD ENTERPRISES" has wide row non-white across the width
    if (rowNonWhite > cropWidth * 0.4) {
      textStartY = y;
      break;
    }
  }
  console.log('Detected text start Y in cropped logo:', textStartY);

  const emblemBottom = textStartY > 0 ? textStartY - 5 : Math.floor(cropHeight * 0.6);
  
  // Find bounding box of emblem
  let eMinX = cropWidth, eMaxX = 0, eMinY = cropHeight, eMaxY = 0;
  for (let y = 0; y < emblemBottom; y++) {
    for (let x = 0; x < cropWidth; x++) {
      const idx = (y * cropWidth + x) * 4;
      if (pixelData[idx + 3] > 30) {
        if (x < eMinX) eMinX = x;
        if (x > eMaxX) eMaxX = x;
        if (y < eMinY) eMinY = y;
        if (y > eMaxY) eMaxY = y;
      }
    }
  }
  console.log(`Emblem box: x: ${eMinX}..${eMaxX}, y: ${eMinY}..${eMaxY}`);
  const ePad = 10;
  const eLeft = Math.max(0, eMinX - ePad);
  const eTop = Math.max(0, eMinY - ePad);
  const eWidth = Math.min(cropWidth - eLeft, (eMaxX - eMinX) + ePad * 2);
  const eHeight = Math.min(cropHeight - eTop, (eMaxY - eMinY) + ePad * 2);

  // Extract emblem buffer
  const emblemBuffer = await sharp(pixelData, {
    raw: {
      width: croppedRaw.info.width,
      height: croppedRaw.info.height,
      channels: 4
    }
  })
  .extract({ left: eLeft, top: eTop, width: eWidth, height: eHeight })
  .png()
  .toBuffer();

  await sharp(emblemBuffer).toFile(path.join(outputDir, 'emblem.png'));
  console.log('Saved emblem.png');

  // Create square favicon with emblem centered
  const favSize = 128;
  const emblemSquare = await sharp(emblemBuffer)
    .resize(favSize - 20, favSize - 20, { fit: 'inside' })
    .toBuffer();

  const favFinal = await sharp({
    create: {
      width: favSize,
      height: favSize,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 0 }
    }
  })
  .composite([{ input: emblemSquare, gravity: 'center' }])
  .png()
  .toBuffer();

  await sharp(favFinal).resize(32, 32).png().toFile(path.join(publicDir, 'favicon.png'));
  await sharp(favFinal).resize(192, 192).png().toFile(path.join(publicDir, 'favicon-192.png'));
  await sharp(favFinal).resize(180, 180).png().toFile(path.join(publicDir, 'apple-touch-icon.png'));
  
  // Also copy to favicon.ico (sips can convert png to ico on mac, or write png as favicon.ico)
  // Modern browsers support PNG favicons or we can convert with sips
  fs.copyFileSync(path.join(publicDir, 'favicon.png'), path.join(publicDir, 'favicon.ico'));
  console.log('Favicon generated successfully!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
