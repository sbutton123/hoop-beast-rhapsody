import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Users, Trophy, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: 'The Hula Hoop Beast Experience',
      description:
        'This high-energy 45-minute interactive show is perfect for families and audiences of all ages. Performed to music, it features dazzling hula hoop tricks and crowd participation. Shanda brings the fun, laughter, and movement — your crowd brings the energy!',
      duration: '45 min',
      sessions: 1,
      price: '$300',
      features: [
        'Volunteer segments',
        'Crowd dance‑along finale',
        'Family‑friendly',
      ],
      color: 'bg-beast-orange',
      videoUrl: 'https://www.youtube.com/embed/NHJKBceyUgk',
    },
    {
      id: 2,
      title: 'Hoopin & Groovin with Greg & Shanda',
      description:
        'Shanda performs amazing hula hoop tricks and dazzles the crowd while Greg plays and sings classic rock songs with his acoustic guitar. They are a fun and dynamic duo and are guaranteed to impress and entertain!',
      duration: '1 hr',
      sessions: 1,
      price: '$350',
      features: [
        'Live classic rock music',
        'Interactive entertainment',
        'Perfect for events & libraries',
      ],
      color: 'bg-accent',
      videoUrl: 'https://www.youtube.com/embed/tKJ18SIWM_M',
    },
  ]

  return (
    <div className="min-h-screen bg-background py-16">
      {/* Hero */}
      <section className="bg-gradient-beast py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-bangers text-5xl sm:text-6xl text-white mb-6">
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

      {/* Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <Card
                key={program.id}
                className="relative overflow-hidden hover-lift shadow-beast"
              >
                {/* top accent bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-2 ${program.color}`}
                />

                <CardHeader>
                  <CardTitle className="font-bangers text-xl text-gradient-beast">
                    {program.title}
                  </CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  {/* video embed */}
                  <div className="mb-4 relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                    <iframe
                      src={program.videoUrl}
                      title={program.title}
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full rounded-lg"
                    />
                  </div>

                  {/* stats */}
                  <div className="flex items-center justify-between mb-4 p-4 bg-muted rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span className="text-sm">{program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span className="text-sm">{program.sessions} session</span>
                    </div>
                  </div>

                  {/* features */}
                  <div className="space-y-2 mb-6">
                    {program.features.map((f, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <Trophy className="h-4 w-4 text-primary" />
                        <span className="text-sm">{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex items-center justify-between">
                    <span className="font-bangers text-2xl text-gradient-beast">
                      {program.price}
                    </span>
                    <div className="flex space-x-2">
                      <Link
                        to={`/contact?program=${encodeURIComponent(
                          program.title
                        )}`}
                        className="btn-beast flex items-center py-2 px-4"
                      >
                        Enquire Now
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                      <Button
                        size="sm"
                        onClick={() =>
                          window.open(
                            'https://calendly.com/yourname/45min',
                            '_blank'
                          )
                        }
                        className="bg-white text-beast-orange font-bold py-2 px-4 rounded shadow-beast hover:scale-105 transition-beast"
                      >
                        Book Now
                      </Button>
                    </div>
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
