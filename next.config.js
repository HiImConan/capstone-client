/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nedrug.mfds.go.kr",
        pathname: "/pbp/cmn/itemImageDownload/**",
      },
    ],

    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
