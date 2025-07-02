import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'VERDICT.COM - Professional Q&A Platform',
    template: '%s | VERDICT.COM'
  },
  description: 'Multi-vertical AI-powered Q&A platform democratizing professional knowledge through AI classification, professional consensus, and community engagement.',
  keywords: [
    'legal advice',
    'professional consultation', 
    'AI-powered Q&A',
    'lawyer opinions',
    'medical advice',
    'financial advice',
    'professional network'
  ],
  authors: [{ name: 'VERDICT.COM Team' }],
  creator: 'VERDICT.COM',
  metadataBase: new URL('https://verdict.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://verdict.com',
    title: 'VERDICT.COM - Professional Q&A Platform',
    description: 'Get expert opinions from verified professionals on legal, medical, and financial questions.',
    siteName: 'VERDICT.COM',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VERDICT.COM - Professional Q&A Platform',
    description: 'Get expert opinions from verified professionals.',
    creator: '@verdictcom',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'placeholder-google-verification',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(
        inter.className,
        "min-h-screen bg-background font-sans antialiased mobile-safe-area"
      )}>
        <div className="relative flex min-h-screen flex-col">
          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}