import type { Metadata } from 'next'
import { Barlow_Condensed, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MobileCTABar from '@/components/MobileCTABar'
import { localBusinessSchema } from '@/lib/schema'

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.budgetexhaust.net.au'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Budget Exhaust | Mufflers & Exhaust Specialists, Bankstown Sydney',
    template: '%s | Budget Exhaust',
  },
  description:
    'Family-run exhaust and muffler specialists in Bankstown, Sydney since 1980. Standard, performance, 4WD and custom exhaust work, plus free local pick-up and delivery.',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'Budget Exhaust',
    url: SITE_URL,
  },
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${barlowCondensed.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
        <Navbar />
        <main className="pb-16 lg:pb-0">{children}</main>
        <Footer />
        <MobileCTABar />
      </body>
    </html>
  )
}
