# Aymen Schoolboard download page

- `src/`    page source (html, css, js)
- `public/` static files copied as-is (installer split into parts in public/parts)
- `dist/`   build output, served by Vercel

Build: `npm run build`

## Why the installer is in parts
The .exe is ~121 MB. GitHub rejects files over 100 MB, so it is split into
21 MB pieces. When someone clicks Download, the page fetches the pieces and
joins them into the original .exe in the browser.

To rebuild the parts for a new version:
    split -b 21000000 -d -a 3 NEW.exe public/parts/setup.part
then update PARTS (and FILE_NAME) in src/config.js.

## Vercel
Import the repo. vercel.json runs `npm run build` and serves `dist/`.
