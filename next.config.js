/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  output: "export",
  images: {
    domains: ["lh3.googleusercontent.com"],
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

};

module.exports = nextConfig;
