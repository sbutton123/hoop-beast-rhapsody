// src/pages/Index.tsx
// Homepage: Hero, Explore, See It in Action, Song, Final CTA.
import Hero from '@/components/Hero'
import ExploreSection from '@/components/home/ExploreSection'
import ActionVideo from '@/components/home/ActionVideo'
import SongFeature from '@/components/home/SongFeature'
import FinalCta from '@/components/home/FinalCta'

const Index = () => {
  return (
    // -mt-8 cancels the site wide top padding under the sticky header so the
    // hero starts right below the navigation on the homepage only.
    <div className="-mt-8 overflow-x-hidden">
      <Hero />
      <ExploreSection />
      <ActionVideo />
      <SongFeature />
      <FinalCta />
    </div>
  )
}

export default Index
