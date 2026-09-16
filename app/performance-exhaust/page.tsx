import type { Metadata } from 'next'
import Link from 'next/link'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import QuoteForm from '@/components/QuoteForm'

export const metadata: Metadata = {
  title: 'Performance Exhaust Sydney - Bankstown Specialists',
  description:
    'Performance mufflers, custom exhaust, high-flow systems and extractors/headers, fitted to suit your vehicle. Budget Exhaust, Bankstown, Sydney.',
  alternates: { canonical: '/performance-exhaust' },
}

const points = [
  {
    title: 'Performance mufflers',
    body: 'A change in sound and character without the guesswork - fitted to suit your vehicle and what you want to hear.',
  },
  {
    title: 'Custom exhaust systems',
    body: 'Pipework bent and built specifically for your car, rather than picked from a generic catalogue fit.',
  },
  {
    title: 'High-flow systems',
    body: 'High-flow mufflers and metallic catalytic converters, including Euro 3 and Euro 4 options.',
  },
  {
    title: 'Extractors & headers',
    body: 'Extractors and headers fitted to suit a wide range of vehicles as part of a broader performance setup.',
  },
]

export default function PerformanceExhaustPage() {
  return (
    <>
      <section className="border-b border-steel-dark py-16 lg:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-orange">Performance Exhaust</p>
            <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
              Built for the way you drive.
            </h1>
            <p className="mt-5 text-steel-light">
              We work through sound, look and fit with you before recommending a setup -
              whether that&apos;s a subtler daily-driver note or a full high-flow system.
              Exact products and expected results depend on your specific vehicle.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="bg-orange px-7 py-3.5 text-sm font-semibold text-white hover:bg-orange-dim">
                Get a Free Quote
              </Link>
              <a href="tel:+61297083088" className="border border-steel-light/40 px-7 py-3.5 text-sm font-semibold text-white hover:border-orange hover:text-orange">
                Call (02) 9708 3088
              </a>
            </div>
          </div>
          <ImagePlaceholder label="Performance vehicle / performance exhaust close-up (landscape, high-res)" aspect="aspect-[4/3]" src="/images/performance/main.jpg" />
        </div>
      </section>

      <section className="border-b border-steel-dark bg-navy py-16 lg:py-20">
        <div className="container-page grid gap-6 sm:grid-cols-2">
          {points.map((p) => (
            <div key={p.title} className="border border-steel-dark bg-charcoal p-6">
              <h2 className="font-display text-lg font-semibold text-white">{p.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-steel-light">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container-page max-w-2xl">
          <h2 className="font-display text-2xl font-bold text-white">Ready to talk options?</h2>
          <p className="mt-3 text-steel-light">
            Tell us about your vehicle and the sound or setup you&apos;re after.
          </p>
          <div className="mt-8 border border-steel-dark bg-navy p-6 sm:p-8">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  )
}
