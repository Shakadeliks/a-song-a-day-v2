'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function CTA() {
  // TODO: Add gradient background animation
  // TODO: Add particle effects
  // TODO: Link button to signup page

  const handleSignUp = () => {
    console.log('Navigate to signup page')
    // TODO: Navigate to /signup or authentication flow
  }

  return (
    <section className="from-primary to-secondary bg-gradient-to-r px-4 py-20">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
          Ready to Discover?
        </h2>

        <p className="mb-8 text-lg text-white/90 md:text-xl">
          Join thousands discovering new music every day
        </p>

        <Button
          size="lg"
          variant="secondary"
          onClick={handleSignUp}
          className="group"
        >
          Start Your Journey
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>

        <p className="mt-6 text-sm text-white/70">
          Free to get started. No credit card required.
        </p>
      </div>
    </section>
  )
}
