import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merges Tailwind CSS classes with proper precedence
 * Uses clsx for conditional classes and tailwind-merge to handle conflicts
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// TODO: Add formatDate utility function
// TODO: Add formatDuration utility for song lengths
// TODO: Add debounce utility for search inputs
// TODO: Add localStorage helper functions
