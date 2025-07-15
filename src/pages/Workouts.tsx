import { Clock, Flame, Target, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Workouts = () => {
  const workouts = [
    {
      id: 1,
      title: "Beast Mode Cardio Blast",
      description: "High-intensity cardio workout that will leave you breathless and energized",
      duration: "30 min",
      intensity: "High",
      calories: "450-600",
      category: "Cardio",
      difficulty: "Intermediate"
    },
    {
      id: 2,
      title: "Core Beast Destroyer",
      description: "Targeted core workout using hoop resistance for maximum burn",
      duration: "20 min",
      intensity: "High",
      calories: "300-400",
      category: "Core",
      difficulty: "Advanced"
    },
    {
      id: 3,
      title: "Flow & Flex Recovery",
      description: "Gentle flowing movements for active recovery and flexibility",
      duration: "25 min",
      intensity: "Low",
      calories: "150-200",
      category: "Recovery",
      difficulty: "Beginner"
    },
    {
      id: 4,
      title: "Power Beast Strength",
      description: "Build functional strength with resistance-based hoop exercises",
      duration: "35 min",
      intensity: "High",
      calories: "400-550",
      category: "Strength",
      difficulty: "Advanced"
    },
    {
      id: 5,
      title: "Dance Fusion Fire",
      description: "Explosive dance-inspired routine that combines rhythm and fitness",
      duration: "28 min",
      intensity: "Medium",
      calories: "350-450",
      category: "Dance",
      difficulty: "Intermediate"
    },
    {
      id: 6,
      title: "Morning Beast Wake-Up",
      description: "Energizing morning routine to start your day with beast energy",
      duration: "15 min",
      intensity: "Medium",
      calories: "200-300",
      category: "Energy",
      difficulty: "Beginner"
    }
  ];

  const getIntensityColor = (intensity: string) => {
    switch (intensity) {
      case 'Low':
        return 'bg-green-100 text-green-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'High':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-blue-100 text-blue-800';
      case 'Intermediate':
        return 'bg-purple-100 text-purple-800';
      case 'Advanced':
        return 'bg-orange-100 text-orange-800';
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
            BEAST WORKOUTS
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Ignite your fitness journey with our dynamic hoop workouts. From gentle flows 
            to beast mode intensity - find your perfect challenge.
          </p>
          <Button size="lg" className="btn-beast">
            <Play className="mr-2 h-5 w-5" />
            START SWEATING
          </Button>
        </div>
      </section>

      {/* Workout Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {['Cardio', 'Strength', 'Core', 'Recovery'].map((category) => (
              <Button
                key={category}
                variant="outline"
                className="h-16 font-bangers text-lg hover:bg-gradient-beast hover:text-white"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Workouts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workouts.map((workout) => (
              <Card key={workout.id} className="hover-lift shadow-beast">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getIntensityColor(workout.intensity)}`}>
                      {workout.intensity} Intensity
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(workout.difficulty)}`}>
                      {workout.difficulty}
                    </span>
                  </div>
                  <CardTitle className="font-bangers text-xl text-gradient-beast">
                    {workout.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {workout.description}
                  </CardDescription>
                  
                  {/* Workout Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm">{workout.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Flame className="h-4 w-4 text-primary" />
                      <span className="text-sm">{workout.calories} cal</span>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Target className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{workout.category}</span>
                    </div>
                    <Button size="sm" className="btn-beast">
                      <Play className="mr-2 h-4 w-4" />
                      Start
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

export default Workouts;