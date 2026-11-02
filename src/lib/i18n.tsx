"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "ar" | "en";

type Dict = Record<string, string>;

const ar: Dict = {
  navCustom: "حلول مخصصة",
  navScope: "نطاق CRM",
  navPrice: "الاستثمار",
  navBenefits: "المزايا المجانية",
  navCta: "عرض السعر",
  brandSub: "رووتك سيستمز",
  commercialQuotation: "عرض تجاري",
  heroEyebrow: "عرض فني وتجاري · ROOTK Systems",
  heroTitle: "عرض سعر نظام إدارة علاقات العملاء (CRM)",
  heroSubtitle: "CUSTOM CRM SOLUTION PROPOSAL",
  heroLede:
    "تتشرف شركة ROOTK Systems بتقديم هذا العرض لتطوير وتنفيذ نظام إدارة علاقات العملاء (CRM) مخصص لشركة رويال للتأمين، بهدف تحسين إدارة العملاء والمبيعات وتنظيم عمليات المتابعة والتواصل، وتوفير رؤية واضحة لأداء فريق العمل والإدارة.",
  preparedBy: "مقدَّم من",
  client: "العميل",
  currency: "العملة",
  projectType: "نوع المشروع",
  projectTypeValue: "CRM أساسي مخصص",
  clientSite: "موقع العميل",
  priceShort: "يبدأ السعر من",
  priceAmount: "50,000",
  priceWords: "جنيه مصري",
  priceFromEn: "Starting From EGP 50,000",
  egp: "جنيه مصري",
  customEyebrow: "نهج ROOTK",
  customTitle: "حلول برمجية مخصصة — Custom Software Solutions",
  customLede1:
    "نحن في ROOTK Systems لا نقدم نظامًا ثابتًا أو قالبًا جاهزًا لجميع العملاء، بل نقوم بتحليل احتياجات كل شركة وتصميم وتطوير نظام مخصص يتوافق مع طبيعة عملها وإجراءاتها التشغيلية.",
  customLede2:
    "نوفر أكثر من تصور للواجهات وتجارب الاستخدام (UI/UX)، مع التركيز على سهولة الاستخدام، وسلاسة التنقل، وتقديم تجربة مناسبة لجميع المستخدمين.",
  customLede3:
    "يمكننا أيضًا تنفيذ تصميمات وواجهات مستوحاة من أي Reference أو Website أو Application يقدمه العميل، مع تطويرها بما يتناسب مع هويته واحتياجاته.",
  scopeEyebrow: "نطاق النظام",
  scopeTitle: "نظام CRM أساسي",
  scopeLede:
    "الميزات التالية تمثل النطاق المقترح الأولي. التفاصيل النهائية للتنفيذ تُحدد في الملحق الفني المتفق عليه.",
  priceEyebrow: "العرض التجاري",
  priceTitle: "الاستثمار في الحل",
  priceIntro: "يبدأ سعر تنفيذ نظام CRM من:",
  priceDisclaimer:
    "يتم تحديد النطاق النهائي للنظام والتكلفة النهائية وفقًا للملحق الفني الذي سيتم الاتفاق عليه بين الطرفين.",
  benefitsEyebrow: "قيمة إضافية",
  benefitsTitle: "مزايا مجانية مع العرض",
  benefitsLede: "تقدّم ROOTK Systems المزايا التالية مجانًا ضمن عرض الـ CRM.",
  benefit1Title: "صيانة ودعم فني مجاني لمدة سنة كاملة",
  benefit1Badge: "مجاني · سنة",
  benefit2Title: "تصميم وتطوير موقع إلكتروني مجاني للشركة",
  benefit2Badge: "مجاني · موقع",
  footerTagline: "Your Technology Partner for a Bigger Tomorrow.",
  footerWeb: "الموقع الإلكتروني",
  langAria: "تبديل اللغة",
  printPdf: "طباعة / PDF",
  presentedTo: "مقدَّم إلى",
};

