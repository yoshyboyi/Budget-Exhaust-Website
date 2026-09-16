import type { Metadata } from 'next'
import { business } from '@/lib/business'
import Timeline from '@/components/Timeline'
import ImagePlaceholder from '@/components/ImagePlaceholder'

export const metadata: Metadata = {
  title: 'About Budget Exhaust - Bankstown Since 1980',
  description:
    'Budget Exhaust Centre Bankstown has served Sydney vehicle owners since 1980, run by owner Fadi El-Masri from 165 Eldridge Road.',
  alternates: { canonical: '/about' },
}

export default function AboutPage() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-orange">About Us</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
            A Bankstown workshop since 1980
          </h1>
          <p className="mt-6 text-steel-light">
            {business.legalName} has been established since {business.establishedYear} and
            was originally based in Bankstown, next door to the Bankstown Sports Club. In
            2005 the business relocated to {business.address.street}, {business.address.suburb}{' '}
            - opposite the Trotting Club, on the same street as Bankstown Hospital - into
            larger premises.
          </p>
          <p className="mt-4 text-steel-light">
            Owner {business.ownerName} specialises in car exhausts, standard mufflers, 4WD
            exhaust, performance exhausts, prestige vehicle exhaust, light trucks and
            dealership work. With free local pick-up and delivery, muffler safety checkups
            and a commitment to competitive pricing, the team focuses on giving customers a
            straightforward, honest service.
          </p>
          <div className="mt-8">
            <ImagePlaceholder label="Photo of the workshop exterior or owner Fadi El-Masri in the workshop" aspect="aspect-video" src="/images/about/about.jpg" />
          </div>
        </div>
        <div>
          <h2 className="font-display text-2xl font-bold text-white">Our history</h2>
          <div className="mt-8">
            <Timeline />
          </div>
        </div>
      </div>
    </section>
  )
}
