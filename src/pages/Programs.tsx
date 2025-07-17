import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Programs.css";

const programs = [
  {
    title: "The Hula Hoop Beast Experience",
    description:import { Calendar, Users, Trophy, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: "Hoopin & Groovin with Greg & Shanda",
      description: "Shanda performs amazing hula hoop tricks and dazzles the crowd while Greg plays and sings classic rock songs with his acoustic guitar. They are a fun and dynamic duo and are guaranteed to impress and entertain!",
      duration: "1 Hour Set",
      sessions: 1,
      price: "$350",
      features: [
        "Hula hoop tricks by Shanda",
        "Live classic rock music by Greg",
        "Interactive entertainment",
        "Perfect for events, parties, and libraries"
      ],
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
                  <CardTitle className="font-bangers text-2xl text-gradient-beast">
                    {program.title}
                  </CardTitle>
                  <CardDescription className="text-base">
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
                    {program.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
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
                    <Button className="btn-beast">
                      Join Program
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
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




      "This high-energy 45-minute interactive show is perfect for families and audiences of all ages. Performed to music, it features dazzling hula hoop tricks and crowd participation. Shanda brings the fun, laughter, and movement — your crowd brings the energy!",
    price: "$300 flat rate",
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
    duration: "45 min. Set",
    price: "$350",
    features: [
      "Hula hoop tricks by Shanda",
      "Live classic rock music by Greg",
      "Interactive entertainment",
      "Perfect for events, parties, and libraries"
    ],
    videoUrl: "https://www.youtube.com/embed/tKJ18SIWM_M",
  },
  {
    title: "Level Up – 5 Rings of Gravity to Save Planet Earth!",
    description:
      "Help Shanda recover the 5 Rings of Gravity in this 45-minute “video game” adventure! Volunteers solve clue-based challenges at each level while Shanda powers up with progressively harder hoop & juggling tricks. Perfect for ages 4–12 — fun for the whole family!",
    price: "$300 flat rate",
    duration: "45 minutes",
    videoUrl: "https://www.youtube.com/embed/PMy9erGocIE",
  },
];

const workshops = [
  {
    title: "Hula Hoop Making Workshop",
    description:
      "Participants will design and decorate their very own hula hoop to take home! Fun, creative, and hands-on. Great for kids and families.",
    price: "Pricing varies by group size",
    image: "/lovable-uploads/hulahoops.jpg",
  },
  {
    title: "Juggling Ball Making Workshop",
    description:
      "Learn to make your own set of juggling balls using fun materials! Includes a mini lesson to get you started on your juggling journey.",
    price: "Pricing varies by group size",
    image: "/lovable-uploads/jugglingballs.jpg",
  },
];

const Programs = () => {
  const navigate = useNavigate();

  const handleEnquireClick = (program) => {
    navigate(`/contact?program=${encodeURIComponent(program)}`);
  };

  return (
    <div className="programs-page">
      <div className="hero">
        <h1>Performance Programs</h1>
        <p>
          I bring high-energy hula hoop performances and creative workshops to
          schools, libraries, parties, fairs, and festivals. Explore the program
          options below!
        </p>
        <div className="policies">
          <h2 style={{ fontFamily: 'Cursive', textAlign: 'center', fontSize: '1.5rem', color: '#000' }}>
            Booking & Travel Policies
          </h2>
          <p style={{ textAlign: 'center', color: '#000', fontSize: '1rem' }}>
            If multiple performances are booked, there is a $50 discount on each
            program that is booked consecutively on the same date and in the same
            area.
            <br />
            I charge a travel fee if traveling more than 50 miles from Gresham,
            Oregon. For each mile over 50 miles to the destination, I charge $1.
            If the distance exceeds 100 miles, the travel charge will be handled on
            a case-by-case basis.
          </p>
        </div>
      </div>

      <div className="programs-grid">
        {programs.map((program, index) => (
          <div className="program-card" key={index}>
            <div className="media-wrapper">
              <iframe
                width="100%"
                height="215"
                src={program.videoUrl}
                title={program.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3>{program.title}</h3>
            <p>{program.description}</p>
            <ul>
              {program.features?.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p><strong>Duration:</strong> {program.duration || "45 minutes"}</p>
            <p><strong>Price:</strong> {program.price}</p>
            <button onClick={() => handleEnquireClick(program.title)}>Enquire Now</button>
          </div>
        ))}

        {workshops.map((workshop, index) => (
          <div className="program-card" key={index + programs.length}>
            <div className="media-wrapper">
              <img
                src={workshop.image}
                alt={workshop.title}
                style={{ width: "100%", height: "215px", objectFit: "cover" }}
              />
            </div>
            <h3>{workshop.title}</h3>
            <p>{workshop.description}</p>
            <p><strong>Price:</strong> {workshop.price}</p>
            <button onClick={() => handleEnquireClick(workshop.title)}>Enquire Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
