import { Header } from "@/components/motox/header";
import { Catalog } from "./components/catalog";
import { Footer } from "@/components/motox/footer";
import { WhatsAppFloat } from "@/components/motox/whatsapp-float";

export default function Modelos() {
  return (
    <main className="min-h-screen bg-brand-black">
      <Header />
      <Catalog />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
