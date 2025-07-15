import { Heart, Users, Award, Target } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Movement",
      description: "We believe in the transformative power of movement and the joy it brings to life."
    },
    {
      icon: Users,
      title: "Community First",
      description: "Building a supportive community where everyone can grow and achieve their goals."
    },
    {
      icon: Award,
      title: "Excellence in Training",
      description: "Providing world-class instruction and innovative training methods."
    },
    {
      icon: Target,
      title: "Personal Growth",
      description: "Empowering individuals to push beyond their limits and discover their potential."
    }
  ];

  const team = [
    {
      name: "Sarah Beast",
      role: "Founder & Lead Instructor",
      bio: "Former professional dancer turned hoop fitness pioneer with 15+ years experience."
    },
    {
      name: "Mike Thunder",
      role: "Strength & Conditioning Coach",
      bio: "Certified personal trainer specializing in functional fitness and athletic performance."
    },
    {
      name: "Luna Goddess",
      role: "Flow & Flexibility Expert",
      bio: "Yoga instructor and movement therapist passionate about mind-body connection."
    },
    {
      name: "Alex Beast Master",
      role: "Community Manager",
      bio: "Dedicated to building connections and supporting our global beast community."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-beast py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-bangers text-5xl md:text-6xl text-white mb-6">
            ABOUT HULA HOOP BEAST
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Born from a passion for movement and community, Hula Hoop Beast revolutionizes 
            fitness by combining the joy of hula hooping with serious athletic training.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-bangers text-4xl text-gradient-beast mb-6">
              OUR BEAST STORY
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              What started as a simple love for hula hooping has evolved into a global movement. 
              We discovered that this childhood toy could be transformed into a powerful fitness tool 
              that builds strength, improves coordination, and ignites pure joy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-6">
              <h3 className="font-bangers text-2xl text-primary">The Beginning</h3>
              <p className="text-muted-foreground">
                Founded in 2020 by Sarah Beast, our journey began in a small studio with just five hoops 
                and a big dream. We wanted to create something different - a fitness experience that 
                didn't feel like work.
              </p>
              <p className="text-muted-foreground">
                Through countless hours of experimentation, we developed unique training methods that 
                combine cardiovascular fitness, strength training, and flow movement into one 
                exhilarating experience.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="font-bangers text-2xl text-primary">The Evolution</h3>
              <p className="text-muted-foreground">
                Today, Hula Hoop Beast has grown into a global community of thousands of practitioners 
                who have discovered their inner beast. Our innovative approach has been featured in 
                major fitness publications and adopted by gyms worldwide.
              </p>
              <p className="text-muted-foreground">
                We continue to push boundaries, constantly developing new techniques and programs 
                that challenge conventional fitness norms while maintaining the fun and accessibility 
                that defines our brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-bangers text-4xl text-gradient-beast mb-6">
              OUR BEAST VALUES
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do and shape the beast community we're building.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover-lift shadow-beast">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-beast rounded-full flex items-center justify-center mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="font-bangers text-xl text-gradient-beast">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-bangers text-4xl text-gradient-beast mb-6">
              MEET THE BEAST TEAM
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our passionate team of instructors and fitness experts are here to guide you 
              on your beast journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover-lift shadow-beast">
                <CardHeader>
                  <div className="mx-auto w-24 h-24 bg-gradient-beast rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-bangers text-lg">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle className="font-bangers text-xl text-gradient-beast">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="font-medium text-primary">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;