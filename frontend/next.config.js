/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['your-image-domain.com'], // Add the domain where your images are hosted
    unoptimized: true,
  },
}

module.exports = nextConfig
