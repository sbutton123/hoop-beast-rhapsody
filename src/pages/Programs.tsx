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

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: 'The Hula Hoop Beast Experience',
      description: `This high‑energy 45‑minute interactive show is perfect for families and audiences of all ages. Performed to music, it features dazzling hula hoop tricks and crowd participation. Shanda brings the fun, laughter, and movement — your crowd brings the energy!`,
      duration: '45 min',
      sessions: 1,
      price: '$300',
      features: [
        'Volunteer segments + crowd dance‑along finale',
        'Family‑friendly flow art adventure',
      ],
      videoUrl: 'https://youtu.be/NHJKBceyUgk',
      color: 'bg-beast-orange',
    },
    {
      id: 2,
      title: 'Hoopin & Groovin with Greg & Shanda',
      description: `Shanda performs amazing hula hoop tricks and dazzles the crowd while Greg plays and sings classic rock songs with his acoustic guitar. They’re a dynamic duo guaranteed to impress and entertain!`,
      duration: '1 Hour Set',
      sessions: 1,
      price: '$350',
      features: [
        'Live classic rock music by Greg',
        'Interactive entertainment',
        'Perfect for events, parties, and libraries',
      ],
      videoUrl: 'https://youtu.be/tKJ18SIWM_M',
      color: 'bg-green-500',
    },
    {
      id: 3,
      title: 'Level Up: 5 Rings of Gravity',
      description: `We’ve been sucked into a video game! The Evil Wizard of the West has hidden the five Rings of Gravity, and only your team can reclaim them. Shanda leads volunteers through five challenge‑filled levels—each one unlocked by increasingly impressive hoop & juggling tricks.`,
      duration: '45 min',
      sessions: 1,
      price: '$300',
      features: [
        '5 interactive game‑style levels',
        'Volunteer‑powered clues & challenges',
        'Progressive hoop & juggling demos',
        'Family‑friendly flow art adventure',
      ],
      videoUrl: 'https://youtu.be/PMy9erGocIE',
      color: 'bg-blue-500',
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
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-4">
            Looking for a show or interactive experience? I offer exciting,
            energizing programs for schools, libraries, parks, parties, and more
            — custom-tailored to your audience. Let’s bring the Hula Hoop Beast to
            your event!
          </p>
          {/* Booking & Travel Policies */}
          <div className="text-white/80 text-sm max-w-md mx-auto space-y-2">
            <p>
              If you book multiple performances on the same date in the same area,
              you’ll receive a $50 discount on each additional program.
            </p>
            <p>
              A travel fee applies beyond 50 miles from Gresham, OR: $1 per mile
              over 50. Over 100 miles is handled case‑by‑case.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <Card
                key={program.id}
                className="relative overflow-hidden hover-lift shadow-beast"
              >
                {/* colored stripe */}
                <div
                  className={`absolute top-0 left-0 right-0 h-2 ${program.color}`}
                />

                <CardHeader>
                  <CardTitle className="font-bangers text-2xl text-gradient-beast">
                    {program.title}
                  </CardTitle>
                  <CardDescription className="text-base whitespace-pre-line">
                    {program.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {/* video embed */}
                  <div className="mb-4">
                    <iframe
                      className="w-full aspect-video rounded-lg"
                      src={`https://www.youtube.com/embed/${
                        program.videoUrl.split('/').pop()
                      }`}
                      title={program.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>

                  {/* duration & sessions */}
                  <div className="flex items-center justify-between mb-6 p-4 bg-muted rounded-lg">
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
                    {program.features.map((feat, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <Trophy className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* price & button */}
                  <div className="flex items-center justify-between">
                    <span className="font-bangers text-3xl text-gradient-beast">
                      {program.price}
                    </span>
                    <Button
                      size="sm"
                      className="btn-beast"
                      onClick={() =>
                        (window.location.href = `/contact?program=${encodeURIComponent(
                          program.title
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

export default Programs
