import Link from 'next/link'
import { business } from '@/lib/business'

export default function Footer() {
  return (
    <footer className="border-t border-steel-dark/60 bg-navy">
      <div className="container-page grid gap-10 py-14 lg:grid-cols-4">
        <div>
          <p className="font-display text-xl font-semibold text-white">
            BUDGET<span className="text-orange">EXHAUST</span>
          </p>
          <p className="mt-2 text-sm text-steel">{business.tagline}</p>
          <p className="mt-6 text-sm text-steel-light">
            {business.address.street}
            <br />
            {business.address.suburb} {business.address.state} {business.address.postcode}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-steel-light">
            <li>
              <a href={business.phones.primaryHref} className="hover:text-orange">
                {business.phones.primary}
              </a>
            </li>
            <li>
              <a href={business.phones.secondaryHref} className="hover:text-orange">
                {business.phones.secondary}
              </a>
            </li>
            <li>
              <a href={`mailto:${business.email}`} className="hover:text-orange">
                {business.email}
              </a>
            </li>
          </ul>
          <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-white">Hours</h3>
          <ul className="mt-3 space-y-1 text-sm text-steel-light">
            {business.hours.map((h) => (
              <li key={h.days}>
                {h.days}: {h.time}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Navigate</h3>
          <ul className="mt-4 space-y-2 text-sm text-steel-light">
            <li><Link href="/services" className="hover:text-orange">Services</Link></li>
            <li><Link href="/performance-exhaust" className="hover:text-orange">Performance Exhaust</Link></li>
            <li><Link href="/mufflers" className="hover:text-orange">Mufflers</Link></li>
            <li><Link href="/4wd-exhaust" className="hover:text-orange">4WD Exhaust</Link></li>
            <li><Link href="/brands" className="hover:text-orange">Brands</Link></li>
            <li><Link href="/gallery" className="hover:text-orange">Gallery</Link></li>
            <li><Link href="/about" className="hover:text-orange">About</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Follow</h3>
          <ul className="mt-4 space-y-2 text-sm text-steel-light">
            <li><a href={business.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-orange">Facebook</a></li>
            <li><a href={business.social.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-orange">YouTube</a></li>
            <li><a href={business.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-orange">Instagram</a></li>
          </ul>
          <Link
            href="/contact"
            className="mt-6 inline-block border border-orange px-5 py-2.5 text-sm font-semibold text-orange hover:bg-orange hover:text-white"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>

      <div className="border-t border-steel-dark/60 py-6">
        <div className="container-page flex flex-col gap-2 text-xs text-steel sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {business.legalName}. ABN on file with owner - add to footer once supplied.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-orange">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-orange">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
