import type { Metadata } from 'next'
import { business } from '@/lib/business'
import QuoteForm from '@/components/QuoteForm'

export const metadata: Metadata = {
  title: 'Contact Budget Exhaust - Bankstown, Sydney',
  description:
    'Call, email or request a free quote from Budget Exhaust at 165 Eldridge Road, Bankstown NSW 2200.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  const mapQuery = encodeURIComponent(
    `${business.address.street}, ${business.address.suburb} ${business.address.state} ${business.address.postcode}`
  )

  return (
    <section className="py-16 lg:py-24">
      <div className="container-page">
        <p className="text-sm font-semibold uppercase tracking-wider text-orange">Contact</p>
        <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">Get in touch</h1>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div>
            <div className="flex flex-wrap gap-4">
              <a href={business.phones.primaryHref} className="bg-orange px-6 py-3 text-sm font-semibold text-white hover:bg-orange-dim">
                Call Now
              </a>
              <a
                href={business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-steel-light/40 px-6 py-3 text-sm font-semibold text-white hover:border-orange hover:text-orange"
              >
                Get Directions
              </a>
            </div>

            <div className="mt-10 space-y-6 text-sm text-steel-light">
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-wide text-white">Address</h2>
                <p className="mt-1">
                  {business.address.street}<br />
                  {business.address.suburb} {business.address.state} {business.address.postcode}
                </p>
              </div>
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-wide text-white">Phone</h2>
                <p className="mt-1">
                  <a href={business.phones.primaryHref} className="hover:text-orange">{business.phones.primary}</a>
                  {' / '}
                  <a href={business.phones.secondaryHref} className="hover:text-orange">{business.phones.secondary}</a>
                </p>
              </div>
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-wide text-white">Email</h2>
                <p className="mt-1">
                  <a href={`mailto:${business.email}`} className="hover:text-orange">{business.email}</a>
                </p>
              </div>
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-wide text-white">Hours</h2>
                {business.hours.map((h) => (
                  <p key={h.days} className="mt-1">{h.days}: {h.time}</p>
                ))}
              </div>
            </div>

            <div className="mt-10 aspect-video w-full overflow-hidden border border-steel-dark">
              <iframe
                title="Budget Exhaust location map"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="border border-steel-dark bg-navy p-6 sm:p-8">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  )
}
