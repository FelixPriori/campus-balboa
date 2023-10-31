import FeaturedSlide from "../FeaturedSlide";

export interface FeaturedSlide {
    sys: {
        id: string;
    }
    title: string;
    details: {
        json: any;
        links: any;
    }
    type: string;
    image: {
        title: string;
        url: string;
    }
    link: {
        href: string;
        text: string;
    }
}

export default function FeaturedSlides({featuredContent}: {featuredContent: FeaturedSlide[]}) {
    return featuredContent.length && featuredContent.map((featuredSlide: FeaturedSlide) => 
        <FeaturedSlide
            key={featuredSlide.sys.id}
            title={featuredSlide.title}
            type={featuredSlide.type}
            details={featuredSlide.details}
            image={{
                src: featuredSlide.image.url,
                alt: featuredSlide.image.title
            }}
            link={{
                href: featuredSlide.link.href,
                text: featuredSlide.link.text
            }}
        />
    )
}