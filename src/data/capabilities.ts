export type CapabilityItem = {
  id: string;
  titleKey: string;
  bodyKey: string;
  iconKey: "delivery" | "readyMix" | "aggregates" | "coordination";
};

export const capabilities: CapabilityItem[] = [
  {
    id: "delivery-scheduling",
    titleKey: "pages.about.capabilityItems.delivery.title",
    bodyKey: "pages.about.capabilityItems.delivery.body",
    iconKey: "delivery"
  },
  {
    id: "ready-mix-support",
    titleKey: "pages.about.capabilityItems.readyMix.title",
    bodyKey: "pages.about.capabilityItems.readyMix.body",
    iconKey: "readyMix"
  },
  {
    id: "aggregates-supply",
    titleKey: "pages.about.capabilityItems.aggregates.title",
    bodyKey: "pages.about.capabilityItems.aggregates.body",
    iconKey: "aggregates"
  },
  {
    id: "jobsite-coordination",
    titleKey: "pages.about.capabilityItems.coordination.title",
    bodyKey: "pages.about.capabilityItems.coordination.body",
    iconKey: "coordination"
  }
];
