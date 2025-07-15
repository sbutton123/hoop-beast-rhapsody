import { Calendar, Users, Trophy, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: "Beast Beginner Bootcamp",
      description: "Perfect for complete beginners. Learn fundamentals and build confidence in 4 weeks.",
      duration: "4 weeks",
      sessions: 12,
      price: "$89",
      features: [
        "Basic hoop techniques",
        "Fundamental movements",
        "Core strength building",
        "Beginner-friendly routines"
      ],
      color: "bg-green-500"
    },
    {
      id: 2,
      title: "Flow State Mastery",
      description: "Advanced program for seamless transitions and fluid movements. Unlock your flow potential.",
      duration: "6 weeks",
      sessions: 18,
      price: "$149",
      features: [
        "Advanced flow techniques",
        "Seamless transitions",
        "Creative expression",
        "Performance preparation"
      ],
      color: "bg-purple-500"
    },
    {
      id: 3,
      title: "Beast Fitness Fusion",
      description: "High-intensity hoop workouts combining cardio, strength, and flexibility training.",
      duration: "8 weeks",
      sessions: 24,
      price: "$199",
      features: [
        "HIIT hoop workouts",
        "Strength conditioning",
        "Flexibility training",
        "Nutrition guidance"
      ],
      color: "bg-red-500"
    },
    {
      id: 4,
      title: "Dance Beast Revolution",
      description: "Fusion of dance and hoop for explosive, rhythm-based routines that ignite your passion.",
      duration: "6 weeks",
      sessions: 18,
      price: "$159",
      features: [
        "Dance fusion techniques",
        "Rhythm training",
        "Choreography creation",
        "Performance skills"
      ],
      color: "bg-pink-500"
    },
    {
      id: 5,
      title: "Beast Instructor Certification",
      description: "Comprehensive training to become a certified Beast hoop instructor.",
      duration: "12 weeks",
      sessions: 36,
      price: "$449",
      features: [
        "Teaching methodology",
        "Advanced techniques",
        "Safety protocols",
        "Business fundamentals"
      ],
      color: "bg-orange-500"
    },
    {
      id: 6,
      title: "Elite Beast Academy",
      description: "Our most intensive program for serious practitioners seeking mastery.",
      duration: "16 weeks",
      sessions: 48,
      price: "$599",
      features: [
        "Master-level techniques",
        "Personal mentorship",
        "Competition preparation",
        "Career guidance"
      ],
      color: "bg-blue-500"
    }
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
            Structured training programs designed to take your hoop skills from zero to beast. 
            Choose your path and unleash your potential.
          </p>
          <Button size="lg" className="btn-beast">
            FIND YOUR PROGRAM
          </Button>
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
                  {/* Program Stats */}
                  <div className="flex items-center justify-between mb-6 p-4 bg-muted rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span className="text-sm">{program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-primary" />
                      <span className="text-sm">{program.sessions} sessions</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {program.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Trophy className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price and CTA */}
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