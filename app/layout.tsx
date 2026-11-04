import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { SiteHeader } from '../components/site-header'
import { SiteFooter } from '../components/site-footer'
import './globals.css'

export const metadata: Metadata = {
  title: "St. Finbarr's College | Citadel of Excellence",
  description: "St. Finbarr's College, Akoka, Lagos — comprehensive Catholic education for boys since 1956.",
  keywords: ['St. Finbarr’s College', 'Catholic school Lagos', 'secondary school Akoka', 'admissions'],
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#00305a',
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body id="top" className="antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
