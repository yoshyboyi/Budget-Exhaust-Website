import type { Metadata } from 'next'
import Link from 'next/link'
import ImagePlaceholder from '@/components/ImagePlaceholder'

export const metadata: Metadata = {
  title: 'Mufflers Bankstown & Sydney - Replacement & Repair',
  description:
    'Standard and classic car muffler replacement and repair in Bankstown, Sydney. Free safety check before any work is recommended. Budget Exhaust.',
  alternates: { canonical: '/mufflers' },
}

export default function MufflersPage() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-orange">Mufflers</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
            Muffler replacement & repair
          </h1>
          <p className="mt-5 text-steel-light">
            A noisy, rattling or corroded muffler is one of the most common reasons drivers
            come to us. We run a full safety check first, then talk you through what
            actually needs replacing - standard mufflers through to classic car applications.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-steel-light">
            {[
              'Standard muffler replacement for everyday driving',
              'Classic car mufflers',
              'Muffler and exhaust safety checks / evaluations',
              'Pipe, hanger and joint repairs around a muffler replacement',
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
        <ImagePlaceholder label="Muffler being fitted or a muffler close-up" aspect="aspect-[4/3]" src="/images/mufflers/main.jpg" />
      </div>
    </section>
  )
}
