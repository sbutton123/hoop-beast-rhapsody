// src/components/home/SongFeature.tsx
// "Lost in the Movement" song feature: official cover art, an on page
// play/pause player with progress, and streaming links (from homeMedia.ts).
// The audio file only downloads when the visitor presses play.
import { useEffect, useRef, useState } from 'react'
import { Music2, Pause, Play } from 'lucide-react'
import { SONG, STREAMING_LINKS } from '@/data/homeMedia'

const formatTime = (seconds: number) => {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00'
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

const SongFeature = () => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(SONG.durationSeconds)
  const [error, setError] = useState(false)

  const streaming = STREAMING_LINKS.filter(link => link.url.trim() !== '')

  // Stop the song if the visitor leaves the homepage
  useEffect(() => {
    const audio = audioRef.current
    return () => audio?.pause()
  }, [])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) {
      setError(false)
      audio.play().catch(() => {
        setIsPlaying(false)
        setError(true)
      })
    } else {
      audio.pause()
    }
  }

  const seek = (value: number) => {
    const audio = audioRef.current
    if (!audio) return
    audio.currentTime = value
    setCurrentTime(value)
  }

  return (
    <section
      aria-labelledby="song-heading"
      className="overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{ background: 'linear-gradient(120deg, #FFE98A 0%, #FFD2A8 50%, #FFC2E2 100%)' }}
    >
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 sm:px-8 md:grid-cols-[auto_1fr] lg:gap-14">
        {/* Official cover art (resized only) */}
        <img
          src={SONG.cover480}
          srcSet={`${SONG.cover480} 480w, ${SONG.cover800} 800w`}
          sizes="(min-width: 1024px) 360px, (min-width: 768px) 300px, 16rem"
          alt={`${SONG.title} (Hula Hoop Song) cover art by ${SONG.artist}`}
          width={480}
          height={480}
          loading="lazy"
          decoding="async"
          className="mx-auto w-64 rounded-[1.75rem] shadow-[0_22px_45px_-18px_rgba(30,10,74,0.65)] ring-4 ring-white sm:w-72 md:w-[300px] lg:w-[360px]"
        />

        <div className="text-center md:text-left">
          <h2
            id="song-heading"
            className="font-bangers text-5xl leading-none tracking-wide text-[#1E0A4A] sm:text-6xl"
          >
            LOST IN THE MOVEMENT
          </h2>
          <p className="mt-2 text-xl font-bold text-[#8A1DBF]">by {SONG.artist}</p>
          <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-[#3A2F57] sm:text-xl md:mx-0">
            Turn it up, grab a hoop, and get lost in the movement.
          </p>

          {/* Player */}
          <div className="mx-auto mt-7 max-w-md rounded-[1.5rem] bg-white/80 p-5 shadow-[0_10px_30px_-18px_rgba(30,10,74,0.6)] md:mx-0">
            <audio
              ref={audioRef}
              src={SONG.audioSrc}
              preload="none"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => {
                setIsPlaying(false)
                setCurrentTime(0)
              }}
              onTimeUpdate={e => setCurrentTime(e.currentTarget.currentTime)}
              onLoadedMetadata={e => {
                if (Number.isFinite(e.currentTarget.duration)) setDuration(e.currentTarget.duration)
              }}
              onError={() => {
                setIsPlaying(false)
                setError(true)
              }}
            />

            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? `Pause ${SONG.title}` : `Play ${SONG.title}`}
              className="inline-flex min-h-[3.5rem] w-full items-center justify-center gap-3 rounded-full bg-[#3B0FB8] px-8 text-lg font-extrabold tracking-wide text-white shadow-[0_5px_0_#1E0A4A] transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#D845EF]"
            >
              {isPlaying ? (
                <>
                  <Pause className="h-6 w-6 fill-current" aria-hidden="true" /> PAUSE
                </>
              ) : (
                <>
                  <Play className="h-6 w-6 fill-current" aria-hidden="true" /> PLAY SONG
                </>
              )}
            </button>

            <div className="mt-4 flex items-center gap-3">
              <span className="w-11 text-right text-sm font-semibold tabular-nums text-[#3A2F57]">
                {formatTime(currentTime)}
              </span>
              <input
                type="range"
                min={0}
                max={Math.max(duration, 1)}
                step={1}
                value={Math.min(currentTime, duration)}
                onChange={e => seek(Number(e.target.value))}
                aria-label="Song position"
                aria-valuetext={`${formatTime(currentTime)} of ${formatTime(duration)}`}
                className="h-2 flex-1 cursor-pointer accent-[#3B0FB8]"
              />
              <span className="w-11 text-sm font-semibold tabular-nums text-[#3A2F57]">
                {formatTime(duration)}
              </span>
            </div>

            {error && (
              <p role="status" className="mt-3 text-sm font-semibold text-[#9F1239]">
                The song could not play. Check your connection and press play again.
              </p>
            )}
          </div>

          {/* Streaming services: each appears once its link is added in homeMedia.ts */}
          {streaming.length > 0 && (
            <div className="mt-7">
              <p className="text-sm font-extrabold tracking-[0.15em] text-[#3A2F57]">AVAILABLE ON</p>
              <ul className="mt-3 flex flex-wrap justify-center gap-3 md:justify-start">
                {streaming.map(link => (
                  <li key={link.service}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Listen to ${SONG.title} on ${link.service} (opens in a new tab)`}
                      className="inline-flex min-h-[2.75rem] items-center gap-2 rounded-full border-2 border-[#1E0A4A]/15 bg-white px-4 text-sm font-bold text-[#1E0A4A] transition-colors hover:border-[#3B0FB8] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#D845EF]"
                    >
                      {link.badge ? (
                        <img src={link.badge} alt="" className="h-6 w-auto" />
                      ) : (
                        <>
                          <Music2 className="h-4 w-4" aria-hidden="true" />
                          {link.service}
                        </>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default SongFeature
