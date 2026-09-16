/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: '**' }
    ]
  },
  async redirects() {
    return [
      // Preserve SEO value from the old WordPress site.
      // Old suburb/blog "area" pages consolidate into the relevant service page.
      // Add the real list of indexed old URLs here before going live (see README).
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/muffler-brands/:slug', destination: '/brands', permanent: true },
    ]
  },
}

export default nextConfig
