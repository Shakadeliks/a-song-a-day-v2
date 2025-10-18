import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'A Song a Day | Discover Your Next Favorite Song',
  description:
    'Discover new music every day with personalized recommendations based on genre, vibe, and popularity. Build your listening history and create collections of your favorite tracks.',
  keywords: ['music', 'discovery', 'songs', 'playlist', 'recommendations'],
  authors: [{ name: 'A Song a Day' }],
  openGraph: {
    title: 'A Song a Day | Discover Your Next Favorite Song',
    description:
      'Discover new music every day with personalized recommendations',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          {/* TODO: Add theme provider wrapper */}
          {/* TODO: Add session provider wrapper */}
          {/* TODO: Add toast notifications container */}
          {children}
        </Providers>
      </body>
    </html>
  )
}
