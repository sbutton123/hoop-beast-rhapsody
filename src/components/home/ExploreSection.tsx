// src/components/home/ExploreSection.tsx
// The three parts of Hula Hoop Beast: Learn, Move, Perform.
import { Link } from 'react-router-dom'

const AREAS = [
  {
    name: 'LEARN',
    line: 'Tutorials, tricks & hula hoop skills.',
    cta: 'EXPLORE TUTORIALS',
    to: '/tutorials',
    background: 'linear-gradient(145deg, #2F5BEA 0%, #3B0FB8 100%)',
    buttonText: 'text-[#2A2BC7]',
  },
  {
    name: 'MOVE',
    line: 'Hula hoop workouts, fitness & flow.',
    cta: 'GET MOVING',
    to: '/workouts',
    background: 'linear-gradient(145deg, #B21FC4 0%, #6D1BB8 100%)',
    buttonText: 'text-[#8A1DBF]',
  },
  {
    name: 'PERFORM',
    line: 'Interactive shows, workshops & programs.',
    cta: 'EXPLORE PROGRAMS',
    to: '/programs',
    background: 'linear-gradient(145deg, #C2410C 0%, #BE185D 100%)',
    buttonText: 'text-[#C0262F]',
  },
]

const ExploreSection = () => {
  return (
    <section aria-labelledby="explore-heading" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="explore-heading"
            className="font-bangers text-5xl tracking-wide text-[#1E0A4A] sm:text-6xl"
          >
            EXPLORE HULA HOOP BEAST
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-[#4A3F66] sm:text-xl">
            Pick up a new trick, get your body moving, or bring the show to your event.
          </p>
        </div>

        <ul className="mx-auto mt-12 grid max-w-xl gap-6 lg:max-w-none lg:grid-cols-3 lg:gap-7">
          {AREAS.map(area => (
            <li
              key={area.name}
              className="relative flex flex-col overflow-hidden rounded-[2rem] p-8 text-white shadow-[0_18px_40px_-20px_rgba(30,10,74,0.8)] sm:p-9"
              style={{ background: area.background }}
            >
              {/* Decorative hoop */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full border-[10px] border-white/15"
              />

              <h3 className="relative font-bangers text-6xl leading-none tracking-wider sm:text-7xl">
                {area.name}
              </h3>
              <p className="relative mt-4 flex-1 text-xl font-semibold leading-snug">
                {area.line}
              </p>
              <Link
                to={area.to}
                className={`relative mt-8 inline-flex min-h-[3rem] items-center justify-center self-start rounded-full bg-white px-6 text-base font-extrabold tracking-wide ${area.buttonText} transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FFE14D]`}
              >
                {area.cta} <span aria-hidden="true" className="ml-2">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ExploreSection
