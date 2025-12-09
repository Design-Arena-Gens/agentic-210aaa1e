import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Adcraze | Performance-Based Digital Advertising That Scales Revenue',
  description: 'Stop wasting ad spend. Get results-driven digital advertising that only wins when you win. Performance-based campaigns for e-commerce and small businesses.',
  keywords: 'digital advertising, performance marketing, ROI-driven ads, e-commerce advertising, Facebook ads, Google ads',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
