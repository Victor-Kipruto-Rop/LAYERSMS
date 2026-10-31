import type { MetadataRoute } from 'next'

const SITE_URL = (
  process.env.NEXT_PUBLIC_PUBLIC_SITE_URL || 'https://layersms.com'
).replace(/\/$/, '')

export default function sitemap(): MetadataRoute.Sitemap {
  const publicRoutes = ['/', '/support', '/privacy', '/terms', '/refunds']

  return publicRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: route === '/' ? 'weekly' : 'yearly',
    priority: route === '/' ? 1 : 0.4,
  }))
}
