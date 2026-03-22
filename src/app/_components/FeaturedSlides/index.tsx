import FeaturedSlide from '../FeaturedSlide'
import type { FeaturedSlideData } from '@/app/_lib/api'

export default function FeaturedSlides({ featuredContent }: { featuredContent: FeaturedSlideData[] }) {
  return (
    featuredContent.length > 0 &&
    featuredContent.map((featuredSlide) => (
      <FeaturedSlide
        key={featuredSlide.sys.id}
        title={featuredSlide.title}
        type={featuredSlide.type}
        details={featuredSlide.details}
        image={featuredSlide.image}
        link={featuredSlide.link}
      />
    ))
  )
}
