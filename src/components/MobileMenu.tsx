import { useEffect, useId, useRef, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import Button from "./Button";
import { t, type Lang } from "../i18n";

type MobileMenuProps = {
  lang: Lang;
};

export default function MobileMenu({ lang }: MobileMenuProps) {
  const [open, setOpen] = useState(false); // mounted
  const [shown, setShown] = useState(false); // animated visible
  const [pathname, setPathname] = useState<string>("/");
  const menuId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setPathname(typeof window !== "undefined" ? window.location.pathname : "/");
  }, []);

    // Animate in/out
  useEffect(() => {
    if (!open) return;
    const rAF = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(rAF);
  }, [open]);

  useEffect(() => {
    if (shown) {
      closeRef.current?.focus();
    }
  }, [shown]);

  const closeDrawer = () => {
    setShown(false);
    window.setTimeout(() => {
      setOpen(false);
      // Restore focus to trigger
      triggerRef.current?.focus();
    }, 200);
  };

  // ESC to close and focus trap
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeDrawer();
      } else if (e.key === "Tab") {
        const panel = panelRef.current;
        if (!panel) return;
        const focusables = Array.from(
          panel.querySelectorAll<HTMLElement>(
            'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
          )
        ).filter((el) => !el.hasAttribute("disabled") && el.tabIndex !== -1);
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement as HTMLElement | null;
        if (e.shiftKey) {
          if (active === first || !panel.contains(active)) {
            e.preventDefault();
            (last as HTMLElement).focus();
          }
        } else {
          if (active === last || !panel.contains(active)) {
            e.preventDefault();
            (first as HTMLElement).focus();
          }
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const links = [
    { href: `/${lang}/`, label: t(lang, "common.nav.home") },
    { href: `/${lang}/products`, label: t(lang, "common.nav.products") },
    { href: `/${lang}/services`, label: t(lang, "common.nav.services") },
    { href: `/${lang}/projects`, label: t(lang, "common.nav.projects") },
    { href: `/${lang}/resources`, label: t(lang, "common.nav.resources") },
    { href: `/${lang}/about`, label: t(lang, "common.nav.about") },
    { href: `/${lang}/contact`, label: t(lang, "common.nav.contact") },
  ];

  const isActive = (href: string) => {
    if (href.endsWith(`/${lang}/`)) return pathname === `/${lang}/`;
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <div className="lg:hidden">
      <button
        type="button"
        ref={triggerRef}
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={String(open ? t(lang, "common.a11y.closeNav") : t(lang, "common.a11y.openNav"))}
        onClick={() => setOpen(true)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-muted bg-white text-text transition-all duration-200 ease-out hover:bg-surface hover:-translate-y-0.5 hover:scale-[1.01] active:translate-y-0 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-5 w-5 stroke-current text-text"
          fill="none"
          aria-hidden="true"
        >
          <path d="M4 7h16M4 12h16M4 17h16" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
      {open ? (
        <div className="fixed inset-0 z-50">
          <button
            aria-label={String(t(lang, "common.close"))}
            onClick={closeDrawer}
            className={`absolute inset-0 bg-black/30 transition-opacity duration-200 ease-out ${shown ? "opacity-100" : "opacity-0"}`}
          />
          <div
            id={menuId}
            role="dialog"
            aria-modal="true"
            ref={panelRef}
            className={`absolute right-0 top-0 bottom-0 w-[85vw] max-w-sm border-l border-muted bg-white transition-transform duration-200 ease-out ${
              shown ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between border-b border-muted px-4 py-3">
              <a href={`/${lang}/`} className="flex flex-col">
                <span className="text-xs uppercase tracking-[0.2em] text-muted">Wasatch</span>
                <span className="text-base font-semibold text-text">Wasatch Cement & Concrete Supply</span>
              </a>
              <div className="flex items-center gap-2">
                <LanguageSwitcher />
                <button
                  ref={closeRef}
                  onClick={closeDrawer}
                  className="rounded-2xl border border-muted px-3 py-2 text-xs font-semibold text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                  aria-label={String(t(lang, "common.close"))}
                >
                  X
                </button>
              </div>
            </div>
            <nav aria-label="Mobile navigation" className="px-2 py-2">
              <ul className="flex flex-col">
                {links.map((l) => {
                  const active = isActive(l.href);
                  return (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        className={`block px-4 py-3 text-base font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${
                          active
                            ? "border-l-2 border-brand text-text"
                            : "text-text hover:bg-surface"
                        }`}
                        aria-current={active ? "page" : undefined}
                      >
                        {String(l.label)}
                      </a>
                    </li>
                  );
                })}
                <li className="pt-2 px-2">
                  <Button onClick={() => (window.location.href = `/${lang}/contact`)} variant="primary" className="w-full">
                    {String(t(lang, "home.hero.primaryCta"))}
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      ) : null}
    </div>
  );
}
