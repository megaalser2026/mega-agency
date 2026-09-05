import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

import logoAsset from "@/assets/mega-logo-official.png.asset.json";
import { cn } from "@/lib/utils";

export const navLinks = [
  { href: "/#hero", label: "الرئيسية" },
  { href: "/#services", label: "الخدمات" },
  { href: "/#about", label: "من نحن" },
  { href: "/#portfolio", label: "الأعمال" },
  { href: "/#contact", label: "تواصل" },
];

export function SiteHeader() {
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
          ? "border-b border-line bg-background/75 shadow-[0_8px_30px_-24px_oklch(0.31_0.083_258.5/40%)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-6 px-5 md:px-8">
        <a href="/#hero" className="flex items-center" aria-label="ميجا ايجنسي">
          <img
            src={logoAsset.url}
            alt="شعار وكالة ميجا"
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
              {l.label}
              <span className="absolute inset-x-4 bottom-1 h-px origin-right scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="luxe-gradient hidden rounded-full px-5 py-2.5 text-[15px] font-bold text-white shadow-sm transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0 sm:inline-flex"
          >
            ابدأ مشروعك
          </Link>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="فتح القائمة"
            aria-expanded={open}
            className="grid size-11 place-items-center rounded-full border border-line bg-background/60 transition-colors hover:border-accent hover:text-accent lg:hidden"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-[70] lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-primary/40 backdrop-blur-sm transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-label="قائمة التنقل"
          className={cn(
            "absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col gap-2 border-l border-line bg-card p-6 shadow-2xl transition-transform duration-400 ease-out-expo",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="mb-4 flex items-center justify-between">
            <img
              src={logoAsset.url}
              alt="شعار وكالة ميجا"
              className="h-10 w-auto"
              width={140}
              height={40}
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="إغلاق القائمة"
              className="grid size-11 place-items-center rounded-full border border-line transition-colors hover:border-accent hover:text-accent"
            >
              <X className="size-5" />
            </button>
          </div>
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl border border-transparent px-4 py-3.5 text-lg font-bold transition-colors hover:border-line hover:bg-surface hover:text-accent"
            >
              {l.label}
            </a>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="luxe-gradient mt-3 rounded-xl px-4 py-3.5 text-center text-lg font-bold text-white"
          >
            ابدأ مشروعك
          </Link>
        </div>
      </div>
    </header>
  );
}
