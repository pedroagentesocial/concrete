import { useId, useState } from "react";
import { t, type Lang } from "../i18n";

type FaqItem = {
  question: string;
  answer: string;
};

type Props = {
  lang: Lang;
};

const FaqAccordion = ({ lang }: Props) => {
  const baseId = useId();
  const items = t<FaqItem[]>(lang, "pages.contact.faq.items");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-4xl space-y-3">
      {items.map((item, idx) => {
        const open = openIndex === idx;
        const buttonId = `${baseId}-button-${idx}`;
        const panelId = `${baseId}-panel-${idx}`;
        return (
          <div key={buttonId} className="rounded-2xl border border-muted bg-surface">
            <button
              type="button"
              id={buttonId}
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpenIndex(open ? null : idx)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand focus-visible:outline-offset-2"
            >
              <span>{item.question}</span>
              <span
                className={`inline-flex h-8 w-8 items-center justify-center rounded-full border border-muted text-text/70 transition-transform duration-200 motion-reduce:transition-none ${
                  open ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`${open ? "block" : "hidden"} px-5 pb-5 text-sm text-text/80`}
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FaqAccordion;
