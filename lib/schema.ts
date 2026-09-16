import { business } from './business'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.budgetexhaust.net.au'

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AutomotiveBusiness',
    name: business.name,
    alternateName: business.legalName,
    image: `${SITE_URL}/images/hero/workshop.jpg`,
    url: SITE_URL,
    telephone: business.phones.primaryHref.replace('tel:', ''),
    email: business.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.suburb,
      addressRegion: business.address.state,
      postalCode: business.address.postcode,
      addressCountry: business.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.address.lat,
      longitude: business.address.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    priceRange: '$$',
    areaServed: {
      '@type': 'City',
      name: 'Sydney',
    },
    sameAs: [business.social.facebook, business.social.youtube, business.social.instagram],
  }
}

export function serviceSchema(name: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    description,
    provider: {
      '@type': 'AutomotiveBusiness',
      name: business.name,
    },
    areaServed: 'Sydney, NSW',
  }
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}
