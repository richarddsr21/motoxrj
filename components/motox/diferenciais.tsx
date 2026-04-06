import { Zap, Shield, Wrench, Package, HeadphonesIcon, MapPin, Bike } from "lucide-react"

const diferenciais = [
  {
    icon: Zap,
    title: "Sem burocracia",
    desc: "Compra direta, sem papelada desnecessária. Você escolhe, a gente cuida do resto.",
  },
  {
    icon: Bike,
    title: "Bikes e scooters elétricas",
    desc: "Grande variedade de modelos para todos os perfis: urbano, trabalho e lazer.",
  },
  {
    icon: Shield,
    title: "Garantia incluída",
    desc: "Todos os modelos com garantia de fábrica e suporte completo pós-venda.",
  },
  {
    icon: Wrench,
    title: "Manutenção especializada",
    desc: "Equipe técnica treinada para manter sua moto sempre em perfeito estado.",
  },
  {
    icon: Package,
    title: "Acessórios",
    desc: "Capacetes, bolsas, suportes e tudo que você precisa para a sua mobilidade.",
  },
  {
    icon: HeadphonesIcon,
    title: "Atendimento de confiança",
    desc: "Equipe atenciosa e especializada pronta para te ajudar a escolher o modelo ideal.",
  },
  {
    icon: MapPin,
    title: "Loja física no Rio",
    desc: "Venha nos visitar em nossa loja no Rio de Janeiro e conheça os modelos pessoalmente.",
  },
]

export function Diferenciais() {
  return (
    <section id="diferenciais" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-primary text-xs font-bold uppercase tracking-widest mb-3">
            Por que a Moto X?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground text-balance">
            Nossos diferenciais
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {diferenciais.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`group bg-card border border-border rounded-sm p-6 hover:border-primary/60 hover:bg-card/80 transition-all duration-300 cursor-default ${
                i === 0 ? "lg:col-span-1" : ""
              }`}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 border border-primary/20 rounded-sm mb-4 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-base font-bold text-foreground uppercase tracking-wide mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
