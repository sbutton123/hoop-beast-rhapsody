import { Play, Clock, Star, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Tutorials = () => {
  const tutorials = [
    {
      id: 1,
      title: "Beast Basics: Your First Hoop",
      description: "Master the fundamentals and get your hoop spinning like a pro",
      duration: "15 min",
      difficulty: "Beginner",
      rating: 4.9,
      category: "Basics"
    },
    {
      id: 2,
      title: "Flow State Mastery",
      description: "Advanced techniques for seamless transitions and fluid movements",
      duration: "25 min",
      difficulty: "Advanced",
      rating: 4.8,
      category: "Flow"
    },
    {
      id: 3,
      title: "Core Beast Workout",
      description: "Intense core-focused hoop routine for maximum results",
      duration: "30 min",
      difficulty: "Intermediate",
      rating: 4.9,
      category: "Fitness"
    },
    {
      id: 4,
      title: "Dance Fusion Beast",
      description: "Combine dance moves with hoop flow for an explosive routine",
      duration: "20 min",
      difficulty: "Intermediate",
      rating: 4.7,
      category: "Dance"
    },
    {
      id: 5,
      title: "Beast Strength Training",
      description: "Build power and endurance with targeted hoop exercises",
      duration: "35 min",
      difficulty: "Advanced",
      rating: 4.8,
      category: "Strength"
    },
    {
      id: 6,
      title: "Flexibility & Flow",
      description: "Improve flexibility while maintaining perfect hoop control",
      duration: "22 min",
      difficulty: "Beginner",
      rating: 4.6,
      category: "Flexibility"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-beast py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-bangers text-5xl md:text-6xl text-white mb-6">
            BEAST TUTORIALS
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Master the art of hula hooping with our comprehensive video tutorials. 
            From beginner basics to advanced beast mode techniques.
          </p>
          <Button size="lg" className="btn-beast">
            <Play className="mr-2 h-5 w-5" />
            START LEARNING
          </Button>
        </div>
      </section>

      {/* Tutorials Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial) => (
              <Card key={tutorial.id} className="hover-lift shadow-beast">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(tutorial.difficulty)}`}>
                      {tutorial.difficulty}
                    </span>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      {tutorial.rating}
                    </div>
                  </div>
                  <CardTitle className="font-bangers text-xl text-gradient-beast">
                    {tutorial.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {tutorial.description}
                  </CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {tutorial.duration}
                    </div>
                    <Button variant="outline" size="sm">
                      Watch Now
                      <ChevronRight className="ml-1 h-4 w-4" />
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

export default Tutorials;