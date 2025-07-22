// src/pages/Programs.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button }       from '@/components/ui/button';

export default function Programs() {
  const navigate = useNavigate();
  const enquire = (title: string) =>
    navigate(`/contact?program=${encodeURIComponent(title)}`);

  const cards = [
    {
      key: 'groovin',
      title: 'Hoopin & Groovin with Greg & Shanda',
      description: `Shanda performs amazing hula hoop tricks and dazzles the crowd while Greg plays and sings classic rock songs with his acoustic guitar. They are a fun and dynamic duo and are guaranteed to impress and entertain!`,
      demoUrl: 'https://youtu.be/tKJ18SIWM_M',
      type: 'demo',
    },
    {
      key: 'harvest',
      title: 'Hula Hoop Harvest: Plant a Skill, Watch It Grow',
      description: `Kids will discover how every skill—just like a plant—starts small and needs sunshine (practice), water (learning), and the courage to fail (and try again) to truly grow. Through high‑energy hula‑hoop and playful juggling demos, fun hands‑on volunteer interactions, and inspiring songs, Ms. Button brings the “Plant a Seed, Read” theme to life.`,
      duration: '45 minutes',
      price: '$300 flat rate',
      type: 'content',
    },
    {
      key: 'aeology',
      title: 'Hula‑Hoop‑ology: Dig Up Your Skills',
      description: `Join Ms. Button, your Hula‑Hoop‑ologist, for a 45‑minute interactive show that combines hula‑hooping, juggling, and archaeological discovery fun! Participants dig for “artifacts,” brush off buried juggling balls, and cheer on every “oops”—because practice makes growth! Perfect for kids ages 4–12.`,
      duration: '45 minutes',
      price: '$300 flat rate',
      type: 'content',
    },
    {
      key: 'levelup',
      title: 'Level Up – 5 Rings of Gravity to Save Planet Earth!',
      description: `Help Shanda recover the 5 Rings of Gravity in this 45‑minute “video game” adventure! Volunteers solve clue‑based challenges at each level while Shanda powers up with progressively harder hoop & juggling tricks.`,
      videoUrl: 'https://www.youtube.com/embed/PMy9erGocIE',
      duration: '45 minutes',
      price: '$300 flat rate',
      type: 'video',
    },
    {
      key: 'beastexp',
      title: 'The Hula Hoop Beast Experience',
      description: `This high‑energy 45‑minute interactive show is perfect for families and audiences of all ages. Performed to music, it features dazzling hula hoop tricks and crowd participation. Shanda brings the fun, laughter, and movement—your crowd brings the energy!`,
      videoUrl: 'https://www.youtube.com/embed/NHJKBceyUgk',
      duration: '45 minutes',
      price: '$300 flat rate',
      type: 'video',
    },
    {
      key: 'workshops',
      title: 'Workshops: Build Your Own Hoop & Juggle Balls',
      type: 'workshops',
    },
  ];

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
            — custom‑tailored to your audience. Let’s bring the Hula Hoop Beast to
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
          {cards.map(c => (
            <Card key={c.key} className="hover-lift flex flex-col h-full">
              {/* video embed */}
              {c.type === 'video' && (
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

              {/* demo card */}
              {c.type === 'demo' && (
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bangers text-primary mb-3">{c.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-1">{c.description}</p>
                  <Button
                    as="a"
                    href={c.demoUrl}
                    target="_blank"
                    className="mb-4 w-full"
                  >
                    Watch Demo
                  </Button>
                </CardContent>
              )}

              {/* text‑only card */}
              {c.type === 'content' && (
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bangers text-primary mb-3">{c.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-1">{c.description}</p>
                  <p className="text-sm mb-2">
                    <strong>Duration:</strong> {c.duration}
                  </p>
                  <p className="text-sm mb-6">
                    <strong>Price:</strong> {c.price}
                  </p>
                </CardContent>
              )}

              {/* combined workshops card */}
              {c.type === 'workshops' && (
                <CardContent className="p-6 flex-1 flex flex-col space-y-6">
                  <h3 className="text-xl font-bangers text-primary">
                    Hula Hoop &amp; Juggling Workshops
                  </h3>
                  {/* Hula Hoop Making */}
                  <div>
                    <h4 className="font-medium mb-1">Hula Hoop Making Workshop</h4>
                    <p className="text-muted-foreground mb-2">
                      Each participant will design and decorate their very own
                      custom hoop to take home. Includes short demo of hoop tricks,
                      tubing selection guidance, and all materials.
                    </p>
                    <p className="text-sm">
                      <strong>Duration:</strong> 1–2 hours
                      <br />
                      <strong>Price:</strong> $300 + $15/hoop (materials)
                    </p>
                  </div>
                  {/* Juggling Ball Making */}
                  <div>
                    <h4 className="font-medium mb-1">Juggling Ball Making Workshop</h4>
                    <p className="text-muted-foreground mb-2">
                      Learn to craft your own 3‑ball juggling set and juggling scarfs
                      to take home, plus a mini juggling lesson. All materials provided.
                    </p>
                    <p className="text-sm">
                      <strong>Duration:</strong> 1–2 hours
                      <br />
                      <strong>Price:</strong> $300 (up to 25 participants)
                    </p>
                  </div>
                </CardContent>
              )}

              {/* enquire button */}
              <CardContent className="p-6 pt-0 mt-auto">
                <Button
                  onClick={() => enquire(c.title)}
                  className="btn-beast w-full"
                >
                  Enquire Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
