// Copies src/ and public/ into dist/ (no dependencies needed).
import { rm, mkdir, cp } from "node:fs/promises";

await rm("dist", { recursive: true, force: true });
await mkdir("dist", { recursive: true });
await cp("src", "dist", { recursive: true });
await cp("public", "dist", { recursive: true });
console.log("Built to dist/");
