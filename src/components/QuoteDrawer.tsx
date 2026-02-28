import { useEffect, useState } from "react";
import Button from "./Button";
import QuoteForm from "./QuoteForm";
import { type Lang, t } from "../i18n";

type Props = {
  lang: Lang;
};

const QuoteDrawer = ({ lang }: Props) => {
  const [open, setOpen] = useState(false);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduce(m.matches);
    apply();
    m.addEventListener("change", apply);
    return () => m.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const openDrawer = () => setOpen(true);
    window.addEventListener("open-quote-drawer", openDrawer as EventListener);
    return () => window.removeEventListener("open-quote-drawer", openDrawer as EventListener);
  }, []);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40">
        <Button onClick={() => setOpen(true)} variant="primary">
          {t(lang, "home.hero.primaryCta")}
        </Button>
      </div>
      {open ? (
        <div className="fixed inset-0 z-50">
          <button aria-label={t<string>(lang, "common.close")} onClick={() => setOpen(false)} className="absolute inset-0 bg-black/30" />
          <aside
            className={`absolute right-0 top-0 h-full w-full max-w-md border-l border-muted bg-bg p-6 ${
              reduce ? "" : "animate-scale-in"
            }`}
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-text">{t(lang, "home.form.title")}</h2>
            <Button onClick={() => setOpen(false)} variant="ghost" className="px-3 py-1 text-xs">
              {t(lang, "common.close")}
            </Button>
            </div>
            <div className="mt-4">
              <QuoteForm labels={t(lang, "home.form") as any} />
            </div>
          </aside>
        </div>
      ) : null}
    </>
  );
};

export default QuoteDrawer;
