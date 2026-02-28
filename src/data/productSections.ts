import { withBase } from "../utils/withBase";

export type ProductSection = {
  id: string;
  titleKey: string;
  subtitleKey: string;
  bodyKey: string;
  highlightsKeys: string[];
  imageSrc: string;
  imageAltKey: string;
  ctaKey: string;
  ctaHref: string;
  specs?: {
    titleKey: string;
    itemsKeys: string[];
  };
};

export const productSections: ProductSection[] = [
  {
    id: "cement",
    titleKey: "pages.products.sections.cement.title",
    subtitleKey: "pages.products.sections.cement.subtitle",
    bodyKey: "pages.products.sections.cement.desc",
    highlightsKeys: [
      "pages.products.sections.cement.highlights.one",
      "pages.products.sections.cement.highlights.two",
      "pages.products.sections.cement.highlights.three"
    ],
    imageSrc: withBase("/images/cement.jpg"),
    imageAltKey: "pages.products.images.cementAlt",
    ctaKey: "pages.products.sectionCta",
    ctaHref: "/contact",
    specs: {
      titleKey: "pages.products.sections.cement.specs.title",
      itemsKeys: [
        "pages.products.sections.cement.specs.one",
        "pages.products.sections.cement.specs.two",
        "pages.products.sections.cement.specs.three"
      ]
    }
  },
  {
    id: "ready-mix",
    titleKey: "pages.products.sections.readyMix.title",
    subtitleKey: "pages.products.sections.readyMix.subtitle",
    bodyKey: "pages.products.sections.readyMix.desc",
    highlightsKeys: [
      "pages.products.sections.readyMix.highlights.one",
      "pages.products.sections.readyMix.highlights.two",
      "pages.products.sections.readyMix.highlights.three"
    ],
    imageSrc: withBase("/images/mix-concrete.jpg"),
    imageAltKey: "pages.products.images.readyMixAlt",
    ctaKey: "pages.products.sectionCta",
    ctaHref: "/contact"
  },
  {
    id: "aggregates",
    titleKey: "pages.products.sections.aggregates.title",
    subtitleKey: "pages.products.sections.aggregates.subtitle",
    bodyKey: "pages.products.sections.aggregates.desc",
    highlightsKeys: [
      "pages.products.sections.aggregates.highlights.one",
      "pages.products.sections.aggregates.highlights.two",
      "pages.products.sections.aggregates.highlights.three"
    ],
    imageSrc: withBase("/images/aggregates.jpg"),
    imageAltKey: "pages.products.images.aggregatesAlt",
    ctaKey: "pages.products.sectionCta",
    ctaHref: "/contact"
  },
  {
    id: "delivery",
    titleKey: "pages.products.sections.delivery.title",
    subtitleKey: "pages.products.sections.delivery.subtitle",
    bodyKey: "pages.products.sections.delivery.desc",
    highlightsKeys: [
      "pages.products.sections.delivery.highlights.one",
      "pages.products.sections.delivery.highlights.two",
      "pages.products.sections.delivery.highlights.three"
    ],
    imageSrc: withBase("/images/delivery.jpg"),
    imageAltKey: "pages.products.images.deliveryAlt",
    ctaKey: "pages.products.sectionCta",
    ctaHref: "/contact"
  }
];
