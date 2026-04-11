"use client"

import { Search, SlidersHorizontal, X } from "lucide-react"
import type { ProductCategory, ProductUse } from "@/lib/products.ts"

const CATEGORIES: ProductCategory[] = ["Scooter elétrica", "Triciclo elétrico"]
const USES: ProductUse[] = ["Urbano", "Trabalho", "Dia a dia"]
const AUTONOMY_OPTIONS = [
  { label: "Até 35 km", value: "35" },
  { label: "Até 45 km", value: "45" },
]
const SPEED_OPTIONS = [
  { label: "Até 32 km/h", value: "32" },
]

export interface FilterState {
  search: string
  category: ProductCategory | ""
  use: ProductUse | ""
  autonomy: string
  speed: string
}

interface Props {
  filters: FilterState
  onChange: (filters: FilterState) => void
  total: number
}

export function CatalogFilters({ filters, onChange, total }: Props) {
  const hasActive =
    filters.search !== "" ||
    filters.category !== "" ||
    filters.use !== "" ||
    filters.autonomy !== "" ||
    filters.speed !== ""

  function clear() {
    onChange({ search: "", category: "", use: "", autonomy: "", speed: "" })
  }
  return (
    <div className="bg-brand-surface border border-brand-border rounded-xl p-5 space-y-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-foreground font-bold text-sm uppercase tracking-wider">
          <SlidersHorizontal className="w-4 h-4 text-brand-yellow" />
          Filtros
        </div>
        {hasActive && (
          <button
            onClick={clear}
            className="flex items-center gap-1 text-xs text-brand-yellow hover:text-brand-yellow-hover font-semibold transition-colors"
          >
            <X className="w-3.5 h-3.5" />
            Limpar filtros
          </button>
        )}
      </div>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Buscar modelo..."
          value={filters.search}
          onChange={(e) => onChange({ ...filters, search: e.target.value })}
          className="w-full bg-brand-surface-2 border border-brand-border rounded-lg pl-9 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand-yellow transition-colors"
        />
      </div>
      <hr className="border-brand-border" />
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Categoria</p>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => onChange({ ...filters, category: filters.category === cat ? "" : cat })}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors border ${
                filters.category === cat
                  ? "bg-brand-yellow text-brand-black border-brand-yellow"
                  : "bg-transparent text-muted-foreground border-brand-border hover:border-brand-yellow hover:text-brand-yellow"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Tipo de uso</p>
        <div className="flex flex-wrap gap-2">
          {USES.map((use) => (
            <button
              key={use}
              onClick={() => onChange({ ...filters, use: filters.use === use ? "" : use })}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors border ${
                filters.use === use
                  ? "bg-brand-yellow text-brand-black border-brand-yellow"
                  : "bg-transparent text-muted-foreground border-brand-border hover:border-brand-yellow hover:text-brand-yellow"
              }`}
            >
              {use}
            </button>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Autonomia</p>
        <div className="flex flex-col gap-1.5">
          {AUTONOMY_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => onChange({ ...filters, autonomy: filters.autonomy === opt.value ? "" : opt.value })}
              className={`flex items-center gap-2 text-sm transition-colors text-left ${
                filters.autonomy === opt.value
                  ? "text-brand-yellow font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span
                className={`w-3 h-3 rounded-full border shrink-0 flex items-center justify-center ${
                  filters.autonomy === opt.value
                    ? "border-brand-yellow bg-brand-yellow"
                    : "border-muted-foreground"
                }`}
              >
                {filters.autonomy === opt.value && (
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-black" />
                )}
              </span>
              {opt.label}
            </button>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Velocidade máx.</p>
        <div className="flex flex-col gap-1.5">
          {SPEED_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => onChange({ ...filters, speed: filters.speed === opt.value ? "" : opt.value })}
              className={`flex items-center gap-2 text-sm transition-colors text-left ${
                filters.speed === opt.value
                  ? "text-brand-yellow font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span
                className={`w-3 h-3 rounded-full border shrink-0 flex items-center justify-center ${
                  filters.speed === opt.value
                    ? "border-brand-yellow bg-brand-yellow"
                    : "border-muted-foreground"
                }`}
              >
                {filters.speed === opt.value && (
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-black" />
                )}
              </span>
              {opt.label}
            </button>
          ))}
        </div>
      </div>
      <div className="pt-1 border-t border-brand-border text-xs text-muted-foreground">
        <span className="text-brand-yellow font-bold">{total}</span> modelo{total !== 1 ? "s" : ""} encontrado{total !== 1 ? "s" : ""}
      </div>
    </div>
  )
}
