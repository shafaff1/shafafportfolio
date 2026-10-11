import fs from "node:fs";
import path from "node:path";

const vercelOutputDir = path.resolve(".vercel/output");
if (fs.existsSync(vercelOutputDir)) {
  const configPath = path.join(vercelOutputDir, "config.json");
  const config = {
    version: 3,
    routes: [
      { handle: "filesystem" },
      { src: "/(.*)", dest: "/index.html" },
    ],
  };
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
  console.log("Successfully generated .vercel/output/config.json for Vercel routing.");
}
