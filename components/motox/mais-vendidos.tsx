import Image from "next/image"
import { Zap, Gauge, Tag } from "lucide-react"
import Link from "next/link"

const WHATSAPP_NUMBER = "5521981121015"

const modelos = [
  {
    img: "/images/x11.jpg",
    nome: "X11",
    descricao: "Scooter elétrica moderna com ótimo desempenho para mobilidade urbana.",
    autonomia: "50 km",
    velocidade: "32 km/h",
    uso: "Urbano / Dia a dia",
    destaque: true,
  },
  {
    img: "/images/x12.jpg",
    nome: "X12",
    descricao: "Scooter elétrica urbana potente e econômica, ideal para uso diário.",
    autonomia: "50 km",
    velocidade: "32 km/h",
    uso: "Urbano / Dia a Dia",
    destaque: false,
  },
  {
    img: "/images/mx13.png",
    nome: "MX13",
    descricao: "Scooter elétrica moderna com ótimo desempenho para mobilidade urbana.",
    autonomia: "50",
    velocidade: "32 km/h",
    uso: "Urbano / Lazer",
    destaque: false,
  },
  {
    img: "/images/jet.jpg",
    nome: "JET",
    descricao: "Scooter elétrica robusta e potente para uso urbano intenso.",
    autonomia: "45",
    velocidade: "32 km/h",
    uso: "Urbano / Lazer",
    destaque: false,
  },
]

export function MaisVendidos() {
  return (
    <section id="mais-vendidos" className="py-20 md:py-28 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-primary text-xs font-bold uppercase tracking-widest mb-3">
            Conheça nossa frota
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground text-balance">
            Mais Vendidos
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-pretty">
            Escolha o modelo ideal para o seu estilo de vida. Todos com garantia, suporte e atendimento especializado.
          </p>
        </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {modelos.map((m) => (
              <div
                key={m.nome}
                className={`group relative bg-background border rounded-sm overflow-hidden flex flex-col hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 ${
                  m.destaque ? "border-primary" : "border-border"
                }`}
              >
                {m.destaque && (
                  <div className="absolute top-3 right-3 z-10 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm">
                    Destaque
                  </div>
                )}
                <div className="relative aspect-4/3 overflow-hidden bg-card">
                  <Image
                    src={m.img}
                    alt={m.nome}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    loading="eager"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, oklch(0.08 0 0) 0%, transparent 60%)" }}
                    aria-hidden="true"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-base font-black uppercase tracking-wide text-foreground mb-2">{m.nome}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{m.descricao}</p>
                  <div className="mt-auto space-y-2 mb-5">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Zap className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span className="font-semibold text-foreground">{m.autonomia}</span>
                      <span>de autonomia</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Gauge className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span className="font-semibold text-foreground">{m.velocidade}</span>
                      <span>velocidade máx.</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Tag className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span className="font-semibold text-foreground">{m.uso}</span>
                    </div>
                  </div>
                  <Link
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! Quero saber mais sobre o modelo ${m.nome}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full text-center text-xs font-bold uppercase tracking-wider py-3 rounded-sm transition-all duration-200 active:scale-95 ${
                      m.destaque
                        ? "bg-primary text-primary-foreground hover:bg-yellow-400"
                        : "border border-border text-foreground hover:border-primary hover:text-primary"
                    }`}
                  >
                    Pedir orçamento
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pt-8 text-center">
          <Link href="/modelos" className="inline-flex items-center rounded-md border border-primary px-6 py-3 text-sm font-semibold text-white tracking-wider transition-all duration-200 hover:bg-primary hover:text-black">
            TODOS OS MODELOS
          </Link>
        </div>
    </section>
  )
}
