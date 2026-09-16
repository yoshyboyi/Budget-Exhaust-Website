import type { Metadata } from 'next'
import ImagePlaceholder from '@/components/ImagePlaceholder'

export const metadata: Metadata = {
  title: 'Workshop Gallery - Budget Exhaust Bankstown',
  description:
    'Photos from the Budget Exhaust workshop - exhaust installs, mufflers, welding and completed vehicle work.',
  alternates: { canonical: '/gallery' },
}

const galleryLabels = [
  'Workshop bay - general shot',
  'Exhaust welding close-up',
  'Muffler installation',
  'Completed 4WD exhaust',
  'Classic car exhaust work',
  'Chrome exhaust tip finish',
  'Performance exhaust fitted',
  'Extractors / headers close-up',
  'Prestige vehicle exhaust work',
]

const beforeAfter = [
  { title: 'Custom exhaust installation' },
  { title: 'Performance muffler upgrade' },
]

export default function GalleryPage() {
  return (
    <>
      <section className="py-16 lg:py-20">
        <div className="container-page">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange">Gallery</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
            From the workshop
          </h1>
          <p className="mt-4 max-w-2xl text-steel-light">
            Real photos of installs, welding and finished vehicles will replace these
            placeholders as they&apos;re supplied - see the README for the folder each
            image belongs in.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
            {galleryLabels.map((label, i) => (
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

      <section className="border-t border-steel-dark bg-navy py-16 lg:py-20">
        <div className="container-page">
          <h2 className="font-display text-2xl font-bold text-white">Before &amp; after</h2>
          <div className="mt-8 grid gap-10 sm:grid-cols-2">
            {beforeAfter.map((job, i) => (
              <div key={job.title} className="border border-steel-dark bg-charcoal p-5">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <ImagePlaceholder label="Before" aspect="aspect-square" src={`/images/gallery/before-${i + 1}.jpg`} />
                    <p className="mt-1.5 text-center text-xs uppercase tracking-wide text-steel">Before</p>
                  </div>
                  <div>
                    <ImagePlaceholder label="After" aspect="aspect-square" src={`/images/gallery/after-${i + 1}.jpg`} />
                    <p className="mt-1.5 text-center text-xs uppercase tracking-wide text-steel">After</p>
                  </div>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">{job.title}</h3>
                <p className="mt-1 text-sm text-steel-light">
                  Description of the job to be supplied by the owner.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
