// src/components/Hero.tsx
import { useState } from 'react'

const Hero = () => {
  const [videoError, setVideoError] = useState(false)

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background gradient as a base layer */}
      <div className="absolute inset-0 bg-gradient-beast" aria-hidden="true" />

      {/* Video layer */}
      {!videoError ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/placeholder.svg"            // file exists in /public
          onError={() => setVideoError(true)}
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/3hoopduckout.webm" type="video/webm" />
          <source src="/3hoop-duck-out-mobile.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          src="/placeholder.svg"              // fallback if video fails
          alt="Hula Hoop Beast"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      )}

      {/* Soft dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/20 z-10" aria-hidden="true" />

      {/* Main content */}
      <div className="relative z-20 flex flex-col justify-center items-center text-center min-h-screen px-4 md:px-12 pt-20 md:pt-36">
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

      {/* Overlay logo (uses the file that exists in /public) */}
      <img
        src="/logo.png"
        alt="Hula Hoop Beast Logo"
        className="absolute bottom-10 right-10 w-48 md:w-56 z-20"
      />

      {/* NOTE: Add these only after you place the files in /public
         <img src="/hooper-left.png" ... />
         <img src="/hooper-center.png" ... />
      */}
    </section>
  )
}

export default Hero
