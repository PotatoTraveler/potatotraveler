import type { NextConfig } from "next";

// next.config.js
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'source.unsplash.com'],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/' : '',
};
export default nextConfig;
