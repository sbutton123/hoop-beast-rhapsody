import React from 'react'
import { Calendar, Users, Trophy, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: 'The Hula Hoop Beast Experience',
      description:
        'This high‑energy 45‑minute interactive show is perfect for families and audiences of all ages. Performed to music, it features dazzling hula hoop tricks and crowd participation. Shanda brings the fun, laughter, and movement — your crowd brings the energy!',
      duration: '45 min',
      sessions: 1,
      price: '$300',
      features: [
        'Interactive volunteer segments',
        'Crowd dance‑along finale',
        'Perfect for schools, libraries, fairs, and parties',
      ],
      videoId: 'NHJKBceyUgk',
      borderColor: 'bg-beast-orange',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-beast py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-bangers text-5xl md:text-6xl text-white mb-6">
            BEAST PROGRAMS
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Looking for a show or interactive experience? I offer exciting,
            energizing programs for schools, libraries, parks, parties, and more
            — custom-tailored to your audience. Let’s bring the Hula Hoop Beast to
            your event!
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map(program => (
              <Card
                key={program.id}
                className="relative overflow-hidden hover-lift shadow-beast"
              >
                {/* colored top border */}
                <div
                  className={`absolute top-0 left-0 right-0 h-2 ${program.borderColor}`}
                />

                <CardHeader>
                  <CardTitle className="font-bangers text-2xl text-gradient-beast mb-2">
                    {program.title}
                  </CardTitle>
                  <CardDescription>
                    {program.description}
                  </CardDescription>

                  {/* embedded video */}
                  <div className="mt-4 w-full aspect-video shadow-md rounded-lg overflow-hidden">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${program.videoId}`}
                      title={program.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </CardHeader>

                <CardContent>
                  {/* duration & sessions */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span className="text-sm">{program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span className="text-sm">
                        {program.sessions} session
                      </span>
                    </div>
                  </div>

                  {/* features */}
                  <div className="space-y-2 mb-6">
                    {program.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <Trophy className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* price & button */}
                  <div className="flex items-center justify-between">
                    <span className="font-bangers text-2xl text-gradient-beast">
                      {program.price}
                    </span>
                    <Button className="btn-beast">
                      Join Program
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

export default Programs
