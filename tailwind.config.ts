import type { Config } from 'tailwindcss'

// Design tokens for Budget Exhaust
// See /README.md#design-system for the rationale behind each choice.
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#0E0F12', // primary dark background (hero, gallery, footer)
          light: '#15171B',
        },
        navy: {
          DEFAULT: '#171C29', // dark panel / card background
          light: '#1E2436',
        },
        paper: {
          DEFAULT: '#F8FAFC', // light section background (trust strip, services)
          border: '#E2E8F0', // hairline borders on light sections
        },
        ink: {
          DEFAULT: '#0F172A', // headings on light sections
          muted: '#475569', // body copy on light sections
        },
        steel: {
          DEFAULT: '#9CA3AF', // muted text on dark (bumped for contrast)
          dark: '#2A2E37', // hairline borders on dark
          light: '#D7D9DD',
        },
        orange: {
          DEFAULT: '#FF5A2E', // brand accent, derived from existing logo
          dim: '#CC4823',
          50: '#FFF1EC',
        },
        offwhite: '#F5F5F3',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
