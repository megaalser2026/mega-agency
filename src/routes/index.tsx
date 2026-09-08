import { createFileRoute, Link } from "@tanstack/react-router";

import logoAsset from "@/assets/mega-logo-official.png.asset.json";
import aboutImage from "@/assets/about-systems.jpg";
import projectFintech from "@/assets/project-fintech.jpg";
import projectHealth from "@/assets/project-health.jpg";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { NetworkBackground } from "@/components/network-background";
import { Reveal } from "@/components/reveal";
import { useI18n, type Key } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MEGA Agency | وكالة ميجا للمواقع والميديا والذكاء الاصطناعي" },
      {
        name: "description",
        content:
          "ميجا ايجنسي: تطوير المواقع وصفحات الهبوط والمنصات التعليمية وتطبيقات الجوال وإدارة السوشيال ميديا وحلول الذكاء الاصطناعي منذ 2026.",
      },
      {
        property: "og:title",
        content: "MEGA Agency | وكالة ميجا للحلول الرقمية",
      },
      {
        property: "og:description",
        content:
          "نصمم الأنظمة التي تشكل المستقبل: مواقع، تطبيقات، ميديا، وذكاء اصطناعي.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const projects: { titleKey: Key; descKey: Key; img: string }[] = [
  { titleKey: "p1.title", descKey: "p1.desc", img: projectFintech },
  { titleKey: "p2.title", descKey: "p2.desc", img: projectHealth },
  { titleKey: "p3.title", descKey: "p3.desc", img: aboutImage },
  { titleKey: "p4.title", descKey: "p4.desc", img: projectFintech },
  { titleKey: "p5.title", descKey: "p5.desc", img: projectHealth },
  { titleKey: "p6.title", descKey: "p6.desc", img: aboutImage },
  { titleKey: "p7.title", descKey: "p7.desc", img: projectFintech },
  { titleKey: "p8.title", descKey: "p8.desc", img: projectHealth },
  { titleKey: "p9.title", descKey: "p9.desc", img: aboutImage },
  { titleKey: "p10.title", descKey: "p10.desc", img: projectFintech },
  { titleKey: "p11.title", descKey: "p11.desc", img: projectHealth },
  { titleKey: "p12.title", descKey: "p12.desc", img: aboutImage },
];

