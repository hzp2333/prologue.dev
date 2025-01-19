const { withContentlayer } = require("next-contentlayer2");

const hostnames = ['pathos.page','*.yizhou.ac.cn','sliun.com','*.github.io','organwalk.ink','*.wp.com','tiddlywiki.com']

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true /** Missing source maps for large first-party JavaScript */,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: hostnames.map(hostname => ({
      protocol: 'https',
      hostname
  }))
  },
};

module.exports = withContentlayer(nextConfig);
