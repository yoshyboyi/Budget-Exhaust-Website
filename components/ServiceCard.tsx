import Link from 'next/link'

export default function ServiceCard({
  title,
  summary,
  href = '/services',
}: {
  title: string
  summary: string
  href?: string
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col justify-between border border-steel-dark bg-navy p-6 transition-colors hover:border-orange"
    >
      <div>
        <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-steel-light">{summary}</p>
      </div>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange">
        Learn more
        <span className="transition-transform group-hover:translate-x-1">›</span>
      </span>
    </Link>
  )
}
