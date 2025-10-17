import { Music2, History, Heart } from 'lucide-react'

const features = [
  {
    icon: Music2,
    title: 'Discover by Vibe',
    description:
      'Choose from various genres, moods, and popularity levels to find songs that match your current vibe perfectly.',
  },
  {
    icon: History,
    title: 'Build Your History',
    description:
      'Keep track of every song you discover. Never lose track of that perfect tune you found weeks ago.',
  },
  {
    icon: Heart,
    title: 'Create Collections',
    description:
      'Save your favorite discoveries and organize them into custom collections. Build playlists that tell your story.',
  },
]

export function Features() {
  // Server component - no client-side interactivity needed
  // TODO: Add icons from lucide-react
  // TODO: Add hover animations
  // TODO: Add more detailed feature descriptions

  return (
    <section className="bg-muted/50 px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-4xl font-bold md:text-5xl">
          How It Works
        </h2>
        <p className="text-muted-foreground mx-auto mb-16 max-w-2xl text-center">
          Three simple steps to discovering amazing music every day
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-card border-border hover:border-primary/50 flex flex-col items-center rounded-lg border p-6 text-center transition-colors"
              >
                {/* Icon */}
                <div className="bg-primary/10 mb-4 rounded-full p-3">
                  <Icon className="text-primary h-8 w-8" />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
