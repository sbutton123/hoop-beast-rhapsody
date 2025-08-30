// src/components/Hero.tsx
import { useState } from 'react'

const Hero = () => {
  const [videoError, setVideoError] = useState(false)

  return (
    <section className="relative bg-gradient-beast min-h-screen">
      <div className="w-full py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Big Beast Title */}
          <h1 className="text-center font-bangers text-5xl md:text-7xl text-orange-500 drop-shadow-[2px_2px_0px_black] tracking-tight">
            UNLEASH YOUR INNER BEAST
          </h1>

          {/* Media + Paragraph row sits RIGHT below the title */}
          <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">

            {/* Left: Video (top-aligned, big on desktop) */}
            <div className="flex justify-center md:justify-start">
              {!videoError ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="/placeholder.svg"
                  onError={() => setVideoError(true)}
                  className="h-56 md:h-96 w-auto rounded-lg shadow-lg object-cover"
                >
                  <source src="/3hoopduckout.webm" type="video/webm" />
                  <source src="/3hoop-duck-out-mobile.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src="/placeholder.svg"
                  alt="Hula Hoop Beast"
                  className="h-56 md:h-96 w-auto rounded-lg shadow-lg object-cover"
                />
              )}
            </div>

            {/* Middle: Paragraph, then logo underneath */}
            <div className="text-center md:col-span-1">
              <p className="text-white text-lg md:text-xl">
                Welcome to Hula Hoop Beast where strength meets flow and fun turns into fitness!
                Whether you’re brand new to hooping or ready to level up your skills, you’re in the right place.
              </p>
              <p className="text-orange-300 text-lg md:text-xl mt-2">
                Embrace your inner beast. Let’s hoop!
              </p>

              {/* Logo directly UNDER the paragraph */}
              <img
                src="/logo.png"
                alt="Hula Hoop Beast Logo"
                className="mt-6 mx-auto max-w-full h-auto drop-shadow-lg"
                style={{ width: 'clamp(12rem, 18vw, 24rem)' }}
                loading="eager"
                decoding="async"
              />
            </div>

            {/* Right: Hulahooping image (top-aligned, same height as video) */}
            <div className="flex justify-center md:justify-end">
              <img
                src="/hulahooping1.png"
                alt="Hula hooping action"
                className="h-56 md:h-96 w-auto rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
