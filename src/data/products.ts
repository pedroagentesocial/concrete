import { withBase } from "../utils/withBase";

export type ProductItem = {
  id: string;
  titleKey: string;
  descriptionKey: string;
  highlightsKey: string[];
  imageSrc: string;
  imageAltKey: string;
  href: string;
  badgeKey?: string;
};

export const products: ProductItem[] = [
  {
    id: "cement",
    titleKey: "home.productsOverview.items.cement.title",
    descriptionKey: "home.productsOverview.items.cement.desc",
    highlightsKey: [
      "home.productsOverview.highlights.cement.one",
      "home.productsOverview.highlights.cement.two",
      "home.productsOverview.highlights.cement.three"
    ],
    imageSrc: withBase("/images/cement.jpg"),
    imageAltKey: "home.productsOverview.images.cementAlt",
    href: "/en/products#cement",
    badgeKey: "home.productsOverview.badges.cement"
  },
  {
    id: "readyMix",
    titleKey: "home.productsOverview.items.readyMix.title",
    descriptionKey: "home.productsOverview.items.readyMix.desc",
    highlightsKey: [
      "home.productsOverview.highlights.readyMix.one",
      "home.productsOverview.highlights.readyMix.two",
      "home.productsOverview.highlights.readyMix.three"
    ],
    imageSrc: withBase("/images/mix-concrete.jpg"),
    imageAltKey: "home.productsOverview.images.readyMixAlt",
    href: "/en/products#ready-mix",
    badgeKey: "home.productsOverview.badges.readyMix"
  },
  {
    id: "aggregates",
    titleKey: "home.productsOverview.items.aggregates.title",
    descriptionKey: "home.productsOverview.items.aggregates.desc",
    highlightsKey: [
      "home.productsOverview.highlights.aggregates.one",
      "home.productsOverview.highlights.aggregates.two",
      "home.productsOverview.highlights.aggregates.three"
    ],
    imageSrc: withBase("/images/aggregates.jpg"),
    imageAltKey: "home.productsOverview.images.aggregatesAlt",
    href: "/en/products#aggregates"
  },
  {
    id: "delivery",
    titleKey: "home.productsOverview.items.delivery.title",
    descriptionKey: "home.productsOverview.items.delivery.desc",
    highlightsKey: [
      "home.productsOverview.highlights.delivery.one",
      "home.productsOverview.highlights.delivery.two",
      "home.productsOverview.highlights.delivery.three"
    ],
    imageSrc: withBase("/images/delivery.jpg"),
    imageAltKey: "home.productsOverview.images.deliveryAlt",
    href: "/en/products#delivery",
    badgeKey: "home.productsOverview.badges.delivery"
  }
];
