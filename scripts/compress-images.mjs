import fs from "fs";
import path from "path";
import sharp from "sharp";

const foldersToCompress = ["src/assets", "src/assets/partners", "public"];

const imageExtensions = [".jpg", ".jpeg", ".png"];

const webpQuality = 95;
const maxWidth = 1600;

async function compressImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();

  if (!imageExtensions.includes(ext)) {
    return;
  }

  const parsed = path.parse(filePath);
  const outputPath = path.join(parsed.dir, `${parsed.name}.webp`);
  const tempOutputPath = path.join(
    parsed.dir,
    `${parsed.name}.compressed-temp.webp`,
  );

  const originalStats = fs.statSync(filePath);

  const image = sharp(filePath);
  const metadata = await image.metadata();

  const shouldResize = metadata.width && metadata.width > maxWidth;

  let pipeline = image.rotate();

  if (shouldResize) {
    pipeline = pipeline.resize({
      width: maxWidth,
      withoutEnlargement: true,
    });
  }

  await pipeline
    .webp({
      quality: webpQuality,
      effort: 6,
    })
    .toFile(tempOutputPath);

  const compressedStats = fs.statSync(tempOutputPath);

  if (compressedStats.size < originalStats.size || ext !== ".webp") {
    fs.renameSync(tempOutputPath, outputPath);

    const originalKb = (originalStats.size / 1024).toFixed(1);
    const compressedKb = (compressedStats.size / 1024).toFixed(1);

    console.log(
      `Compressed: ${filePath} -> ${outputPath} | ${originalKb}KB -> ${compressedKb}KB`,
    );
  } else {
    fs.unlinkSync(tempOutputPath);

    const originalKb = (originalStats.size / 1024).toFixed(1);
    const compressedKb = (compressedStats.size / 1024).toFixed(1);

    console.log(
      `Skipped: ${filePath} | compressed version was larger: ${originalKb}KB -> ${compressedKb}KB`,
    );
  }
}

async function walkFolder(folderPath) {
  if (!fs.existsSync(folderPath)) {
    return;
  }

  const entries = fs.readdirSync(folderPath, {
    withFileTypes: true,
  });

  for (const entry of entries) {
    const fullPath = path.join(folderPath, entry.name);

    if (entry.isDirectory()) {
      await walkFolder(fullPath);
    } else {
      await compressImage(fullPath);
    }
  }
}

async function main() {
  for (const folder of foldersToCompress) {
    await walkFolder(folder);
  }

  console.log("Image compression complete.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
