'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // TODO: Log error to error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h2 className="mb-4 text-2xl font-bold">Something went wrong!</h2>
        <p className="text-muted-foreground mb-6">
          We encountered an unexpected error. Please try again.
        </p>
        <button
          onClick={reset}
          className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 py-2 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
