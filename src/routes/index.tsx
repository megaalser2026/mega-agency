import { createFileRoute } from "@tanstack/react-router";

import { Link } from "@tanstack/react-router";

import logoAsset from "@/assets/mega-logo-official.png.asset.json";
import { SocialLinks } from "@/components/social-links";
import aboutImage from "@/assets/about-systems.jpg";
import projectFintech from "@/assets/project-fintech.jpg";
import projectHealth from "@/assets/project-health.jpg";

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
    ],
  }),
  component: Index,
});

const navLinks = [
  { href: "#hero", label: "الرئيسية", code: "00" },
  { href: "#services", label: "الخدمات", code: "01" },
  { href: "#about", label: "من نحن", code: "02" },
  { href: "#portfolio", label: "الأعمال", code: "03" },
  { href: "#contact", label: "تواصل", code: "04" },
];

function Sidebar() {
  return (
    <aside className="fixed inset-y-0 right-0 z-50 hidden w-[88px] flex-col items-center justify-between border-l border-line bg-background py-8 lg:flex">
      <a href="#hero" className="block">
        <img
          src={logoAsset.url}
          alt="شعار وكالة ميجا"
          className="w-12"
          width={64}
          height={44}
        />
      </a>

      <nav className="flex flex-col items-center gap-6">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="group flex flex-col items-center gap-1 font-mono text-[10px] text-muted-foreground transition-colors hover:text-accent"
          >
            <span className="tracking-widest">{link.code}</span>
            <span
              className="font-sans text-xs font-bold [writing-mode:vertical-rl]"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {link.label}
            </span>
            <span className="h-px w-4 bg-line transition-colors group-hover:bg-accent" />
          </a>
        ))}
      </nav>

      <div className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground [writing-mode:vertical-rl]">
        EST. 2026
      </div>
    </aside>
  );
}

