/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.GITHUB_ACTIONS + '/',
  trailingSlash: true,
}

module.exports = nextConfig
