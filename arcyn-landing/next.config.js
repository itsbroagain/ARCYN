/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [],
      formats: ['image/avif', 'image/webp'],
    },
    // Removed experimental.optimizeCss - it was causing the critters error
  }
  
  module.exports = nextConfig