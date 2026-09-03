import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/brand-icons";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <a
        href={site.facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="فيسبوك"
        className="grid size-11 place-items-center rounded-full bg-facebook text-white shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
      >
        <FacebookIcon className="size-5" />
      </a>
      <a
        href={site.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="واتساب"
        className="grid size-11 place-items-center rounded-full bg-whatsapp text-white shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
      >
        <WhatsAppIcon className="size-5" />
      </a>
      <a
        href={site.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="إنستغرام"
        className="ig-gradient grid size-11 place-items-center rounded-full text-white shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
      >
        <InstagramIcon className="size-5" />
      </a>
    </div>
  );
}
