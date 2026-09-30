// src/components/home/ActionVideo.tsx
// "See Hula Hoop Beast in Action" with a click to load YouTube player and
// short testimonials from librarians who booked Hula Hoop Beast.
// Only a thumbnail image loads with the page; the YouTube player loads when
// the visitor presses play.
//
// Layout:
//   Phones:          video, then "What librarians are saying", then quotes stacked
//   Tablets/laptops: video, then the three quotes side by side beneath it
//   Wide desktops:   one quote left of the video, one right, one centered beneath
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Play } from 'lucide-react'
import { ACTION_VIDEO, getYouTubeId } from '@/data/homeMedia'

// Real testimonials. Keep the wording inside the quotation marks exactly as given.
type Testimonial = {
  quote: string
  name: string
  role: string
  organization: string
}

const TESTIMONIALS: Record<'left' | 'right' | 'below', Testimonial> = {
  left: {
    quote:
      '“Shanda dazzled the crowd with her hula hoop tricks while also spreading the positive message that you can do anything that you set your mind to as long as you try, even if you fail.”',
    name: 'Lauren Johnson',
    role: "Children's Services Librarian",
    organization: 'Gulf Gate Library, Sarasota, FL',
  },
  right: {
    quote:
      '“Kids were in awe of her, along with adults. The audience loved being able to actually experiment and play with the hula hoops, ribbons, and other materials Shanda used after the performance.”',
    name: 'Wendy Fjorden',
    role: 'Senior Branch Librarian',
    organization: 'Beaverton City Library Murray Scholls',
  },
  below: {
    quote:
      '“I had three separate people tell me days after the event what a great program it was! ‘Isn’t she amazing!’ ‘She made it look so easy!’ ‘I loved her message! So positive and spot on!’”',
    name: 'Jaime Thoreson',
    role: 'Youth Services Librarian II',
    organization: 'Sherwood Public Library',
  },
}

const Quote = ({ testimonial, className = '' }: { testimonial: Testimonial; className?: string }) => (
  <figure
    className={`rounded-2xl border border-white/15 bg-white/[0.06] p-5 text-left sm:p-6 ${className}`}
  >
    <blockquote className="text-base leading-relaxed text-white/90 sm:text-[1.05rem]">
      <p>{testimonial.quote}</p>
    </blockquote>
    <figcaption className="mt-4 border-t border-white/10 pt-3 text-sm leading-snug">
      <span className="block font-bold text-[#FFE14D]">{testimonial.name}</span>
      <span className="block text-white/75">{testimonial.role}</span>
      <span className="block text-white/75">{testimonial.organization}</span>
    </figcaption>
  </figure>
)

const ActionVideo = () => {
  const videoId = getYouTubeId(ACTION_VIDEO.url)
  const [playerLoaded, setPlayerLoaded] = useState(false)

  return (
    <section
      aria-labelledby="action-heading"
      className="relative overflow-hidden bg-[#1E0A4A] py-16 text-white sm:py-20 lg:py-24"
    >
      {/* Decorative hoops */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full border-[10px] border-[#D845EF]/25"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full border-[10px] border-[#3D7FF5]/25"
      />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8 xl:max-w-7xl">
        <h2
          id="action-heading"
          className="font-bangers text-5xl tracking-wide text-white sm:text-6xl"
        >
          SEE HULA HOOP BEAST IN ACTION
        </h2>
        <p className="mt-3 text-lg text-white/85 sm:text-xl">
          Real shows. Real audiences. A whole lot of hoops.
        </p>

        {/*
          One grid for every screen size. The video uses "order-first" below
          wide desktop so it always comes right after the heading on phones
          and tablets; on wide desktops the quotes sit left, right, and below.
        */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(0,40rem)_minmax(0,1fr)] xl:gap-x-10 xl:gap-y-8 2xl:grid-cols-[minmax(0,1fr)_minmax(0,44rem)_minmax(0,1fr)]">
          <h3 className="mt-3 text-sm font-extrabold tracking-[0.2em] text-[#FFE14D] md:col-span-3 md:mt-4 xl:mt-0">
            WHAT LIBRARIANS ARE SAYING
          </h3>

          <Quote testimonial={TESTIMONIALS.left} className="xl:self-center" />

          {/* Video (unchanged) */}
          <div className="order-first md:col-span-3 xl:order-none xl:col-span-1">
            <div className="overflow-hidden rounded-[1.75rem] bg-black shadow-[0_24px_60px_-20px_rgba(0,0,0,0.8)] ring-4 ring-[#FF7A45]">
              <div className="relative aspect-video w-full">
                {videoId ? (
                  playerLoaded ? (
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
                      title={ACTION_VIDEO.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="absolute inset-0 h-full w-full"
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={() => setPlayerLoaded(true)}
                      aria-label={`Play video: ${ACTION_VIDEO.title}`}
                      className="group absolute inset-0 h-full w-full bg-gradient-beast focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-[#FFE14D]"
                    >
                      <img
                        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        onError={e => {
                          // If the thumbnail cannot load, show the brand gradient behind it
                          e.currentTarget.style.display = 'none'
                        }}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <span className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/10" />
                      <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#FFE14D] text-[#1E0A4A] shadow-lg transition-transform group-hover:scale-105 sm:h-24 sm:w-24">
                        <Play className="ml-1 h-9 w-9 fill-current sm:h-11 sm:w-11" aria-hidden="true" />
                      </span>
                    </button>
                  )
                ) : (
                  // Shown until the YouTube link is added in src/data/homeMedia.ts
                  <Link
                    to="/showcase"
                    className="group absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-beast focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-[#FFE14D]"
                  >
                    <span className="flex h-20 w-20 items-center justify-center rounded-full bg-[#FFE14D] text-[#1E0A4A] shadow-lg transition-transform group-hover:scale-105 sm:h-24 sm:w-24">
                      <Play className="ml-1 h-9 w-9 fill-current sm:h-11 sm:w-11" aria-hidden="true" />
                    </span>
                    <span className="text-lg font-extrabold tracking-wide text-white sm:text-xl">
                      WATCH BEAST MOVES
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </div>

          <Quote testimonial={TESTIMONIALS.right} className="xl:self-center" />

          <Quote testimonial={TESTIMONIALS.below} className="xl:col-start-2" />
        </div>

        <Link
          to="/programs"
          className="mt-10 inline-flex min-h-[3.25rem] items-center justify-center rounded-full bg-[#FFE14D] px-8 text-lg font-extrabold tracking-wide text-[#1E0A4A] transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-white"
        >
          EXPLORE PROGRAMS <span aria-hidden="true" className="ml-2">→</span>
        </Link>
      </div>
    </section>
  )
}

export default ActionVideo
