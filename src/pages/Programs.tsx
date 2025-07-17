import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const Programs = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-beast py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-bangers text-5xl md:text-6xl text-white mb-6">
            BEAST PROGRAMS
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Looking for a show or interactive experience? I offer exciting, energizing programs for schools, libraries, parks, parties, and more — custom-tailored to your audience. Let’s bring the Hula Hoop Beast to your event!
          </p>
          {/* Booking & Travel Policies */}
          <div className="max-w-2xl mx-auto">
            <h2 className="font-bangers text-2xl text-black mb-2">Booking &amp; Travel Policies</h2>
            <p className="text-white/80 font-inter mb-1">
              $50 discount for consecutive bookings on the same date and area.
            </p>
            <p className="text-white/80 font-inter">
              Travel fee: $1 per mile over 50 miles from Gresham, OR; custom pricing for trips over 100 miles.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Top row: 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1. The Hula Hoop Beast Experience */}
            <Card className="h-full flex flex-col shadow-beast">
              <CardHeader>
                <CardTitle className="font-bangers text-2xl text-gradient-beast">
                  The Hula Hoop Beast Experience
                </CardTitle>
                <CardDescription>
                  High-energy 45‐minute interactive show perfect for families & audiences of all ages. Includes tricks, volunteers, & crowd dance‐along finale.
                </CardDescription>
              </CardHeader>
              <div className="relative flex-1">
                <iframe
                  className="w-full aspect-video"
                  src="https://www.youtube.com/embed/NHJKBceyUgk"
                  title="The Hula Hoop Beast Experience"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
              <CardContent className="mt-4">
                <Link to="/contact?program=The%20Hula%20Hoop%20Beast%20Experience">
                  <Button className="btn-beast w-full">
                    Enquire Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* 2. Hoopin & Groovin with Greg & Shanda */}
            <Card className="h-full flex flex-col shadow-beast">
              <CardHeader>
                <CardTitle className="font-bangers text-2xl text-gradient-beast">
                  Hoopin &amp; Groovin with Greg &amp; Shanda
                </CardTitle>
                <CardDescription>
                  Interactive family show with hula hoop tricks by Shanda and live music by Greg. A fun duo performance for any event.
                </CardDescription>
              </CardHeader>
              <div className="relative flex-1">
                <iframe
                  className="w-full aspect-video"
                  src="https://www.youtube.com/embed/tKJ18SIWM_M"
                  title="Hoopin & Groovin with Greg & Shanda"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
              <CardContent className="mt-4">
                <Link to="/contact?program=Hoopin%20%26%20Groovin%20with%20Greg%20%26%20Shanda">
                  <Button className="btn-beast w-full">
                    Enquire Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* 3. Level Up – 5 Rings of Gravity */}
            <Card className="h-full flex flex-col shadow-beast">
              <CardHeader>
                <CardTitle className="font-bangers text-2xl text-gradient-beast">
                  Level Up – 5 Rings of Gravity
                </CardTitle>
                <CardDescription>
                  Advanced hoop flow performance featuring five simultaneous hoops. A gravity‐defying spectacle.
                </CardDescription>
              </CardHeader>
              <div className="relative flex-1">
                <iframe
                  className="w-full aspect-video"
                  src="https://www.youtube.com/embed/PMy9erGocIE"
                  title="Level Up – 5 Rings of Gravity"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
              <CardContent className="mt-4">
                <Link to="/contact?program=Level%20Up%20%E2%80%93%205%20Rings%20of%20Gravity">
                  <Button className="btn-beast w-full">
                    Enquire Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Bottom row: 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 4. Hula Hoop Making Workshop */}
            <Card className="h-full flex flex-col shadow-beast">
              <CardHeader>
                <CardTitle className="font-bangers text-2xl text-gradient-beast">
                  Hula Hoop Making Workshop
                </CardTitle>
                <CardDescription>
                  Hands‐on session building your own custom hoop. All materials and tape techniques included.
                </CardDescription>
              </CardHeader>
              <div className="relative flex-1">
                <img
                  src="/lovable-uploads/hulahoops.jpg"
                  alt="Hula hoops"
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="mt-4">
                <Link to="/contact?program=Hula%20Hoop%20Making%20Workshop">
                  <Button className="btn-beast w-full">
                    Enquire Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* 5. Juggling Ball Making Workshop */}
            <Card className="h-full flex flex-col shadow-beast">
              <CardHeader>
                <CardTitle className="font-bangers text-2xl text-gradient-beast">
                  Juggling Ball Making Workshop
                </CardTitle>
                <CardDescription>
                  Learn to craft your own juggling balls from scratch. Includes materials & basic techniques.
                </CardDescription>
              </CardHeader>
              <div className="relative flex-1">
                <img
                  src="/lovable-uploads/jugglingballs.jpg"
                  alt="Juggling balls"
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="mt-4">
                <Link to="/contact?program=Juggling%20Ball%20Making%20Workshop">
                  <Button className="btn-beast w-full">
                    Enquire Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
