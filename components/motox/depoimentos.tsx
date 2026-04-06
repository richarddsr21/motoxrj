import { Star } from "lucide-react"

const depoimentos = [
  {
    nome: "Rafael M.",
    local: "Barra da Tijuca, RJ",
    texto:
      "Fui até a Moto X sem saber muito sobre motos elétricas e saí de lá com a minha scooter nova e cheio de informações. O atendimento foi impecável, sem pressão nenhuma. Recomendo muito!",
    nota: 5,
    modelo: "MotoX Urban 500",
  },
  {
    nome: "Camila S.",
    local: "Tijuca, RJ",
    texto:
      "Comprei minha moto elétrica há 6 meses e até hoje quando preciso de qualquer coisa eles me atendem super rápido pelo WhatsApp. Qualidade do produto e do suporte são excelentes.",
    nota: 5,
    modelo: "MotoX Classic",
  },
  {
    nome: "Diego A.",
    local: "Campo Grande, RJ",
    texto:
      "Uso para fazer entregas e foi a melhor decisão que tomei. Economizo muito comparado à gasolina. A equipe da Moto X me ajudou a escolher o modelo certo para o meu trabalho.",
    nota: 5,
    modelo: "MotoX Cargo Work",
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} de 5 estrelas`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 text-primary" fill="currentColor" />
      ))}
    </div>
  )
}

export function Depoimentos() {
  return (
    <section className="py-20 md:py-28 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-primary text-xs font-bold uppercase tracking-widest mb-3">
            O que dizem nossos clientes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground text-balance">
            Depoimentos
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {depoimentos.map((d) => (
            <div
              key={d.nome}
              className="bg-background border border-border rounded-sm p-7 flex flex-col gap-5 hover:border-primary/40 transition-colors duration-300"
            >
              <Stars count={d.nota} />
              <blockquote className="text-muted-foreground leading-relaxed text-sm flex-1">
                &ldquo;{d.texto}&rdquo;
              </blockquote>
              <div className="pt-4 border-t border-border flex items-center justify-between">
                <div>
                  <p className="font-bold text-foreground text-sm">{d.nome}</p>
                  <p className="text-xs text-muted-foreground">{d.local}</p>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary border border-primary/30 bg-primary/10 px-2 py-1 rounded-sm">
                  {d.modelo}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
