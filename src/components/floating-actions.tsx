import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Headset, X, Mail, Phone, MessageCircle } from "lucide-react";

import { WhatsAppIcon } from "@/components/brand-icons";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function FloatingActions() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    panelRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <div
      ref={wrapRef}
      className="fixed bottom-6 left-4 z-[60] flex flex-col items-start gap-3 md:bottom-auto md:left-6 md:top-1/2 md:-translate-y-1/2"
    >
      {/* WhatsApp */}
      <a
        href={site.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل عبر واتساب"
        className="pulse-ring group relative grid size-14 place-items-center rounded-full bg-whatsapp text-white shadow-xl transition-transform duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-whatsapp/40 active:scale-95"
      >
        <WhatsAppIcon className="size-7" />
        <span className="pointer-events-none absolute left-16 hidden whitespace-nowrap rounded-md bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:block">
          راسلنا على واتساب
        </span>
      </a>

      {/* Support */}
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-haspopup="dialog"
          aria-label="مركز الدعم"
          className="luxe-gradient grid size-14 place-items-center rounded-full text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-accent/40 active:scale-95"
        >
          {open ? <X className="size-6" /> : <Headset className="size-6" />}
        </button>

        <div
          ref={panelRef}
          role="dialog"
          aria-modal="false"
          aria-label="مركز الدعم"
          tabIndex={-1}
          className={cn(
            "absolute bottom-0 left-0 w-[min(19rem,calc(100vw-2.5rem))] origin-bottom-left rounded-2xl border border-line bg-card p-5 text-right shadow-2xl outline-none transition-all duration-300 ease-out-expo md:left-16",
            open
              ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
              : "pointer-events-none translate-y-2 scale-95 opacity-0",
          )}
          style={{ bottom: "4.5rem" }}
        >
          <div className="mb-1 flex items-center gap-2">
            <span className="size-2 animate-pulse rounded-full bg-whatsapp" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              Support Online
            </span>
          </div>
          <h4 className="mb-1 text-lg font-extrabold">كيف نساعدك اليوم؟</h4>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            فريق ميجا جاهز للرد على استفسارك خلال دقائق.
          </p>
          <div className="space-y-2">
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-line p-3 text-sm font-bold transition-colors hover:border-whatsapp hover:text-whatsapp"
            >
              <MessageCircle className="size-4" /> محادثة واتساب فورية
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-3 rounded-lg border border-line p-3 text-sm font-bold transition-colors hover:border-accent hover:text-accent"
            >
              <Mail className="size-4" /> {site.email}
            </a>
            <a
              href={`tel:${site.whatsappNumber}`}
              className="flex items-center gap-3 rounded-lg border border-line p-3 text-sm font-bold transition-colors hover:border-accent hover:text-accent"
            >
              <Phone className="size-4" /> {site.phone}
            </a>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block rounded-lg bg-primary p-3 text-center text-sm font-bold text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              صفحة التواصل الكاملة
            </Link>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="إغلاق لوحة الدعم"
            className="absolute left-3 top-3 grid size-8 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
          >
            <X className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
