import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Headset, X, Mail, Phone, MessageCircle } from "lucide-react";

import { WhatsAppIcon } from "@/components/brand-icons";
import { site } from "@/lib/site";

export function FloatingActions() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed left-4 top-1/2 z-[60] flex -translate-y-1/2 flex-col items-start gap-3 md:left-6">
      {/* WhatsApp */}
      <a
        href={site.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل عبر واتساب"
        className="pulse-ring group grid size-14 place-items-center rounded-full bg-whatsapp text-white shadow-xl transition-transform duration-300 hover:scale-110"
      >
        <WhatsAppIcon className="size-7" />
        <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-md bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          راسلنا على واتساب
        </span>
      </a>

      {/* Support */}
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="مركز الدعم"
          className="luxe-gradient grid size-14 place-items-center rounded-full text-white shadow-xl transition-transform duration-300 hover:scale-110"
        >
          {open ? <X className="size-6" /> : <Headset className="size-6" />}
        </button>

        {open && (
          <div className="absolute bottom-0 left-16 w-72 animate-[pixel-fade_0.35s_var(--ease-out-expo)_both] rounded-2xl border border-line bg-card p-5 text-right shadow-2xl">
            <div className="mb-1 flex items-center gap-2">
              <span className="size-2 animate-pulse rounded-full bg-whatsapp" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Support Online
              </span>
            </div>
            <h4 className="mb-1 text-lg font-extrabold">كيف نساعدك اليوم؟</h4>
            <p className="mb-4 text-xs text-muted-foreground">
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
          </div>
        )}
      </div>
    </div>
  );
}
