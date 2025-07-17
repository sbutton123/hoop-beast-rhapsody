import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-beast overflow-hidden">
      {/* subtle pulse grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0
                     bg-white/5
                     bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)]
                     bg-[length:60px_60px] animate-pulse"
        />
      </div>

      <div className="absolute left-4 sm:left-8 md:left-16 lg:left-24 top-[60%] md:top-[42%] transform -translate-y-1/2 z-20">
    <div className="relative overflow-hidden rounded-2xl shadow-xl w-40 sm:w-56 md:w-72 lg:w-80">
      {/* semi-transparent fade on edges */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-purple-900/30 to-pink-500/30" />
      <video
        className="relative w-full h-auto block"
        autoPlay
        muted
        loop
        playsInline
        aria-label="Demo hula hoop performance"
        style={{ objectPosition: 'center 20%' }}
      >
        <source src="/3hoop.webm" type="video/webm" />
        Your browser doesn't support HTML5 video.
      </video>
    </div>
  </div>

  {/* Logo mirrored on the right at same vertical position, slightly larger */}
  <div className="absolute right-4 sm:right-8 md:right-16 lg:right-24 top-[60%] md:top-[42%] transform -translate-y-1/2 z-20">
    <div className="w-48 sm:w-64 md:w-80 lg:w-96">
      <img
        src="/logo.png"
        alt="Hula Hoop Beast logo"
        className="w-full h-auto block"
      />
    </div>
  </div>

  {/* Hero text - floating glassmorphism overlay */}
  <div className="relative z-30 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
    {/* Glassmorphism text container */}
    <div className="backdrop-blur-md bg-gradient-to-br from-primary/10 via-primary/5 to-transparent 
                    border border-white/10 rounded-3xl p-8 sm:p-12 
                    shadow-2xl shadow-primary/20 
                    hover:shadow-primary/30 transition-all duration-500
                    text-center relative overflow-hidden">
      
      {/* Subtle inner glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl pointer-events-none" />
      
      <h1 className="relative font-bangers leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white 
                     drop-shadow-lg animate-bounce-gentle">
        UNLEASH YOUR<br />
        <span className="text-white/80 drop-shadow-lg text-3xl sm:text-4xl md:text-5xl">
          INNER
        </span>{' '}
        <span className="text-beast-orange drop-shadow-lg text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
          BEAST
        </span>
      </h1>

      <p className="relative mt-6 text-base sm:text-lg md:text-xl text-white/95 font-inter font-light 
                   leading-relaxed drop-shadow-sm max-w-3xl mx-auto">
        Welcome to Hula Hoop Beast where strength meets flow and fun turns into fitness! Whether you're brand new to hooping or ready to level up your skills, you're in the right place. Dive into our tutorials, challenge yourself with workouts, or just get inspired by creative performances and hoop magic.
        <br /><br />
        <span className="text-beast-orange font-medium drop-shadow-md">Embrace your inner beast. Let's hoop!</span>
      </p>
    </div>

    {/* secondary hoops image - positioned below the glassmorphism box */}
    <div className="mt-8 text-center">
      <img
        src="/lovable-uploads/aa66bb76-99ad-4824-9e6a-0edda4d38cba.png"
        alt="Hula hooping multiple hoops"
        className="mx-auto w-32 sm:w-40 md:w-48 lg:w-56 h-auto opacity-80 animate-float"
      />
    </div>
  </div>
    </section>
  )
}

export default Hero