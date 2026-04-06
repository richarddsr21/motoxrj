import { Zap } from "lucide-react"
import Link from "next/link"
import { FaInstagram } from "react-icons/fa"

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Modelos", href: "#modelos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <Link href="#inicio" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-9 h-9 bg-primary rounded-sm">
                <Zap className="w-4 h-4 text-primary-foreground" fill="currentColor" />
              </div>
              <span className="text-lg font-black tracking-wider text-foreground uppercase">
                MOTO<span className="text-primary">X</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Especialistas em mobilidade elétrica no Rio de Janeiro. Motos, scooters e bikes elétricas sem burocracia.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Navegação</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">Redes sociais</p>
            <Link
              href="https://instagram.com/motox_rj"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 mb-4"
            >
              <FaInstagram className="w-4 h-4"/>
              @motox_rj
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Estrada do Magarça, 2795<br />
              Rio de Janeiro — RJ
            </p>
          </div>
        </div>
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Moto X — Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Rio de Janeiro, RJ — Mobilidade elétrica
          </p>
        </div>
      </div>
    </footer>
  )
}
