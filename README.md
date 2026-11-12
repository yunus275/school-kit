# Aymen Schoolboard download page

- `src/`    page source (html, css, js)
- `public/` static files copied as-is (the installer .exe)
- `dist/`   build output, served by Vercel

Build: `npm run build`

## Vercel
Import the repo. Vercel reads vercel.json (build: `npm run build`, output: `dist`).

## Big file warning
GitHub rejects files over 100 MB. The installer is ~121 MB, so either:
1. Use Git LFS: `git lfs install && git lfs track "*.exe"`, then commit .gitattributes, or
2. Upload the .exe to a GitHub Release and set DOWNLOAD_URL in `src/config.js` to that link
   (then delete the .exe from public/).
