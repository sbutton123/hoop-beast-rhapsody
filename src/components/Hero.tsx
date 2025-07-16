import { ArrowRight, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-beast overflow-hidden">
      {/* top-right logo: moved up 2 inches */}
      <div className="absolute top-[-46] right-4 sm:top-[-42] sm:right-6 z-30">
        <img src="/logo.png" alt="Hula Hoop Beast logo" className="w-80 sm:w-96 md:w-112" />
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

      {/* looping video: no crop, bumped up, rounded corners */}
      <div className="absolute left-4 sm:left-8 md:left-16 lg:left-24 top-[42%] transform -translate-y-1/2 z-20">
        <div className="overflow-hidden rounded-2xl shadow-xl w-40 sm:w-56 md:w-72 lg:w-80">
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

      {/* static PNG on the right: moved down */}
      <div className="absolute right-4 sm:right-8 md:right-16 lg:right-24 top-[60%] transform -translate-y-1/2 z-20">
        <img
          src="/lovable-uploads/aa66bb76-99ad-4824-9e6a-0edda4d38cba.png"
          alt="Hula hooping multiple hoops"
          className="w-28 sm:w-40 md:w-56 lg:w-72 h-auto opacity-90 animate-float delay-500"
        />
      </div>

      {/* top text: heading and paragraph, moved down an inch with space */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center absolute top-40">
        <h1 className="font-bangers leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white animate-bounce-gentle">
          UNLEASH YOUR<br/>
          <span className="text-black drop-shadow-md text-3xl sm:text-4xl md:text-5xl">INNER</span>{' '}
          <span className="text-beast-orange text-5xl sm:text-6xl md:text-7xl lg:text-8xl">BEAST</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/90 font-inter font-light max-w-2xl mx-auto drop-shadow-md mt-4">
          Welcome to Hula Hoop Beast where strength meets flow and fun turns into fitness! Whether you're brand new to hooping or ready to level up your skills, you're in the right place. Dive into our tutorials, challenge yourself with workouts, or just get inspired by creative performances and hoop magic. Join the movement. Embrace your inner beast. Let's hoop!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-6 border-t border-white/20">
          {[
            ['1000+', 'Beast Transformations', ''],
            ['50+',   'Dynamic Workouts',       'delay-500'],
            ['24/7',  'Beast Support',          'delay-1000'],
          ].map(([num, label, delay], i) => (
            <div key={i} className="text-center">
              <div className={`font-bangers text-3xl sm:text-4xl text-beast-orange animate-float ${delay}`}>
                {num}
              </div>
              <div className="text-white/80 font-inter">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* bottom decorative circle */}
      <div className="absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2
                      w-12 h-12 sm:w-16 sm:h-16 border-4 border-beast-orange/50 rounded-full animate-float" />
    </section>
  )
}

export default Hero
