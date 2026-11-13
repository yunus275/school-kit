// The installer is split into parts (each under 100 MB) so GitHub and Vercel accept it.
// The page downloads the parts and joins them back into the original .exe.
export const FILE_NAME = "Aymen-Schoolboard-Setup-1_1_0.exe";
export const FILE_INFO = "Windows installer, 121 MB";
export const PARTS = [
  "/parts/setup.part000",
  "/parts/setup.part001",
  "/parts/setup.part002",
  "/parts/setup.part003"
];
