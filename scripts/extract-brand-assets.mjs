/**
 * Extrai símbolo e wordmark da arte original da logo (A4) e gera versões leves
 * para uso no site.
 *
 * Uso: node scripts/extract-brand-assets.mjs
 */
import sharp from "sharp";

const SRC = "public/brand/fluwend-logo-branca.png";

async function crop({ top, height, outWidth, out }) {
  // Duas passagens: o sharp aplica `trim` antes de `extract` num mesmo
  // pipeline, o que invalidaria a área recortada.
  const region = await sharp(SRC)
    .extract({ left: 0, top, width: 2480, height })
    .toBuffer();

  const cropped = await sharp(region)
    .trim()
    .toBuffer({ resolveWithObject: true });

  await sharp(cropped.data)
    .resize({ width: outWidth })
    .png({ compressionLevel: 9 })
    .toFile(out);

  console.log(`${out} — recorte ${cropped.info.width}x${cropped.info.height}`);
}

await crop({
  top: 820,
  height: 1450,
  outWidth: 512,
  out: "public/brand/fluwend-symbol.png",
});

await crop({
  top: 2400,
  height: 900,
  outWidth: 900,
  out: "public/brand/fluwend-wordmark.png",
});
