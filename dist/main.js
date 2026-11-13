import { FILE_NAME, FILE_INFO, PARTS } from "./config.js";

const btn = document.getElementById("download");
const info = document.getElementById("info");
const label = btn.textContent;
info.textContent = FILE_INFO;

let busy = false;

btn.addEventListener("click", async (e) => {
  e.preventDefault();
  if (busy) return;
  busy = true;
  btn.setAttribute("aria-disabled", "true");

  try {
    const chunks = [];
    for (let i = 0; i < PARTS.length; i++) {
      btn.textContent = `Downloading ${Math.round((i / PARTS.length) * 100)}%`;
      const res = await fetch(PARTS[i]);
      if (!res.ok) throw new Error(`Part ${i + 1} failed (${res.status})`);
      chunks.push(await res.blob());
    }
    btn.textContent = "Done";
    const url = URL.createObjectURL(new Blob(chunks, { type: "application/octet-stream" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = FILE_NAME;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 60000);
  } catch (err) {
    info.textContent = "Download failed. Check your connection and try again.";
    console.error(err);
  } finally {
    setTimeout(() => {
      btn.textContent = label;
      btn.removeAttribute("aria-disabled");
      busy = false;
    }, 1500);
  }
});
