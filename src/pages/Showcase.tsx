// src/pages/Showcase.tsx
import React from "react";
import { Card } from "@/components/ui/card";

const videos = [
  { id: 1, videoUrl: "https://www.youtube.com/embed/U76PMiitJ1I" },
  { id: 2, videoUrl: "https://www.youtube.com/embed/_PRQgxwIXFs" },
  { id: 3, videoUrl: "https://youtube.com/shorts/u3TYbxcSxPU" },
  { id: 4, videoUrl: "https://www.youtube.com/embed/x0ullahvn8E" },
  { id: 5, videoUrl: "https://www.youtube.com/embed/0_OMZ-YeD0o" },
  { id: 6, videoUrl: "https://www.youtube.com/embed/U76PMiitJ1I" } // swap in any other
];

const Showcase = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-beast py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-bangers text-5xl md:text-6xl text-white mb-6">
            BEAST MOVES
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Click any video to watch jaw‑dropping hoop flow from the Hula Hoop Beast community.
          </p>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map(({ id, videoUrl }) => (
              <Card key={id} className="hover-lift shadow-beast overflow-hidden">
                <div className="aspect-video w-full">
                  <iframe
                    src={videoUrl}
                    title={`Showcase video ${id}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Showcase;
