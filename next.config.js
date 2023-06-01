/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: process.env.GITHUB_ACTIONS && "/nonick-mc.github.io",
  output: 'export',
  trailingSlash: true,
}

module.exports = nextConfig
