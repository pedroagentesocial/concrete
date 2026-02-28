export type AboutTimelineItem = {
  id: string;
  titleKey: string;
  bodyKey: string;
};

export const aboutTimeline: AboutTimelineItem[] = [
  {
    id: "local-operations",
    titleKey: "pages.about.timeline.localOperations.title",
    bodyKey: "pages.about.timeline.localOperations.body"
  },
  {
    id: "delivery-capability",
    titleKey: "pages.about.timeline.deliveryCapability.title",
    bodyKey: "pages.about.timeline.deliveryCapability.body"
  },
  {
    id: "mix-guidance",
    titleKey: "pages.about.timeline.mixGuidance.title",
    bodyKey: "pages.about.timeline.mixGuidance.body"
  },
  {
    id: "jobsite-coordination",
    titleKey: "pages.about.timeline.jobsiteCoordination.title",
    bodyKey: "pages.about.timeline.jobsiteCoordination.body"
  }
];
