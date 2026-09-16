import { business } from '@/lib/business'

export default function Timeline() {
  return (
    <ol className="relative border-l border-steel-dark pl-8">
      {business.history.map((item) => (
        <li key={item.year} className="mb-10 last:mb-0">
          <span className="absolute -left-[9px] mt-1.5 h-4 w-4 border-2 border-orange bg-charcoal" />
          <p className="font-display text-2xl font-semibold text-orange">{item.year}</p>
          <h3 className="mt-1 text-lg font-semibold text-white">{item.title}</h3>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-steel-light">{item.body}</p>
        </li>
      ))}
    </ol>
  )
}
