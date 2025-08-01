import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://upload.wikimedia.org/wikipedia/commons/**"),
    ],
  },
  output: "standalone",
};

export default nextConfig;
