export type ProcessStep = {
  id: string;
  titleKey: string;
  bodyKey: string;
};

export const processSteps: ProcessStep[] = [
  {
    id: "request",
    titleKey: "pages.about.processItems.request.title",
    bodyKey: "pages.about.processItems.request.body"
  },
  {
    id: "confirm-specs",
    titleKey: "pages.about.processItems.confirmSpecs.title",
    bodyKey: "pages.about.processItems.confirmSpecs.body"
  },
  {
    id: "schedule",
    titleKey: "pages.about.processItems.schedule.title",
    bodyKey: "pages.about.processItems.schedule.body"
  },
  {
    id: "deliver-support",
    titleKey: "pages.about.processItems.deliverSupport.title",
    bodyKey: "pages.about.processItems.deliverSupport.body"
  }
];
