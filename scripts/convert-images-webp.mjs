import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputFolders = ["src/assets", "src/assets/partners", "public"];

const allowedExtensions = [".jpg", ".jpeg", ".png"];

async function convertImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();

  if (!allowedExtensions.includes(ext)) {
    return;
  }

  const outputPath = filePath.replace(ext, ".webp");

  if (fs.existsSync(outputPath)) {
    console.log(`Skipped existing: ${outputPath}`);
    return;
  }

  await sharp(filePath)
    .webp({
      quality: 82,
    })
    .toFile(outputPath);

  console.log(`Converted: ${filePath} -> ${outputPath}`);
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
      await convertImage(fullPath);
    }
  }
}

async function main() {
  for (const folder of inputFolders) {
    await walkFolder(folder);
  }

  console.log("Done converting images to WebP.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
