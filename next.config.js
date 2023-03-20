/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
};

const withTM = require("next-transpile-modules")([
  "@latticexyz/network",
  "@latticexyz/react",
  "@latticexyz/recs",
  "@latticexyz/std-client",
  "@latticexyz/utils",
]);

module.exports = withTM(nextConfig);
