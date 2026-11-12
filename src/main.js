import { DOWNLOAD_URL, FILE_NAME, FILE_INFO } from "./config.js";

const btn = document.getElementById("download");
const info = document.getElementById("info");

btn.href = DOWNLOAD_URL;
btn.setAttribute("download", FILE_NAME);
info.textContent = FILE_INFO;
