import { Calendar, Users, Trophy, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: "Hoopin & Groovin with Greg & Shanda",
      description: "",
      duration: "1 Hour Set",
      sessions: 1,
      price: "",
      features: [],
      image: "/hoopin_groovin_preview.png",
      color: "bg-green-500"
    },
    // other programs here...
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
            Looking for a show or interactive experience? I offer exciting, energizing
            programs for schools, libraries, parks, parties, and more — custom-tailored to
            your audience. Let’s bring the Hula hoop beast to your event!
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <Card key={program.id} className="relative overflow-hidden hover-lift shadow-beast">
                <div className={`absolute top-0 left-0 right-0 h-2 ${program.color}`}></div>
                <CardHeader>
                  <CardTitle className="font-bangers text-2xl text-gradient-beast text-center">
                    {program.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {program.image && (
                    <img
                      src={program.image}
                      alt={program.title}
                      className="rounded-lg w-full object-cover"
                    />
                  )}
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
