import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const flyers = [
  {
    key: "groovin",
    image: "/lovable-uploads/hoopin&groovin.png",
    alt: "Hoopin & Groovin with Greg & Shanda flyer",
    duration: "45 min.",
    price: "$350",
  },
  {
    key: "harvest",
    image: "/lovable-uploads/hulahoopharvest.png",
    alt: "Hula Hoop Harvest flyer",
    duration: "45 min.",
    price: "$300",
  },
];

const secondRow = [
  {
    key: "ology",
    image: "/lovable-uploads/hulahoopology.png",
    alt: "Hula‑Hoop‑Ology: Dig Up Your Skills flyer",
    duration: "45 min.",
    price: "$300",
  },
  {
    key: "juggle-workshop",
    image: "/lovable-uploads/hulahoopandjugglingballs.png",
    alt: "Juggling Ball Making Workshop flyer",
  },
];

const videoProgram = {
  key: "beast-experience",
  title: "The Hula Hoop Beast Experience",
  description:
    "This high‑energy 45‑minute interactive show is perfect for families and audiences of all ages. Performed to music, it features dazzling hula hoop tricks and crowd participation. Shanda brings the fun, laughter, and movement — your crowd brings the energy!",
  duration: "45 minutes",
  price: "$300 flat rate",
  videoUrl: "https://www.youtube.com/embed/LDlvHRzV3ss",
};

export default function Programs() {
  const navigate = useNavigate();
  const enquire = (program: string) =>
    navigate(`/contact?program=${encodeURIComponent(program)}`);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section (reduced vertical padding) */}
      <section className="bg-gradient-beast py-12">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h1 className="font-bangers text-5xl text-white mb-4">
            BEAST PROGRAMS
          </h1>
          <p className="text-lg text-white/90 mb-6">
            Looking for a show or interactive experience? I offer exciting,
            energizing programs for schools, libraries, parks, parties, and
            more — custom‑tailored to your audience. Let’s bring the Hula Hoop
            Beast to your event!
          </p>
        </div>
      </section>

      {/* Booking & Travel Policies */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-card rounded-lg p-6 shadow-beast">
            <h2 className="text-2xl font-bangers text-center mb-4">
              Booking &amp; Travel Policies
            </h2>
            <p className="text-center mb-2">
              • $50 off each program when you book multiple shows on the same
              date &amp; area
            </p>
            <p className="text-center">
              • $1/mile travel fee beyond 50 miles from Gresham, OR • 100+ miles
              quoted case by case
            </p>
          </div>
        </div>
      </section>

      {/* Top row: 2 flyer cards */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {flyers.map((f) => (
              <Card
                key={f.key}
                className="hover-lift border-2 border-gray-200 bg-muted flex flex-col h-full"
              >
                <div className="w-full overflow-hidden rounded-t-lg flex justify-center">
                  <img
                    src={f.image}
                    alt={f.alt}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <p className="text-center text-sm mb-4">
                    Program is {f.duration} &nbsp;Cost is {f.price}
                  </p>
                  <div className="mt-auto">
                    <Button
                      onClick={() => enquire(f.key)}
                      className="btn-beast w-full"
                    >
                      Enquire Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Second row: 2 cards */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secondRow.map((f) => (
              <Card
                key={f.key}
                className="hover-lift border-2 border-gray-200 bg-muted flex flex-col h-full"
              >
                <div className="w-full overflow-hidden rounded-t-lg flex justify-center">
                  <img
                    src={f.image}
                    alt={f.alt}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  {f.duration && f.price && (
                    <p className="text-center text-sm mb-4">
                      Program is {f.duration} &nbsp;Cost is {f.price}
                    </p>
                  )}
                  <div className="mt-auto">
                    <Button
                      onClick={() => enquire(f.key)}
                      className="btn-beast w-full"
                    >
                      Enquire Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Third row: Beast Experience video */}
      <section className="pb-20">
        <div className="max-w-3xl mx-auto px-4">
          <Card className="hover-lift border-2 border-gray-200 bg-muted flex flex-col h-full">
            <div className="aspect-video w-full overflow-hidden rounded-t-lg">
              <iframe
                src={videoProgram.videoUrl}
                title={videoProgram.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <CardContent className="p-6 flex-1 flex flex-col">
              <h3 className="text-2xl font-bangers mb-4">
                {videoProgram.title}
              </h3>
              <p className="flex-1 mb-4 text-muted-foreground">
                {videoProgram.description}
              </p>
              <p className="text-sm mb-2">
                <strong>Duration:</strong> {videoProgram.duration}
              </p>
              <p className="text-sm mb-4">
                <strong>Price:</strong> {videoProgram.price}
              </p>
              <Button
                onClick={() => enquire(videoProgram.key)}
                className="btn-beast w-full mt-auto"
              >
                Enquire Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
