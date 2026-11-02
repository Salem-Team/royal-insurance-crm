"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Code2,
  Layers,
  LayoutTemplate,
  MonitorSmartphone,
  Scale,
  Sparkles,
  Workflow,
  Wrench,
  Globe,
  Gift,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SiteNav } from "@/components/SiteNav";
import { content, useLang } from "@/lib/i18n";

const customIcons = [Code2, Layers, Sparkles, MonitorSmartphone, LayoutTemplate, Scale, Workflow];

export default function HomePage() {
  const { lang, t, dir } = useLang();
  const modules = content.modules[lang];
  const customPoints = content.customPoints[lang];
  const benefit1 = content.benefit1Items[lang];
  const benefit2 = content.benefit2Items[lang];

  return (
    <div id="top" className="min-h-dvh bg-[#0a1220]" dir={dir}>
      <div className="mx-auto min-h-dvh max-w-[1100px] overflow-hidden bg-paper text-ink shadow-[0_30px_100px_rgba(0,0,0,0.45)] sm:my-0 lg:my-6 lg:rounded-[28px]">
        <SiteNav />

        <section className="relative overflow-hidden px-4 pb-10 pt-6 sm:px-8 sm:pb-14 sm:pt-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_100%_0%,rgba(13,42,110,0.14),transparent_55%),radial-gradient(ellipse_60%_40%_at_0%_100%,rgba(197,147,69,0.08),transparent_50%)]" />
          <div className="relative">
            <motion.div
              key={`hero-top-${lang}`}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="mb-6 flex flex-wrap items-center justify-between gap-3"
            >
              <div className="surface flex flex-wrap items-center gap-3 rounded-2xl px-3 py-2.5">
                <Image src="/rootk-logo.png" alt="ROOTK Systems" width={88} height={82} className="h-12 w-auto" priority />
                <div className="h-10 w-px bg-line" />
                <Image src="/royal-logo.png" alt="Royal Insurance" width={150} height={49} className="h-10 w-auto" priority />
              </div>
              <span className="font-en rounded-full border border-line bg-white px-3 py-1.5 text-[11px] font-extrabold tracking-[0.12em] text-navy uppercase">
                {t("commercialQuotation")}
              </span>
            </motion.div>

            <motion.div
              key={`hero-${lang}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="max-w-3xl"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-sm font-bold text-navy-deep shadow-sm">
                <span className="font-en text-[10px] tracking-[0.1em] text-mute-2 uppercase">{t("presentedTo")}</span>
                <span className="h-3 w-px bg-line" />
                <span>Royal Insurance · رويال للتأمين</span>
              </div>
              <p className="mb-3 text-[11px] font-bold tracking-[0.08em] text-navy uppercase sm:tracking-[0.12em]">
                {t("heroEyebrow")}
              </p>
              <h1 className="font-display mb-3 text-[1.55rem] font-extrabold leading-[1.35] text-navy-deep sm:text-4xl lg:text-[2.3rem]">
                {t("heroTitle")}
              </h1>
              <p className="font-en mb-5 text-base font-bold text-navy-soft sm:text-lg">{t("heroSubtitle")}</p>
              <p className="mb-8 max-w-2xl text-[15px] leading-7 text-mute sm:text-base">{t("heroLede")}</p>
            </motion.div>

            <motion.a
              href="#price"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="navy-grad block rounded-2xl p-5 text-white shadow-xl shadow-navy/25 transition hover:-translate-y-1 sm:p-6"
            >
              <div className="mb-2 font-en text-[10px] font-extrabold tracking-[0.12em] text-white/70 uppercase">
                {t("priceShort")}
              </div>
              <div className="font-en text-3xl font-extrabold tracking-tight sm:text-4xl">
                {t("priceAmount")} <span className="text-base">EGP</span>
              </div>
              <p className="mt-2 text-sm leading-6 text-white/85 sm:text-[15px]">{t("priceFromEn")}</p>
            </motion.a>

            <div className="navy-grad mt-6 grid grid-cols-2 gap-3 rounded-2xl p-4 text-white sm:grid-cols-4">
              {[
                [t("preparedBy"), "ROOTK Systems"],
                [t("client"), "Royal Insurance"],
                [t("currency"), "EGP"],
                [t("projectType"), t("projectTypeValue")],
              ].map(([label, value]) => (
                <div key={label}>
                  <div className="mb-1 text-[10px] font-bold tracking-[0.08em] text-white/55 uppercase">{label}</div>
                  <div className="text-sm font-semibold">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="custom" className="space-y-5 px-4 py-10 sm:px-8">
          <Reveal>
            <div className="surface rounded-2xl p-5 sm:p-6">
              <p className="mb-2 text-[11px] font-bold tracking-[0.1em] text-navy uppercase">{t("customEyebrow")}</p>
              <h2 className="font-display mb-3 text-xl font-extrabold text-navy-deep sm:text-[1.75rem]">{t("customTitle")}</h2>
              <div className="mb-4 h-1 w-8 rounded-full bg-navy" />
              <div className="space-y-3 text-[15px] leading-7 text-mute">
                <p>{t("customLede1")}</p>
                <p>{t("customLede2")}</p>
                <p>{t("customLede3")}</p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {customPoints.map((point, i) => {
              const Icon = customIcons[i] ?? Sparkles;
              return (
                <Reveal key={point.title} delay={(i % 3) * 0.04}>
                  <div className="surface h-full rounded-2xl p-4">
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-navy/8 text-navy">
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </div>
                    <h3 className="font-en mb-1 text-[13px] font-extrabold tracking-wide text-navy-deep">{point.title}</h3>
                    <p className="text-sm leading-6 text-mute">{point.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section id="scope" className="space-y-5 border-t border-line/70 bg-white/40 px-4 py-10 sm:px-8">
          <Reveal>
            <div className="surface rounded-2xl p-5">
              <p className="mb-1 text-[11px] font-bold tracking-[0.14em] text-navy uppercase">{t("scopeEyebrow")}</p>
              <h2 className="font-display text-xl font-extrabold text-navy-deep sm:text-2xl">{t("scopeTitle")}</h2>
              <div className="my-3 h-1 w-8 rounded-full bg-navy" />
              <p className="text-sm leading-6 text-mute">{t("scopeLede")}</p>
            </div>
          </Reveal>

          <div className="grid gap-3 md:grid-cols-2">
            {modules.map((mod, i) => (
              <Reveal key={mod.code} delay={(i % 4) * 0.03}>
                <article className="surface h-full rounded-2xl p-4">
                  <div className="mb-1 flex items-center gap-2">
                    <span className="font-en rounded-md bg-navy/8 px-2 py-0.5 text-[11px] font-extrabold text-navy">
                      {mod.code}
                    </span>
                    <h3 className="font-display text-[15px] font-bold text-navy-deep">{mod.title}</h3>
                  </div>
                  <p className="font-en mb-3 text-[11px] font-semibold text-mute-2">{mod.en}</p>
                  <ul className="dot-list">
                    {mod.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="price" className="space-y-5 px-4 py-10 sm:px-8">
          <Reveal>
            <div className="surface overflow-hidden rounded-2xl">
              <div className="navy-grad grid gap-5 p-6 text-white md:grid-cols-[1.3fr_auto] md:items-center sm:p-8">
                <div>
                  <p className="mb-2 font-en text-[11px] font-extrabold tracking-[0.14em] text-white/65 uppercase">
                    {t("priceEyebrow")}
                  </p>
                  <h2 className="font-display mb-3 text-2xl font-extrabold sm:text-3xl">{t("priceTitle")}</h2>
                  <p className="mb-2 text-sm text-white/80">{t("priceIntro")}</p>
                  <div className="font-en text-4xl font-extrabold tracking-tight sm:text-5xl">
                    {t("priceAmount")} <span className="text-xl">EGP</span>
                  </div>
                  <p className="mt-2 font-en text-sm font-semibold text-[#e8c57a]">{t("priceFromEn")}</p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-center backdrop-blur-sm">
                  <Gift className="mx-auto mb-2 h-6 w-6 text-[#e8c57a]" />
                  <div className="text-xs font-bold text-white/70">{t("navBenefits")}</div>
                  <div className="mt-1 text-sm font-semibold leading-6">
                    {lang === "ar" ? "صيانة سنة + موقع مجاني" : "1-year maintenance + free website"}
                  </div>
                </div>
              </div>
              <div className="border-t border-line bg-white px-5 py-4 text-sm leading-7 text-mute">
                {t("priceDisclaimer")}
              </div>
            </div>
          </Reveal>
        </section>

        <section id="benefits" className="space-y-5 border-t border-line/70 bg-white/40 px-4 py-10 sm:px-8">
          <Reveal>
            <div className="surface rounded-2xl p-5">
              <p className="mb-1 text-[11px] font-bold tracking-[0.14em] text-navy uppercase">{t("benefitsEyebrow")}</p>
              <h2 className="font-display text-xl font-extrabold text-navy-deep sm:text-2xl">{t("benefitsTitle")}</h2>
              <div className="my-3 h-1 w-8 rounded-full bg-navy" />
              <p className="text-sm leading-6 text-mute">{t("benefitsLede")}</p>
            </div>
          </Reveal>

          <div className="grid gap-4 lg:grid-cols-2">
            <Reveal>
              <article className="surface relative h-full overflow-hidden rounded-2xl p-5">
                <span className="absolute inset-y-0 start-0 w-1.5 bg-ok" />
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-ok">
                    <Wrench className="h-5 w-5" />
                  </span>
                  <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-extrabold tracking-[0.08em] text-ok uppercase">
                    {t("benefit1Badge")}
                  </span>
                </div>
                <h3 className="font-display mb-3 text-[1.05rem] font-bold leading-7 text-navy-deep">{t("benefit1Title")}</h3>
                <ul className="dot-list">
                  {benefit1.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </Reveal>

            <Reveal delay={0.06}>
              <article className="surface relative h-full overflow-hidden rounded-2xl p-5">
                <span className="absolute inset-y-0 start-0 w-1.5 bg-[var(--color-royal-gold)]" />
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#f7efdf] text-[var(--color-royal-gold)]">
                    <Globe className="h-5 w-5" />
                  </span>
                  <span className="rounded-full border border-[#e8d2a8] bg-[#f7efdf] px-2.5 py-1 text-[10px] font-extrabold tracking-[0.08em] text-[#8a6420] uppercase">
                    {t("benefit2Badge")}
                  </span>
                </div>
                <h3 className="font-display mb-3 text-[1.05rem] font-bold leading-7 text-navy-deep">{t("benefit2Title")}</h3>
                <ul className="dot-list">
                  {benefit2.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </section>

        <section className="px-4 pb-10 sm:px-8">
          <Reveal>
            <div className="navy-grad rounded-2xl p-6 text-white sm:p-7">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-white px-3 py-2">
                    <Image src="/rootk-logo.png" alt="ROOTK Systems" width={72} height={67} className="h-12 w-auto" />
                  </div>
                  <div>
                    <div className="font-en text-sm font-extrabold tracking-[0.14em]">ROOTK SYSTEMS</div>
                    <p className="font-en mt-1 text-sm text-white/75">{t("footerTagline")}</p>
                  </div>
                </div>
                <div className="text-sm">
                  <div className="mb-1 text-[10px] font-bold tracking-[0.1em] text-white/55 uppercase">{t("footerWeb")}</div>
                  <a
                    href="https://www.rootk-eg.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-en font-semibold text-[#e8c57a] underline decoration-white/30 underline-offset-4 transition hover:text-white"
                  >
                    https://www.rootk-eg.com/
                  </a>
                  <div className="mt-3 text-[10px] font-bold tracking-[0.1em] text-white/55 uppercase">{t("clientSite")}</div>
                  <a
                    href="https://royalinsurance.com.eg/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-en font-semibold text-white/90 underline decoration-white/30 underline-offset-4 transition hover:text-white"
                  >
                    https://royalinsurance.com.eg/
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-line pt-4 text-xs font-semibold text-mute-2">
            <span>ROOTK Systems · Royal Insurance · CRM Quotation</span>
            <span className="font-en tracking-wide">RTK-ROYAL-CRM-2026</span>
          </div>
        </section>
      </div>
    </div>
  );
}