function Index() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30">
      <SiteHeader />

      {/* Hero */}
      <section
        id="hero"
        className="relative flex min-h-[92vh] items-center overflow-hidden border-b border-line px-6 pb-24 pt-32 md:pt-40"
      >
        <NetworkBackground className="pointer-events-none absolute inset-0" />
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="max-w-3xl">
            <img
              src={logoAsset.url}
              alt={t("logo.alt")}
              className="mb-8 h-16 w-auto animate-[pixel-fade_0.7s_var(--ease-out-expo)_both] md:h-20"
              width={220}
              height={80}
            />
            <h1 className="mb-7 animate-[pixel-fade_0.8s_var(--ease-out-expo)_both] text-[2.75rem] font-extrabold leading-[1.2] [animation-delay:200ms] md:text-7xl md:leading-[1.15]">
              {t("hero.title1")}
              <br />
              <span className="text-accent">{t("hero.title2")}</span>
            </h1>
            <p className="mb-10 max-w-xl animate-[pixel-fade_0.8s_var(--ease-out-expo)_both] text-lg leading-[2] text-muted-foreground [animation-delay:300ms] md:text-xl">
              {t("hero.subtitle")}
            </p>
            <div className="flex animate-[pixel-fade_0.8s_var(--ease-out-expo)_both] flex-wrap gap-4 [animation-delay:400ms]">
              <a
                href="#services"
                className="flex items-center gap-4 rounded-full bg-primary px-8 py-4 text-lg font-extrabold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground active:translate-y-0"
              >
                {t("hero.ctaServices")}
                <span className="font-mono rtl:rotate-180">→</span>
              </a>
              <Link
                to="/contact"
                className="flex items-center gap-3 rounded-full border border-line bg-background/60 px-8 py-4 text-lg font-extrabold backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent active:translate-y-0"
              >
                {t("hero.ctaContact")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services bento */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-24 md:py-28">
        <Reveal className="mb-14 max-w-xl">
          <h3 className="text-4xl font-extrabold md:text-5xl">
            {t("services.heading")}
          </h3>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <Reveal className="group luxe-card luxe-card-hover relative overflow-hidden rounded-2xl p-10 md:col-span-2 md:row-span-2">
            <div className="relative z-10">
              <div className="mb-6 grid size-12 place-items-center rounded-lg bg-accent">
                <span className="font-mono font-bold text-accent-foreground">
                  AI
                </span>
              </div>
              <h4 className="mb-4 text-2xl font-bold">{t("services.ai.title")}</h4>
              <p className="mb-8 text-[15px] leading-[1.9] text-muted-foreground">
                {t("services.ai.desc")}
              </p>
              <ul className="space-y-3 text-[15px] font-medium">
                <li className="flex items-center gap-3">
                  <span className="size-1.5 bg-accent" /> {t("services.ai.f1")}
                </li>
                <li className="flex items-center gap-3">
                  <span className="size-1.5 bg-accent" /> {t("services.ai.f2")}
                </li>
              </ul>
            </div>
            <div className="absolute bottom-0 inset-x-0 h-1 w-full origin-center scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />
          </Reveal>

          <Reveal
            delay={80}
            className="luxe-card luxe-card-hover rounded-2xl p-8 md:col-span-2"
          >
            <h4 className="mb-2 text-xl font-bold">{t("services.saas.title")}</h4>
            <p className="text-[15px] leading-[1.9] text-muted-foreground">
              {t("services.saas.desc")}
            </p>
          </Reveal>

          <Reveal delay={120} className="luxe-card luxe-card-hover rounded-2xl p-8">
            <h4 className="mb-2 text-lg font-bold">
              {t("services.startup.title")}
            </h4>
            <p className="text-[15px] leading-[1.9] text-muted-foreground">
              {t("services.startup.desc")}
            </p>
          </Reveal>

          <Reveal delay={160} className="luxe-card luxe-card-hover rounded-2xl p-8">
            <h4 className="mb-2 text-lg font-bold">
              {t("services.mobile.title")}
            </h4>
            <p className="text-[15px] leading-[1.9] text-muted-foreground">
              {t("services.mobile.desc")}
            </p>
          </Reveal>

          <Reveal
            delay={80}
            className="luxe-gradient luxe-card-hover rounded-2xl p-8 text-white transition-transform duration-500 md:col-span-2"
          >
            <h4 className="mb-2 text-xl font-bold">{t("services.media.title")}</h4>
            <p className="text-[15px] leading-[1.9] text-white/85">
              {t("services.media.desc")}
            </p>
          </Reveal>

          <Reveal delay={120} className="luxe-card luxe-card-hover rounded-2xl p-8">
            <h4 className="mb-2 text-lg font-bold">{t("services.edu.title")}</h4>
            <p className="text-[15px] leading-[1.9] text-muted-foreground">
              {t("services.edu.desc")}
            </p>
          </Reveal>

          <Reveal delay={160} className="luxe-card luxe-card-hover rounded-2xl p-8">
            <h4 className="mb-2 text-lg font-bold">
              {t("services.enterprise.title")}
            </h4>
            <p className="text-[15px] leading-[1.9] text-muted-foreground">
              {t("services.enterprise.desc")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="border-y border-line bg-surface py-24 md:py-28"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 md:grid-cols-2">
          <Reveal>
            <h3 className="mb-8 text-4xl font-extrabold leading-[1.3] md:text-5xl">
              {t("about.heading")}
            </h3>
            <p className="text-[17px] leading-[2] text-muted-foreground">
              {t("about.body")}
            </p>
          </Reveal>
          <Reveal delay={120} className="relative">
            <img
              src={aboutImage}
              alt={t("about.imageAlt")}
              loading="lazy"
              width={800}
              height={1000}
              className="aspect-[4/5] w-full rounded-2xl border border-line object-cover"
            />
            <div className="absolute -bottom-6 end-[-1rem] rounded-2xl border border-line bg-card/95 p-5 shadow-xl backdrop-blur-sm md:end-[-1.5rem] md:p-6">
              <img
                src={logoAsset.url}
                alt={t("logo.alt")}
                loading="lazy"
                width={180}
                height={56}
                className="h-12 w-auto md:h-14"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="mx-auto max-w-7xl px-6 py-24 md:py-28">
        <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h3 className="text-4xl font-extrabold md:text-5xl">
              {t("portfolio.heading")}
            </h3>
          </div>
          <Link
            to="/contact"
            className="text-[15px] font-bold text-accent hover:underline"
          >
            {t("portfolio.cta")}
          </Link>
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal
              key={p.title}
              delay={(i % 3) * 80}
              className="group luxe-card luxe-card-hover overflow-hidden rounded-2xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              <div className="p-6">
                <h4 className="mb-2 text-lg font-bold transition-colors group-hover:text-accent">
                  {p.title}
                </h4>
                <p className="text-[15px] leading-[1.9] text-muted-foreground">
                  {p.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-line bg-surface py-24 md:py-28"
      >
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2">
          <Reveal>
            <h3 className="mb-6 text-3xl font-extrabold md:text-4xl">
              {t("home.contact.heading")}
            </h3>
            <p className="mb-10 text-[17px] leading-[2] text-muted-foreground">
              {t("home.contact.body")}
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="grid size-11 place-items-center rounded-lg bg-primary text-primary-foreground">
                  @
                </div>
                <span className="text-[15px] font-medium">
                  hello@mega-agency.ai
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="grid size-11 place-items-center rounded-lg bg-primary text-primary-foreground">
                  #
                </div>
                <span className="text-[15px] font-medium">
                  +٩٦٦ ٠٠٠ ٠٠٠ ٠٠٠
                </span>
              </div>
            </div>
          </Reveal>
          <Reveal
            delay={100}
            className="luxe-card rounded-2xl bg-card p-8"
          >
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-muted-foreground">
                    {t("form.name")}
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-line bg-surface p-3 text-[15px] outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                    placeholder={t("form.name.ph")}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-muted-foreground">
                    {t("form.email")}
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-line bg-surface p-3 text-[15px] outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                    placeholder="name@company.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-muted-foreground">
                  {t("form.service")}
                </label>
                <select className="w-full appearance-none rounded-lg border border-line bg-surface p-3 text-[15px] outline-none focus:border-accent focus:ring-1 focus:ring-accent">
                  <option>{t("form.opt.ai")}</option>
                  <option>{t("form.opt.web")}</option>
                  <option>{t("form.opt.media")}</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-muted-foreground">
                  {t("form.message")}
                </label>
                <textarea
                  className="min-h-[120px] w-full rounded-lg border border-line bg-surface p-3 text-[15px] outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                  placeholder={t("form.message.ph")}
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-primary py-4 text-[16px] font-bold text-primary-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground active:scale-[0.99]"
              >
                {t("form.submit")}
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
