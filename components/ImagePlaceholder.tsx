import fs from 'fs'
import path from 'path'
import Image from 'next/image'

/**
 * Drop-in image slot. If a real file exists at /public<src>, it renders
 * that photo automatically. If not (or no src given), it renders a clearly
 * labelled placeholder box instead. This means adding real photos never
 * requires touching any code - just place a correctly-named file in the
 * matching /public/images/... folder (see README > "Adding real photos").
 */
export default function ImagePlaceholder({
  label,
  className = '',
  aspect = 'aspect-[4/3]',
  src,
}: {
  label: string
  className?: string
  aspect?: string
  /** Path relative to /public, e.g. "/images/hero/hero.jpg" */
  src?: string
}) {
  const fileExists = src
    ? fs.existsSync(path.join(process.cwd(), 'public', src))
    : false

  if (src && fileExists) {
    return (
      <div className={`${aspect} ${className} relative overflow-hidden rounded-xl`}>
        <Image src={src} alt={label} fill className="object-cover" />
      </div>
    )
  }

  return (
    <div
      className={`${aspect} ${className} flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-steel-dark bg-navy-light text-center`}
      role="img"
      aria-label={`Placeholder: ${label}`}
    >
      <span className="text-[10px] font-semibold uppercase tracking-wider text-orange">
        Image needed
      </span>
      <span className="max-w-[80%] text-xs text-steel-light">{label}</span>
      {src && (
        <span className="max-w-[80%] font-mono text-[10px] text-steel">
          Save file as: public{src}
        </span>
      )}
    </div>
  )
}