const en: Dict = {
  navCustom: "Custom Solutions",
  navScope: "CRM Scope",
  navPrice: "Investment",
  navBenefits: "Free Benefits",
  navCta: "View pricing",
  brandSub: "ROOTK Systems",
  commercialQuotation: "Commercial Quotation",
  heroEyebrow: "Technical & Commercial Offer · ROOTK Systems",
  heroTitle: "CRM Solution Quotation",
  heroSubtitle: "CUSTOM CRM SOLUTION PROPOSAL",
  heroLede:
    "ROOTK Systems is pleased to present this proposal to develop and implement a custom Customer Relationship Management (CRM) system for Royal Insurance, to improve customer and sales management, organize follow-up and communication, and provide clear visibility into team and management performance.",
  preparedBy: "Prepared by",
  client: "Client",
  currency: "Currency",
  projectType: "Project type",
  projectTypeValue: "Custom basic CRM",
  clientSite: "Client website",
  priceShort: "Starting from",
  priceAmount: "50,000",
  priceWords: "EGP",
  priceFromEn: "Starting From EGP 50,000",
  egp: "EGP",
  customEyebrow: "ROOTK approach",
  customTitle: "Custom Software Solutions — حلول برمجية مخصصة",
  customLede1:
    "At ROOTK Systems we do not offer a fixed product or a ready-made template for every client. We analyze each company’s needs and design and develop a custom system that fits its operating model and procedures.",
  customLede2:
    "We provide more than one UI/UX concept, with focus on ease of use, smooth navigation, and an experience that works for all users.",
  customLede3:
    "We can also implement designs inspired by any reference, website, or application the client provides, adapted to their identity and requirements.",
  scopeEyebrow: "System scope",
  scopeTitle: "Basic CRM System",
  scopeLede:
    "The features below represent the proposed initial scope. Final implementation details will be defined in the agreed technical appendix.",
  priceEyebrow: "Commercial offer",
  priceTitle: "Investment in the Solution",
  priceIntro: "CRM implementation starts from:",
  priceDisclaimer:
    "The final system scope and final cost will be determined according to the technical appendix agreed between both parties.",
  benefitsEyebrow: "Added value",
  benefitsTitle: "Complimentary benefits with this offer",
  benefitsLede: "ROOTK Systems includes the following benefits free of charge with the CRM offer.",
  benefit1Title: "One full year of free maintenance and technical support",
  benefit1Badge: "Free · 1 year",
  benefit2Title: "Free design and development of a company website",
  benefit2Badge: "Free · Website",
  footerTagline: "Your Technology Partner for a Bigger Tomorrow.",
  footerWeb: "Website",
  langAria: "Switch language",
  printPdf: "Print / PDF",
  presentedTo: "Presented to",
};

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: (key: string) => string;
  dir: "rtl" | "ltr";
};

const LangContext = createContext<LangContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ar");

  useEffect(() => {
    const saved = window.localStorage.getItem("royal-crm-quot-lang");
    if (saved === "ar" || saved === "en") setLangState(saved);
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem("royal-crm-quot-lang", next);
    document.documentElement.lang = next;
    document.documentElement.dir = next === "ar" ? "rtl" : "ltr";
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === "ar" ? "en" : "ar");
  }, [lang, setLang]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const dict = lang === "ar" ? ar : en;
  const t = useCallback((key: string) => dict[key] ?? key, [dict]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggleLang,
      t,
      dir: (lang === "ar" ? "rtl" : "ltr") as "rtl" | "ltr",
    }),
    [lang, setLang, toggleLang, t],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}

export type ModuleItem = {
  code: string;
  title: string;
  en: string;
  items: string[];
};

