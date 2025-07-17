// src/pages/Programs.tsx
import React from 'react'
import { Calendar, Users, Trophy, ArrowRight } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

const Programs = () => {
  const [searchParams] = useSearchParams()
  const programParam = searchParams.get('program') || ''

  const enquireLink = (name: string) =>
    `/contact?program=${encodeURIComponent(name)}`

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-beast py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-bangers text-5xl md:text-6xl text-white mb-6">
            BEAST PROGRAMS
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Looking for a show or interactive experience? I offer exciting, energizing
            programs for schools, libraries, fairs, parties, and more — custom‑tailored
            to your audience. Let’s bring the Hula Hoop Beast to your event!
          </p>
        </div>
      </section>

      {/* Booking & Travel Policies */}
      <section className="mt-12 text-center px-4">
        <h2 className="font-bangers text-2xl mb-2">Booking &amp; Travel Policies</h2>
        <p className="max-w-3xl mx-auto text-base mb-1">
          • $50 discount on each consecutive program booked on the same date and in the same area.
        </p>
        <p className="max-w-3xl mx-auto text-base mb-1">
          • Travel fee: $1 per mile over 50 miles from Gresham, OR. &nbsp;
          Case‑by‑case rates beyond 100 miles.
        </p>
      </section>

      {/* Top row: 3 embedded‑video cards */}
      <section className="mt-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 1. Beast Experience */}
          <Card className="flex flex-col">
            {/* fixed-height video wrapper */}
            <div className="aspect-video w-full overflow-hidden rounded-t-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/NHJKBceyUgk"
                title="The Hula Hoop Beast Experience"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <CardHeader>
              <CardTitle className="font-bangers text-2xl">
                The Hula Hoop Beast Experience
              </CardTitle>
              <CardDescription>
                High‑energy 45‑minute interactive show perfect for families and audiences
                of all ages with dazzling tricks and crowd participation.
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              {/* stats */}
              <div className="flex items-center space-x-6 text-sm mb-4">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>45 min show</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4 text-primary" />
                  <span>1 session</span>
                </div>
              </div>
              {/* features */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-2">
                  <Trophy className="h-4 w-4 text-primary" />
                  <span className="text-sm">Live hoop performances</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Trophy className="h-4 w-4 text-primary" />
                  <span className="text-sm">Volunteer demos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Trophy className="h-4 w-4 text-primary" />
                  <span className="text-sm">Music &amp; laughter</span>
                </div>
              </div>
              {/* price + button */}
              <div className="flex items-center justify-between">
                <span className="font-bangers text-2xl text-beast-orange">
                  $300 flat
                </span>
                <Link to={enquireLink('The Hula Hoop Beast Experience')}>
                  <Button size="sm" className="btn-beast">
                    Enquire Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* 2. Hoopin & Groovin */}
          <Card className="flex flex-col">
            <div className="aspect-video w-full overflow-hidden rounded-t-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/tKJ18SIWM_M"
                title="Hoopin & Groovin with Greg & Shanda"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <CardHeader>
              <CardTitle className="font-bangers text-2xl">
                Hoopin &amp; Groovin with Greg &amp; Shanda
              </CardTitle>
              <CardDescription>
                Dynamic duo show pairing Shanda’s hula hoop artistry with Greg’s live
                acoustic rock music for a truly interactive performance.
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <div className="flex items-center space-x-6 text-sm mb-4">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>1 hour set</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4 text-primary" />
                  <span>1 session</span>
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-2">
                  <Trophy className="h-4 w-4 text-primary" />
                  <span className="text-sm">Hoop tricks by Shanda</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Trophy className="h-4 w-4 text-primary" />
                  <span className="text-sm">Live guitar music by Greg</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Trophy className="h-4 w-4 text-primary" />
                  <span className="text-sm">Crowd interaction</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bangers text-2xl text-beast-orange">
                  $350 flat
                </span>
                <Link to={enquireLink('Hoopin & Groovin with Greg & Shanda')}>
                  <Button size="sm" className="btn-beast">
                    Enquire Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* 3. Five Rings of Gravity */}
          <Card className="flex flex-col">
            <div className="aspect-video w-full overflow-hidden rounded-t-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/PMy9erGocIE"
                title="Level Up – 5 Rings of Gravity"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <CardHeader>
              <CardTitle className="font-bangers text-2xl">
                Level Up – 5 Rings of Gravity
              </CardTitle>
              <CardDescription>
                A challenging flow routine through five hoop sizes to test precision,
                coordination, and endurance.
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <div className="flex items-center space-x-6 text-sm mb-4">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>30 min challenge</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4 text-primary" />
                  <span>1 session</span>
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-2">
                  <Trophy className="h-4 w-4 text-primary" />
                  <span className="text-sm">5 distinct hoop sizes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Trophy className="h-4 w-4 text-primary" />
                  <span className="text-sm">Precision flow moves</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Trophy className="h-4 w-4 text-primary" />
                  <span className="text-sm">Performance showcase</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bangers text-2xl text-beast-orange">
                  $200 flat
                </span>
                <Link to={enquireLink('Level Up – 5 Rings of Gravity')}>
                  <Button size="sm" className="btn-beast">
                    Enquire Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Bottom row: 2 workshop image‑cards */}
      <section className="mt-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 4. Hula Hoop Making Workshop */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="font-bangers text-2xl text-beast-orange">
                Hula Hoop Making Workshop
              </CardTitle>
              <CardDescription>
                Hands‑on session building your own custom hoop. All materials and tape
                techniques included.
              </CardDescription>
            </CardHeader>
            <div className="h-48 overflow-hidden rounded-lg">
              <img
                src="/lovable-uploads/hulahoops.jpg"
                alt="Hula Hoop Making Workshop"
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="mt-auto">
              <div className="flex items-center space-x-6 text-sm mb-4 mt-4">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>1–2 hours</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4 text-primary" />
                  <span>1 session</span>
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-2">
                  <Trophy className="h-4 w-4 text-primary" />
                  <span className="text-sm">Hands‑on hoop assembly</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Trophy className="h-4 w-4 text-primary" />
                  <span className="text-sm">All materials provided</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Trophy className="h-4 w-4 text-primary" />
                  <span className="text-sm">Take home your custom hoop</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bangers text-2xl text-beast-orange">
                  $300 + $15/hoop
                </span>
                <Link to={enquireLink('Hula Hoop Making Workshop')}>
                  <Button size="sm" className="btn-beast">
                    Enquire Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* 5. Juggling Ball Making Workshop */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="font-bangers text-2xl text-beast-orange">
                Juggling Ball Making Workshop
              </CardTitle>
              <CardDescription>
                Learn to craft your own juggling balls from scratch. Includes materials
                &amp; basic techniques.
              </CardDescription>
            </CardHeader>
            <div className="h-48 overflow-hidden rounded-lg">
              <img
                src="/lovable-uploads/jugglingballs.jpg"
                alt="Juggling Ball Making Workshop"
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="mt-auto">
              <div className="flex items-center space-x-6 text-sm mb-4 mt-4">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>1–2 hours</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4 text-primary" />
                  <span>1 session</span>
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-2">
                  <Trophy className="h-4 w-4 text-primary" />
                  <span className="text-sm">Make &amp; keep 3 juggling balls</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Trophy className="h-4 w-4 text-primary" />
                  <span className="text-sm">Scarf juggling lesson</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Trophy className="h-4 w-4 text-primary" />
                  <span className="text-sm">All supplies provided</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bangers text-2xl text-beast-orange">
                  $300 (up to 25)
                </span>
                <Link to={enquireLink('Juggling Ball Making Workshop')}>
                  <Button size="sm" className="btn-beast">
                    Enquire Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default Programs
