// src/pages/Programs.tsx
import React from 'react'
import { Calendar, Users, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'

const programs = [
  {
    id: 1,
    title: 'The Hula Hoop Beast Experience',
    description:
      'This high‑energy 45‑minute interactive show is perfect for families and audiences of all ages. Performed to music, it features dazzling hula hoop tricks and crowd participation. Shanda brings the fun, laughter, and movement — your crowd brings the energy!',
    videoId: 'NHJKBceyUgk',
    duration: '45 min',
    sessions: 1,
    price: '$300',
    color: 'bg-beast-orange',
  },
  {
    id: 2,
    title: 'Hoopin & Groovin with Greg & Shanda',
    description:
      'Shanda performs amazing hula hoop tricks while Greg plays and sings classic rock songs on guitar. A dynamic duo guaranteed to entertain audiences of all ages with music, movement, and laughs!',
    videoId: 'tKJ18SIWM_M',
    duration: '1 Hour',
    sessions: 1,
    price: '$350',
    color: 'bg-green-500',
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
            Looking for a show or interactive experience? I offer exciting,
            energizing programs for schools, libraries, parks, parties, and
            more — custom‑tailored to your audience. Let’s bring the Hula Hoop
            Beast to your event!
          </p>
        </div>
      </section>

      {/* Programs + Policies */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12">
          {/* Program Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
            {programs.map((p) => (
              <Card
                key={p.id}
                className="overflow-hidden hover-lift shadow-beast rounded-2xl"
              >
                {/* Video Embed */}
                <div className="relative aspect-video w-full">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${p.videoId}?rel=0`}
                    title={p.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <CardHeader className="pt-4 px-6">
                  <CardTitle className="font-bangers text-2xl text-gradient-beast">
                    {p.title}
                  </CardTitle>
                  <CardDescription className="mt-2">
                    {p.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="px-6 pb-6">
                  <div className="flex items-center justify-between mb-4 bg-muted rounded-lg p-3">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span className="text-sm">{p.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span className="text-sm">
                        {p.sessions} session{p.sessions > 1 && 's'}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-bangers text-3xl text-gradient-beast">
                      {p.price}
                    </span>
                    <Button
                      size="sm"
                      className="btn-beast"
                      as="a"
                      href={`/contact?program=${encodeURIComponent(p.title)}`}
                    >
                      Enquire Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Booking & Travel Policies */}
          <aside className="lg:w-1/3">
            <Card className="p-6 bg-muted rounded-2xl shadow-beast">
              <CardHeader>
                <CardTitle className="font-bangers text-2xl text-foreground">
                  Booking &amp; Travel Policies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-3 text-base text-foreground mt-4">
                  <li>
                    <strong>Multi‑Show Discount:</strong> Book two or more
                    performances on the <em>same date</em> in the same area and
                    receive a <span className="text-beast-orange">$50 discount</span>{' '}
                    on each additional program.
                  </li>
                  <li>
                    <strong>Travel Fee:</strong> Based in Gresham, OR. For events
                    beyond 50 miles, a <span className="text-beast-orange">$1/mile</span>{' '}
                    travel charge applies for each mile over that threshold.
                    (Trips over 100 miles are quoted case‑by‑case.)
                  </li>
                </ul>
              </CardContent>
            </Card>
          </aside>
        </div>
      </section>
    </div>
  )
}

export default Programs
