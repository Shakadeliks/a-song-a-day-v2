'use client'

import { Button } from '@/components/ui/button'
import { Music } from 'lucide-react'

export function Hero() {
  // TODO: Add scroll animations with Framer Motion
  // TODO: Add gradient background effect
  // TODO: Add music note animations

  const handleGetStarted = () => {
    console.log('Navigate to signup/onboarding')
    // TODO: Navigate to signup or scroll to features
  }

  const handleLearnMore = () => {
    console.log('Scroll to features section')
    // TODO: Smooth scroll to features section
  }

  return (
    <section className="from-primary/10 via-background to-secondary/10 relative flex min-h-screen items-center justify-center bg-gradient-to-br px-4 py-20">
      {/* TODO: Add animated background patterns */}

      <div className="container mx-auto max-w-4xl text-center">
        {/* Logo/Icon */}
        <div className="mb-8 flex justify-center">
          <div className="bg-primary/10 rounded-full p-4">
            <Music className="text-primary h-16 w-16" />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="from-primary to-secondary mb-6 bg-gradient-to-r bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
          A Song a Day
        </h1>

        {/* Tagline */}
        <p className="text-foreground mb-4 text-2xl font-semibold md:text-3xl">
          Discover Your Next Favorite Song
        </p>

        {/* Description */}
        <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-lg md:text-xl">
          Explore new music every day with personalized recommendations tailored
          to your taste. Choose your vibe, track your discoveries, and build the
          perfect collection.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button size="lg" onClick={handleGetStarted}>
            Get Started
          </Button>
          <Button size="lg" variant="outline" onClick={handleLearnMore}>
            See How It Works
          </Button>
        </div>
      </div>
    </section>
  )
}
