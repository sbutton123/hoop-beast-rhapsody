// src/pages/Programs.tsx
import React from 'react'
import { Calendar, Users, Trophy, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: "The Hula Hoop Beast Experience",
      description:
        "This high‑energy 45‑minute interactive show is perfect for families and audiences of all ages. Performed to music, it features dazzling hula hoop tricks and crowd participation. Shanda brings the fun, laughter, and movement — your crowd brings the energy!",
      duration: "45 min",
      sessions: 1,
      price: "$300",
      color: "bg-beast-orange",
    },
    {
      id: 2,
      title: "Hoopin & Groovin with Greg & Shanda",
      description:
        "Shanda performs amazing hula hoop tricks while Greg plays and sings classic rock songs on guitar. A dynamic duo guaranteed to entertain audiences of all ages with music, movement, and laughs!",
      duration: "1 Hour",
      sessions: 1,
      price: "$350",
      color: "bg-green-500",
    },
    // …add more programs here as needed
  ]

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

      {/* Programs Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((p) => (
              <Card key={p.id} className="relative overflow-hidden hover-lift shadow-beast">
                {/* Top color stripe */}
                <div className={`absolute top-0 left-0 right-0 h-2 ${p.color}`} />

                <CardHeader>
                  <CardTitle className="font-bangers text-2xl text-gradient-beast">
                    {p.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {p.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center justify-between mb-6 p-4 bg-muted rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span className="text-sm">{p.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span className="text-sm">
                        {p.sessions} session{p.sessions > 1 ? "s" : ""}
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
        </div>
      </section>

      {/* Booking Policies */}
      <section className="py-12 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-bangers text-2xl text-center text-foreground">
            Booking & Travel Policies
          </h2>
          <ul className="list-disc list-inside space-y-3 text-base text-foreground">
            <li>
              <strong>Multi‑Show Discount:</strong> Book two or more performances
              on the <em>same date</em> in the same area and receive a{" "}
              <span className="text-beast-orange font-bold">$50 discount</span>{" "}
              on each additional program.
            </li>
            <li>
              <strong>Travel Fee:</strong> I’m based in Gresham, OR. For events
              beyond 50 miles, there is a{" "}
              <span className="font-bold text-beast-orange">$1/mile</span>{" "}
              travel charge for each mile over that threshold. (Trips over
              100 miles are quoted on a case‑by‑case basis.)
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Programs
