import { FaWhatsapp } from "react-icons/fa"

const WHATSAPP_NUMBER = "5521981121015"
const WHATSAPP_MSG = encodeURIComponent("Olá! Vim pelo site e gostaria de mais informações.")

export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full shadow-2xl shadow-black/50 hover:scale-110 active:scale-95 transition-all duration-200"
      style={{ background: "oklch(0.87 0.19 96)" }}
    >
      <FaWhatsapp className="w-9 h-9" fill="oklch(0.08 0 0)" aria-hidden="true"/>
      <span
        className="absolute inset-0 rounded-full animate-ping opacity-30"
        style={{ background: "oklch(0.87 0.19 96)" }}
        aria-hidden="true"
      />
    </a>
  )
}
