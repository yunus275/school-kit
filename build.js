// Copies src/ and public/ into dist/ (no dependencies needed)
const fs = require("fs");
const path = require("path");
const root = __dirname, dist = path.join(root, "dist");
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });
for (const dir of ["src", "public"]) {
  fs.cpSync(path.join(root, dir), dist, { recursive: true });
}
console.log("Built to dist/");
