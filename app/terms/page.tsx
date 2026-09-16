import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms',
  alternates: { canonical: '/terms' },
}

export default function TermsPage() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page max-w-2xl">
        <h1 className="font-display text-3xl font-bold text-white">Terms</h1>
        <p className="mt-6 text-steel-light">
          Placeholder page. Add terms of service if the business wants them - not required
          to launch, but reserved here since the footer links to it.
        </p>
      </div>
    </section>
  )
}
