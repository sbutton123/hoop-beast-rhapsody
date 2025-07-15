import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-beast overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:60px_60px] animate-pulse"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Heading */}
          <h1 className="font-bangers text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white animate-bounce-gentle">
            UNLEASH YOUR
            <br />
            <span className="text-beast-orange">BEAST</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-inter font-light max-w-3xl mx-auto">
            Transform your fitness journey with dynamic hula hoop workouts that ignite your inner strength and unleash your athletic potential
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="btn-beast text-lg font-bangers tracking-wide">
              START YOUR JOURNEY
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="btn-beast-outline text-lg font-bangers tracking-wide bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary"
            >
              <Play className="mr-2 h-5 w-5" />
              WATCH DEMO
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="font-bangers text-4xl text-beast-orange animate-float">1000+</div>
              <div className="text-white/80 font-inter">Beast Transformations</div>
            </div>
            <div className="text-center">
              <div className="font-bangers text-4xl text-beast-orange animate-float delay-500">50+</div>
              <div className="text-white/80 font-inter">Dynamic Workouts</div>
            </div>
            <div className="text-center">
              <div className="font-bangers text-4xl text-beast-orange animate-float delay-1000">24/7</div>
              <div className="text-white/80 font-inter">Beast Support</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 border-4 border-white/30 rounded-full animate-bounce-gentle"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 border-4 border-beast-orange/50 rounded-full animate-float"></div>
      <div className="absolute top-1/2 left-10 w-12 h-12 border-4 border-secondary/50 rounded-full animate-bounce-gentle delay-700"></div>
    </section>
  );
};

export default Hero;