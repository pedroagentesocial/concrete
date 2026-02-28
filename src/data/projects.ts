export type Project = {
  id: string;
  title: string;
  category: string;
  summary: string;
  detail: string;
};

export const projectsData: Project[] = [
  {
    id: "p1",
    title: "Logistics Center Slabs",
    category: "Industrial",
    summary: "High-strength slabs with flatness tolerance targets.",
    detail: "Poured 120,000 sq ft of slabs with laser screed finishing, achieving specified FF/FL values and maintaining schedule under variable temperatures."
  },
  {
    id: "p2",
    title: "Municipal Roadway Paving",
    category: "Infrastructure",
    summary: "Paving mix with air entrainment for freeze-thaw durability.",
    detail: "Coordinated night pours to reduce traffic impact; verified air content and slump for consistent finish and durability."
  },
  {
    id: "p3",
    title: "Mixed-Use Podium",
    category: "Commercial",
    summary: "Post-tensioned deck pours with strict sequencing.",
    detail: "Batching windows locked with GC; delivered mix temperature controls and field adjustments to keep to PT tensioning windows."
  },
  {
    id: "p4",
    title: "Tilt-Up Warehouse Panels",
    category: "Industrial",
    summary: "Fast-cycle panels for accelerated erection schedule.",
    detail: "High early-strength mix design with consistent spread and finish, enabling early lift and panel turnover."
  },
  {
    id: "p5",
    title: "Subdivision Streets",
    category: "Residential",
    summary: "Local streets with broom finish and curb returns.",
    detail: "Sequenced pours for rapid return-to-service; ensured uniform finish and expansion joint placement."
  }
];
