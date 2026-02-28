export type HeroSlide = {
  id: string;
  titleKey: string;
  subtitleKey: string;
  videoSrc: string;
  posterSrc: string;
  ctaPrimaryKey: string;
  ctaSecondaryKey: string;
  ctaPrimaryHref: string;
  ctaSecondaryHref: string;
};

export const heroSlides: HeroSlide[] = [
  {
    id: "hero-1",
    titleKey: "home.heroSlides.slide1.title",
    subtitleKey: "home.heroSlides.slide1.subtitle",
    videoSrc: "/videos/hero1.mp4",
    posterSrc: "/images/hero-1.jpg",
    ctaPrimaryKey: "home.heroSlides.slide1.primaryCta",
    ctaSecondaryKey: "home.heroSlides.slide1.secondaryCta",
    ctaPrimaryHref: "/contact",
    ctaSecondaryHref: "/services"
  },
  {
    id: "hero-2",
    titleKey: "home.heroSlides.slide2.title",
    subtitleKey: "home.heroSlides.slide2.subtitle",
    videoSrc: "/videos/hero2.mp4",
    posterSrc: "/images/hero-2.jpg",
    ctaPrimaryKey: "home.heroSlides.slide2.primaryCta",
    ctaSecondaryKey: "home.heroSlides.slide2.secondaryCta",
    ctaPrimaryHref: "/products",
    ctaSecondaryHref: "/projects"
  },
  {
    id: "hero-3",
    titleKey: "home.heroSlides.slide3.title",
    subtitleKey: "home.heroSlides.slide3.subtitle",
    videoSrc: "/videos/hero3.mp4",
    posterSrc: "/images/hero-3.jpg",
    ctaPrimaryKey: "home.heroSlides.slide3.primaryCta",
    ctaSecondaryKey: "home.heroSlides.slide3.secondaryCta",
    ctaPrimaryHref: "/resources",
    ctaSecondaryHref: "/contact"
  }
];
