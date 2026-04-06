import type { Metadata } from 'next'
import { Barlow } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-barlow',
})

export const metadata: Metadata = {
  title: 'Moto X — Mobilidade Elétrica no Rio de Janeiro',
  description:
    'Concessionária especializada em motos, bikes e scooters elétricas no Rio de Janeiro. Garantia, manutenção, acessórios e atendimento especializado.',
  keywords: 'moto elétrica, scooter elétrica, Rio de Janeiro, mobilidade elétrica, Moto X',
  openGraph: {
    title: 'Moto X — Mobilidade Elétrica',
    description: 'Motos e scooters elétricas com garantia, manutenção e atendimento especializado no Rio de Janeiro.',
    type: 'website',
  },
  themeColor: '#0A0A0A',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${barlow.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
