import { ArrowRight, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-beast overflow-hidden">
      {/* top-right logo */}
      <div className="hidden md:block absolute top-4 right-4 z-30">
        <img src="/logo.png" alt="Hula Hoop Beast logo" className="w-32 sm:w-40 md:w-48" />
      </div>

      {/* subtle pulse grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0
                     bg-white/5
                     bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)]
                     bg-[length:60px_60px] animate-pulse"
        />
      </div>

      {/* looping video (WebM) */}
      <div className="absolute left-4 sm:left-8 md:left-16 lg:left-24 top-[65%] md:top-[42%] transform -translate-y-1/2 z-20">
        <div className="overflow-hidden rounded-2xl shadow-xl w-32 sm:w-40 md:w-56 lg:w-80">
          <video
            className="w-full h-auto block"
            autoPlay
            muted
            loop
            playsInline
            aria-label="Demo hula hoop performance"
            style={{ objectPosition: 'center 20%' }}
          >
            <source src="/3hoop.webm" type="video/webm" />
            Your browser doesn’t support HTML5 video.
          </video>
        </div>
      </div>

      {/* hero copy */}
      <div className="relative z-30 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center absolute top-16 sm:top-20 md:top-24">
        <h1 className="font-bangers leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white animate-bounce-gentle">
          UNLEASH YOUR<br />
          <span className="text-black drop-shadow-md text-3xl sm:text-4xl md:text-5xl">INNER</span>{' '}
          <span className="text-beast-orange text-5xl sm:text-6xl md:text-7xl lg:text-8xl">BEAST</span>
        </h1>

        <p className="mt-4 text-base sm:text-lg md:text-xl text-white/90 font-inter font-light max-w-2xl mx-auto drop-shadow-md">
          Welcome to Hula Hoop Beast where strength meets flow and fun turns into fitness! Whether you're brand new to hooping or
          ready to level up your skills, you're in the right place. Dive into our tutorials, challenge yourself with workouts, or
          just get inspired by creative performances and hoop magic.<br />
          Embrace your inner beast.<br />
          Let’s hoop!
        </p>

        {/* hoops image under the copy */}
        <div className="mt-8 flex justify-center">
          <img
            src="/lovable-uploads/aa66bb76-99ad-4824-9e6a-0edda4d38cba.png"
            alt="Hula hooping multiple hoops"
            className="w-32 sm:w-40 md:w-56 lg:w-72 h-auto opacity-90 animate-float"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
