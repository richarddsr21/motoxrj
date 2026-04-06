import Image from "next/image"
import { Zap, Gauge, Tag } from "lucide-react"

const WHATSAPP_NUMBER = "5521981121015"

const modelos = [
  {
    img: "/images/model-urban.jpg",
    nome: "MotoX Urban 500",
    descricao: "A scooter elétrica perfeita para o dia a dia na cidade. Leve, ágil e econômica.",
    autonomia: "80 km",
    velocidade: "60 km/h",
    uso: "Urbano / Dia a dia",
    destaque: false,
  },
  {
    img: "/images/model-cargo.jpg",
    nome: "MotoX Cargo Work",
    descricao: "Projetada para entregas e trabalho urbano com máxima estabilidade e carga.",
    autonomia: "100 km",
    velocidade: "70 km/h",
    uso: "Trabalho / Entregas",
    destaque: true,
  },
  {
    img: "/images/model-classic.jpg",
    nome: "MotoX Classic",
    descricao: "Design retrô-moderno com tecnologia elétrica de ponta para quem valoriza estilo.",
    autonomia: "90 km",
    velocidade: "65 km/h",
    uso: "Urbano / Lazer",
    destaque: false,
  },
]

export function Modelos() {
  return (
    <section id="modelos" className="py-20 md:py-28 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-primary text-xs font-bold uppercase tracking-widest mb-3">
            Conheça nossa frota
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground text-balance">
            Modelos em destaque
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
                <a
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
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
