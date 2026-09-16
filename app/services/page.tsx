import type { Metadata } from 'next'
import { business } from '@/lib/business'
import ServiceCard from '@/components/ServiceCard'

export const metadata: Metadata = {
  title: 'Exhaust & Muffler Services in Bankstown, Sydney',
  description:
    'Standard mufflers, performance exhaust, 4WD exhaust, custom exhaust systems, catalytic converters and exhaust diagnostics - Budget Exhaust, Bankstown.',
  alternates: { canonical: '/services' },
}

export default function ServicesPage() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page">
        <p className="text-sm font-semibold uppercase tracking-wider text-orange">Services</p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold text-white sm:text-5xl">
          Exhaust and muffler work, done properly
        </h1>
        <p className="mt-4 max-w-2xl text-steel-light">
          Every job starts with a look at your vehicle and what you actually need - whether
          that&apos;s a straightforward repair or a full performance build.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {business.services.map((service) => (
            <ServiceCard key={service.slug} title={service.title} summary={service.summary} />
          ))}
        </div>
      </div>
    </section>
  )
}
