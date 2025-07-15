// src/components/ui/Hero.tsx
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-beast overflow-hidden">
      {/* Left: looping video */}
      <div className="absolute left-4 sm:left-8 md:left-16 lg:left-24 top-1/2 transform -translate-y-1/2 z-20">
        <video
          className="w-32 sm:w-48 md:w-64 lg:w-80 h-auto opacity-90 animate-float"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="/3hoop-duck-out-mobile.webm"
            type="video/webm"
          />
          Your browser doesn’t support HTML5 video.
        </video>
      </div>

      {/* Right: static hoop image */}
      <div className="absolute right-4 sm:right-8 md:right-16 lg:right-24 top-1/2 transform -translate-y-1/2 z-20">
        <img
          src="/lovable-uploads/aa66bb76-99ad-4824-9e6a-0edda4d38cba.png"
          alt="Hula hooping multiple hoops"
          className="w-32 sm:w-48 md:w-64 lg:w-80 h-auto opacity-90 animate-float delay-500"
        />
      </div>

      {/* Centered headline & CTAs */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-bangers text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white animate-bounce-gentle leading-tight">
          UNLEASH YOUR
          <br />
          <span
            className="inline-block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-black"
            style={{ textShadow: "2px 2px 4px rgba(255,255,255,0.8)" }}
          >
            INNER&nbsp;
          </span>
          <span
            className="inline-block text-beast-orange text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
          >
            BEAST
          </span>
        </h1>

        <p className="mt-6 text-xl sm:text-2xl md:text-3xl text-white/90 font-inter font-light max-w-3xl mx-auto">
          Transform your fitness journey with dynamic hula hoop workouts that ignite your inner strength and unleash your athletic potential
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
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
        <div className="mt-16 pt-8 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-white/20">
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
    </section>
  );
}
