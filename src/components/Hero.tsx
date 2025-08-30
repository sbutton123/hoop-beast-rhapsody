// src/components/Hero.tsx
import { useState } from 'react'

const Hero = () => {
  const [videoError, setVideoError] = useState(false)

  return (
    <section className="relative bg-gradient-beast min-h-screen flex items-center">
      <div className="w-full py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

            {/* Middle: Text + optional image under paragraph */}
            <div className="text-center md:col-span-1">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                UNLEASH YOUR <span className="text-orange-400">INNER BEAST</span>
              </h1>
              <p className="text-white text-lg md:text-xl mb-2">
                Welcome to Hula Hoop Beast where strength meets flow and fun turns into fitness!
                Whether you’re brand new to hooping or ready to level up your skills, you’re in the right place.
              </p>
              <p className="text-orange-300 text-lg md:text-xl">
                Embrace your inner beast. Let’s hoop!
              </p>

              {/* Example placeholder image under paragraph */}
              {/* Replace /hero-under.jpg with your own file uploaded to /public */}
              {/* <img
                src="/hero-under.jpg"
                alt="Hula Hoop Beast action"
                className="mt-6 mx-auto w-64 md:w-80 rounded-lg shadow-lg"
              /> */}
            </div>

            {/* Right: Logo */}
            <div className="flex justify-center">
              <img
                src="/logo.png"
                alt="Hula Hoop Beast Logo"
                className="max-w-full h-auto drop-shadow-lg"
                style={{ width: 'clamp(12rem, 18vw, 24rem)' }}
                loading="eager"
                decoding="async"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
