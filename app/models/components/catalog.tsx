"use client"

import { useState, useMemo } from "react"
import { products } from "@/lib/products"
import { CatalogFilters, type FilterState } from "./catalog-filters"
import { ProductCard } from "./product-card"
import { LayoutGrid, List, Menu } from "lucide-react"

const initialFilters: FilterState = {
  search: "",
  category: "",
  use: "",
  autonomy: "",
  speed: "",
}

export function Catalog() {
  const [filters, setFilters] = useState<FilterState>(initialFilters)
  const [view, setView] = useState<"grid" | "list">("grid")
  const [filtersOpen, setFiltersOpen] = useState(false)

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (filters.search && !p.name.toLowerCase().includes(filters.search.toLowerCase()) &&
          !p.description.toLowerCase().includes(filters.search.toLowerCase())) return false
      if (filters.category && p.category !== filters.category) return false
      if (filters.use && p.use !== filters.use) return false
      if (filters.autonomy) {
        const max = parseInt(filters.autonomy)
        if (max === 150) {
          if (p.autonomy <= 120) return false
        } else {
          if (p.autonomy > max) return false
        }
      }
      if (filters.speed) {
        const max = parseInt(filters.speed)
        if (max === 110) {
          if (p.maxSpeed <= 80) return false
        } else {
          if (p.maxSpeed > max) return false
        }
      }
      return true
    })
  }, [filters])

  return (
    <section id="catalogo" className="py-16 md:py-20 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-brand-yellow text-xs font-bold uppercase tracking-widest my-2">Catálogo completo</p>
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-foreground leading-tight text-balance">
            Todos os Modelos
          </h2>
        </div>
        <div className="flex items-center justify-between mb-4 lg:hidden">
          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="flex items-center gap-2 text-sm font-semibold text-foreground border border-brand-border px-4 py-2.5 rounded-lg hover:border-brand-yellow hover:text-brand-yellow transition-colors"
          >
            <Menu className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true"/>
            Filtros
          </button>
          <div className="flex items-center gap-1 bg-brand-surface border border-brand-border rounded-lg p-1">
            <button
              onClick={() => setView("grid")}
              className={`p-1.5 rounded transition-colors ${view === "grid" ? "bg-brand-yellow text-brand-black" : "text-muted-foreground hover:text-foreground"}`}
              aria-label="Grade"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setView("list")}
              className={`p-1.5 rounded transition-colors ${view === "list" ? "bg-brand-yellow text-brand-black" : "text-muted-foreground hover:text-foreground"}`}
              aria-label="Lista"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          <aside className={`${filtersOpen ? "block" : "hidden"} lg:block w-full lg:w-72 shrink-0`}>
            <div className="lg:sticky lg:top-20">
              <CatalogFilters filters={filters} onChange={setFilters} total={filtered.length} />
            </div>
          </aside>
          <div className="flex-1 min-w-0">
            <div className="hidden lg:flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground">
                <span className="text-brand-yellow font-bold">{filtered.length}</span> modelo{filtered.length !== 1 ? "s" : ""} encontrado{filtered.length !== 1 ? "s" : ""}
              </p>
              <div className="flex items-center gap-1 bg-brand-surface border border-brand-border rounded-lg p-1">
                <button
                  onClick={() => setView("grid")}
                  className={`p-1.5 rounded transition-colors ${view === "grid" ? "bg-brand-yellow text-brand-black" : "text-muted-foreground hover:text-foreground"}`}
                  aria-label="Grade"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setView("list")}
                  className={`p-1.5 rounded transition-colors ${view === "list" ? "bg-brand-yellow text-brand-black" : "text-muted-foreground hover:text-foreground"}`}
                  aria-label="Lista"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
            {filtered.length === 0 ? (
              <div className="text-center py-20 text-muted-foreground">
                <p className="text-lg font-semibold text-foreground">Nenhum modelo encontrado</p>
                <p className="mt-1 text-sm">Tente remover alguns filtros para ver mais resultados.</p>
              </div>
            ) : (
              <div
                className={
                  view === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5"
                    : "flex flex-col gap-4"
                }
              >
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
