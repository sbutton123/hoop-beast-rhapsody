// src/pages/Programs.tsx
import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Users, Trophy, ArrowRight, Play } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface Program {
  id: number
  title: string
  description: string
  duration: string
  sessions: number
  price: string
  features: string[]
  videoUrl: string
  color: string
}

const programs: Program[] = [
  {
    id: 1,
    title: 'The Hula Hoop Beast Experience',
    description:
      'This high‑energy 45‑minute interactive show is perfect for families and audiences of all ages. Performed to music, it features dazzling hula hoop tricks and crowd participation. Shanda brings the fun, laughter, and movement — your crowd brings the energy!',
    duration: '45 min',
    sessions: 1,
    price: '$300',
    features: [
      '45‑minute interactive performance',
      'Family‑friendly fun',
      'Volunteer segments & finale',
    ],
    videoUrl: 'https://www.youtube.com/embed/NHJKBceyUgk',
    color: 'bg-beast-orange'
  },
  {
    id: 2,
    title: 'Hoopin & Groovin with Greg & Shanda',
    description:
      'Shanda performs amazing hula hoop tricks and dazzles the crowd while Greg plays and sings classic rock songs with his acoustic guitar. They are a fun and dynamic duo and are guaranteed to impress and entertain!',
    duration: '1 Hour',
    sessions: 1,
    price: '$350',
    features: [
      'Live hoop tricks',
      'Acoustic guitar music',
      'Interactive crowd play',
    ],
    videoUrl: 'https://www.youtube.com/embed/tKJ18SIWM_M',
    color: 'bg-accent'
  },
  // …add more programs here
]

const Programs = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-beast py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-bangers text-5xl md:text-6xl text-white mb-6">
            BEAST PROGRAMS
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Looking for a show or interactive experience? I offer exciting, energizing
            programs for schools, libraries, parks, parties, and more — custom-tailored to
            your audience. Let’s bring the Hula Hoop Beast to your event!
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((prog) => (
              <Card
                key={prog.id}
                className="relative overflow-hidden hover-lift shadow-beast"
              >
                {/* colored top bar */}
                <div className={`absolute top-0 left-0 right-0 h-2 ${prog.color}`} />

                <CardHeader className="pt-4">
                  <CardTitle className="font-bangers text-2xl text-gradient-beast">
                    {prog.title}
                  </CardTitle>
                  <p className="mt-2 text-sm">{prog.description}</p>
                </CardHeader>

                <CardContent>
                  {/* embedded video */}
                  <div className="mb-4 aspect-video rounded-lg overflow-hidden">
                    <iframe
                      src={prog.videoUrl}
                      title={prog.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>

                  {/* stats */}
                  <div className="flex items-center justify-between mb-4 p-4 bg-muted rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span className="text-sm">{prog.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span className="text-sm">{prog.sessions} session</span>
                    </div>
                  </div>

                  {/* features list */}
                  <div className="space-y-2 mb-6">
                    {prog.features.map((feat, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <Trophy className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* price & button */}
                  <div className="flex items-center justify-between">
                    <span className="font-bangers text-3xl text-gradient-beast">
                      {prog.price}
                    </span>

                    <Link
                      to={`/contact?program=${encodeURIComponent(prog.title)}`}
                      className="inline-block"
                    >
                      <Button size="sm" className="btn-beast">
                        Enquire Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
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

export default Programs
