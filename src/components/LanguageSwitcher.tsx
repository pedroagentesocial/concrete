import { useEffect, useMemo, useState } from "react";
import { getLangFromPath, t, type Lang } from "../i18n";
import usFlagUrl from "../assets/flags/us.svg?url";
import esLatamFlagUrl from "../assets/flags/es-latam.svg?url";

const swapPrefix = (pathname: string, to: Lang) => {
  const parts = pathname.split("/");
  if (parts.length > 1 && (parts[1] === "en" || parts[1] === "es")) {
    parts[1] = to;
    return parts.join("/") || "/";
  }
  return `/${to}${pathname.startsWith("/") ? "" : "/"}${pathname}`;
};

const LanguageSwitcher = () => {
  const [pathname, setPathname] = useState<string>("/");

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  const lang: Lang = useMemo(() => getLangFromPath(pathname), [pathname]);
  const toEnPath = swapPrefix(pathname, "en");
  const toEsPath = swapPrefix(pathname, "es");
  const labelEn = t<string>(lang, "common.a11y.switchToEnglish");
  const labelEs = t<string>(lang, "common.a11y.switchToSpanish");

  const goTo = (to: Lang) => {
    try {
      localStorage.setItem("preferredLang", to);
    } catch {}
    window.location.assign(to === "en" ? toEnPath : toEsPath);
  };

  return (
    <div className="inline-flex items-center gap-1 rounded-2xl border border-muted bg-white p-1">
      <button
        type="button"
        aria-pressed={lang === "en"}
        aria-label={labelEn}
        tabIndex={lang === "en" ? 0 : -1}
        onClick={() => goTo("en")}
        className={`grid place-items-center h-9 w-9 rounded-xl transition-all duration-200 ease-out hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${
          lang === "en" ? "bg-surface ring-1 ring-brand" : "bg-transparent"
        }`}
        title={labelEn}
      >
        <img src={usFlagUrl} alt="" className="h-5 w-5 rounded-sm" />
      </button>
      <button
        type="button"
        aria-pressed={lang === "es"}
        aria-label={labelEs}
        tabIndex={lang === "es" ? 0 : -1}
        onClick={() => goTo("es")}
        className={`grid place-items-center h-9 w-9 rounded-xl transition-all duration-200 ease-out hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${
          lang === "es" ? "bg-surface ring-1 ring-brand" : "bg-transparent"
        }`}
        title={labelEs}
      >
        <img src={esLatamFlagUrl} alt="" className="h-5 w-5 rounded-sm" />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
