import Image from "next/image"
import { Shield, Wrench, Package, Star } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import Link from "next/link"

const WHATSAPP_NUMBER = "5521981121015"
const WHATSAPP_MSG = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para uma moto elétrica da Moto X.")

const badges = [
  { icon: Shield, label: "Garantia" },
  { icon: Wrench, label: "Manutenção" },
  { icon: Package, label: "Acessórios" },
  { icon: Star, label: "Atend. Especializado" },
]

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-background pt-16"
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            oklch(0.87 0.19 96) 0,
            oklch(0.87 0.19 96) 1px,
            transparent 0,
            transparent 50%
          )`,
          backgroundSize: "30px 30px",
        }}
        aria-hidden="true"
      />
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-16 md:py-24">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
              <span className="text-primary text-xs font-bold uppercase tracking-widest">Rio de Janeiro — RJ</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight text-balance mb-6">
              Mobilidade{" "}
              <span className="text-primary">elétrica</span>{" "}
              sem burocracia
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg text-pretty">
              Motos e scooters elétricas com garantia, manutenção, acessórios e atendimento especializado no Rio de Janeiro.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold uppercase tracking-wider text-sm px-7 py-4 rounded-sm hover:bg-yellow-400 active:scale-95 transition-all duration-200 shadow-lg shadow-primary/25"
              >
                Solicitar orçamento
              </Link>
              <Link
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-border text-foreground font-bold uppercase tracking-wider text-sm px-7 py-4 rounded-sm hover:border-primary hover:text-primary active:scale-95 transition-all duration-200"
              >
              <FaWhatsapp className="w-5 h-5" fill="currentColor" aria-hidden="true"/>
                Falar no WhatsApp
              </Link>
            </div>
            <div className="flex flex-wrap gap-3">
              {badges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-card border border-border rounded-sm px-3 py-2"
                >
                  <Icon className="w-4 h-4 text-primary" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-4/3 lg:aspect-square rounded-sm overflow-hidden">
              <div
                className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-40 rounded-full blur-3xl opacity-20"
                style={{ background: "oklch(0.87 0.19 96)" }}
                aria-hidden="true"
              />
              <Image
                src="/images/hero-scooter.jpg"
                alt="Scooter elétrica Moto X"
                fill
                className="object-cover"
                priority
                loading="eager"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to right, oklch(0.08 0 0) 0%, transparent 30%, transparent 70%, oklch(0.08 0 0) 100%)",
                }}
                aria-hidden="true"
              />
            </div>
            <div className="absolute bottom-6 left-6 bg-card/90 backdrop-blur-sm border border-border rounded-sm px-4 py-3">
              <p className="text-2xl font-black text-primary">100%</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Elétrico</p>
            </div>
            <div className="absolute top-6 right-6 bg-primary rounded-sm px-4 py-3">
              <p className="text-2xl font-black text-primary-foreground">0</p>
              <p className="text-xs font-bold uppercase tracking-wider text-primary-foreground/80">Emissões</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to top, oklch(0.08 0 0), transparent)" }}
        aria-hidden="true"
      />
    </section>
  )
}
