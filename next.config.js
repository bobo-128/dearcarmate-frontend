/** @type {import('next').NextConfig} */
const path = require('path')

module.exports = {
  output: 'export',
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@use "src/styles/utils.scss" as *;`,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: '**',
      },
    ],
  },
};
