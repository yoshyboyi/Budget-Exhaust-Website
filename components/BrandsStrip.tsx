import { business } from '@/lib/business'

export default function BrandsStrip({ limit }: { limit?: number }) {
  const brands = limit ? business.brands.slice(0, limit) : business.brands

  return (
    <div className="flex flex-wrap gap-3">
      {brands.map((brand) => (
        <span
          key={brand.name}
          title={brand.note}
          className="border border-steel-dark px-4 py-2 text-sm font-medium text-steel-light"
        >
          {brand.name}
        </span>
      ))}
    </div>
  )
}
