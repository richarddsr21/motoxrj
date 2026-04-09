import { Header } from "@/components/motox/header"
import { Hero } from "@/components/motox/hero"
import { Sobre } from "@/components/motox/sobre"
import { Diferenciais } from "@/components/motox/diferenciais"
import { MaisVendidos } from "@/components/motox/mais-vendidos"
import { Servicos } from "@/components/motox/servicos"
import { PorQueEscolher } from "@/components/motox/por-que-escolher"
import { Galeria } from "@/components/motox/galeria"
import { Depoimentos } from "@/components/motox/depoimentos"
import { LocalizacaoContato } from "@/components/motox/localizacao-contato"
import { FAQ } from "@/components/motox/faq"
import { CTAFinal } from "@/components/motox/cta-final"
import { WhatsAppFloat } from "@/components/motox/whatsapp-float"
import { Footer } from "@/components/motox/footer"

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <Sobre />
      <Diferenciais />
      <MaisVendidos />
      <Servicos />
      <PorQueEscolher />
      <Galeria />
      <Depoimentos />
      <LocalizacaoContato />
      <FAQ />
      <CTAFinal />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
