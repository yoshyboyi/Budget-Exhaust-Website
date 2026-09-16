import type { Metadata } from 'next'
import { business } from '@/lib/business'

export const metadata: Metadata = {
  title: 'Exhaust Brands We Work With - Budget Exhaust',
  description:
    'Exhaust and muffler brands and suppliers used by Budget Exhaust, Bankstown - including XForce, MagnaFlow, Redback, Borla and more.',
  alternates: { canonical: '/brands' },
}

export default function BrandsPage() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-page max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-orange">Brands</p>
        <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
          Brands &amp; suppliers we work with
        </h1>
        <p className="mt-5 text-steel-light">
          We work with a wide range of exhaust and muffler brands and suppliers so we can
          match the right product to your vehicle and budget. Authorised dealer status is
          only claimed where it has been explicitly confirmed.
        </p>

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {business.brands.map((brand) => (
            <div key={brand.name} className="border border-steel-dark bg-navy px-5 py-4">
              <p className="font-semibold text-white">{brand.name}</p>
              {brand.note && <p className="mt-1 text-xs text-steel-light">{brand.note}</p>}
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-steel">
          Note: only XForce is stated as an authorised dealer on the existing site. Confirm
          current dealer/partner status for every brand with the owner before publishing.
        </p>
      </div>
    </section>
  )
}
