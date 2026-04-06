import { MapPin, Phone, Clock, Navigation } from "lucide-react"
import Link from "next/link"
import { FaInstagram, FaWhatsapp } from "react-icons/fa"

const WHATSAPP_NUMBER = "5521981121015"
const WHATSAPP_MSG = encodeURIComponent("Olá! Gostaria de mais informações sobre a Moto X.")
const ENDERECO = "Estrada do Magarça, 2795 — Rio de Janeiro, RJ"
const TELEFONE = "(21) 9 8112-1015"
const HORARIOS = [
  { dia: "Segunda a Sexta", hora: "08h às 18h" },
  { dia: "Sábado", hora: "09h às 14h" },
  { dia: "Domingo", hora: "Fechado" },
]

export function LocalizacaoContato() {
  const mapSrc = `https://maps.google.com/maps?q=Estrada+do+Magarça+2795+Rio+de+Janeiro+RJ&output=embed`
  return (
    <>
      <section id="localizacao" className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-primary text-xs font-bold uppercase tracking-widest mb-3">
              Onde estamos
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground text-balance">
              Localização
            </h2>
          </div>
          <div className="grid lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 rounded-sm overflow-hidden border border-border aspect-video lg:aspect-auto lg:min-h-80">
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Moto X no Rio de Janeiro"
              />
            </div>
            <div className="lg:col-span-2 bg-card border border-border rounded-sm p-7 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 bg-primary/10 border border-primary/20 rounded-sm shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Endereço</p>
                  <p className="text-foreground font-semibold leading-relaxed">{ENDERECO}</p>
                </div>
              </div>
              <div className="h-px bg-border" aria-hidden="true" />
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 bg-primary/10 border border-primary/20 rounded-sm shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Horários</p>
                  <div className="space-y-1">
                    {HORARIOS.map(({ dia, hora }) => (
                      <div key={dia} className="flex items-center justify-between gap-4">
                        <span className="text-sm text-muted-foreground">{dia}</span>
                        <span className="text-sm font-bold text-foreground">{hora}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="h-px bg-border" aria-hidden="true" />
              <Link
                href={`https://maps.google.com/maps?q=Estrada+do+Magarça+2795+Rio+de+Janeiro+RJ`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold uppercase tracking-wider text-sm py-3 rounded-sm hover:bg-yellow-400 transition-colors duration-200 active:scale-95"
              >
                <Navigation className="w-4 h-4" />
                Como chegar
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="contato" className="py-20 md:py-28 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-primary text-xs font-bold uppercase tracking-widest mb-3">
              Fale conosco
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground text-balance">
              Contato
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Prefere WhatsApp, Instagram ou telefone? Estamos prontos para te atender.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Link
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-background border border-border rounded-sm p-6 flex flex-col items-center text-center gap-3 hover:border-primary/60 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-primary/10 border border-primary/20 rounded-sm group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                <FaWhatsapp className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" aria-hidden="true"/>
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">WhatsApp</p>
              <p className="text-sm font-semibold text-foreground">{TELEFONE}</p>
            </Link>
            <Link
              href="https://instagram.com/motox_rj"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-background border border-border rounded-sm p-6 flex flex-col items-center text-center gap-3 hover:border-primary/60 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-primary/10 border border-primary/20 rounded-sm group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                <FaInstagram className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Instagram</p>
              <p className="text-sm font-semibold text-foreground">@motox_rj</p>
            </Link>
            <Link
              href={`tel:+55${WHATSAPP_NUMBER}`}
              className="group bg-background border border-border rounded-sm p-6 flex flex-col items-center text-center gap-3 hover:border-primary/60 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-primary/10 border border-primary/20 rounded-sm group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                <Phone className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Telefone</p>
              <p className="text-sm font-semibold text-foreground">{TELEFONE}</p>
            </Link>
            <div className="group bg-background border border-border rounded-sm p-6 flex flex-col items-center text-center gap-3">
              <div className="flex items-center justify-center w-14 h-14 bg-primary/10 border border-primary/20 rounded-sm">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Endereço</p>
              <p className="text-sm font-semibold text-foreground leading-relaxed">{ENDERECO}</p>
            </div>
          </div>
          <div className="text-center">
            <Link
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-black uppercase tracking-wider text-base px-10 py-5 rounded-sm hover:bg-yellow-400 active:scale-95 transition-all duration-200 shadow-xl shadow-primary/20"
            >
              <FaWhatsapp className="w-6 h-6" fill="currentColor" aria-hidden="true"/>
              Chamar no WhatsApp agora
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
