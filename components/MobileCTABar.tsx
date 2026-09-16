import { business } from '@/lib/business'

export default function MobileCTABar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-steel-dark bg-navy lg:hidden">
      <a
        href={business.phones.primaryHref}
        className="flex flex-col items-center justify-center gap-0.5 border-r border-steel-dark bg-orange py-3 text-xs font-semibold text-white"
      >
        <span>CALL SHOP</span>
        <span className="text-[11px] font-normal text-white/80">{business.phones.primary}</span>
      </a>
      <a
        href={business.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center gap-0.5 py-3 text-xs font-semibold text-white"
      >
        <span className="text-orange">DIRECTIONS</span>
        <span className="text-[11px] font-normal text-steel-light">Bankstown</span>
      </a>
    </div>
  )
}
