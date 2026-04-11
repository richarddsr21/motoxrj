export type ProductCategory = "Scooter elétrica" | "Triciclo elétrico"
export type ProductUse = "Urbano" | "Trabalho" | "Dia a dia"
export type ProductBadge = "Mais vendido" | "Destaque" | "Novo" | null

export interface Product {
  id: string
  name: string
  description: string
  autonomy: number
  maxSpeed: number
  power: string
  category: ProductCategory
  use: ProductUse
  badge: ProductBadge
  image: string
  price: string
}

export const products: Product[] = [
  {
    id: "x11",
    name: "X11",
    description: "Scooter elétrica moderna com ótimo desempenho para mobilidade urbana.",
    autonomy: 50,
    maxSpeed: 32,
    power: "1000W",
    category: "Scooter elétrica",
    use: "Urbano",
    badge: "Mais vendido",
    image: "/images/x11.jpg",
    price: "A partir de R$ 9.990",
  },
  {
    id: "x12",
    name: "X12",
    description: "Scooter elétrica urbana potente e econômica, ideal para uso diário.",
    autonomy: 50,
    maxSpeed: 32,
    power: "1000W",
    category: "Scooter elétrica",
    use: "Urbano",
    badge: "Mais vendido",
    image: "/images/x12.jpg",
    price: "A partir de R$ 10.990",
  },
  {
    id: "mx13",
    name: "MX13",
    description: "Scooter elétrica moderna com ótimo desempenho para mobilidade urbana.",
    autonomy: 50,
    maxSpeed: 32,
    power: "1000W",
    category: "Scooter elétrica",
    use: "Urbano",
    badge: "Mais vendido",
    image: "/images/mx13.png",
    price: "A partir de R$ 11.990",
  },
  {
    id: "jet",
    name: "JET",
    description: "Scooter elétrica robusta e potente para uso urbano intenso.",
    autonomy: 45,
    maxSpeed: 32,
    power: "1000W",
    category: "Scooter elétrica",
    use: "Urbano",
    badge: "Mais vendido",
    image: "/images/jet.jpg",
    price: "A partir de R$ 12.990",
  },
  {
    id: "t8-super",
    name: "T8 SUPER",
    description: "Scooter elétrica de alto desempenho para uso diário na cidade.",
    autonomy: 40,
    maxSpeed: 32,
    power: "1000W",
    category: "Scooter elétrica",
    use: "Dia a dia",
    badge: "Novo",
    image: "/images/t8-super.png",
    price: "A partir de R$ 12.490",
  },
  {
    id: "fanton",
    name: "FANTON",
    description: "Scooter elétrica moderna, potente e ideal para trabalho e dia a dia.",
    autonomy: 45,
    maxSpeed: 32,
    power: "1000W",
    category: "Scooter elétrica",
    use: "Trabalho",
    badge: "Novo",
    image: "/images/fanton.png",
    price: "A partir de R$ 11.490",
  },
  {
    id: "sol",
    name: "SOL",
    description: "Scooter elétrica leve e eficiente para deslocamentos urbanos.",
    autonomy: 45,
    maxSpeed: 32,
    power: "1000W",
    category: "Scooter elétrica",
    use: "Urbano",
    badge: "Destaque",
    image: "/images/sol.jpg",
    price: "A partir de R$ 10.990",
  },
  {
    id: "baw",
    name: "BAW",
    description: "Scooter elétrica resistente e confiável para uso diário.",
    autonomy: 45,
    maxSpeed: 32,
    power: "1000W",
    category: "Scooter elétrica",
    use: "Dia a dia",
    badge: "Novo",
    image: "/images/baw.jpg",
    price: "A partir de R$ 11.990",
  },
  {
    id: "dot",
    name: "DOT",
    description: "Scooter elétrica compacta e prática para mobilidade urbana.",
    autonomy: 45,
    maxSpeed: 32,
    power: "1000W",
    category: "Scooter elétrica",
    use: "Urbano",
    badge: null,
    image: "/images/dot.png",
    price: "A partir de R$ 10.490",
  },
  {
    id: "tri-big",
    name: "TRI BIG",
    description: "Triciclo elétrico estável e ideal para trabalho e transporte.",
    autonomy: 45,
    maxSpeed: 32,
    power: "1000W",
    category: "Triciclo elétrico",
    use: "Urbano",
    badge: "Novo",
    image: "/images/tri-big.png",
    price: "A partir de R$ 13.990",
  },
  {
    id: "street-plus",
    name: "STREET PLUS",
    description: "Scooter elétrica com mais potência e desempenho urbano.",
    autonomy: 35,
    maxSpeed: 32,
    power: "800W",
    category: "Scooter elétrica",
    use: "Urbano",
    badge: null,
    image: "/images/street-plus.png",
    price: "A partir de R$ 9.990",
  },
  {
    id: "street",
    name: "STREET",
    description: "Scooter elétrica prática e econômica para o dia a dia.",
    autonomy: 35,
    maxSpeed: 32,
    power: "500W",
    category: "Scooter elétrica",
    use: "Dia a dia",
    badge: null,
    image: "/images/street.png",
    price: "A partir de R$ 7.990",
  },
  {
    id: "maggie",
    name: "MAGGIE",
    description: "Scooter elétrica compacta e estilosa para uso urbano.",
    autonomy: 35,
    maxSpeed: 32,
    power: "500W",
    category: "Scooter elétrica",
    use: "Urbano",
    badge: null,
    image: "/images/maggie.png",
    price: "A partir de R$ 8.490",
  },
  {
    id: "malo",
    name: "MALO",
    description: "Scooter elétrica leve e econômica, ideal para trajetos curtos.",
    autonomy: 35,
    maxSpeed: 32,
    power: "400W",
    category: "Scooter elétrica",
    use: "Dia a dia",
    badge: null,
    image: "/images/malo.png",
    price: "A partir de R$ 6.990",
  },
]

export const WHATSAPP_NUMBER = "5521981121015"

export function getWhatsappUrl(productName?: string) {
  const msg = productName
    ? `Olá! Tenho interesse em fazer um orçamento da ${productName}. Podem me ajudar?`
    : "Olá! Gostaria de mais informações sobre os modelos da Moto X."
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`
}
