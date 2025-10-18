'use client'

import { ReactNode } from 'react'

interface ProvidersProps {
  children: ReactNode
}

export function Providers({ children }: ProvidersProps) {
  // TODO: Add SessionProvider from next-auth
  // TODO: Add ThemeProvider for dark mode
  // TODO: Add QueryClientProvider for React Query
  // TODO: Add Toaster component for notifications

  return <>{children}</>
}
