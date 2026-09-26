// src/pages/Tutorials.tsx
// Hula hoop tutorials. Each video shows its real YouTube thumbnail with a
// play button, and the YouTube player only loads when the visitor presses
// play (nothing autoplays on page load).
import { useState } from 'react'
import { Play } from 'lucide-react'
import { getYouTubeId } from '@/data/homeMedia'

// ------------------------------------------------------------------
// Tutorials list. To add a tutorial later, copy one block and fill it in.
// shape: 'vertical' for YouTube Shorts (9:16), 'wide' for regular videos (16:9)
// ------------------------------------------------------------------
type Tutorial = {
  title: string
  description: string
  url: string
  shape: 'vertical' | 'wide'
}

const TUTORIALS: Tutorial[] = [
  {
    title: 'Basic Hula Hoop Weave',
    description: 'Learn this beginner friendly one hoop weave step by step.',
    url: 'https://youtube.com/shorts/4l3Tt0oxg34?feature=share',
    shape: 'vertical',
  },
  {
    title: 'Hula Hoop Chest Roll',
    description: 'Learn how to roll the hoop across your chest with this quick beginner tutorial.',
    url: 'https://youtu.be/cpvAyCQJRO0',
    shape: 'wide',
  },
]

const TutorialCard = ({ tutorial }: { tutorial: Tutorial }) => {
  const videoId = getYouTubeId(tutorial.url)
  const [playerLoaded, setPlayerLoaded] = useState(false)
  // Start with YouTube's high resolution thumbnail and fall back to the
  // standard one if a high resolution version was not generated.
  const [thumb, setThumb] = useState<'maxresdefault' | 'hqdefault'>('maxresdefault')

  const isVertical = tutorial.shape === 'vertical'

  return (
    <article
      className={`flex w-full flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-[0_18px_40px_-20px_rgba(30,10,74,0.55)] ring-1 ring-[#1E0A4A]/10 ${
        isVertical ? 'mx-auto max-w-[22rem]' : ''
      }`}
    >
      <div className={`relative w-full bg-[#1E0A4A] ${isVertical ? 'aspect-[9/16]' : 'aspect-video'}`}>
        {videoId && playerLoaded ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
            title={`${tutorial.title} tutorial video`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : videoId ? (
          <button
            type="button"
            onClick={() => setPlayerLoaded(true)}
            aria-label={`Play tutorial: ${tutorial.title}`}
            className="group absolute inset-0 h-full w-full bg-gradient-beast focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-[#FFE14D]"
          >
            <img
              src={`https://i.ytimg.com/vi/${videoId}/${thumb}.jpg`}
              alt=""
              loading="lazy"
              decoding="async"
              onLoad={e => {
                // YouTube returns a tiny gray placeholder when the high
                // resolution thumbnail does not exist
                if (thumb === 'maxresdefault' && e.currentTarget.naturalWidth <= 120) setThumb('hqdefault')
              }}
              onError={e => {
                if (thumb === 'maxresdefault') setThumb('hqdefault')
                else e.currentTarget.style.display = 'none'
              }}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/5" />
            <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#FFE14D] text-[#1E0A4A] shadow-lg transition-transform group-hover:scale-105">
              <Play className="ml-1 h-9 w-9 fill-current" aria-hidden="true" />
            </span>
            <span className="absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-black/55 px-4 py-1.5 text-sm font-bold tracking-wide text-white">
              PLAY TUTORIAL
            </span>
          </button>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h2 className="font-bangers text-3xl leading-tight tracking-wide text-[#1E0A4A] sm:text-4xl">
          {tutorial.title}
        </h2>
        <p className="mt-2 text-lg leading-relaxed text-[#3A2F57]">{tutorial.description}</p>
      </div>
    </article>
  )
}

const Tutorials = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-beast py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-bangers text-5xl md:text-6xl text-white mb-4">
            HULA HOOP TUTORIALS
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto text-lg">
            Learn hula hoop tricks step by step with simple tutorials you can practice at your own pace.
            Start with these beginner friendly moves and check back as more tutorials are added.
          </p>
        </div>
      </section>

      {/* Tutorial videos */}
      <section aria-label="Tutorial videos" className="bg-[#F6F0FF] py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-8 md:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] md:gap-10">
            {TUTORIALS.map(tutorial => (
              <TutorialCard key={tutorial.url} tutorial={tutorial} />
            ))}
          </div>

          <p className="mt-12 text-center text-lg font-semibold text-[#3A2F57]">
            More tutorials coming as I make them.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Tutorials
