// src/pages/Programs.tsx
import { Calendar, Users, Trophy, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: 'The Hula Hoop Beast Experience',
      videoId: 'NHJKBceyUgk',
      description: `This high‑energy 45‑minute interactive show is perfect for families and audiences of all ages. Performed to music, it features dazzling hula hoop tricks and crowd participation. Shanda brings the fun, laughter, and movement — your crowd brings the energy!`,
      duration: '45 min',
      sessions: 1,
      price: '$300',
      features: [
        'Family‑friendly interactive show',
        'Live music & crowd participation',
        'Dazzling hoop choreography',
        'Volunteer segments + dance‑along finale',
      ],
      color: 'bg-beast-orange',
    },
    {
      id: 2,
      title: 'Hoopin & Groovin with Greg & Shanda',
      videoId: 'tKJ18SIWM_M',
      description: `Shanda performs amazing hula hoop tricks while Greg plays classic rock on guitar. This dynamic duo delivers a fun, interactive set your audience will love!`,
      duration: '1 Hour',
      sessions: 1,
      price: '$350',
      features: [
        'Hula hoop feats by Shanda',
        'Live guitar & vocals by Greg',
        'Audience participation',
        'Ideal for parties, libraries & fairs',
      ],
      color: 'bg-green-500',
    },
    // …add more programs here, each with its own videoId…
  ];

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
            energizing programs for schools, libraries, parks, parties, and more
            — custom‑tailored to your audience. Let’s bring the Hula Hoop Beast
            to your event!
          </p>
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
                {/* colored top bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-2 ${program.color}`}
                />

                {/* Video embed */}
                <div className="relative pt-[56.25%] w-full">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-t-lg"
                    src={`https://www.youtube.com/embed/${program.videoId}`}
                    title={program.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <CardHeader>
                  <CardTitle className="font-bangers text-2xl text-gradient-beast mt-4">
                    {program.title}
                  </CardTitle>
                  <CardDescription className="text-base whitespace-pre-wrap">
                    {program.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
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

                  <div className="space-y-2 mb-6">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Trophy className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-bangers text-3xl text-gradient-beast">
                        {program.price}
                      </span>
                    </div>
                    {/* Enquire Now button auto‑fills the program in the contact form */}
                    <Link
                      to={`/contact?program=${encodeURIComponent(
                        program.title
                      )}`}
                    >
                      <Button className="btn-beast inline-flex items-center">
                        Enquire Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
