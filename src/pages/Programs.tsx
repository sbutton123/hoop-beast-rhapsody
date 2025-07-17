import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const programs = [
  {
    title: "The Hula Hoop Beast Experience",
    description:
      "This high-energy 45-minute interactive show is perfect for families and audiences of all ages. Performed to music, it features dazzling hula hoop tricks and crowd participation. Shanda brings the fun, laughter, and movement — your crowd brings the energy!",
    price: "$300 flat rate",
    duration: "45 minutes",
    features: [
      "Great for schools, libraries, fairs, parties, and festivals",
      "Includes volunteer segments + crowd dance-along finale!"
    ],
    videoUrl: "https://www.youtube.com/embed/NHJKBceyUgk",
  },
  {
    title: "Hoopin & Groovin with Greg & Shanda",
    description:
      "Shanda performs amazing hula hoop tricks and dazzles the crowd while Greg plays and sings classic rock songs with his acoustic guitar. They are a fun and dynamic duo and are guaranteed to impress and entertain!",
    duration: "45 min set",
    price: "$350",
    features: [
      "Hula hoop tricks by Shanda",
      "Live classic rock music by Greg",
      "Perfect for events, parties, and libraries"
    ],
    videoUrl: "https://www.youtube.com/embed/tKJ18SIWM_M",
  },
  {
    title: "Level Up – 5 Rings of Gravity to Save Planet Earth!",
    description:
      "Help Shanda recover the 5 Rings of Gravity in this 45-minute \"video game\" adventure! Volunteers solve clue-based challenges at each level while Shanda powers up with progressively harder hoop & juggling tricks. Perfect for ages 4–12 — fun for the whole family!",
    price: "$300 flat rate",
    duration: "45 minutes",
    videoUrl: "https://www.youtube.com/embed/PMy9erGocIE",
  },
];

const workshops = [
  {
    title: "Hula Hoop Making Workshop",
    description:
      "Shanda will do a short demo of amazing hula hoop tricks. Participants will discover the perfect size hoop and tubing material for their body type and experience level. They will build and decorate their very own hula hoop to take home! Fun, creative, and hands-on. Great for kids and families.",
    price: "$300 + $15/hoop (materials)",
    duration: "1 - 2 hours",
    image: "/lovable-uploads/hulahoops.jpg",
  },
  {
    title: "Juggling Ball Making Workshop",
    description:
      "Learn to make your own set of juggling balls using fun materials! Includes a mini lesson with juggling scarfs to get you started on your juggling journey. Each participant takes home 3 scarves and 3 juggling balls.",
    price: "$300 - includes all materials (up to 25 participants)",
    duration: "1 - 2 hours",
    image: "/lovable-uploads/jugglingballs.jpg",
  },
];

const Programs = () => {
  const navigate = useNavigate();

  const handleEnquireClick = (program: string) => {
    navigate(`/contact?program=${encodeURIComponent(program)}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bangers text-gradient-beast mb-6">
            Performance Programs
          </h1>
          <p className="text-lg text-foreground max-w-3xl mx-auto mb-8">
            I bring high-energy hula hoop performances and creative workshops to
            schools, libraries, parties, fairs, and festivals. Explore the program
            options below!
          </p>
          
          {/* Booking & Travel Policies */}
          <div className="bg-card rounded-lg p-6 shadow-beast max-w-4xl mx-auto">
            <h2 className="text-2xl font-bangers text-center text-foreground mb-4">
              Booking & Travel Policies
            </h2>
            <div className="text-foreground text-center space-y-3">
              <p>
                If multiple performances are booked, there is a $50 discount on each
                program that is booked consecutively on the same date and in the same
                area.
              </p>
              <p>
                I charge a travel fee if traveling more than 50 miles from Gresham,
                Oregon. For each mile over 50 miles to the destination, I charge $1.
                If the distance exceeds 100 miles, the travel charge will be handled on
                a case-by-case basis.
              </p>
            </div>
          </div>
        </div>

        {/* Programs Grid - Top Row (3 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {programs.map((program, index) => (
            <Card key={index} className="hover-lift h-full flex flex-col">
              <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src={program.videoUrl}
                  title={program.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <CardContent className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bangers text-primary mb-3">
                  {program.title}
                </h3>
                <p className="text-muted-foreground mb-4 flex-1">
                  {program.description}
                </p>
                {program.features && (
                  <ul className="list-disc pl-5 text-sm text-muted-foreground mb-4 space-y-1">
                    {program.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                )}
                <div className="space-y-2 mb-4">
                  <p className="text-sm">
                    <strong>Duration:</strong> {program.duration}
                  </p>
                  <p className="text-sm">
                    <strong>Price:</strong> {program.price}
                  </p>
                </div>
                <Button 
                  onClick={() => handleEnquireClick(program.title)}
                  className="btn-beast w-full mt-auto"
                >
                  Enquire Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Workshops Grid - Bottom Row (2 cards centered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {workshops.map((workshop, index) => (
            <Card key={index} className="hover-lift h-full flex flex-col">
              <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                <img
                  src={workshop.image}
                  alt={workshop.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bangers text-primary mb-3">
                  {workshop.title}
                </h3>
                <p className="text-muted-foreground mb-4 flex-1">
                  {workshop.description}
                </p>
                <div className="space-y-2 mb-4">
                  <p className="text-sm">
                    <strong>Duration:</strong> {workshop.duration}
                  </p>
                  <p className="text-sm">
                    <strong>Price:</strong> {workshop.price}
                  </p>
                </div>
                <Button 
                  onClick={() => handleEnquireClick(workshop.title)}
                  className="btn-beast w-full mt-auto"
                >
                  Enquire Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;