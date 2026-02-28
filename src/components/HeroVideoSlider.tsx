import { useEffect, useRef, useState } from "react";
import { t, type Lang } from "../i18n";
import { heroSlides } from "../data/heroSlides";

type Props = {
  lang: Lang;
};

const HeroVideoSlider = ({ lang }: Props) => {
  const slides = heroSlides;
  const [index, setIndex] = useState(0);
  const [reduce, setReduce] = useState(false);
  const [pausedByUser, setPausedByUser] = useState(false);
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduce(mq.matches);
    update();
    try {
      mq.addEventListener("change", update);
      return () => mq.removeEventListener("change", update);
    } catch {
      mq.addListener(update);
      return () => mq.removeListener(update);
    }
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === index && !reduce) {
        v.muted = true;
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [index, reduce]);

  useEffect(() => {
    if (reduce || pausedByUser) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 8000);
    return () => window.clearInterval(id);
  }, [reduce, pausedByUser, slides.length]);

  const onPrev = () => {
    setPausedByUser(true);
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  };
  const onNext = () => {
    setPausedByUser(true);
    setIndex((i) => (i + 1) % slides.length);
  };
  const onDot = (i: number) => {
    setPausedByUser(true);
    setIndex(i);
  };

  const a11yPrev = t<string>(lang, "common.a11y.prevSlide");
  const a11yNext = t<string>(lang, "common.a11y.nextSlide");

  return (
    <section className="relative w-full">
      <div className="relative min-h-[420px] sm:min-h-[480px] lg:min-h-[560px] overflow-hidden">
        {slides.map((slide, i) => {
          const isActive = i === index;
          const base = "absolute inset-0";
          const motion = reduce
            ? isActive
              ? "opacity-100 scale-100"
              : "hidden"
            : `transition-opacity transition-transform duration-500 ease-out ${
                isActive ? "opacity-100 scale-100" : "opacity-0 scale-[1.02]"
              }`;
          return (
            <div
              key={slide.id}
              className={`${base} ${motion}`}
              aria-hidden={!isActive}
            >
              <video
                ref={(el) => {
                  if (el) videoRefs.current[i] = el;
                }}
                className="absolute inset-0 h-full w-full object-cover"
                muted
                playsInline
                loop
                autoPlay={isActive && !reduce}
                poster={slide.posterSrc}
                aria-hidden="true"
                preload="metadata"
                src={slide.videoSrc}
              />
              <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
              <div className="relative z-10 flex h-full items-end">
                <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                  <div className="max-w-3xl space-y-4">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
                      {t<string>(lang, slide.titleKey)}
                    </h1>
                    <p className="text-base sm:text-lg text-white/90">
                      {t<string>(lang, slide.subtitleKey)}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <a
                        href={`/${lang}${slide.ctaPrimaryHref}`}
                        className="group relative overflow-hidden inline-flex items-center justify-center h-11 px-5 rounded-2xl text-sm font-semibold text-white bg-primary transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.01] active:translate-y-0 active:scale-[0.99] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                      >
                        {t<string>(lang, slide.ctaPrimaryKey)}
                      </a>
                      <a
                        href={`/${lang}${slide.ctaSecondaryHref}`}
                        className="group relative overflow-hidden inline-flex items-center justify-center h-11 px-5 rounded-2xl text-sm font-semibold text-white bg-secondary transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.01] active:translate-y-0 active:scale-[0.99] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                      >
                        {t<string>(lang, slide.ctaSecondaryKey)}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-between px-2 sm:px-4">
          <button
            type="button"
            onClick={onPrev}
            aria-label={a11yPrev}
            className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-muted bg-white text-text transition-all duration-200 ease-out hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={onNext}
            aria-label={a11yNext}
            className="pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-muted bg-white text-text transition-all duration-200 ease-out hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-4 z-30">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-2">
          {slides.map((s, i) => {
            const isActive = i === index;
            const label = t<string>(lang, "common.a11y.goToSlide", { index: i + 1 });
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => onDot(i)}
                aria-label={label}
                aria-current={isActive ? "true" : undefined}
                className={`h-2.5 w-2.5 rounded-full border border-muted ${isActive ? "bg-brand" : "bg-white"} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg transition-colors`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroVideoSlider;
