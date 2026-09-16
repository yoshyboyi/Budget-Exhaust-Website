import type { Metadata } from 'next'
import Link from 'next/link'
import ImagePlaceholder from '@/components/ImagePlaceholder'

export const metadata: Metadata = {
  title: '4WD & Light Truck Exhaust - Bankstown, Sydney',
  description:
    '4WD and small truck exhaust systems built for towing and off-road use. Budget Exhaust, Bankstown, Sydney.',
  alternates: { canonical: '/4wd-exhaust' },
}

export default function FourWDExhaustPage() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
        <ImagePlaceholder label="4WD or light truck with exhaust work visible" aspect="aspect-[4/3]" className="lg:order-2" src="/images/4wd/main.jpg" />
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-orange">4WD &amp; Light Truck</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
            Exhaust systems built for the extra load
          </h1>
          <p className="mt-5 text-steel-light">
            4WDs and light trucks put more demand on an exhaust system than a standard
            passenger car - towing, off-road clearance and heavier duty cycles all matter.
            We build systems to suit the way the vehicle is actually used.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-steel-light">
            {[
              'Small truck exhaust systems',
              '4WD-specific exhaust builds',
              'Standard and high-flow catalytic converters to suit Australian emissions rules',
              'Exhaust diagnostics and safety checks',
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-orange" />
                {item}
              </li>
            ))}
          </ul>
          <Link href="/contact" className="mt-8 inline-block bg-orange px-7 py-3.5 text-sm font-semibold text-white hover:bg-orange-dim">
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  )
}
