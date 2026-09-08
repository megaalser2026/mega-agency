import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

import { SocialLinks } from "@/components/social-links";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppIcon } from "@/components/brand-icons";
import { site } from "@/lib/site";
import { useI18n, type Key } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تواصل مع ميجا | استشارة تقنية مجانية" },
      {
        name: "description",
        content:
          "تواصل مع وكالة ميجا عبر واتساب أو البريد الإلكتروني أو نموذج التواصل للحصول على استشارة مجانية حول مشروعك الرقمي.",
      },
      { property: "og:title", content: "تواصل مع وكالة ميجا" },
      {
        property: "og:description",
        content: "استشارة تقنية مجانية لمشروعك: مواقع، تطبيقات، ميديا، وذكاء اصطناعي.",
      },
    ],
  }),
  component: ContactPage,
});

const cards: {
  icon: typeof Mail;
  titleKey: Key;
  value: string;
  valueKey?: Key;
  href?: string;
}[] = [
  {
    icon: Mail,
    titleKey: "contact.card.email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: Phone,
    titleKey: "contact.card.phone",
    value: site.phone,
    href: `tel:${site.whatsappNumber}`,
  },
  {
    icon: MapPin,
    titleKey: "contact.card.hq",
    value: "",
    valueKey: "contact.card.hqValue",
  },
  {
    icon: Clock,
    titleKey: "contact.card.hours",
    value: "",
    valueKey: "contact.card.hoursValue",
  },
];

function ContactPage() {
  const { t } = useI18n();
  const [sending, setSending] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-line px-6 pb-20 pt-36">
        <div className="pointer-events-none absolute inset-0 mesh-bg" />
        <div className="pointer-events-none absolute inset-0 hairlines opacity-60" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <h1 className="mb-6 max-w-2xl text-4xl font-extrabold leading-tight md:text-6xl">
            {t("contact.h1a")}{" "}
            <span className="luxe-text">{t("contact.h1b")}</span>
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            {t("contact.lead")}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-4 md:grid-cols-4">
          {cards.map(({ icon: Icon, titleKey, value, valueKey, href }) => {
            const inner = (
              <>
                <div className="mb-5 grid size-11 place-items-center rounded-lg bg-primary text-primary-foreground">
                  <Icon className="size-5" />
                </div>
                <div className="mb-1 text-sm font-bold text-muted-foreground">
                  {t(titleKey)}
                </div>
                <div className="font-bold">{valueKey ? t(valueKey) : value}</div>
              </>
            );
            return href ? (
              <a
                key={titleKey}
                href={href}
                className="luxe-card luxe-card-hover block rounded-2xl p-7"
              >
                {inner}
              </a>
            ) : (
              <div
                key={titleKey}
                className="luxe-card luxe-card-hover rounded-2xl p-7"
              >
                {inner}
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-12 md:grid-cols-5">
          <form
            className="luxe-card space-y-5 rounded-2xl p-8 md:col-span-3"
            onSubmit={(e) => {
              e.preventDefault();
              setSending(true);
              setTimeout(() => {
                setSending(false);
                toast.success(t("form.sent"));
                (e.target as HTMLFormElement).reset();
              }, 700);
            }}
          >
            <h2 className="text-2xl font-extrabold">{t("contact.formHeading")}</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-wider text-muted-foreground">
                  {t("form.name")}
                </label>
                <input
                  required
                  className="w-full rounded-lg border border-line bg-surface p-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-accent"
                  placeholder={t("form.name.ph")}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-wider text-muted-foreground">
                  {t("form.email")}
                </label>
                <input
                  required
                  type="email"
                  className="w-full rounded-lg border border-line bg-surface p-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-accent"
                  placeholder="name@company.com"
                />
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-wider text-muted-foreground">
                  {t("form.phone")}
                </label>
                <input
                  className="w-full rounded-lg border border-line bg-surface p-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-accent"
                  placeholder={t("form.phone.ph")}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-wider text-muted-foreground">
                  {t("form.service")}
                </label>
                <select className="w-full appearance-none rounded-lg border border-line bg-surface p-3 text-sm outline-none focus:ring-2 focus:ring-accent">
                  <option>{t("form.opt.site")}</option>
                  <option>{t("form.opt.edu")}</option>
                  <option>{t("form.opt.app")}</option>
                  <option>{t("form.opt.social")}</option>
                  <option>{t("form.opt.ai")}</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold tracking-wider text-muted-foreground">
                  {t("form.details")}
                </label>
                <textarea
                  required
                  className="min-h-[150px] w-full rounded-lg border border-line bg-surface p-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-accent"
                  placeholder={t("form.details.ph")}
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="luxe-gradient w-full rounded-lg py-4 font-extrabold text-white transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-60"
            >
              {sending ? "جارٍ الإرسال..." : "إرسال الطلب"}
            </button>
          </form>

          <aside className="space-y-6 md:col-span-2">
            <div className="luxe-card rounded-2xl p-8">
              <div className="mb-4 grid size-12 place-items-center rounded-full bg-whatsapp text-white">
                <WhatsAppIcon className="size-6" />
              </div>
              <h3 className="mb-2 text-xl font-extrabold">محادثة فورية</h3>
              <p className="mb-6 text-sm text-muted-foreground">
                أسرع طريقة للوصول إلينا. اضغط وابدأ المحادثة مباشرة على واتساب.
              </p>
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg bg-whatsapp py-3 text-center font-bold text-white transition-transform duration-300 hover:-translate-y-0.5"
              >
                فتح واتساب
              </a>
            </div>

            <div className="luxe-card rounded-2xl p-8">
              <h3 className="mb-4 text-xl font-extrabold">تابعنا</h3>
              <SocialLinks />
            </div>
          </aside>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
