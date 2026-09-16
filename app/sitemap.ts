import type { MetadataRoute } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.budgetexhaust.net.au'

const routes = [
  '',
  '/services',
  '/performance-exhaust',
  '/mufflers',
  '/4wd-exhaust',
  '/about',
  '/gallery',
  '/brands',
  '/contact',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }))
}
