import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lety\'s Ebooks - Ebooks Infantis Digitais',
  description: 'Plataforma de e-commerce para venda de ebooks infantis digitais',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
