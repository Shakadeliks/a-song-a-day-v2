import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8B5CF6', // Violet
          light: '#A78BFA',
          dark: '#7C3AED',
        },
        secondary: {
          DEFAULT: '#EC4899', // Pink
          light: '#F9A8D4',
          dark: '#DB2777',
        },
        accent: {
          DEFAULT: '#3B82F6', // Blue
          light: '#60A5FA',
          dark: '#2563EB',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
      },
      // TODO: Add custom animations (fadeIn, slideUp, etc.)
      // TODO: Add custom spacing if needed
      // TODO: Add typography plugin for better text styling
    },
  },
  plugins: [
    // TODO: Add @tailwindcss/typography
    // TODO: Add @tailwindcss/forms if needed
  ],
}

export default config
