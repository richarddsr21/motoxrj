import Image from "next/image"
import { Zap, Gauge, Battery, MapPin } from "lucide-react"
import type { Product } from "@/lib/products"
import { getWhatsappUrl } from "@/lib/products"
import Link from "next/link"

const BADGE_STYLES: Record<string, string> = {
  "Mais vendido": "bg-brand-yellow text-brand-black",
  "Destaque": "bg-foreground text-brand-black",
  "Novo": "bg-green-500 text-foreground",
}

interface Props {
  product: Product
}

export function ProductCard({ product }: Props) {
  const waUrl = getWhatsappUrl(product.name)

  return (
    <article className="group bg-brand-surface border border-brand-border rounded-xl overflow-hidden flex flex-col hover:border-brand-yellow/50 transition-colors duration-300">
      <div className="relative aspect-4/3 bg-brand-surface-2 overflow-hidden">
        <Image
          src={product.image}
          alt={`Foto da ${product.name}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="eager"
        />
        {product.badge && (
          <div className={`absolute top-3 left-3 px-2.5 py-1 rounded text-xs font-black uppercase tracking-wider ${BADGE_STYLES[product.badge]}`}>
            {product.badge}
          </div>
        )}
        <div className="absolute top-3 right-3 px-2.5 py-1 bg-brand-black/80 backdrop-blur-sm rounded text-xs font-semibold text-muted-foreground uppercase tracking-wide">
          {product.category}
        </div>
      </div>
      <div className="flex flex-col flex-1 p-5 gap-4">
        <div>
          <h3 className="text-foreground font-black text-lg uppercase leading-tight">{product.name}</h3>
          <p className="mt-1.5 text-muted-foreground text-sm leading-relaxed line-clamp-2">{product.description}</p>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-brand-surface-2 rounded-lg p-2.5 text-center">
            <Battery className="w-4 h-4 text-brand-yellow mx-auto mb-1" />
            <p className="text-foreground font-bold text-sm">{product.autonomy} km</p>
            <p className="text-muted-foreground text-xs">Autonomia</p>
          </div>
          <div className="bg-brand-surface-2 rounded-lg p-2.5 text-center">
            <Gauge className="w-4 h-4 text-brand-yellow mx-auto mb-1" />
            <p className="text-foreground font-bold text-sm">{product.maxSpeed} km/h</p>
            <p className="text-muted-foreground text-xs">Vel. máx.</p>
          </div>
          <div className="bg-brand-surface-2 rounded-lg p-2.5 text-center">
            <Zap className="w-4 h-4 text-brand-yellow mx-auto mb-1" />
            <p className="text-foreground font-bold text-sm">{product.power}</p>
            <p className="text-muted-foreground text-xs">Potência</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <MapPin className="w-3.5 h-3.5" />
            <span>{product.use}</span>
          </div>
          <span className="text-brand-yellow font-bold text-sm">{product.price}</span>
        </div>
        <div className="flex gap-2 mt-auto pt-1">
          <Link
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-brand-yellow hover:bg-brand-yellow-hover text-brand-black font-bold text-sm py-2.5 rounded text-center transition-colors uppercase tracking-wide"
          >
            Pedir orçamento
          </Link>
          <Link
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 border border-brand-border hover:border-brand-yellow text-muted-foreground hover:text-brand-yellow font-semibold text-sm py-2.5 rounded text-center lg:flex lg:items-center transition-colors uppercase tracking-wide whitespace-nowrap"
          >
            Ver detalhes
          </Link>
        </div>
      </div>
    </article>
  )
}
