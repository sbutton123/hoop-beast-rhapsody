// src/components/Hero.tsx
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-beast">
      {/* Subtle animated grid pattern */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div
          className="
            absolute inset-0
            bg-white/5
            bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)]
            bg-[length:60px_60px]
            animate-pulse
          "
        />
      </div>

      {/* RIGHT-SIDE VIDEO */}
      <video
        className="
          absolute right-4 sm:right-8 md:right-16 lg:right-24
          top-[60%] md:top-[42%]
          transform -translate-y-1/2
          w-40 sm:w-56 md:w-72 lg:w-80
          rounded-2xl
          filter drop-shadow-2xl
          bg-transparent
          z-10
        "
        style={{
          objectFit: 'contain',
          objectPosition: 'center 20%',
          background: 'transparent',
        }}
        autoPlay
        muted
        loop
        playsInline
        aria-label="Demo hula hoop performance"
      >
        <source src="/assets/3hoopduckout.webm" type="video/webm" />
        Your browser doesn’t support HTML5 video.
      </video>

      {/* Logo on the left (optional) */}
      <div className="absolute left-4 sm:left-8 md:left-16 lg:left-24 top-[60%] md:top-[42%] transform -translate-y-1/2 z-20">
        <div className="w-48 sm:w-64 md:w-80 lg:w-96">
          <img
            src="/logo.png"
            alt="Hula Hoop Beast logo"
            className="w-full h-auto block"
          />
        </div>
      </div>

      {/* Hero glass text block */}
      <div className="relative z-30 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div
          className="
            backdrop-blur-md
            bg-gradient-to-br from-primary/10 via-primary/5 to-transparent
            border border-white/10
            rounded-3xl
            p-8 sm:p-12
            shadow-2xl shadow-primary/20
            hover:shadow-primary/30 transition-all duration-500
            text-center
            relative overflow-hidden
          "
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl pointer-events-none" />

          <h1 className="relative font-bangers leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-lg animate-bounce-gentle">
            UNLEASH YOUR<br />
            <span className="text-white/80 drop-shadow-lg text-3xl sm:text-4xl md:text-5xl">INNER</span>{' '}
            <span className="text-beast-orange drop-shadow-lg text-5xl sm:text-6xl md:text-7xl lg:text-8xl">BEAST</span>
          </h1>

          <p className="relative mt-6 text-base sm:text-lg md:text-xl text-white/95 font-inter font-light leading-relaxed drop-shadow-sm max-w-3xl mx-auto">
            Welcome to Hula Hoop Beast where strength meets flow and fun turns
            into fitness! Whether you're brand new to hooping or ready to level
            up your skills, you're in the right place. Dive into our tutorials,
            challenge yourself with workouts, or just get inspired by creative
            performances and hoop magic.
            <br /><br />
            <span className="text-beast-orange font-medium drop-shadow-md">
              Embrace your inner beast. Let's hoop!
            </span>
          </p>
        </div>

        {/* Floating hoop image */}
        <div className="mt-8 text-center">
          <img
            src="/lovable-uploads/aa66bb76-99ad-4824-9e6a-0edda4d38cba.png"
            alt="Hula hooping multiple hoops"
            className="mx-auto w-32 sm:w-40 md:w-48 lg:w-56 h-auto opacity-80 animate-float"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
