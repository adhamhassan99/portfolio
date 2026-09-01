import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Static export ships no image optimizer, so every `next/image` source has to
  // be served as-is or the component throws at render time.
  images: { unoptimized: true },
};

export default nextConfig;
