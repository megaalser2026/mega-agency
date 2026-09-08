import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

import logoAsset from "@/assets/mega-logo-official.png.asset.json";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { useI18n, type Key } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export const navLinks: { href: string; key: Key }[] = [
  { href: "/#hero", key: "nav.home" },
  { href: "/#services", key: "nav.services" },
  { href: "/#about", key: "nav.about" },
  { href: "/#portfolio", key: "nav.work" },
  { href: "/#contact", key: "nav.contact" },
];

export function SiteHeader() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-line bg-background/95 shadow-[0_8px_30px_-24px_oklch(0.31_0.083_258.5/40%)] backdrop-blur-xl supports-[backdrop-filter]:bg-background/85"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-5 md:px-8">
        <a href="/#hero" className="flex items-center" aria-label="MEGA Agency">
          <img
            src={logoAsset.url}
            alt={t("logo.alt")}
            className="h-10 w-auto md:h-11"
            width={140}
            height={44}
          />
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative rounded-full px-4 py-2 text-[15px] font-bold text-foreground/80 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {t(l.key)}
              <span className="absolute inset-x-4 bottom-1 h-px origin-center scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden sm:grid" />
          <LanguageSwitcher className="hidden sm:block" />
          <Link
            to="/contact"
            className="luxe-gradient hidden rounded-full px-5 py-2.5 text-[15px] font-bold text-white shadow-sm transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0 lg:inline-flex"
          >
            {t("nav.cta")}
          </Link>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={t("nav.open")}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid size-11 place-items-center rounded-full border border-line bg-background/80 text-foreground transition-colors hover:border-accent hover:text-accent lg:hidden"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-[70] lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-primary/70 backdrop-blur-sm transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t("nav.menu")}
          className={cn(
            "absolute inset-y-0 end-0 flex w-[86%] max-w-sm flex-col gap-1.5 border-s border-white/10 bg-primary p-6 text-primary-foreground shadow-[-24px_0_60px_-24px_rgba(0,0,0,0.55)] transition-transform duration-300 ease-out-expo",
            open ? "translate-x-0" : "ltr:translate-x-full rtl:-translate-x-full",
          )}
        >
          <div className="mb-4 flex items-center justify-between">
            <span className="inline-flex items-center rounded-xl bg-white px-3 py-2 shadow-sm">
              <img
                src={logoAsset.url}
                alt={t("logo.alt")}
                className="h-9 w-auto"
                width={130}
                height={36}
              />
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t("nav.close")}
              className="grid size-11 place-items-center rounded-full border border-white/15 text-primary-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <X className="size-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-1.5">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl border border-transparent px-4 py-3.5 text-lg font-bold text-primary-foreground/90 transition-colors hover:border-white/10 hover:bg-white/10 hover:text-white"
              >
                {t(l.key)}
              </a>
            ))}
          </nav>

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="luxe-gradient mt-3 rounded-xl px-4 py-3.5 text-center text-lg font-bold text-white"
          >
            {t("nav.cta")}
          </Link>

          <div className="mt-auto flex items-center gap-2 border-t border-white/10 pt-5">
            <ThemeToggle className="border-white/20 bg-white/10 text-primary-foreground hover:border-accent hover:text-accent" />
            <LanguageSwitcher triggerClassName="border-white/20 bg-white/10 text-primary-foreground hover:border-accent hover:text-accent" />
          </div>
        </div>
      </div>
    </header>
  );
}
