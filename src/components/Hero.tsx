// src/components/Hero.tsx
import { useState } from 'react'

const Hero = () => {
  const [videoError, setVideoError] = useState(false)

  return (
    <section className="relative bg-gradient-beast min-h-screen flex items-center">
      <div className="w-full py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Big Beast Title */}
          <h1 className="text-center font-bangers text-5xl md:text-7xl text-orange-500 mb-12 drop-shadow-[2px_2px_0px_black] tracking-tight">
            UNLEASH YOUR INNER BEAST
          </h1>

          {/* 3-column grid: video • logo under paragraph • hulahooping image */}
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">
            
            {/* Left: Video */}
            <div className="flex justify-center">
              {!videoError ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="/placeholder.svg"
                  onError={() => setVideoError(true)}
                  className="w-56 md:w-72 rounded-lg shadow-lg"
                >
                  <source src="/3hoopduckout.webm" type="video/webm" />
                  <source src="/3hoop-duck-out-mobile.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src="/placeholder.svg"
                  alt="Hula Hoop Beast"
                  className="w-56 md:w-72 rounded-lg shadow-lg"
                />
              )}
            </div>

            {/* Middle: Paragraph + Logo */}
            <div className="text-center md:col-span-1">
              <p className="text-white text-lg md:text-xl mb-2">
                Welcome to Hula Hoop Beast where strength meets flow and fun turns into fitness!
                Whether you’re brand new to hooping or ready to level up your skills, you’re in the right place.
              </p>
              <p className="text-orange-300 text-lg md:text-xl">
                Embrace your inner beast. Let’s hoop!
              </p>

              {/* Logo under paragraph */}
              <img
                src="/logo.png"
                alt="Hula Hoop Beast Logo"
                className="mt-6 mx-auto max-w-full h-auto drop-shadow-lg"
                style={{ width: 'clamp(12rem, 18vw, 24rem)' }}
                loading="eager"
                decoding="async"
              />
            </div>

            {/* Right: Hulahooping image */}
            <div className="flex justify-center">
              <img
                src="/hulahooping1.png"
                alt="Hula hooping action"
                className="w-64 md:w-80 rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
