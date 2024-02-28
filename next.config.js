/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["shikimori.one", "shikimori.onehttps"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
};

module.exports = nextConfig;
