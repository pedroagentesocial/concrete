export type WhyUsMetric = {
  valueKey: string;
  labelKey: string;
};

export type WhyUsItem = {
  id: string;
  titleKey: string;
  descriptionKey: string;
  metric?: WhyUsMetric;
  icon: string;
};

export const whyUsItems: WhyUsItem[] = [
  {
    id: "reliableScheduling",
    titleKey: "home.whyUs.items.reliableScheduling.title",
    descriptionKey: "home.whyUs.items.reliableScheduling.desc",
    metric: {
      valueKey: "home.whyUs.items.reliableScheduling.metricValue",
      labelKey: "home.whyUs.items.reliableScheduling.metricLabel"
    },
    icon: "calendar"
  },
  {
    id: "specQuality",
    titleKey: "home.whyUs.items.specQuality.title",
    descriptionKey: "home.whyUs.items.specQuality.desc",
    metric: {
      valueKey: "home.whyUs.items.specQuality.metricValue",
      labelKey: "home.whyUs.items.specQuality.metricLabel"
    },
    icon: "checklist"
  },
  {
    id: "localLogistics",
    titleKey: "home.whyUs.items.localLogistics.title",
    descriptionKey: "home.whyUs.items.localLogistics.desc",
    metric: {
      valueKey: "home.whyUs.items.localLogistics.metricValue",
      labelKey: "home.whyUs.items.localLogistics.metricLabel"
    },
    icon: "map"
  },
  {
    id: "jobsiteSupport",
    titleKey: "home.whyUs.items.jobsiteSupport.title",
    descriptionKey: "home.whyUs.items.jobsiteSupport.desc",
    icon: "tool"
  },
  {
    id: "safetyFirst",
    titleKey: "home.whyUs.items.safetyFirst.title",
    descriptionKey: "home.whyUs.items.safetyFirst.desc",
    icon: "shield"
  },
  {
    id: "clearCommunication",
    titleKey: "home.whyUs.items.clearCommunication.title",
    descriptionKey: "home.whyUs.items.clearCommunication.desc",
    icon: "chat"
  }
];

export const whyUsIcons: Record<string, string> = {
  calendar:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
  checklist:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><path d="M9 6h11"/><path d="M9 12h11"/><path d="M9 18h11"/><path d="m4 6 1.5 1.5L7 6"/><path d="m4 12 1.5 1.5L7 12"/><path d="m4 18 1.5 1.5L7 18"/></svg>',
  map:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3z"/><path d="M9 3v15M15 6v15"/></svg>',
  tool:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><path d="M14 7l3 3-8 8H6v-3z"/><path d="M15 6l3 3"/><path d="M3 21l6-6"/></svg>',
  shield:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><path d="M12 22s8-3 8-10V5l-8-3-8 3v7c0 7 8 10 8 10z"/></svg>',
  chat:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/></svg>'
};
