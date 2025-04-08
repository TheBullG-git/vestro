/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export", // This tells Next.js to export static files
  distDir: "out", // This specifies the output directory as "out"
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  // Images must be handled differently in static exports
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
