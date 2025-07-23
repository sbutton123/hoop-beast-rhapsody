// src/pages/Showcase.tsx
import React from 'react'
import { Card, CardContent } from '@/components/ui/card'

const videoIds = [
  'u3TYbxcSxPU',
  'SCci5uhCwKU',
  '0_OMZ-YeD0o',
  '_PRQgxwIXFs',
  'x0ullahvn8E',
  'U76PMiitJ1I'
]

const Showcase = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-beast py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-bangers text-5xl md:text-6xl text-white mb-6">
            BEAST MOVES
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Watch raw flow, killer combos, and jaw‑dropping performances — all powered by the Hula Hoop Beast within.  
            Dive into my favorite shorts and let the inspiration strike.
          </p>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoIds.map((id) => (
              <Card key={id} className="hover-lift shadow-beast">
                <CardContent className="p-0">
                  <div className="aspect-video w-full overflow-hidden rounded-lg">
                    <iframe
                      src={`https://www.youtube.com/embed/${id}`}
                      title={`Showcase video ${id}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Showcase
