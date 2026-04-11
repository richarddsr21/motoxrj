import Link from "next/link"
import Image from "next/image"
import { FaInstagram } from "react-icons/fa"

const navLinks = [
  { label: "Início", href: "/#inicio" },
  { label: "Diferenciais", href: "/#diferenciais" },
  { label: "Mais Vendidos", href: "/#mais-vendidos" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Localização", href: "/#localizacao" },
  { label: "Contato", href: "/#contato" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <Link href="/#inicio" className="flex items-center gap-2 mb-4">
              <Image
               src="/images/logo.png"
               alt="Scooter elétrica Moto X"
               width={110}
               height={110}
               loading="eager"
               className="object-cover"
              />
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
              href="https://instagram.com/motox.rj"
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
