'use client'

import Image from 'next/image'
import { ExternalLink, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface FeaturedSongProps {
  title: string
  artist: string
  album: string
  albumArtUrl: string
  spotifyUrl: string
}

export function FeaturedSong({
  title,
  artist,
  album,
  albumArtUrl,
  spotifyUrl,
}: FeaturedSongProps) {
  // TODO: Integrate Spotify Web Playback SDK for embedded player
  // TODO: Add animation when song card loads
  // TODO: Add share functionality
  // TODO: Add "save to collection" button

  const handlePlayOnSpotify = () => {
    console.log('Opening Spotify:', spotifyUrl)
    // TODO: Open Spotify URL in new tab or trigger embedded player
    if (spotifyUrl !== '#') {
      window.open(spotifyUrl, '_blank')
    }
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="bg-card border-border rounded-lg border p-6 shadow-lg transition-shadow hover:shadow-xl">
        <div className="flex flex-col gap-6 md:flex-row">
          {/* Album Art */}
          <div className="flex-shrink-0">
            <div className="bg-muted relative mx-auto h-48 w-48 overflow-hidden rounded-lg md:mx-0">
              <Image
                src={albumArtUrl}
                alt={`${album} album art`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 192px"
              />
            </div>
          </div>

          {/* Song Details */}
          <div className="flex flex-1 flex-col justify-between">
            <div>
              <h3 className="mb-2 text-2xl font-bold">{title}</h3>
              <p className="text-muted-foreground mb-1 text-lg">{artist}</p>
              <p className="text-muted-foreground mb-4 text-sm">{album}</p>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              <Button onClick={handlePlayOnSpotify} className="group">
                <Play className="mr-2 h-4 w-4" />
                Play on Spotify
                <ExternalLink className="ml-2 h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
              </Button>

              {/* TODO: Add "Save to Collection" button */}
              {/* TODO: Add "Share" button */}
            </div>
          </div>
        </div>

        {/* TODO: Add Spotify embed player below */}
        {/* Example: <iframe src={`https://open.spotify.com/embed/track/${trackId}`} /> */}
      </div>
    </div>
  )
}
