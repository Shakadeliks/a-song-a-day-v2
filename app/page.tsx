import { Hero } from '@/components/landing/Hero'
import { FeaturedSong } from '@/components/features/FeaturedSong'
import { Features } from '@/components/landing/Features'
import { CTA } from '@/components/landing/CTA'

export default function HomePage() {
  // TODO: Fetch featured song data from API
  // Example: const featuredSong = await getFeaturedSong();

  // Placeholder data for development
  const placeholderSong = {
    title: 'Coming Soon',
    artist: 'Featured Artist',
    album: 'Album Name',
    albumArtUrl: 'https://via.placeholder.com/300',
    spotifyUrl: '#',
  }

  return (
    <main className="min-h-screen">
      <Hero />

      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Song of the Day
        </h2>
        <FeaturedSong {...placeholderSong} />
      </section>

      <Features />

      <CTA />
    </main>
  )
}
