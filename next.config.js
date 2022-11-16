/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },

  //  Next13 app dir activate
  // experimental: {
  //   appDir: true,
  // },
};

module.exports = nextConfig;
