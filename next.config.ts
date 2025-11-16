import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    unoptimized: true, // Required for Netlify static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wallpapers.com',
        pathname: '/images/**'
      },
      {
        protocol: 'https',
        hostname: 'www.mytheresa.com',
        pathname: '/media/**'
      }
    ]
  }
};

export default nextConfig;
