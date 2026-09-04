import { Link } from "@tanstack/react-router";

import logoAsset from "@/assets/mega-logo-official.png.asset.json";
import { SocialLinks } from "@/components/social-links";
import { VisaIcon, MastercardIcon } from "@/components/payment-icons";
import { navLinks } from "@/components/site-header";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <img
              src={logoAsset.url}
              alt="شعار وكالة ميجا"
              className="mb-5 h-12 w-auto"
              width={160}
              height={48}
              loading="lazy"
            />
            <p className="max-w-sm text-[15px] leading-relaxed text-muted-foreground">
              وكالة ميجا: هندسة المواقع والتطبيقات، إدارة الإعلام الرقمي، وحلول
              الذكاء الاصطناعي للشركات الطامحة.
            </p>
            <SocialLinks className="mt-6" />
          </div>

          <nav aria-label="روابط الموقع">
            <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">
              روابط سريعة
            </h4>
            <ul className="space-y-3 text-[15px] font-bold">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="transition-colors hover:text-accent"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  className="transition-colors hover:text-accent"
                >
                  صفحة التواصل
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">
              تواصل معنا
            </h4>
            <ul className="space-y-3 text-[15px] font-bold">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-accent"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  {site.phone}
                </a>
              </li>
            </ul>

            <h4 className="mb-3 mt-8 text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground">
              طرق الدفع المقبولة
            </h4>
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-14 place-items-center rounded-md border border-line bg-card px-2">
                <VisaIcon className="h-4 w-auto" />
              </span>
              <span className="grid h-9 w-14 place-items-center rounded-md border border-line bg-card px-2">
                <MastercardIcon className="h-5 w-auto" />
              </span>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-center text-sm text-muted-foreground md:flex-row md:text-right">
          <span>© ٢٠٢٦ وكالة ميجا للحلول الرقمية. جميع الحقوق محفوظة.</span>
          <span className="font-mono text-xs tracking-widest">
            WEB · MEDIA · AI SOLUTIONS
          </span>
        </div>
      </div>
    </footer>
  );
}
