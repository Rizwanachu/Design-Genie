import { build as esbuild } from "esbuild";
import { build as viteBuild } from "vite";
import { cp, rm } from "fs/promises";
import { extname } from "path";

// server deps to bundle to reduce openat(2) syscalls
// which helps cold start times
const allowlist = [
  "@google/generative-ai",
  "axios",
  "connect-pg-simple",
  "cors",
  "date-fns",
  "drizzle-orm",
  "drizzle-zod",
  "express",
  "express-rate-limit",
  "express-session",
  "jsonwebtoken",
  "memorystore",
  "multer",
  "nanoid",
  "nodemailer",
  "openai",
  "passport",
  "passport-local",
  "pg",
  "stripe",
  "uuid",
  "ws",
  "xlsx",
  "zod",
  "zod-validation-error",
];

async function buildAll() {
  await rm("dist", { recursive: true, force: true });

  console.log("building client...");
  await viteBuild();

  // The dev server exposes attached_assets directly, but Vercel only serves
  // files written into dist/public. Preserve that URL space for gallery and
  // room images that use /attached_assets/... paths.
  await cp("attached_assets", "dist/public/attached_assets", {
    recursive: true,
    filter: (source) => {
      const extension = extname(source).toLowerCase();
      return extension === "" || [".gif", ".jpeg", ".jpg", ".pdf", ".png", ".svg", ".webp"].includes(extension);
    },
  });

  // For Vercel static, we don't need the server bundle
  // but we keep the script structure to avoid breaking the build command
  console.log("Static build completed. Files are in dist/public");
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
