// src/pages/Programs.tsx
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui/card'
import { Button }             from '@/components/ui/button'

export default function Programs() {
  const navigate = useNavigate()
  const enquire = (title: string) =>
    navigate(`/contact?program=${encodeURIComponent(title)}`)

  const cards = [
    {
      key: 'groovin',
      type: 'flyer',
      title: 'Hoopin & Groovin with Greg & Shanda',
      image: '/lovable-uploads/hoopin&groovin.png',
      demoUrl: 'https://youtu.be/tKJ18SIWM_M',
    },
    {
      key: 'harvest',
      type: 'flyer',
      title: 'Hula Hoop Harvest: Plant a Skill, Watch It Grow',
      image: '/lovable-uploads/hulahoopharvest.png',
    },
    {
      key: 'aeology',
      type: 'flyer',
      title: 'Hula‑Hoop‑ology: Dig Up Your Skills',
      image: '/lovable-uploads/hulahoopology.png',
    },
    {
      key: 'levelup',
      type: 'video',
      title: 'Level Up – 5 Rings of Gravity to Save Planet Earth!',
      videoUrl: 'https://www.youtube.com/embed/PMy9erGocIE',
      duration: '45 minutes',
      price: '$300 flat rate',
    },
    {
      key: 'beastexp',
      type: 'video',
      title: 'The Hula Hoop Beast Experience',
      videoUrl: 'https://www.youtube.com/embed/NHJKBceyUgk',
      duration: '45 minutes',
      price: '$300 flat rate',
    },
    {
      key: 'workshop',
      type: 'flyer',
      title: 'Workshops: Hoop & Juggle‑Ball Making',
      image: '/lovable-uploads/hulahoopandjugglingballs.png',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-beast py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
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

      {/* Booking & Travel Policies */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-card rounded-lg p-6 shadow-beast">
            <h2 className="font-bangers text-2xl text-center mb-4">
              Booking &amp; Travel Policies
            </h2>
            <p className="text-center mb-3">
              If multiple performances are booked, there is a $50 discount on each
              program that is booked consecutively on the same date and in the same
              area.
            </p>
            <p className="text-center">
              I charge a travel fee if traveling more than 50 miles from Gresham,
              Oregon. For each mile over 50 miles to the destination, I charge $1. If
              the distance exceeds 100 miles, the travel charge will be handled on
              a case‑by‑case basis.
            </p>
          </div>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c) => (
            <Card key={c.key} className="hover-lift flex flex-col h-full">
              {/* Full‑bleed flyer or video */}
              {c.type === 'flyer' ? (
                <div className="aspect-[3/2] overflow-hidden rounded-t-lg">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <iframe
                    className="w-full h-full"
                    src={c.videoUrl}
                    title={c.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}

              {/* Buttons only—no extra text for flyers (the PNG has all your copy) */}
              <CardContent className="p-6 flex-1 flex flex-col">
                {/* Demo button */}
                {c.demoUrl && (
                  <Button
                    as="a"
                    href={c.demoUrl}
                    target="_blank"
                    className="mb-4 w-full"
                  >
                    Watch Demo
                  </Button>
                )}

                {/* Enquire Now */}
                <div className="mt-auto">
                  <Button
                    onClick={() => enquire(c.title)}
                    className="btn-beast w-full"
                  >
                    Enquire Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
