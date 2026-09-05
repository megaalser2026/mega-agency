import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

import { SocialLinks } from "@/components/social-links";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppIcon } from "@/components/brand-icons";
import { site } from "@/lib/site";

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

const cards = [
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: Phone,
    title: "الهاتف",
    value: site.phone,
    href: `tel:${site.whatsappNumber}`,
  },
  {
    icon: MapPin,
    title: "المقر",
    value: "الرياض، المملكة العربية السعودية",
    href: undefined,
  },
  {
    icon: Clock,
    title: "ساعات العمل",
    value: "الأحد - الخميس، ٩ص - ٦م",
    href: undefined,
  },
];

function ContactPage() {
  const [sending, setSending] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-line px-6 pb-20 pt-36">
        <div className="pointer-events-none absolute inset-0 mesh-bg" />
        <div className="pointer-events-none absolute inset-0 hairlines opacity-60" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <span className="mb-5 inline-flex items-center gap-2 border border-accent/40 px-3 py-1 font-mono text-xs uppercase tracking-widest text-accent">
            <span className="size-1.5 animate-pulse rounded-full bg-accent" />
            Contact MEGA
          </span>
          <h1 className="mb-6 max-w-2xl text-4xl font-extrabold leading-tight md:text-6xl">
            لنبدأ الحديث عن <span className="luxe-text">مشروعك القادم</span>
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            اختر الطريقة الأنسب لك للتواصل مع فريق ميجا، ونعدك برد خلال ساعات
            العمل الرسمية.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-4 md:grid-cols-4">
          {cards.map(({ icon: Icon, title, value, href }) => {
            const inner = (
              <>
                <div className="mb-5 grid size-11 place-items-center rounded-lg bg-primary text-primary-foreground">
                  <Icon className="size-5" />
                </div>
                <div className="mb-1 text-sm font-bold text-muted-foreground">
                  {title}
                </div>
                <div className="font-bold">{value}</div>
              </>
            );
            return href ? (
              <a
                key={title}
                href={href}
                className="luxe-card luxe-card-hover block rounded-2xl p-7"
              >
                {inner}
              </a>
            ) : (
              <div key={title} className="luxe-card luxe-card-hover rounded-2xl p-7">
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
                toast.success("تم استلام رسالتك، سنعاود التواصل قريباً");
                (e.target as HTMLFormElement).reset();
              }, 700);
            }}
          >
            <h2 className="text-2xl font-extrabold">أرسل لنا رسالة</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-wider text-muted-foreground">
                  الاسم الكامل
                </label>
                <input
                  required
                  className="w-full rounded-lg border border-line bg-surface p-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-accent"
                  placeholder="أحمد محمد"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-wider text-muted-foreground">
                  البريد الإلكتروني
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
                  رقم الجوال
                </label>
                <input
                  className="w-full rounded-lg border border-line bg-surface p-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-accent"
                  placeholder="+966 5x xxx xxxx"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-wider text-muted-foreground">
                  الخدمة المطلوبة
                </label>
                <select className="w-full appearance-none rounded-lg border border-line bg-surface p-3 text-sm outline-none focus:ring-2 focus:ring-accent">
                  <option>تطوير موقع أو صفحة هبوط</option>
                  <option>منصة تعليمية أو منصة خدمات</option>
                  <option>تطبيق جوال iOS / Android</option>
                  <option>إدارة سوشيال ميديا وإنتاج محتوى</option>
                  <option>حلول ذكاء اصطناعي</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold tracking-wider text-muted-foreground">
                تفاصيل المشروع
              </label>
              <textarea
                required
                className="min-h-[150px] w-full rounded-lg border border-line bg-surface p-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-accent"
                placeholder="اكتب لنا فكرة مشروعك والميزانية التقريبية..."
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
