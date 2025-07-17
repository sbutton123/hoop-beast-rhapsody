// src/pages/Programs.tsx
import { useNavigate } from 'react-router-dom';
import { Calendar, Users, Trophy, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Programs = () => {
  const navigate = useNavigate();
  const programs = [
    {
      id: 1,
      title: "The Hula Hoop Beast Experience",
      description:
        "This high-energy 45-minute interactive show is perfect for families and audiences of all ages. Performed to music, it features dazzling hula hoop tricks and crowd participation. Shanda brings the fun, laughter, and movement — your crowd brings the energy!",
      duration: "45 min",
      sessions: 1,
      price: "$300 flat rate",
      videoUrl: "https://www.youtube.com/embed/NHJKBceyUgk",
      color: "bg-beast-orange",
    },
    {
      id: 2,
      title: "Hoopin & Groovin with Greg & Shanda",
      description:
        "Shanda performs amazing hula hoop tricks and dazzles the crowd while Greg plays and sings classic rock songs with his acoustic guitar. They are a fun and dynamic duo and are guaranteed to impress and entertain!",
      duration: "1 Hour Set",
      sessions: 1,
      price: "$350",
      videoUrl: "https://www.youtube.com/embed/tKJ18SIWM_M",
      color: "bg-accent",
    },
    {
      id: 3,
      title: "Hula Hoop Making Workshop",
      description:
        "Workshop includes a short performance of amazing hula hoop tricks. Learn about various types of hoops & my journey in becoming a Hula Hoop Extraordinaire. Each participant builds a colorful custom hoop—specific to their size & skill level. All supplies provided.",
      duration: "1–2 hours",
      sessions: 1,
      price: "$300 + $15/hoop (materials)",
      imageUrl: "/hulahoops.jpg",
      color: "bg-secondary",
    },
    {
      id: 4,
      title: "Juggling Ball Making Workshop",
      description:
        "Studies have shown juggling can boost grey-matter density & reduce anxiety. Participants learn juggling with scarves & balls, then craft a 3-ball set to take home—each ball weighted to their preference. All supplies provided.",
      duration: "1–2 hours",
      sessions: 1,
      price: "$300 (up to 25 participants)",
      imageUrl: "/jugglingballs.jpg",
      color: "bg-secondary",
    },
    {
      id: 5,
      title: "Level Up – 5 Rings of Gravity",
      description:
        "Level Up brings you five gravity-defying ring routines paired with interactive audience challenges. Perfect for schools, festivals, and community events—this show will leave everyone mesmerized.",
      duration: "30–60 min",
      sessions: 1,
      price: "$400",
      imageUrl: "/5rings.jpg", // replace with your image file
      color: "bg-primary",
    },
  ];

  const handleEnquire = (title: string) => {
    navigate(`/contact?program=${encodeURIComponent(title)}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-beast py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-bangers text-5xl text-white mb-4">
            BEAST PROGRAMS
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-6">
            Looking for a show or interactive experience? I offer exciting,
            energizing programs for schools, libraries, parks, parties, and
            more — custom-tailored to your audience. Let’s bring the Hula Hoop
            Beast to your event!
          </p>

          {/* Booking & Travel Policies */}
          <p className="font-bangers text-2xl text-black mb-2">
            Booking &amp; Travel Policies
          </p>
          <div className="text-base text-black max-w-md mx-auto space-y-1 mb-8">
            <p>
              Multiple bookings receive a $50 discount each when scheduled
              consecutively on the same date and in the same area.
            </p>
            <p>
              Travel fee applies beyond 50 miles from Gresham, OR: $1 per mile
              over 50; above 100 miles is case by case.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <Card
                key={program.id}
                className="h-full flex flex-col hover-lift shadow-beast"
              >
                {/* Top color bar */}
                <div className={`${program.color} h-1 w-full`} />

                <CardHeader>
                  <CardTitle className="font-bangers text-xl">
                    {program.title}
                  </CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  {/* Video or Image */}
                  {program.videoUrl && (
                    <div className="relative pb-[56.25%] mb-4">
                      <iframe
                        src={program.videoUrl}
                        title={program.title}
                        frameBorder="0"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full rounded-lg"
                      />
                    </div>
                  )}
                  {!program.videoUrl && program.imageUrl && (
                    <img
                      src={program.imageUrl}
                      alt={program.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                  )}

                  {/* Stats */}
                  <div className="flex items-center justify-between bg-muted p-2 rounded mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span className="text-sm">{program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span className="text-sm">
                        {program.sessions} session
                      </span>
                    </div>
                  </div>

                  {/* Spacer pushes price & button to bottom */}
                  <div className="flex-1" />

                  {/* Price */}
                  <div className="text-2xl font-bangers text-beast-orange mb-4 text-center">
                    {program.price}
                  </div>

                  {/* Enquire Button */}
                  <Button
                    onClick={() => handleEnquire(program.title)}
                    className="btn-beast w-full"
                  >
                    Enquire Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
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
