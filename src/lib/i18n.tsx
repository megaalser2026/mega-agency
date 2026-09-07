import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Locale = "ar" | "en" | "de";

export const locales: { code: Locale; label: string; flag: string }[] = [
  { code: "ar", label: "العربية", flag: "🇪🇬" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
];

const ar = {
  "nav.home": "الرئيسية",
  "nav.services": "الخدمات",
  "nav.about": "من نحن",
  "nav.work": "الأعمال",
  "nav.contact": "تواصل",
  "nav.cta": "ابدأ مشروعك",
  "nav.open": "فتح القائمة",
  "nav.close": "إغلاق القائمة",
  "nav.menu": "قائمة التنقل",
  "nav.language": "اللغة",
  "nav.theme.light": "الوضع الفاتح",
  "nav.theme.dark": "الوضع الداكن",

  "logo.alt": "شعار وكالة ميجا",

  "hero.title1": "نصمم الأنظمة",
  "hero.title2": "التي تشكل المستقبل",
  "hero.subtitle":
    "ميجا هي وكالة تقنية متخصصة في هندسة الحلول الرقمية المتكاملة، من تطبيقات الويب المعقدة إلى أنظمة الذكاء الاصطناعي المبتكرة.",
  "hero.ctaServices": "استكشف خدماتنا",
  "hero.ctaContact": "تواصل معنا",

  "services.heading": "خدماتنا المتقدمة",
  "services.ai.title": "حلول الذكاء الاصطناعي",
  "services.ai.desc":
    "تطوير نماذج تعلم آلي مخصصة لتحسين اتخاذ القرار وأتمتة العمليات المعقدة.",
  "services.ai.f1": "معالجة اللغات الطبيعية",
  "services.ai.f2": "رؤية الحاسوب",
  "services.saas.title": "تطبيقات الويب (SaaS)",
  "services.saas.desc":
    "بناء منصات سحابية قابلة للتوسع بأحدث التقنيات، وصفحات هبوط عالية التحويل.",
  "services.startup.title": "بناء الشركات الناشئة",
  "services.startup.desc": "من الفكرة إلى المنتج الأولي MVP في وقت قياسي.",
  "services.mobile.title": "تطبيقات الجوال",
  "services.mobile.desc": "تجربة مستخدم فائقة على iOS و Android.",
  "services.media.title": "الإعلام وإدارة التواصل",
  "services.media.desc":
    "صناعة محتوى رقمي استراتيجي وإدارة كاملة للصفحات يعزز الوجود الرقمي لعلامتكم التجارية.",
  "services.edu.title": "المنصات التعليمية",
  "services.edu.desc": "حلول متكاملة لمراكز التدريب والتعليم عن بعد.",
  "services.enterprise.title": "حلول الشركات",
  "services.enterprise.desc": "منصات خدمية وأنظمة داخلية قوية للمؤسسات الكبرى.",

  "about.heading": "تأسست لتكون المحرك التقني للمنطقة منذ 2026",
  "about.body":
    "نحن لسنا مجرد وكالة تطوير؛ نحن شركاء نجاح. رؤيتنا تعتمد على دمج الفن والهندسة لخلق تجارب رقمية تترك أثراً حقيقياً في السوق العربي والعالمي.",
  "about.imageAlt": "بنية تقنية متكاملة لخوادم ميجا",

  "portfolio.heading": "مشاريع مختارة",
  "portfolio.cta": "اطلب مشروعك",

  "p1.title": 'منصة "نماء" للاستثمار الذكي',
  "p1.desc": "تطوير كامل ونظام تنبؤ بالذكاء الاصطناعي",
  "p2.title": 'تطبيق "صحة" للياقة البدنية',
  "p2.desc": "تجربة مستخدم متكاملة وإدارة تواصل اجتماعي",
  "p3.title": "منصة تعليمية للتدريب عن بعد",
  "p3.desc": "نظام مسارات ودروس مباشرة وشهادات",
  "p4.title": "متجر إلكتروني متعدد الفروع",
  "p4.desc": "واجهة سريعة ولوحة تحكم للمخزون",
  "p5.title": "لوحة تحليلات تشغيلية",
  "p5.desc": "تصور بيانات لحظي لاتخاذ القرار",
  "p6.title": "هوية بصرية وإدارة سوشيال ميديا",
  "p6.desc": "خطة محتوى شهرية وتصاميم متكاملة",
  "p7.title": "مساعد ذكي للرد على العملاء",
  "p7.desc": "روبوت محادثة مبني على نماذج لغوية",
  "p8.title": "صفحة هبوط عالية التحويل",
  "p8.desc": "تصميم موجّه للأداء مع اختبارات A/B",
  "p9.title": "تطبيق جوال للحجوزات",
  "p9.desc": "تجربة موحدة على iOS و Android",
  "p10.title": "نظام إدارة داخلي للمؤسسات",
  "p10.desc": "صلاحيات وأتمتة إجراءات العمل",
  "p11.title": "منصة حجز خدمات ميدانية",
  "p11.desc": "تتبّع الطلبات وإشعارات لحظية",
  "p12.title": "إنتاج محتوى فيديو إعلاني",
  "p12.desc": "سيناريو وتصوير ومونتاج ونشر",

  "home.contact.heading": "دعنا نبني مستقبلك الرقمي",
  "home.contact.body":
    "تواصل معنا اليوم لمناقشة مشروعك القادم والحصول على استشارة تقنية مجانية.",
  "form.name": "الاسم الكامل",
  "form.name.ph": "أحمد محمد",
  "form.email": "البريد الإلكتروني",
  "form.email.ph": "name@company.com",
  "form.phone": "رقم الجوال",
  "form.phone.ph": "+966 5x xxx xxxx",
  "form.service": "الخدمة المطلوبة",
  "form.message": "الرسالة",
  "form.message.ph": "كيف يمكننا مساعدتك؟",
  "form.details": "تفاصيل المشروع",
  "form.details.ph": "اكتب لنا فكرة مشروعك والميزانية التقريبية...",
  "form.submit": "إرسال الطلب",
  "form.sending": "جارٍ الإرسال...",
  "form.sent": "تم استلام رسالتك، سنعاود التواصل قريباً",
  "form.opt.ai": "حلول الذكاء الاصطناعي",
  "form.opt.web": "تطوير ويب / تطبيقات",
  "form.opt.media": "إدارة إعلامية",
  "form.opt.site": "تطوير موقع أو صفحة هبوط",
  "form.opt.edu": "منصة تعليمية أو منصة خدمات",
  "form.opt.app": "تطبيق جوال iOS / Android",
  "form.opt.social": "إدارة سوشيال ميديا وإنتاج محتوى",

  "footer.tagline":
    "وكالة ميجا: هندسة المواقع والتطبيقات، إدارة الإعلام الرقمي، وحلول الذكاء الاصطناعي للشركات الطامحة.",
  "footer.quick": "روابط سريعة",
  "footer.links": "روابط الموقع",
  "footer.contactPage": "صفحة التواصل",
  "footer.contact": "تواصل معنا",
  "footer.payments": "طرق الدفع المقبولة",
  "footer.paymentsNote": "شعارات للدلالة على وسائل الدفع المقبولة فقط.",
  "footer.follow": "تابعنا",
  "footer.rights": "© ٢٠٢٦ وكالة ميجا للحلول الرقمية. جميع الحقوق محفوظة.",
  "footer.developed": "تم التطوير بواسطة Abdallah Tarek",

  "support.title": "مركز الدعم",
  "support.badge": "Support Online",
  "support.q": "كيف نساعدك اليوم؟",
  "support.body": "فريق ميجا جاهز للرد على استفسارك خلال دقائق.",
  "support.whatsapp": "محادثة واتساب فورية",
  "support.page": "صفحة التواصل الكاملة",
  "support.close": "إغلاق لوحة الدعم",
  "support.waLabel": "تواصل عبر واتساب",
  "support.waTip": "راسلنا على واتساب",

  "social.facebook": "فيسبوك",
  "social.whatsapp": "واتساب",
  "social.instagram": "إنستغرام",

  "contact.badge": "Contact MEGA",
  "contact.h1a": "لنبدأ الحديث عن",
  "contact.h1b": "مشروعك القادم",
  "contact.lead":
    "اختر الطريقة الأنسب لك للتواصل مع فريق ميجا، ونعدك برد خلال ساعات العمل الرسمية.",
  "contact.card.email": "البريد الإلكتروني",
  "contact.card.phone": "الهاتف",
  "contact.card.hq": "المقر",
  "contact.card.hqValue": "الرياض، المملكة العربية السعودية",
  "contact.card.hours": "ساعات العمل",
  "contact.card.hoursValue": "الأحد - الخميس، ٩ص - ٦م",
  "contact.formHeading": "أرسل لنا رسالة",
  "contact.chat": "محادثة فورية",
  "contact.chatBody":
    "أسرع طريقة للوصول إلينا. اضغط وابدأ المحادثة مباشرة على واتساب.",
  "contact.chatCta": "فتح واتساب",
} as const;

export type Key = keyof typeof ar;
type Dict = Record<Key, string>;

const en: Dict = {
  "nav.home": "Home",
  "nav.services": "Services",
  "nav.about": "About",
  "nav.work": "Work",
  "nav.contact": "Contact",
  "nav.cta": "Start your project",
  "nav.open": "Open menu",
  "nav.close": "Close menu",
  "nav.menu": "Navigation menu",
  "nav.language": "Language",
  "nav.theme.light": "Light mode",
  "nav.theme.dark": "Dark mode",

  "logo.alt": "MEGA Agency logo",

  "hero.title1": "We engineer the systems",
  "hero.title2": "that shape the future",
  "hero.subtitle":
    "MEGA is a technology agency specialised in engineering complete digital solutions, from complex web applications to innovative AI systems.",
  "hero.ctaServices": "Explore our services",
  "hero.ctaContact": "Contact us",

  "services.heading": "Our advanced services",
  "services.ai.title": "AI solutions",
  "services.ai.desc":
    "Custom machine learning models that improve decision making and automate complex operations.",
  "services.ai.f1": "Natural language processing",
  "services.ai.f2": "Computer vision",
  "services.saas.title": "Web applications (SaaS)",
  "services.saas.desc":
    "Scalable cloud platforms built with modern technology, plus high-converting landing pages.",
  "services.startup.title": "Startup building",
  "services.startup.desc": "From idea to a working MVP in record time.",
  "services.mobile.title": "Mobile applications",
  "services.mobile.desc": "An outstanding experience on iOS and Android.",
  "services.media.title": "Media & social management",
  "services.media.desc":
    "Strategic digital content and full page management that strengthens your brand presence.",
  "services.edu.title": "Learning platforms",
  "services.edu.desc": "Complete solutions for training centres and e-learning.",
  "services.enterprise.title": "Enterprise solutions",
  "services.enterprise.desc":
    "Robust service platforms and internal systems for large organisations.",

  "about.heading": "Founded in 2026 to be the region's technology engine",
  "about.body":
    "We are not just a development agency; we are success partners. Our vision combines art and engineering to create digital experiences with real impact in the Arab and global markets.",
  "about.imageAlt": "MEGA integrated server infrastructure",

  "portfolio.heading": "Selected projects",
  "portfolio.cta": "Request your project",

  "p1.title": '"Namaa" smart investment platform',
  "p1.desc": "Full development with an AI prediction engine",
  "p2.title": '"Sehha" fitness application',
  "p2.desc": "End-to-end UX and social media management",
  "p3.title": "E-learning platform for remote training",
  "p3.desc": "Learning paths, live classes and certificates",
  "p4.title": "Multi-branch online store",
  "p4.desc": "Fast storefront with an inventory dashboard",
  "p5.title": "Operational analytics dashboard",
  "p5.desc": "Real-time data visualisation for decision making",
  "p6.title": "Brand identity & social media management",
  "p6.desc": "Monthly content plan and complete designs",
  "p7.title": "Smart customer support assistant",
  "p7.desc": "A chatbot built on large language models",
  "p8.title": "High-converting landing page",
  "p8.desc": "Performance-driven design with A/B testing",
  "p9.title": "Mobile booking application",
  "p9.desc": "One unified experience on iOS and Android",
  "p10.title": "Internal enterprise management system",
  "p10.desc": "Roles, permissions and workflow automation",
  "p11.title": "Field services booking platform",
  "p11.desc": "Order tracking and real-time notifications",
  "p12.title": "Advertising video production",
  "p12.desc": "Script, shooting, editing and publishing",

  "home.contact.heading": "Let's build your digital future",
  "home.contact.body":
    "Get in touch today to discuss your next project and receive a free technical consultation.",
  "form.name": "Full name",
  "form.name.ph": "John Smith",
  "form.email": "Email address",
  "form.email.ph": "name@company.com",
  "form.phone": "Phone number",
  "form.phone.ph": "+966 5x xxx xxxx",
  "form.service": "Service needed",
  "form.message": "Message",
  "form.message.ph": "How can we help you?",
  "form.details": "Project details",
  "form.details.ph": "Tell us about your project idea and approximate budget...",
  "form.submit": "Send request",
  "form.sending": "Sending...",
  "form.sent": "Your message was received, we'll get back to you shortly",
  "form.opt.ai": "AI solutions",
  "form.opt.web": "Web / app development",
  "form.opt.media": "Media management",
  "form.opt.site": "Website or landing page",
  "form.opt.edu": "Learning or services platform",
  "form.opt.app": "Mobile app iOS / Android",
  "form.opt.social": "Social media & content production",

  "footer.tagline":
    "MEGA Agency: web and app engineering, digital media management, and AI solutions for ambitious companies.",
  "footer.quick": "Quick links",
  "footer.links": "Site links",
  "footer.contactPage": "Contact page",
  "footer.contact": "Contact us",
  "footer.payments": "Accepted payment methods",
  "footer.paymentsNote": "Logos indicate accepted payment methods only.",
  "footer.follow": "Follow us",
  "footer.rights": "© 2026 MEGA Digital Solutions Agency. All rights reserved.",
  "footer.developed": "Developed by Abdallah Tarek",

  "support.title": "Support centre",
  "support.badge": "Support Online",
  "support.q": "How can we help you today?",
  "support.body": "The MEGA team is ready to answer you within minutes.",
  "support.whatsapp": "Instant WhatsApp chat",
  "support.page": "Full contact page",
  "support.close": "Close support panel",
  "support.waLabel": "Chat on WhatsApp",
  "support.waTip": "Message us on WhatsApp",

  "social.facebook": "Facebook",
  "social.whatsapp": "WhatsApp",
  "social.instagram": "Instagram",

  "contact.badge": "Contact MEGA",
  "contact.h1a": "Let's talk about",
  "contact.h1b": "your next project",
  "contact.lead":
    "Pick the channel that suits you best, and we promise a reply within official working hours.",
  "contact.card.email": "Email",
  "contact.card.phone": "Phone",
  "contact.card.hq": "Headquarters",
  "contact.card.hqValue": "Riyadh, Saudi Arabia",
  "contact.card.hours": "Working hours",
  "contact.card.hoursValue": "Sunday - Thursday, 9am - 6pm",
  "contact.formHeading": "Send us a message",
  "contact.chat": "Instant chat",
  "contact.chatBody":
    "The fastest way to reach us. Tap and start the conversation on WhatsApp.",
  "contact.chatCta": "Open WhatsApp",
};

const de: Dict = {
  "nav.home": "Startseite",
  "nav.services": "Leistungen",
  "nav.about": "Über uns",
  "nav.work": "Projekte",
  "nav.contact": "Kontakt",
  "nav.cta": "Projekt starten",
  "nav.open": "Menü öffnen",
  "nav.close": "Menü schließen",
  "nav.menu": "Navigationsmenü",
  "nav.language": "Sprache",
  "nav.theme.light": "Heller Modus",
  "nav.theme.dark": "Dunkler Modus",

  "logo.alt": "MEGA Agency Logo",

  "hero.title1": "Wir entwickeln Systeme,",
  "hero.title2": "die die Zukunft prägen",
  "hero.subtitle":
    "MEGA ist eine Technologieagentur für ganzheitliche digitale Lösungen – von komplexen Webanwendungen bis zu innovativen KI-Systemen.",
  "hero.ctaServices": "Leistungen entdecken",
  "hero.ctaContact": "Kontakt aufnehmen",

  "services.heading": "Unsere Leistungen",
  "services.ai.title": "KI-Lösungen",
  "services.ai.desc":
    "Maßgeschneiderte Machine-Learning-Modelle für bessere Entscheidungen und automatisierte Prozesse.",
  "services.ai.f1": "Verarbeitung natürlicher Sprache",
  "services.ai.f2": "Computer Vision",
  "services.saas.title": "Webanwendungen (SaaS)",
  "services.saas.desc":
    "Skalierbare Cloud-Plattformen mit modernster Technologie sowie Landingpages mit hoher Conversion.",
  "services.startup.title": "Startup-Aufbau",
  "services.startup.desc": "Von der Idee zum MVP in Rekordzeit.",
  "services.mobile.title": "Mobile Apps",
  "services.mobile.desc": "Herausragende Nutzererlebnisse auf iOS und Android.",
  "services.media.title": "Medien & Social Media",
  "services.media.desc":
    "Strategische digitale Inhalte und komplette Kanalbetreuung für eine starke Markenpräsenz.",
  "services.edu.title": "Lernplattformen",
  "services.edu.desc": "Komplettlösungen für Trainingszentren und E-Learning.",
  "services.enterprise.title": "Enterprise-Lösungen",
  "services.enterprise.desc":
    "Robuste Service-Plattformen und interne Systeme für große Organisationen.",

  "about.heading": "2026 gegründet als technologischer Motor der Region",
  "about.body":
    "Wir sind mehr als eine Entwicklungsagentur – wir sind Erfolgspartner. Unsere Vision verbindet Design und Engineering zu digitalen Erlebnissen mit echter Wirkung im arabischen und internationalen Markt.",
  "about.imageAlt": "Integrierte Serverinfrastruktur von MEGA",

  "portfolio.heading": "Ausgewählte Projekte",
  "portfolio.cta": "Projekt anfragen",

  "p1.title": '"Namaa" Plattform für smartes Investieren',
  "p1.desc": "Komplette Entwicklung mit KI-Prognosesystem",
  "p2.title": '"Sehha" Fitness-App',
  "p2.desc": "Durchgängige UX und Social-Media-Betreuung",
  "p3.title": "Lernplattform für Fernunterricht",
  "p3.desc": "Lernpfade, Live-Kurse und Zertifikate",
  "p4.title": "Online-Shop mit mehreren Filialen",
  "p4.desc": "Schneller Shop mit Lagerverwaltung",
  "p5.title": "Operatives Analyse-Dashboard",
  "p5.desc": "Echtzeit-Datenvisualisierung für Entscheidungen",
  "p6.title": "Markenidentität & Social-Media-Betreuung",
  "p6.desc": "Monatlicher Contentplan und komplette Designs",
  "p7.title": "Intelligenter Kundenservice-Assistent",
  "p7.desc": "Chatbot auf Basis großer Sprachmodelle",
  "p8.title": "Landingpage mit hoher Conversion",
  "p8.desc": "Performance-orientiertes Design mit A/B-Tests",
  "p9.title": "Mobile Buchungs-App",
  "p9.desc": "Einheitliches Erlebnis auf iOS und Android",
  "p10.title": "Internes Management-System",
  "p10.desc": "Rollen, Rechte und Workflow-Automatisierung",
  "p11.title": "Buchungsplattform für Außendienste",
  "p11.desc": "Auftragsverfolgung und Echtzeit-Benachrichtigungen",
  "p12.title": "Produktion von Werbevideos",
  "p12.desc": "Drehbuch, Dreh, Schnitt und Veröffentlichung",

  "home.contact.heading": "Lassen Sie uns Ihre digitale Zukunft bauen",
  "home.contact.body":
    "Kontaktieren Sie uns heute für Ihr nächstes Projekt und eine kostenlose technische Beratung.",
  "form.name": "Vollständiger Name",
  "form.name.ph": "Max Mustermann",
  "form.email": "E-Mail-Adresse",
  "form.email.ph": "name@firma.com",
  "form.phone": "Telefonnummer",
  "form.phone.ph": "+966 5x xxx xxxx",
  "form.service": "Gewünschte Leistung",
  "form.message": "Nachricht",
  "form.message.ph": "Wie können wir helfen?",
  "form.details": "Projektdetails",
  "form.details.ph": "Beschreiben Sie Ihre Projektidee und das ungefähre Budget...",
  "form.submit": "Anfrage senden",
  "form.sending": "Wird gesendet...",
  "form.sent": "Ihre Nachricht ist eingegangen, wir melden uns in Kürze",
  "form.opt.ai": "KI-Lösungen",
  "form.opt.web": "Web- / App-Entwicklung",
  "form.opt.media": "Medienbetreuung",
  "form.opt.site": "Website oder Landingpage",
  "form.opt.edu": "Lern- oder Serviceplattform",
  "form.opt.app": "Mobile App iOS / Android",
  "form.opt.social": "Social Media & Content-Produktion",

  "footer.tagline":
    "MEGA Agency: Web- und App-Engineering, digitales Medienmanagement und KI-Lösungen für ambitionierte Unternehmen.",
  "footer.quick": "Schnellzugriff",
  "footer.links": "Website-Links",
  "footer.contactPage": "Kontaktseite",
  "footer.contact": "Kontakt",
  "footer.payments": "Akzeptierte Zahlungsarten",
  "footer.paymentsNote": "Logos kennzeichnen nur akzeptierte Zahlungsarten.",
  "footer.follow": "Folgen Sie uns",
  "footer.rights": "© 2026 MEGA Digital Solutions Agency. Alle Rechte vorbehalten.",
  "footer.developed": "Entwickelt von Abdallah Tarek",

  "support.title": "Support-Center",
  "support.badge": "Support Online",
  "support.q": "Wie können wir heute helfen?",
  "support.body": "Das MEGA-Team antwortet Ihnen innerhalb von Minuten.",
  "support.whatsapp": "Sofort-Chat über WhatsApp",
  "support.page": "Zur vollständigen Kontaktseite",
  "support.close": "Support-Fenster schließen",
  "support.waLabel": "Über WhatsApp schreiben",
  "support.waTip": "Schreiben Sie uns auf WhatsApp",

  "social.facebook": "Facebook",
  "social.whatsapp": "WhatsApp",
  "social.instagram": "Instagram",

  "contact.badge": "Contact MEGA",
  "contact.h1a": "Sprechen wir über",
  "contact.h1b": "Ihr nächstes Projekt",
  "contact.lead":
    "Wählen Sie den passenden Kanal – wir antworten innerhalb der offiziellen Geschäftszeiten.",
  "contact.card.email": "E-Mail",
  "contact.card.phone": "Telefon",
  "contact.card.hq": "Hauptsitz",
  "contact.card.hqValue": "Riad, Saudi-Arabien",
  "contact.card.hours": "Geschäftszeiten",
  "contact.card.hoursValue": "Sonntag - Donnerstag, 9 - 18 Uhr",
  "contact.formHeading": "Schreiben Sie uns",
  "contact.chat": "Sofort-Chat",
  "contact.chatBody":
    "Der schnellste Weg zu uns. Tippen und direkt auf WhatsApp schreiben.",
  "contact.chatCta": "WhatsApp öffnen",
};

const dictionaries: Record<Locale, Dict> = { ar, en, de };

const STORAGE_KEY = "mega-locale";

type I18nValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: Key) => string;
  dir: "rtl" | "ltr";
};

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ar");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored && stored in dictionaries) setLocaleState(stored);
  }, []);

  useEffect(() => {
    const dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo<I18nValue>(
    () => ({
      locale,
      setLocale,
      t: (key: Key) => dictionaries[locale][key] ?? ar[key],
      dir: locale === "ar" ? "rtl" : "ltr",
    }),
    [locale, setLocale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    return {
      locale: "ar",
      setLocale: () => {},
      t: (key: Key) => ar[key],
      dir: "rtl",
    };
  }
  return ctx;
}
