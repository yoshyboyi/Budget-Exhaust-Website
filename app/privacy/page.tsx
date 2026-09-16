import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page max-w-2xl">
        <h1 className="font-display text-3xl font-bold text-white">Privacy Policy</h1>
        <p className="mt-6 text-steel-light">
          Placeholder page. Replace with a privacy policy reviewed by the business owner,
          covering how quote-form and contact data (name, phone, email, vehicle details,
          uploaded photos) is collected, stored and used.
        </p>
      </div>
    </section>
  )
}
