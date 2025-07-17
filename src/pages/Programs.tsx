// src/pages/Programs.tsx
import React from 'react'
import { Calendar, Users, Trophy, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'

interface Program {
  id: number
  title: string
  description: string
  duration: string
  sessions: number
  price: string
  features: string[]
  videoUrl?: string
  imageUrl?: string
  color: string
}

const programs: Program[] = [
  // … first three video‑based programs unchanged …
  {
    id: 4,
    title: 'Hula Hoop Making Workshop',
    description: `Workshop includes a short performance of amazing hula hoop tricks. Learn about various types of hoops & my journey in becoming a Hula Hoop Extraordinaire.\n\nEach participant builds a colorful custom hoop—specific to their size & skill level. All supplies provided.`,
    duration: '1–2 hours',
    sessions: 1,
    price: '$300 + $15/hoop (materials)',
    features: [
      'Hands‑on hoop assembly',
      'All materials included',
      'Take your custom hoop home',
    ],
    // ensure your file is named exactly `hulahoops.jpg` in public/lovable-uploads/
    imageUrl: '/lovable-uploads/hulahoops.jpg',
    color: 'bg-purple-500',
  },
  {
    id: 5,
    title: 'Juggling Ball Making Workshop',
    description: `Studies show juggling can boost grey‑matter density & reduce anxiety.\n\nParticipants learn juggling with scarves & balls, then craft a 3‑ball set to take home—each ball weighted to their preference.`,
    duration: '1–2 hours',
    sessions: 1,
    price: '$300 (up to 25 participants)',
    features: [
      'Make & keep 3 juggling balls',
      'Scarf juggling lesson',
      'All supplies provided',
    ],
    imageUrl: '/lovable-uploads/jugglingballs.jpg',
    color: 'bg-pink-500',
  },
]

export default function Programs() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero & Policies */}
      <section className="bg-gradient-beast py-16">
        {/* …unchanged… */}
      </section>

      {/* Programs Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((p) => (
              <Card
                key={p.id}
                className="relative overflow-hidden hover-lift shadow-beast"
              >
                <div className={`absolute top-0 left-0 right-0 h-2 ${p.color}`} />

                <CardHeader>
                  <CardTitle className="font-bangers text-2xl text-gradient-beast">
                    {p.title}
                  </CardTitle>
                  <CardDescription className="whitespace-pre-line">
                    {p.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {/* embed video or show image */}
                  {p.videoUrl ? (
                    <iframe
                      className="w-full aspect-video rounded-lg mb-4"
                      src={`https://www.youtube.com/embed/${p.videoUrl.split('/').pop()}`}
                      title={p.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <img
                      src={p.imageUrl}
                      alt={p.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                  )}

                  {/* timing & sessions */}
                  <div className="flex items-center justify-between mb-6 p-4 bg-muted rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span className="text-sm">{p.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span className="text-sm">{p.sessions} session</span>
                    </div>
                  </div>

                  {/* features */}
                  <div className="space-y-2 mb-6">
                    {p.features.map((f, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <Trophy className="h-4 w-4 text-primary" />
                        <span className="text-sm">{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* price & button */}
                  <div className="flex items-center justify-between">
                    <span className="font-bangers text-3xl text-gradient-beast">
                      {p.price}
                    </span>
                    <Button
                      size="sm"
                      className="btn-beast"
                      onClick={() =>
                        (window.location.href = `/contact?program=${encodeURIComponent(
                          p.title
                        )}`)
                      }
                    >
                      Enquire Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
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
