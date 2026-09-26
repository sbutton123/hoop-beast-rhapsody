// src/data/homeMedia.ts
//
// Homepage media settings. This is the ONE place to paste links for the
// homepage video and the "Lost in the Movement" streaming services.
// Leave a value as an empty string ('') until you have the real link.

// ------------------------------------------------------------------
// "See Hula Hoop Beast in Action" video
// ------------------------------------------------------------------
// Paste the full YouTube link for
// "Hula Hoop Beast | 2026 Summer Reading Performances"
// Any normal YouTube link format works, for example:
//   https://www.youtube.com/watch?v=XXXXXXXXXXX
//   https://youtu.be/XXXXXXXXXXX
// While this is empty, the section shows a link to the Beast Moves page instead.
export const ACTION_VIDEO = {
  url: 'https://youtu.be/KPlf-AyojoI',
  title: 'Hula Hoop Beast | 2026 Summer Reading Performances',
}

// ------------------------------------------------------------------
// "Lost in the Movement" song
// ------------------------------------------------------------------
export const SONG = {
  title: 'Lost in the Movement',
  artist: 'Shanda Button',
  audioSrc: '/music/lost-in-the-movement.mp3',
  // Shown before the file loads; replaced by the real length once playing.
  durationSeconds: 174,
  cover480: '/images/lost-in-the-movement-cover-480.webp',
  cover800: '/images/lost-in-the-movement-cover-800.webp',
}

// Paste each service's page for the song. A service only appears on the
// homepage once its link is filled in. The "AVAILABLE ON" row appears as
// soon as at least one link is filled in.
//
// Optional: "badge" can point to an official badge image from that service
// (for example '/images/badges/spotify.svg'). Without one, a clean text
// button with the service name is shown instead.
export const STREAMING_LINKS: { service: string; url: string; badge?: string }[] = [
  { service: 'Spotify', url: 'https://open.spotify.com/album/4HYeowUR1XC6mXfaF6RLRH?si=qK-l4lTLRtq0Yyd6SZCdDg' },
  { service: 'Apple Music', url: 'https://music.apple.com/us/song/lost-in-the-movement-hula-hooping-song/6811544710' },
  { service: 'Amazon Music', url: 'https://music.amazon.com/albums/B0HJNNZZQF?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_LgfczSQfHF877Xg7vUaJmlH1l' },
  { service: 'YouTube Music', url: 'https://music.youtube.com/watch?v=whcWHvQEnFo&si=hY4flABwnfwPKE79' },
]

// Pulls the 11 character video ID out of any common YouTube link.
export function getYouTubeId(url: string): string | null {
  if (!url) return null
  const trimmed = url.trim()
  if (/^[\w-]{11}$/.test(trimmed)) return trimmed
  const match = trimmed.match(
    /(?:youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/|v\/)|youtu\.be\/)([\w-]{11})/
  )
  return match ? match[1] : null
}
