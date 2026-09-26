// src/components/Hero.tsx
import { useRef, useState } from 'react'
import { Pause, Play } from 'lucide-react'

// Visitors who have "reduce motion" turned on in their device settings
// see the first frame of the video and can press play if they want to.
const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoError, setVideoError] = useState(false)
  const [reduceMotion] = useState(prefersReducedMotion)
  const [isPlaying, setIsPlaying] = useState(!reduceMotion)

  const togglePlayback = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.play().catch(() => setIsPlaying(false))
    } else {
      video.pause()
    }
  }

  return (
    <section className="relative bg-gradient-beast min-h-screen">
      <div className="w-full py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Big Beast Title */}
          <h1 className="text-center font-bangers text-5xl md:text-7xl text-orange-500 drop-shadow-[2px_2px_0px_black] tracking-tight">
            UNLEASH YOUR INNER BEAST
          </h1>

          {/* Media + Paragraph row, tighter spacing */}
          <div className="mt-5 md:mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-start">

            {/* Left: Video (slightly bigger, no shadow/card look) */}
            <div className="flex justify-center md:justify-start">
              {!videoError ? (
                <div className="relative">
                  <video
                    ref={videoRef}
                    autoPlay={!reduceMotion}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster="/hero-video-poster.png"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onError={() => setVideoError(true)}
                    aria-label="Shanda hula hooping with three hoops"
                    className="block h-72 md:h-[30rem] w-auto rounded-lg object-cover"
                  >
                    <source src="/3hoopduckout.webm" type="video/webm" />
                    <source
                      src="/3hoop-duck-out-mobile.mp4"
                      type="video/mp4"
                      onError={() => setVideoError(true)}
                    />
                    Your browser does not support the video tag.
                  </video>

                  {/* Small pause/play control so the looping video can be stopped */}
                  <button
                    type="button"
                    onClick={togglePlayback}
                    aria-label={isPlaying ? 'Pause hooping video' : 'Play hooping video'}
                    className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white opacity-70 transition-opacity hover:opacity-100 focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    {isPlaying ? (
                      <Pause className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <Play className="h-4 w-4" aria-hidden="true" />
                    )}
                  </button>
                </div>
              ) : (
                <img
                  src="/hero-video-poster.png"
                  alt="Shanda hula hooping with three hoops"
                  width={360}
                  height={640}
                  className="h-72 md:h-[30rem] w-auto rounded-lg object-cover"
                />
              )}
            </div>

            {/* Middle: Paragraph with logo under it */}
            <div className="text-center md:col-span-1">
              <p className="text-white text-lg md:text-xl">
                Welcome to Hula Hoop Beast where strength meets flow and fun turns into fitness!
                Whether you’re brand new to hooping or ready to level up your skills, you’re in the right place.
              </p>
              <p className="text-orange-300 text-lg md:text-xl mt-2">
                Embrace your inner beast. Let’s hoop!
              </p>

              {/* Logo (slightly closer + scales smoothly) */}
              <img
                src="/logo-web.webp"
                alt="Hula Hoop Beast Logo"
                width={768}
                height={1152}
                className="mt-4 mx-auto max-w-full h-auto"
                style={{ width: 'clamp(12rem, 18vw, 24rem)' }}
                loading="eager"
                decoding="async"
              />
            </div>

            {/* Right: Hulahooping image (match video size, no shadow/card look) */}
            <div className="flex justify-center md:justify-end">
              <img
                src="/hulahooping1.png"
                alt="Hula hooping action"
                className="h-72 md:h-[30rem] w-auto rounded-lg object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
