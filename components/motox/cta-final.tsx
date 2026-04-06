import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "5521981121015"
const WHATSAPP_MSG = encodeURIComponent("Olá! Quero encontrar o modelo ideal de moto elétrica na Moto X.")

export function CTAFinal() {
  return (
    <section className="py-24 md:py-32 bg-card border-t border-border relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            oklch(0.87 0.19 96) 0,
            oklch(0.87 0.19 96) 1px,
            transparent 0,
            transparent 50%
          )`,
          backgroundSize: "20px 20px",
        }}
        aria-hidden="true"
      />
      <div className="absolute top-0 left-0 right-0 h-1 bg-primary" aria-hidden="true" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-primary text-xs font-bold uppercase tracking-widest mb-5">
          Pronto para começar?
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight text-balance mb-6">
          Fale com a Moto X e encontre o modelo ideal para você
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10 text-pretty">
          Atendimento sem burocracia, direto no WhatsApp. Nossa equipe está pronta para te ajudar agora.
        </p>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-black uppercase tracking-wider text-base md:text-lg px-10 py-5 rounded-sm hover:bg-yellow-400 active:scale-95 transition-all duration-200 shadow-2xl shadow-primary/30"
        >
          <FaWhatsapp className="w-7 h-7"
          fill="currentColor"
          aria-hidden="true"
          />
          Chamar no WhatsApp
        </a>
      </div>
    </section>
  )
}
