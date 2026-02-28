export type Service = {
  id: string;
  titleKey: string;
  descriptionKey: string;
  bulletsKey?: string;
  icon: string;
};

const truckIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><path d="M3 16V6a2 2 0 0 1 2-2h8v12H3z"/><path d="M13 8h3l3 3v5h-6V8z"/><circle cx="7.5" cy="18" r="1.75"/><circle cx="17.5" cy="18" r="1.75"/></svg>';
const beakerIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><path d="M10 2v6L4 20a2 2 0 0 0 1.8 3h12.4A2 2 0 0 0 20 20l-6-12V2"/><path d="M6 16h12"/></svg>';
const hardHatIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><path d="M3 18a9 9 0 1 1 18 0"/><path d="M7 18v-2a5 5 0 0 1 10 0v2"/><path d="M12 3v4"/></svg>';
const shieldCheckIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><path d="M12 22s8-3 8-10V5l-8-3-8 3v7c0 7 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>';

export const services: Service[] = [
  {
    id: "delivery",
    titleKey: "home.services.cards.delivery.title",
    descriptionKey: "home.services.cards.delivery.desc",
    bulletsKey: "home.services.cards.delivery.bullets",
    icon: truckIcon
  },
  {
    id: "mixDesign",
    titleKey: "home.services.cards.mixDesign.title",
    descriptionKey: "home.services.cards.mixDesign.desc",
    bulletsKey: "home.services.cards.mixDesign.bullets",
    icon: beakerIcon
  },
  {
    id: "onSiteSupport",
    titleKey: "home.services.cards.onSiteSupport.title",
    descriptionKey: "home.services.cards.onSiteSupport.desc",
    icon: hardHatIcon
  },
  {
    id: "quality",
    titleKey: "home.services.cards.quality.title",
    descriptionKey: "home.services.cards.quality.desc",
    bulletsKey: "home.services.cards.quality.bullets",
    icon: shieldCheckIcon
  }
];

