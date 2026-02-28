import React, { useMemo, useState } from "react";
import Modal from "./Modal";
import Reveal from "./Reveal";
import { type Lang, t } from "../i18n";
import { projectsData, type Project } from "../data/projects";

type Props = {
  lang: Lang;
};

const ProjectGrid = ({ lang }: Props) => {
  const categories: string[] = useMemo(() => {
    const all = new Set(projectsData.map((p: Project) => p.category));
    return ["All", ...Array.from(all)];
  }, []);
  const [active, setActive] = useState("All");
  const [openId, setOpenId] = useState<string | null>(null);

  const list: Project[] = projectsData.filter((p: Project) => active === "All" || p.category === active);
  const viewDetails = t<string>(lang, "home.projects.viewDetails");
  const closeLabel = t<string>(lang, "common.close");

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-2">
        {categories.map((c: string) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
              active === c
                ? "border-transparent bg-primary text-primary-foreground"
                : "border-muted bg-bg text-text hover:bg-surface"
            } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg`}
            aria-pressed={active === c}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p: Project, idx: number) => (
          <Reveal key={p.id} delayMs={(idx + 1) * 80}>
            <article className="rounded-2xl border border-muted bg-surface p-6">
              <h3 className="text-lg font-semibold text-text">{p.title}</h3>
              <p className="mt-2 text-xs text-muted">{p.category}</p>
              <p className="mt-3 max-w-2xl text-sm text-text">{p.summary}</p>
              <div className="mt-4">
                <button
                  onClick={() => setOpenId(p.id)}
                  className="rounded-full bg-secondary px-4 py-2 text-xs font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                >
                  {viewDetails}
                </button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      {projectsData.map((p: Project) => {
        const titleId = `project-modal-${p.id}`;
        return (
          <Modal key={p.id} open={openId === p.id} onClose={() => setOpenId(null)} titleId={titleId} closeLabel={closeLabel}>
            <h3 id={titleId} className="text-lg font-semibold text-text">
              {p.title}
            </h3>
            <p className="text-sm text-text">{p.detail}</p>
          </Modal>
        );
      })}
    </div>
  );
};

export default ProjectGrid;