function TopBar() {
  return (
    <div className="sticky top-0 z-40 border-b border-line bg-background/85 backdrop-blur-md lg:hidden">
      <div className="flex h-16 items-center justify-between px-5">
        <img
          src={logoAsset.url}
          alt="شعار وكالة ميجا"
          className="h-9 w-auto"
          width={120}
          height={36}
        />
        <div className="flex gap-4 text-xs font-bold">
          {navLinks.slice(1, 4).map((l) => (
            <a key={l.href} href={l.href} className="hover:text-accent">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30 lg:pr-[88px]">
      <Sidebar />
      <TopBar />

      {/* Hero */}
      <section
        id="hero"
        className="relative overflow-hidden border-b border-line px-6 py-24 md:py-36"
      >
        <div className="pointer-events-none absolute inset-0 mesh-bg" />
        <div className="pointer-events-none absolute inset-0 hairlines opacity-60" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex animate-[pixel-fade_0.6s_var(--ease-out-expo)_both] items-center gap-2 border border-accent/40 px-3 py-1 font-mono text-xs uppercase tracking-widest text-accent [animation-delay:100ms]">
              <span className="size-1.5 animate-pulse rounded-full bg-accent" />
              Leading the AI Revolution
            </div>
            <h1 className="mb-8 animate-[pixel-fade_0.8s_var(--ease-out-expo)_both] text-5xl font-extrabold leading-[1.15] [animation-delay:200ms] md:text-7xl">
              نصمم الأنظمة
              <br />
              <span className="text-accent">التي تشكل المستقبل</span>
            </h1>
            <p className="mb-10 max-w-xl animate-[pixel-fade_0.8s_var(--ease-out-expo)_both] text-xl leading-relaxed text-muted-foreground [animation-delay:300ms]">
              ميجا هي وكالة تقنية متخصصة في هندسة الحلول الرقمية المتكاملة، من
              تطبيقات الويب المعقدة إلى أنظمة الذكاء الاصطناعي المبتكرة.
            </p>
            <div className="flex animate-[pixel-fade_0.8s_var(--ease-out-expo)_both] flex-wrap gap-4 [animation-delay:400ms]">
              <a
                href="#services"
                className="flex items-center gap-4 rounded-[4px] bg-primary px-8 py-4 text-lg font-extrabold text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                استكشف خدماتنا
                <span className="font-mono">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services bento */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 flex items-end justify-between">
          <div className="max-w-xl">
            <h2 className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-accent">
              System Components
            </h2>
            <h3 className="text-4xl font-extrabold">خدماتنا المتقدمة</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="group relative overflow-hidden rounded-xl border border-primary/20 bg-surface p-10 md:col-span-2 md:row-span-2">
            <div className="relative z-10">
              <div className="mb-6 grid size-12 place-items-center rounded-lg bg-accent">
                <span className="font-mono font-bold text-accent-foreground">
                  AI
                </span>
              </div>
              <h4 className="mb-4 text-2xl font-bold">حلول الذكاء الاصطناعي</h4>
              <p className="mb-8 leading-relaxed text-muted-foreground">
                تطوير نماذج تعلم آلي مخصصة لتحسين اتخاذ القرار وأتمتة العمليات
                المعقدة.
              </p>
              <ul className="space-y-3 text-sm font-medium">
                <li className="flex items-center gap-3">
                  <span className="size-1.5 bg-accent" /> معالجة اللغات الطبيعية
                </li>
                <li className="flex items-center gap-3">
                  <span className="size-1.5 bg-accent" /> رؤية الحاسوب
                </li>
              </ul>
            </div>
            <div className="absolute bottom-0 left-0 h-1 w-full origin-right scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />
          </div>

          <div className="rounded-xl border border-line p-8 transition-colors hover:border-accent/40 md:col-span-2">
            <h4 className="mb-2 text-xl font-bold">تطبيقات الويب (SaaS)</h4>
            <p className="text-sm text-muted-foreground">
              بناء منصات سحابية قابلة للتوسع بأحدث التقنيات، وصفحات هبوط عالية
              التحويل.
            </p>
          </div>

          <div className="rounded-xl border border-line p-8">
            <h4 className="mb-2 text-lg font-bold">بناء الشركات الناشئة</h4>
            <p className="text-xs text-muted-foreground">
              من الفكرة إلى المنتج الأولي MVP في وقت قياسي.
            </p>
          </div>

          <div className="rounded-xl border border-line p-8">
            <h4 className="mb-2 text-lg font-bold">تطبيقات الجوال</h4>
            <p className="text-xs text-muted-foreground">
              تجربة مستخدم فائقة على iOS و Android.
            </p>
          </div>

          <div className="rounded-xl bg-accent p-8 text-accent-foreground md:col-span-2">
            <h4 className="mb-2 text-xl font-bold">الإعلام وإدارة التواصل</h4>
            <p className="text-sm text-accent-foreground/80">
              صناعة محتوى رقمي استراتيجي وإدارة كاملة للصفحات يعزز الوجود الرقمي
              لعلامتكم التجارية.
            </p>
          </div>

          <div className="rounded-xl border border-line p-8">
            <h4 className="mb-2 text-lg font-bold">المنصات التعليمية</h4>
            <p className="text-xs text-muted-foreground">
              حلول متكاملة لمراكز التدريب والتعليم عن بعد.
            </p>
          </div>

          <div className="rounded-xl border border-line p-8">
            <h4 className="mb-2 text-lg font-bold">حلول الشركات</h4>
            <p className="text-xs text-muted-foreground">
              منصات خدمية وأنظمة داخلية قوية للمؤسسات الكبرى.
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-y border-line bg-surface py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 md:grid-cols-2">
          <div>
            <h2 className="mb-6 font-mono text-sm uppercase tracking-widest text-accent">
              Founding Principles
            </h2>
            <h3 className="mb-8 text-4xl font-extrabold leading-tight md:text-5xl">
              تأسست لتكون المحرك التقني للمنطقة منذ 2026
            </h3>
            <div className="mb-8 grid grid-cols-2 gap-8">
              <div>
                <div className="mb-2 text-4xl font-bold text-accent">+١٥٠</div>
                <div className="text-sm text-muted-foreground">مشروع مكتمل</div>
              </div>
              <div>
                <div className="mb-2 text-4xl font-bold text-accent">٢٠٢٦</div>
                <div className="text-sm text-muted-foreground">
                  سنة التأسيس
                </div>
              </div>
            </div>
            <p className="leading-relaxed text-muted-foreground">
              نحن لسنا مجرد وكالة تطوير؛ نحن شركاء نجاح. رؤيتنا تعتمد على دمج
              الفن والهندسة لخلق تجارب رقمية تترك أثراً حقيقياً في السوق العربي
              والعالمي.
            </p>
          </div>
          <div className="relative">
            <img
              src={aboutImage}
              alt="بنية تقنية متكاملة لخوادم ميجا"
              loading="lazy"
              width={800}
              height={1000}
              className="aspect-[4/5] w-full rounded-2xl border border-line object-cover"
            />
            <div className="absolute -bottom-6 -right-6 rounded-xl bg-accent p-8 text-accent-foreground">
              <div className="text-3xl font-black">MEGA</div>
              <div className="font-mono text-xs font-bold tracking-tighter">
                SYSTEMS INTEGRATED
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16 flex items-end justify-between">
          <h3 className="text-4xl font-extrabold">مشاريع مختارة</h3>
          <a href="#contact" className="font-bold text-accent hover:underline">
            مشاهدة الكل
          </a>
        </div>
        <div className="grid gap-12 md:grid-cols-2">
          <div className="group cursor-pointer">
            <img
              src={projectFintech}
              alt="منصة نماء للاستثمار الذكي"
              loading="lazy"
              width={1200}
              height={800}
              className="mb-6 aspect-video w-full rounded-xl border border-line object-cover transition-all group-hover:border-accent/40"
            />
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-xl font-bold transition-colors group-hover:text-accent">
                  منصة "نماء" للاستثمار الذكي
                </h4>
                <p className="text-muted-foreground">
                  تطوير كامل ونظام تنبؤ بالذكاء الاصطناعي
                </p>
              </div>
              <div className="border border-line px-2 py-1 font-mono text-xs">
                FINTECH
              </div>
            </div>
          </div>
          <div className="group cursor-pointer">
            <img
              src={projectHealth}
              alt="تطبيق صحة للياقة البدنية"
              loading="lazy"
              width={1200}
              height={800}
              className="mb-6 aspect-video w-full rounded-xl border border-line object-cover transition-all group-hover:border-accent/40"
            />
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-xl font-bold transition-colors group-hover:text-accent">
                  تطبيق "صحة" للياقة البدنية
                </h4>
                <p className="text-muted-foreground">
                  تجربة مستخدم متكاملة وإدارة تواصل اجتماعي
                </p>
              </div>
              <div className="border border-line px-2 py-1 font-mono text-xs">
                HEALTH
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-line bg-surface py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2">
          <div>
            <h3 className="mb-6 text-3xl font-extrabold">
              دعنا نبني مستقبلك الرقمي
            </h3>
            <p className="mb-10 text-muted-foreground">
              تواصل معنا اليوم لمناقشة مشروعك القادم والحصول على استشارة تقنية
              مجانية.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="grid size-10 place-items-center rounded bg-primary text-primary-foreground">
                  @
                </div>
                <span className="font-medium">hello@mega-agency.ai</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="grid size-10 place-items-center rounded bg-primary text-primary-foreground">
                  #
                </div>
                <span className="font-medium">+٩٦٦ ٠٠٠ ٠٠٠ ٠٠٠</span>
              </div>
            </div>
          </div>
          <form
            className="space-y-4 rounded-xl border border-line bg-card p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  className="w-full rounded border border-line bg-surface p-3 text-sm outline-none focus:ring-1 focus:ring-accent"
                  placeholder="أحمد محمد"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  className="w-full rounded border border-line bg-surface p-3 text-sm outline-none focus:ring-1 focus:ring-accent"
                  placeholder="name@company.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                الخدمة المطلوبة
              </label>
              <select className="w-full appearance-none rounded border border-line bg-surface p-3 text-sm outline-none focus:ring-1 focus:ring-accent">
                <option>حلول الذكاء الاصطناعي</option>
                <option>تطوير ويب / تطبيقات</option>
                <option>إدارة إعلامية</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                الرسالة
              </label>
              <textarea
                className="min-h-[120px] w-full rounded border border-line bg-surface p-3 text-sm outline-none focus:ring-1 focus:ring-accent"
                placeholder="كيف يمكننا مساعدتك؟"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded bg-primary py-4 font-bold text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              إرسال الطلب
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-line py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
          <div className="text-xl font-extrabold">
            MEGA <span className="text-accent">ميجا</span>
          </div>
          <div className="text-sm text-muted-foreground">
            © ٢٠٢٦ وكالة ميجا للحلول الرقمية. جميع الحقوق محفوظة.
          </div>
          <SocialLinks />
          </div>
        </div>
      </footer>
    </div>
  );
}
