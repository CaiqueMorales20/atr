// Imports
import type { Metadata } from 'next'
import './globals.css'

// Font
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

// SEO
export const metadata: Metadata = {
  title: 'ATR',
  description: 'ATR description',
}

// Functional Component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
