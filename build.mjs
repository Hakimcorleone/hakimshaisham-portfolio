import { copyFile, mkdir } from "node:fs/promises";

const files = ["index.html", "styles.css", "script.js"];

await mkdir("dist", { recursive: true });

for (const file of files) {
  await copyFile(file, `dist/${file}`);
}
