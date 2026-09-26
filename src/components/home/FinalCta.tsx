// src/components/home/FinalCta.tsx
// Closing call to action for live programs (inquiry based, not instant booking).
import { Link } from 'react-router-dom'

const FinalCta = () => {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative overflow-hidden bg-gradient-beast py-16 text-center text-white sm:py-20 lg:py-24"
    >
      {/* Decorative hoops */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full border-[8px] border-[#FFE14D]/50"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -right-12 h-64 w-64 rounded-full border-[8px] border-white/30"
      />

      <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
        <h2
          id="final-cta-heading"
          className="font-bangers text-5xl leading-[1.05] tracking-wide sm:text-6xl lg:text-7xl"
          style={{ textShadow: '3px 3px 0 #1E0A4A' }}
        >
          BRING HULA HOOP BEAST TO YOUR NEXT EVENT
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg font-medium leading-relaxed text-white sm:text-xl">
          Send an inquiry to check availability for interactive hula hoop shows and workshops at
          schools, libraries, parks, parties, and more.
        </p>
        <Link
          to="/programs"
          className="mt-9 inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-white px-8 text-lg font-extrabold tracking-wide text-[#3B0FB8] shadow-[0_6px_0_#1E0A4A] transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FFE14D]"
        >
          EXPLORE PROGRAMS <span aria-hidden="true" className="ml-2">→</span>
        </Link>
      </div>
    </section>
  )
}

export default FinalCta
