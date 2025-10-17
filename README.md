# A Song a Day

Discover your next favorite song with personalized music recommendations based on genre, vibe, and popularity.

## Overview

A Song a Day is a music discovery application that helps users explore new music through curated daily recommendations. Users can discover songs based on their mood, build a listening history, and create collections of their favorite tracks.

## Tech Stack

- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS v4
- **Icons:** Lucide React
- **Font:** Inter (Google Fonts)

### Planned Integrations

- **Authentication:** NextAuth.js
- **API Integration:** Spotify Web API
- **State Management:** React Query
- **Database:** TBD

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd a-song-a-day-v2
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file based on `.env.example`:

```bash
cp .env.example .env.local
```

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
a-song-a-day-v2/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Landing page
│   ├── globals.css        # Global styles and CSS variables
│   ├── loading.tsx        # Loading UI
│   ├── error.tsx          # Error UI
│   └── not-found.tsx      # 404 page
├── components/            # React components
│   ├── providers.tsx      # Client-side providers wrapper
│   ├── ui/                # Reusable UI components
│   │   └── button.tsx
│   ├── landing/           # Landing page sections
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   └── CTA.tsx
│   └── features/          # Feature-specific components
│       └── FeaturedSong.tsx
├── lib/                   # Utility functions
│   └── utils.ts
└── public/                # Static assets
```

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Features (Planned)

### Core Features

- [ ] Daily song recommendations
- [ ] Genre and mood-based discovery
- [ ] Popularity filtering
- [ ] User authentication
- [ ] Listening history tracking
- [ ] Custom collections/playlists
- [ ] Spotify integration

### Landing Page

- [x] Hero section with CTA
- [x] Featured song display
- [x] Features showcase
- [x] Call-to-action section

<!-- TODO: Add features documentation -->
<!-- TODO: Add API documentation -->
<!-- TODO: Add contributing guidelines -->
<!-- TODO: Add deployment instructions -->

## Development Notes

This project uses:

- Server Components by default for optimal performance
- Client Components only where interactivity is needed
- TypeScript strict mode for type safety
- Tailwind CSS for styling with custom design tokens

## License

MIT
