import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project so Next doesn't infer a parent
  // directory (a stray lockfile in the home folder otherwise confuses it).
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
