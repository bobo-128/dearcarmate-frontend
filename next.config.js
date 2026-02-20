/** @type {import('next').NextConfig} */
const path = require('path')

module.exports = {
  eslint: {
    ignoreDuringBuilds: true, 
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@use "src/styles/utils.scss" as *;`,
  },
  images: {
    remotePatterns: [
      {
        hostname: '**',
      },
    ],
  },
};
