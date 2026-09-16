import Link from 'next/link'
import { business } from '@/lib/business'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import ServiceCard from '@/components/ServiceCard'
import Timeline from '@/components/Timeline'
import BrandsStrip from '@/components/BrandsStrip'
import QuoteForm from '@/components/QuoteForm'

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-steel-dark bg-navy">
        <div className="container-page grid gap-10 py-14 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-orange/40 bg-orange/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange">
              Est. {business.establishedYear}
              <span className="h-1 w-1 rounded-full bg-orange" />
              45+ Years
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Mufflers &amp; exhaust
              <br />
              work Sydney trusts.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-steel-light">
              Professional exhaust and muffler solutions for everyday, performance, 4WD
              and prestige vehicles - from a family-run Bankstown workshop that&apos;s been
              doing this since 1980.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={business.phones.primaryHref}
                className="bg-orange px-7 py-3.5 text-sm font-semibold text-white hover:bg-orange-dim"
              >
                Call {business.phones.primary}
              </a>
              <Link
                href="/contact"
                className="border border-steel-light/40 px-7 py-3.5 text-sm font-semibold text-white hover:border-orange hover:text-orange"
              >
                Get a Free Quote
              </Link>
            </div>
            <p className="mt-8 text-sm text-steel">
              {business.address.street}, {business.address.suburb} {business.address.state}{' '}
              {business.address.postcode}
            </p>
          </div>

          <div className="relative overflow-hidden rounded-xl">
            <ImagePlaceholder
              label="Hero photo: workshop bay or a recently completed exhaust install (landscape, high-res)"
              aspect="aspect-video"
              src="/images/hero/hero.jpg"
            />
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-paper-border bg-paper">
        <div className="container-page grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {business.trustPoints.map((point) => (
            <div key={point.label} className="border-l-2 border-orange pl-4">
              <p className="font-display text-lg font-semibold text-ink">{point.label}</p>
              <p className="mt-1.5 text-sm text-ink-muted">{point.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-b border-paper-border bg-paper py-20">
        <div className="container-page">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
              What we work on
            </h2>
            <p className="mt-4 text-ink-muted">
              From a quick repair to a full performance build, here&apos;s the exhaust and
              muffler work we handle day to day. Exact products and fit depend on your
              specific vehicle.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {business.services.map((service) => (
              <ServiceCard key={service.slug} title={service.title} summary={service.summary} />
            ))}
          </div>
        </div>
      </section>

      {/* PERFORMANCE */}
      <section className="border-b border-steel-dark bg-charcoal py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <ImagePlaceholder
            label="Performance vehicle with visible exhaust/muffler work, or a close-up of a fitted exhaust tip"
            aspect="aspect-[4/3]"
            src="/images/performance/main.jpg"
          />
          <div>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Performance exhaust, built for the way you drive.
            </h2>
            <p className="mt-4 text-steel-light">
              Whether you want a subtler daily-driver note or a full high-flow system, we
              work through the options with you - performance mufflers, custom-bent
              pipework, high-flow systems, and extractors or headers to suit your vehicle.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-steel-light">
              {[
                'Performance mufflers and sports exhaust setups',
                'Custom-built exhaust systems, bent to fit your vehicle',
                'High-flow systems and extractors / headers',
                'Guidance on sound, look and fit before any work starts',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-orange" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-steel">
              Suitability, sound and fit vary by make and model - we&apos;ll talk it through
              with you before recommending a setup.
            </p>
            <Link
              href="/performance-exhaust"
              className="mt-8 inline-block border border-orange px-6 py-3 text-sm font-semibold text-orange hover:bg-orange hover:text-white"
            >
              Explore Performance Exhaust
            </Link>
          </div>
        </div>
      </section>

      {/* WHY BUDGET EXHAUST */}
      <section className="border-b border-steel-dark bg-navy py-20">
        <div className="container-page">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Why drivers choose Budget Exhaust
          </h2>
          <div className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              `Family-run since ${business.establishedYear} - four and a half decades on Sydney vehicles`,
              'Experienced exhaust specialists, not a general mechanic doing it on the side',
              'Standard and performance work under one roof',
              'A wide range of exhaust products and brands to choose from',
              'Customers across Sydney, based in Bankstown',
              'Free local pick-up and delivery',
            ].map((point) => (
              <p key={point} className="border-l-2 border-orange pl-4 text-sm leading-relaxed text-steel-light">
                {point}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / TIMELINE */}
      <section id="about" className="border-b border-steel-dark bg-charcoal py-20">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              A Bankstown workshop since 1980
            </h2>
            <p className="mt-4 text-steel-light">
              Budget Exhaust Centre Bankstown has been run by owner Fadi El-Masri, who
              specialises in car exhausts, standard mufflers, 4WD exhaust, performance
              exhaust, prestige vehicles, light trucks and dealership work.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-block text-sm font-semibold text-orange hover:underline"
            >
              Read the full story →
            </Link>
          </div>
          <Timeline />
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="border-b border-steel-dark bg-navy py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              From the workshop
            </h2>
            <Link href="/gallery" className="text-sm font-semibold text-orange hover:underline">
              View full gallery →
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[
              'Muffler installation in progress',
              'Custom exhaust bend / weld close-up',
              'Completed 4WD exhaust system',
              'Chrome exhaust tip finish',
            ].map((label, i) => (
              <ImagePlaceholder
                key={label}
                label={label}
                aspect="aspect-square"
                src={`/images/gallery/${i + 1}.jpg`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="border-b border-steel-dark bg-charcoal py-16">
        <div className="container-page">
          <h2 className="font-display text-2xl font-bold text-white">Brands we work with</h2>
          <p className="mt-2 max-w-xl text-sm text-steel-light">
            A selection of the exhaust and muffler brands and suppliers we use. Authorised
            dealer status is noted only where confirmed.
          </p>
          <div className="mt-6">
            <BrandsStrip limit={12} />
          </div>
          <Link href="/brands" className="mt-6 inline-block text-sm font-semibold text-orange hover:underline">
            See all brands →
          </Link>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="border-b border-steel-dark bg-navy py-16">
        <div className="container-page">
          <h2 className="font-display text-2xl font-bold text-white">Customer reviews</h2>
          <div className="mt-6 border border-dashed border-steel-dark bg-charcoal p-8 text-center">
            <p className="text-sm text-steel-light">
              Verified Google reviews will display here once connected. No reviews are
              fabricated - this section stays empty until real, sourced reviews are added.
            </p>
            <a
              href="https://www.google.com/maps/place/Budget+Exhaust/@-33.9303358,151.0099883,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-semibold text-orange hover:underline"
            >
              Read our reviews on Google →
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT / QUOTE */}
      <section id="contact" className="bg-charcoal py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Get a free quote
            </h2>
            <p className="mt-4 max-w-md text-steel-light">
              Tell us about your vehicle and what you&apos;re after - repair, replacement or
              a performance upgrade - and we&apos;ll get back to you.
            </p>
            <div className="mt-8 space-y-3 text-sm text-steel-light">
              <p>{business.address.street}, {business.address.suburb} {business.address.state} {business.address.postcode}</p>
              <p>
                <a href={business.phones.primaryHref} className="text-white hover:text-orange">
                  {business.phones.primary}
                </a>{' '}
                /{' '}
                <a href={business.phones.secondaryHref} className="text-white hover:text-orange">
                  {business.phones.secondary}
                </a>
              </p>
              <p>
                <a href={`mailto:${business.email}`} className="text-white hover:text-orange">
                  {business.email}
                </a>
              </p>
            </div>
          </div>
          <div className="border border-steel-dark bg-navy p-6 sm:p-8">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  )
}
