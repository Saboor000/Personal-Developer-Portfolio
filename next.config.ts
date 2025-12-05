import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname, // or absolute path to your actual workspace root
  },
};

export default nextConfig;
