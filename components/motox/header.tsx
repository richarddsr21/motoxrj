"use client"

import { useState, useEffect } from "react"
import { Menu, X, Zap } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import Link from "next/link"

const WHATSAPP_NUMBER = "5521981121015"
const WHATSAPP_MSG = encodeURIComponent("Olá! Gostaria de saber mais sobre as motos e scooters elétricas da Moto X.")

const navLinks = [
  { label: "Início", href: "/#inicio" },
  { label: "Diferenciais", href: "/#diferenciais" },
  { label: "Mais Vendidos", href: "/#mais-vendidos" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Localização", href: "/#localizacao" },
  { label: "Contato", href: "/#contato" },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg shadow-black/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-sm">
              <Zap className="w-5 h-5 text-primary-foreground" fill="currentColor" />
            </div>
            <span className="text-xl font-black tracking-wider text-foreground uppercase">
              MOTO<span className="text-primary">X</span>
            </span>
          </Link>
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 bg-primary text-primary-foreground font-bold uppercase tracking-wider text-sm px-5 py-2.5 rounded-sm hover:bg-yellow-400 transition-colors duration-200"
          >
            <FaWhatsapp className="w-5 h-5" fill="currentColor" aria-hidden="true"/>
            Falar no WhatsApp
          </Link>
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden bg-card border-b border-border">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:text-primary py-3 border-b border-border/50 last:border-0 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold uppercase tracking-wider text-sm px-5 py-3 rounded-sm hover:bg-yellow-400 transition-colors"
              onClick={() => setOpen(false)}
            >
              <FaWhatsapp className="w-5 h-5" fill="currentColor" aria-hidden="true"/>
              Falar no WhatsApp
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
