import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from './components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Oya! Ghana',
  description:
    'Get convenience on the go with the OYA! app. Download, register, and access easy ticket purchasing, mid-route boarding, and real-time updates all in one place'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <Providers>
        {' '}
        <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  )
}
