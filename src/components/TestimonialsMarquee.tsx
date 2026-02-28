import { useEffect, useMemo, useRef, useState } from "react";
import type { Lang } from "../i18n";
import { testimonials as source } from "../data/testimonials";

type Props = {
  lang: Lang;
};

const Star = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4 fill-current">
    <path d="M10 1.5l2.66 5.39 5.95.86-4.3 4.19 1.02 5.94L10 15.8l-5.33 2.88 1.02-5.94-4.3-4.19 5.95-.86L10 1.5z" />
  </svg>
);

const Stars = ({ count = 5 }: { count?: number }) => (
  <div className="flex items-center gap-0.5 text-brand" aria-label={`${count} out of 5`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={i < count ? "" : "opacity-20"}>
        <Star />
      </span>
    ))}
  </div>
);

export default function TestimonialsMarquee({ lang }: Props) {
  const [reduce, setReduce] = useState(false);
  const [paused, setPaused] = useState(false);
  const scrollTimer = useRef<number | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const update = () => setReduce(Boolean(mq?.matches));
    update();
    mq?.addEventListener?.("change", update);
    return () => mq?.removeEventListener?.("change", update);
  }, []);

  const items = useMemo(() => [...source, ...source], []);

  if (reduce) {
    return (
      <div className="rounded-2xl border border-muted bg-white p-0">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {source.map((item) => (
            <li key={item.id}>
              <article className="rounded-2xl border border-muted bg-surface p-6">
                <div className="flex items-center gap-3">
                  <img
                    src={item.photoUrl}
                    alt={`Photo of ${item.name}`}
                    className="h-10 w-10 rounded-full border border-muted object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-text">{item.name}</p>
                    <p className="text-xs text-muted">{item.location}</p>
                  </div>
                </div>
                <p className="mt-4 text-xs text-muted">Google Reviews</p>
                <div className="mt-1">
                  <Stars count={item.rating} />
                </div>
                <p className="mt-3 text-sm text-text">{lang === "es" ? item.textEs : item.textEn}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="marquee rounded-2xl border border-muted bg-white" data-paused={paused || undefined}>
      <div
        ref={viewportRef}
        className="overflow-x-auto md:overflow-hidden"
        onPointerDown={() => setPaused(true)}
        onPointerUp={() => setPaused(false)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
        onScroll={() => {
          setPaused(true);
          if (scrollTimer.current) window.clearTimeout(scrollTimer.current);
          scrollTimer.current = window.setTimeout(() => setPaused(false), 180);
        }}
      >
        <div
          className="marquee-track flex w-max gap-6 whitespace-nowrap"
        >
          {items.map((item, idx) => (
            <div key={`${item.id}-${idx}`} className="min-w-[280px] shrink-0 sm:min-w-[340px]">
              <article className="rounded-2xl border border-muted bg-surface p-6">
                <div className="flex items-center gap-3">
                  <img
                    src={item.photoUrl}
                    alt={`Photo of ${item.name}`}
                    className="h-10 w-10 rounded-full border border-muted object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-text">{item.name}</p>
                    <p className="text-xs text-muted">{item.location}</p>
                  </div>
                </div>
                <p className="mt-4 text-xs text-muted">Google Reviews</p>
                <div className="mt-1">
                  <Stars count={item.rating} />
                </div>
                <p className="mt-3 text-sm text-text">{lang === "es" ? item.textEs : item.textEn}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
