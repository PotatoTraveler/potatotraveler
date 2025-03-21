import type { NextConfig } from "next";

// next.config.js
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'source.unsplash.com'],
  },
  basePath: '',
};
export default nextConfig;
