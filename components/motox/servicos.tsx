import { Bike, Zap, Wrench, Shield, Package, HeadphonesIcon } from "lucide-react"

const servicos = [
  {
    icon: Bike,
    title: "Venda de motos elétricas",
    desc: "Motocicletas elétricas para todos os perfis e necessidades, com assessoria especializada na escolha.",
  },
  {
    icon: Zap,
    title: "Venda de scooters elétricas",
    desc: "Scooters modernas e práticas para o dia a dia urbano, com ótima autonomia e design premium.",
  },
  {
    icon: Wrench,
    title: "Manutenção",
    desc: "Revisão, diagnóstico e reparo com equipe técnica especializada em veículos elétricos.",
  },
  {
    icon: Shield,
    title: "Garantia",
    desc: "Garantia de fábrica em todos os modelos, com cobertura completa e suporte técnico.",
  },
  {
    icon: Package,
    title: "Acessórios",
    desc: "Capacetes homologados, bolsas, suportes, carregadores e todos os acessórios que você precisa.",
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte ao cliente",
    desc: "Atendimento personalizado via WhatsApp, presencial na loja e suporte pós-venda completo.",
  },
]

export function Servicos() {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-primary text-xs font-bold uppercase tracking-widest mb-3">
            O que oferecemos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground text-balance">
            Nossos serviços
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-pretty">
            Tudo que você precisa para uma experiência completa com mobilidade elétrica, num só lugar.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicos.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative bg-card border border-border rounded-sm p-7 overflow-hidden hover:border-primary/60 transition-all duration-300"
            >
              <div
                className="absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-primary transition-all duration-300"
                aria-hidden="true"
              />
              <div className="flex items-center justify-center w-14 h-14 bg-primary/10 border border-primary/20 rounded-sm mb-5 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-base font-black text-foreground uppercase tracking-wide mb-3">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
