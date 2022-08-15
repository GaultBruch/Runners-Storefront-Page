/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/Runners-Storefront-Page",
  assetPrefix: "/Runners-Storefront-Page",
}

module.exports = nextConfig
