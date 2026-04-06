import Image from "next/image"
import { FaInstagram } from "react-icons/fa"

const fotos = [
  { src: "/images/hero-scooter.jpg", alt: "Scooter elétrica na cidade", label: "Showroom" },
  { src: "/images/gallery-store.jpg", alt: "Loja Moto X", label: "Nossa loja" },
  { src: "/images/model-sport.jpg", alt: "Moto elétrica esportiva", label: "Modelos" },
  { src: "/images/gallery-maintenance.jpg", alt: "Manutenção especializada", label: "Manutenção" },
  { src: "/images/gallery-customer.jpg", alt: "Cliente satisfeito com a Moto X", label: "Clientes" },
  { src: "/images/gallery-accessories.jpg", alt: "Acessórios para motos elétricas", label: "Acessórios" },
]

export function Galeria() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-primary text-xs font-bold uppercase tracking-widest mb-3">
            Conheça nossa estrutura
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground text-balance">
            Galeria
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {fotos.map((foto, i) => (
            <div
              key={foto.src}
              className={`group relative overflow-hidden rounded-sm bg-card ${
                i === 0 ? "col-span-2 md:col-span-2 row-span-2" : ""
              }`}
              style={{ aspectRatio: i === 0 ? "16/9" : "1/1" }}
            >
              <Image
                src={foto.src}
                alt={foto.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)" }}
              >
                <span className="text-xs font-bold uppercase tracking-widest text-primary">{foto.label}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href="https://instagram.com/motox_rj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border text-muted-foreground font-semibold uppercase tracking-wider text-sm px-6 py-3 rounded-sm hover:border-primary hover:text-primary transition-all duration-200"
          >
            <FaInstagram className="w-4 h-4"
            fill="currentColor"
            aria-hidden="true"
            />
            Ver mais no Instagram @motox_rj
          </a>
        </div>
      </div>
    </section>
  )
}
