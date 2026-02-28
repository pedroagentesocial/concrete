import React, { useEffect, useRef, useState, type CSSProperties, type PropsWithChildren } from "react";

type RevealProps = PropsWithChildren<{
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  delayMs?: number;
  durationClass?: string;
}>;

const Reveal = ({ as = "div", className, delayMs = 0, durationClass = "duration-700", children }: RevealProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduce(m.matches);
    apply();
    m.addEventListener("change", apply);
    return () => m.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (reduce) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries, o) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            o.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [reduce]);

  const Comp = as as any;
  const base =
    "transition-opacity transition-transform ease-out will-change-transform";
  const start = "opacity-0 translate-y-3";
  const end = "opacity-100 translate-y-0";
  const motionReduce = "motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none";
  const classes = [base, durationClass, visible ? end : start, motionReduce, className]
    .filter(Boolean)
    .join(" ");

  const style: CSSProperties = delayMs ? { transitionDelay: `${delayMs}ms` } : {};

  return (
    <Comp ref={ref as any} className={classes} style={style}>
      {children}
    </Comp>
  );
};

export default Reveal;
