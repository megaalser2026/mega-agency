import { useEffect, useRef, useState } from "react";
import { Check, Globe } from "lucide-react";

import { locales, useI18n, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({
  className,
  triggerClassName,
}: {
  className?: string;
  triggerClassName?: string;
}) {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const current = locales.find((l) => l.code === locale) ?? locales[0]!;

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("nav.language")}
        className={cn(
          "flex h-11 items-center gap-2 rounded-full border border-line bg-background/60 px-3 text-sm font-bold text-foreground transition-colors duration-300 hover:border-accent hover:text-accent",
          triggerClassName,
        )}
      >
        <Globe className="size-4" />
        <span aria-hidden="true">{current.flag}</span>
        <span className="hidden sm:inline">{current.code.toUpperCase()}</span>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute end-0 top-[calc(100%+8px)] z-[80] w-44 overflow-hidden rounded-xl border border-line bg-card p-1 shadow-xl"
        >
          {locales.map((l) => (
            <li key={l.code}>
              <button
                type="button"
                role="option"
                aria-selected={l.code === locale}
                onClick={() => {
                  setLocale(l.code as Locale);
                  setOpen(false);
                }}
                className={cn(
                  "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-start text-sm font-bold transition-colors hover:bg-surface",
                  l.code === locale ? "text-accent" : "text-foreground",
                )}
              >
                <span aria-hidden="true">{l.flag}</span>
                <span className="flex-1">{l.label}</span>
                {l.code === locale && <Check className="size-4" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