export const content = {
  customPoints: {
    ar: [
      { title: "Fully Customized Software", text: "نظام مخصص بالكامل وفق احتياجات الشركة." },
      { title: "Multiple UI/UX Design Approaches", text: "أكثر من تصور للواجهات وتجربة الاستخدام." },
      { title: "User-Friendly Experience", text: "تركيز على سهولة الاستخدام وسلاسة التنقل." },
      { title: "Responsive Design", text: "واجهات تعمل على سطح المكتب والجوال." },
      { title: "Reference-Based Design Implementation", text: "تنفيذ مستوحى من أي مرجع يقدمه العميل." },
      { title: "Scalable Architecture", text: "بنية قابلة للتوسع وإضافة وحدات لاحقًا." },
      { title: "Custom Workflows and Business Logic", text: "مسارات عمل ومنطق أعمال حسب إجراءاتكم." },
    ],
    en: [
      { title: "Fully Customized Software", text: "A system built around the company’s real needs." },
      { title: "Multiple UI/UX Design Approaches", text: "More than one interface and experience concept." },
      { title: "User-Friendly Experience", text: "Focus on ease of use and smooth navigation." },
      { title: "Responsive Design", text: "Interfaces that work on desktop and mobile." },
      { title: "Reference-Based Design Implementation", text: "Implementation inspired by client-provided references." },
      { title: "Scalable Architecture", text: "Architecture ready to grow and add modules later." },
      { title: "Custom Workflows and Business Logic", text: "Workflows and logic aligned with your procedures." },
    ],
  },
  modules: {
    ar: [
      {
        code: "A",
        title: "إدارة العملاء",
        en: "Customer Management",
        items: [
          "تسجيل وإضافة العملاء الجدد",
          "إدارة بيانات العملاء الشخصية وبيانات الشركات",
          "تصنيف العملاء وتنظيمهم",
          "عرض ملف تفصيلي لكل عميل",
          "تسجيل الملاحظات والتفاعلات",
          "سجل كامل لتاريخ التواصل مع العملاء",
          "البحث والتصفية والوصول السريع لبيانات العملاء",
        ],
      },
      {
        code: "B",
        title: "إدارة العملاء المحتملين",
        en: "Leads Management",
        items: [
          "تسجيل العملاء المحتملين",
          "تسجيل مصدر العميل",
          "تصنيف وتوزيع العملاء على موظفي المبيعات",
          "متابعة حالة كل Lead",
          "تحديد مستوى اهتمام العميل",
          "تحويل العملاء المحتملين إلى فرص بيعية",
        ],
      },
      {
        code: "C",
        title: "إدارة المبيعات",
        en: "Sales Management",
        items: [
          "إدارة فرص المبيعات",
          "مراحل دورة البيع (Sales Pipeline)",
          "متابعة كل فرصة بيعية",
          "تسجيل تفاصيل المفاوضات",
          "متابعة حالة عروض الأسعار",
          "تسجيل أسباب نجاح أو خسارة الفرص",
          "متابعة أداء فريق المبيعات",
        ],
      },
      {
        code: "D",
        title: "المتابعة والأنشطة",
        en: "Follow-ups & Activities",
        items: [
          "تسجيل المكالمات والاجتماعات",
          "إضافة الملاحظات والتفاعلات",
          "إنشاء المهام وتوزيعها",
          "تحديد مواعيد المتابعة",
          "تنبيهات وتذكيرات للموظفين",
          "متابعة المهام المتأخرة والمكتملة",
          "عرض سجل الأنشطة لكل عميل",
        ],
      },
      {
        code: "E",
        title: "المهام والتذكيرات",
        en: "Tasks & Reminders",
        items: [
          "إنشاء المهام اليومية",
          "تحديد المسؤول عن كل مهمة",
          "تحديد الأولوية وتاريخ الاستحقاق",
          "متابعة حالة التنفيذ",
          "تذكيرات بمواعيد التواصل والمتابعة",
        ],
      },
      {
        code: "F",
        title: "التقارير ولوحة التحكم",
        en: "Reports & Dashboard",
        items: [
          "لوحة تحكم للإدارة",
          "إجمالي العملاء",
          "العملاء المحتملون",
          "فرص المبيعات النشطة",
          "أداء فريق المبيعات",
          "معدلات تحويل العملاء",
          "تقارير المتابعة والمهام",
          "مؤشرات الأداء الأساسية (KPIs)",
        ],
      },
      {
        code: "G",
        title: "إدارة المستخدمين والصلاحيات",
        en: "User Management & Permissions",
        items: [
          "إدارة حسابات الموظفين",
          "تحديد الصلاحيات حسب الأدوار",
          "صلاحيات المديرين وموظفي المبيعات",
          "التحكم في الوصول إلى البيانات والوظائف",
        ],
      },
      {
        code: "H",
        title: "التخصيص والإعدادات",
        en: "Customization & Settings",
        items: [
          "إمكانية تخصيص الحقول والنماذج",
          "ضبط مراحل المبيعات",
          "إعدادات النظام وفقًا لطبيعة عمل الشركة",
          "قابلية تطوير النظام مستقبلًا وإضافة Modules جديدة",
        ],
      },
    ] as ModuleItem[],
    en: [
      {
        code: "A",
        title: "Customer Management",
        en: "Customer Management",
        items: [
          "Register and add new customers",
          "Manage personal and company customer data",
          "Classify and organize customers",
          "Detailed profile for each customer",
          "Log notes and interactions",
          "Full communication history",
          "Search, filter, and quick access to customer data",
        ],
      },
      {
        code: "B",
        title: "Leads Management",
        en: "Leads Management",
        items: [
          "Register leads",
          "Capture lead source",
          "Classify and assign leads to sales staff",
          "Track each lead’s status",
          "Set interest level",
          "Convert leads into sales opportunities",
        ],
      },
      {
        code: "C",
        title: "Sales Management",
        en: "Sales Management",
        items: [
          "Manage sales opportunities",
          "Sales pipeline stages",
          "Track each opportunity",
          "Log negotiation details",
          "Track quotation status",
          "Record win/loss reasons",
          "Track sales team performance",
        ],
      },
      {
        code: "D",
        title: "Follow-ups & Activities",
        en: "Follow-ups & Activities",
        items: [
          "Log calls and meetings",
          "Add notes and interactions",
          "Create and assign tasks",
          "Set follow-up dates",
          "Staff alerts and reminders",
          "Track overdue and completed tasks",
          "Activity history per customer",
        ],
      },
      {
        code: "E",
        title: "Tasks & Reminders",
        en: "Tasks & Reminders",
        items: [
          "Create daily tasks",
          "Assign ownership",
          "Set priority and due date",
          "Track execution status",
          "Reminders for contact and follow-up",
        ],
      },
      {
        code: "F",
        title: "Reports & Dashboard",
        en: "Reports & Dashboard",
        items: [
          "Management dashboard",
          "Total customers",
          "Leads",
          "Active sales opportunities",
          "Sales team performance",
          "Conversion rates",
          "Follow-up and task reports",
          "Core KPIs",
        ],
      },
      {
        code: "G",
        title: "User Management & Permissions",
        en: "User Management & Permissions",
        items: [
          "Manage employee accounts",
          "Role-based permissions",
          "Manager and sales access levels",
          "Control access to data and features",
        ],
      },
      {
        code: "H",
        title: "Customization & Settings",
        en: "Customization & Settings",
        items: [
          "Customize fields and forms",
          "Configure sales stages",
          "System settings aligned to company operations",
          "Ready for future modules and expansion",
        ],
      },
    ] as ModuleItem[],
  },
  benefit1Items: {
    ar: [
      "دعم فني للنظام",
      "معالجة الأخطاء البرمجية",
      "التحديثات الفنية اللازمة ضمن نطاق الصيانة المتفق عليه",
      "المساعدة في ضمان استقرار النظام وكفاءة تشغيله",
    ],
    en: [
      "Technical support for the system",
      "Bug fixes",
      "Required technical updates within the agreed maintenance scope",
      "Support for system stability and reliable operation",
    ],
  },
  benefit2Items: {
    ar: [
      "تصميم موقع إلكتروني احترافي",
      "تصميم متوافق مع الهوية البصرية للشركة",
      "Responsive Design",
      "تجربة استخدام سهلة ومناسبة للزوار",
      "تنفيذ الموقع وفقًا للنطاق الذي سيتم الاتفاق عليه",
    ],
    en: [
      "Professional website design",
      "Aligned with the company visual identity",
      "Responsive design",
      "Easy experience for visitors",
      "Built within the agreed website scope",
    ],
  },
};
