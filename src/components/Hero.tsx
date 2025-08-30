// src/components/Hero.tsx
import { useState } from 'react'

const Hero = () => {
  const [videoError, setVideoError] = useState(false)

  return (
    <section className="relative min-h-screen bg-gradient-beast overflow-hidden">
      {/* Background video with poster + graceful fallback */}
      {!videoError ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/logo.png"  // swap to hero-poster.jpg if you add one
          onError={() => setVideoError(true)}
          className="absolute inset-0 w-full h-full object-cover z-[-1]"
        >
          <source src="/3hoopduckout.webm" type="video/webm" />
          <source src="/3hoop-duck-out-mobile.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          src="/hulahoopbeastlogo.png"
          alt="Hula Hoop Beast"
          className="absolute inset-0 w-full h-full object-cover z-[-1]"
        />
      )}

      {/* Main content */}
      <div className="flex flex-col justify-center items-center text-center h-full px-4 md:px-12 pt-20 md:pt-36 z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
          UNLEASH YOUR <span className="text-orange-400">INNER BEAST</span>
        </h1>
        <p className="text-white text-lg md:text-xl max-w-2xl">
          Welcome to Hula Hoop Beast where strength meets flow and fun turns into fitness!
          Whether you’re brand new to hooping or ready to level up your skills, you’re in the right place.
          Dive into tutorials, challenge yourself with workouts, or get inspired by performances.
        </p>
        <p className="text-orange-300 mt-4 text-lg md:text-xl">
          Embrace your inner beast. Let’s hoop!
        </p>
      </div>

      {/* Overlay images */}
      <img
        src="/hulahoopbeastlogo.png"
        alt="Hula Hoop Beast Logo"
        className="absolute bottom-10 right-10 w-48 md:w-56 z-10"
      />
      <img
        src="/hooper-left.png"
        alt="Hooping left"
        className="absolute bottom-0 left-10 w-36 md:w-44 z-10"
      />
      <img
        src="/hooper-center.png"
        alt="Hooping center"
        className="absolute bottom-0 mx-auto left-0 right-0 w-40 md:w-48 z-10"
      />
    </section>
  )
}

export default Hero
