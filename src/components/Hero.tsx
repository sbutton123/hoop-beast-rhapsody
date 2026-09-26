// src/components/Hero.tsx
// Homepage hero: headline, supporting copy, two calls to action, and one
// focal video of Shanda hooping.
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Pause, Play } from 'lucide-react'

// Visitors who have "reduce motion" turned on in their device settings
// see the first frame of the video and can press play if they want to.
const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

// The stage shows a 3:4 crop of the 9:16 video (the empty space above Shanda
// is trimmed, positioned by MEDIA_POSITION). This gradient exactly matches the
// matching crop of the background baked into the MP4 fallback video (used by
// browsers that cannot show the transparent WebM), so the video blends into
// its stage either way. Keep these values in sync with the MP4.
const STAGE_GRADIENT =
  'linear-gradient(119.36deg, rgb(64,75,236) 0%, rgb(72,34,225) 46.4%, rgb(116,30,226) 100%)'
const MEDIA_POSITION = { objectPosition: '50% 75%' }

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

  // Same size on the video, the stage behind it, and the fallback image
  const mediaSize = 'h-[20rem] sm:h-[24rem] lg:h-[30rem] aspect-[3/4] w-auto'

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-gradient-beast"
    >
      {/* Soft shade over the bright blue corner so the headline and copy stay readable */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(30,10,74,0.3) 0%, rgba(30,10,74,0.15) 45%, rgba(30,10,74,0) 70%)',
        }}
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-12 sm:px-8 md:pb-20 md:pt-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8 lg:pb-24 lg:pt-20">

        {/* Text */}
        <div className="text-center lg:text-left">
          <h1
            id="hero-heading"
            className="font-bangers text-6xl leading-[0.95] tracking-wide text-[#FFE14D] sm:text-7xl lg:text-8xl"
            style={{ textShadow: '4px 4px 0 #1E0A4A' }}
          >
            UNLEASH YOUR INNER BEAST
          </h1>

          <p className="mt-6 text-2xl font-bold leading-snug text-white sm:text-3xl">
            Hula hooping for fun, fitness, flow &amp; performance.
          </p>

          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl lg:mx-0">
            Learn new skills, get moving, find your flow, or bring Hula Hoop Beast to your next event.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              to="/tutorials"
              className="inline-flex min-h-[3.25rem] w-full items-center justify-center rounded-full bg-white px-8 text-lg font-extrabold tracking-wide text-[#3B0FB8] shadow-[0_6px_0_#1E0A4A] transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FFE14D] sm:w-auto"
            >
              START HOOPING <span aria-hidden="true" className="ml-2">→</span>
            </Link>
            <Link
              to="/programs"
              className="inline-flex min-h-[3.25rem] w-full items-center justify-center rounded-full border-[3px] border-white px-8 text-lg font-extrabold tracking-wide text-white transition-colors hover:bg-white/15 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FFE14D] sm:w-auto"
            >
              EXPLORE PROGRAMS <span aria-hidden="true" className="ml-2">→</span>
            </Link>
          </div>
        </div>

        {/* Focal video on its stage, with a few decorative hoops around it */}
        <div className="relative mx-auto">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-10 top-10 h-40 w-40 rounded-full border-[6px] border-[#FFE14D]/80 sm:-left-16 sm:h-52 sm:w-52"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-8 -right-10 h-44 w-44 rounded-full border-[6px] border-[#FF7A45]/80 sm:-right-16 sm:h-56 sm:w-56"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full border-[5px] border-white/60"
          />

          <div
            className="relative overflow-hidden rounded-[2rem] shadow-[0_20px_50px_-15px_rgba(30,10,74,0.7)] ring-4 ring-white/40"
            style={{ background: STAGE_GRADIENT }}
          >
            {!videoError ? (
              <>
                <video
                  ref={videoRef}
                  autoPlay={!reduceMotion}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  width={360}
                  height={640}
                  poster="/hero-video-poster.png"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onError={() => setVideoError(true)}
                  aria-label="Shanda hula hooping with three hoops"
                  className={`block object-cover ${mediaSize}`}
                  style={MEDIA_POSITION}
                >
                  <source src="/3hoopduckout.webm" type="video/webm" />
                  <source
                    src="/3hoop-duck-out-mobile.mp4"
                    type="video/mp4"
                    onError={() => setVideoError(true)}
                  />
                  Your browser does not support the video tag.
                </video>

                {/* Pause/play control so the looping video can be stopped */}
                <button
                  type="button"
                  onClick={togglePlayback}
                  aria-label={isPlaying ? 'Pause hooping video' : 'Play hooping video'}
                  className="absolute bottom-3 right-3 flex h-11 w-11 items-center justify-center rounded-full bg-black/45 text-white opacity-80 transition-opacity hover:opacity-100 focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  {isPlaying ? (
                    <Pause className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <Play className="h-5 w-5" aria-hidden="true" />
                  )}
                </button>
              </>
            ) : (
              <img
                src="/hero-video-poster.png"
                alt="Shanda hula hooping with three hoops"
                width={360}
                height={640}
                className={`block object-cover ${mediaSize}`}
                style={MEDIA_POSITION}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
