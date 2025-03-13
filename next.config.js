/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Configure for static export
  output: 'export',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig