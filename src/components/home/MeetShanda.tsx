// src/components/home/MeetShanda.tsx
// Short personal introduction. Copy is drawn only from the About page.
// Photo: web sized copies of the existing coast photo
// (original stays at /lovable-uploads/hoopingcoast.JPG for the About page).
import { Link } from 'react-router-dom'

const MeetShanda = () => {
  return (
    <section aria-labelledby="meet-heading" className="overflow-hidden bg-[#F6F0FF] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 md:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="mx-auto w-full max-w-[18rem] sm:max-w-sm md:max-w-none">
          <img
            src="/images/home/shanda-coast-600.webp"
            srcSet="/images/home/shanda-coast-600.webp 600w, /images/home/shanda-coast-1000.webp 1000w"
            sizes="(min-width: 768px) 380px, 18rem"
            alt="Shanda hula hooping by the water on the coast"
            width={600}
            height={759}
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-[14px_14px_0_#D845EF]"
          />
        </div>

        <div className="text-center md:text-left">
          <h2
            id="meet-heading"
            className="font-bangers text-5xl tracking-wide text-[#1E0A4A] sm:text-6xl"
          >
            MEET SHANDA
          </h2>
          <div className="mx-auto mt-5 max-w-xl space-y-4 text-lg leading-relaxed text-[#3A2F57] sm:text-xl md:mx-0">
            <p>
              Hi, I’m Shanda, the hooper behind Hula Hoop Beast. Hooping found me during one of the
              hardest chapters of my life, and it became a lifeline for my daughter and me as we made
              our own hoops and practiced in our living room.
            </p>
            <p>
              Today I teach, perform, and share hooping as a path to strength, healing, and expression.
            </p>
          </div>
          <Link
            to="/about"
            className="mt-8 inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-[#3B0FB8] px-8 text-lg font-extrabold tracking-wide text-white transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#D845EF]"
          >
            MY STORY <span aria-hidden="true" className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default MeetShanda
