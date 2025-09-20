import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vieraboschkova.github.io',
        pathname: '/swapi-gallery/static/assets/img/people/**',
      },
    ],
  },
};

export default nextConfig;
