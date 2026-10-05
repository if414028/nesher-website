"use client";

import { useTranslations } from "@/components/i18n/LocaleProvider";
import { LocaleLink as Link } from "@/components/i18n/LocaleLink";
import {
  ArrowLeft,
  Building2,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Send,
} from "lucide-react";

import { ContactHeroMascot } from "@/components/contact/ContactHeroMascot";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";
import { Button } from "@/components/ui/button";
import {
  emailAddress,
  officeAddress,
  officeMapEmbedUrl,
  officeMapUrl,
  whatsappUrl,
} from "@/lib/landing-data";

const contactCards = [
  {
    title: "WhatsApp",
    description: "Diskusi kebutuhan project dan estimasi awal.",
    icon: MessageCircle,
    href: whatsappUrl,
    label: "Chat WhatsApp",
  },
  {
    title: "Email",
    description: "Kirim brief, dokumen, atau pertanyaan detail.",
    icon: Mail,
    href: `mailto:${emailAddress}`,
    label: emailAddress,
  },
  {
    title: "Office",
    description: "Estubizi Business Center, Setiabudi, Jakarta.",
    icon: Building2,
    href: officeMapUrl,
    label: "Buka Maps",
  },
];

const projectTypes = [
  "Company Profile Website",
  "Web Application",
  "Dashboard System",
  "Mobile Application",
  "UI/UX Design",
  "Maintenance",
];

export function ContactPageContent() {
  const { t } = useTranslations();

  return (
    <div className="min-h-screen bg-[var(--nesher-canvas)] font-sans">
      <Navbar />
      <main id="main-content">
        <section className="nesher-section relative overflow-hidden px-4 pb-24 pt-36 sm:px-6 sm:pb-32 sm:pt-44 lg:px-8 lg:pt-48">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-96 -top-64 h-[64rem] w-[84rem] bg-[radial-gradient(ellipse_at_center,rgba(109,40,217,0.12)_0%,rgba(109,40,217,0.04)_42%,transparent_72%)] blur-[75px]"
          />
          <div className="relative mx-auto max-w-7xl">
            <Button
              asChild
              variant="outline"
              className="mb-12 h-11 bg-white/70 px-5 backdrop-blur-xl"
            >
              <Link href="/#home">
                <ArrowLeft className="mr-2 size-4" />
                {t("Kembali ke Home")}
              </Link>
            </Button>

            <div className="grid gap-14 lg:grid-cols-[0.54fr_0.46fr] lg:items-center">
              <div>
                <h1 className="max-w-5xl text-balance text-[clamp(3.25rem,5.6vw,5rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-[var(--nesher-ink)]">
                  {t("Mari membangun sesuatu yang bekerja dengan indah.")}
                </h1>
                <p className="mt-7 max-w-3xl text-pretty text-lg leading-8 tracking-[-0.015em] text-[var(--nesher-body)] sm:text-xl">
                  {t(
                    "Ceritakan kebutuhan website, aplikasi, dashboard, atau sistem custom Anda. Tim Nesher akan membantu memetakan solusi, prioritas fitur, dan estimasi pengerjaan yang realistis.",
                  )}
                </p>
              </div>

              <div className="relative min-h-[40rem] sm:min-h-[45rem] lg:min-h-[44rem]">
                <ContactHeroMascot />

                <div className="nesher-card-raised absolute inset-x-0 bottom-0 z-20 ml-auto rounded-[2.5rem] p-7 sm:inset-x-auto sm:right-0 sm:w-[64%] sm:p-8 lg:w-[60%]">
                  <div className="nesher-icon-tile flex size-12 items-center justify-center rounded-2xl">
                    <MapPin className="size-6" />
                  </div>
                  <p className="mt-7 text-sm font-semibold text-primary">
                    {t("Kantor Kami")}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-[var(--nesher-ink)]">
                    {t("Nesher Tech")}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-[var(--nesher-body)]">
                    {t(officeAddress)}
                  </p>
                  <Button asChild className="mt-6 h-11 px-6">
                    <a href={officeMapUrl} rel="noreferrer" target="_blank">
                      {t("Buka di Google Maps")}{" "}
                      <Navigation className="ml-2 size-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
            {contactCards.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  data-gtag-conversion={
                    item.title === "Office" ? undefined : true
                  }
                  key={item.title}
                  href={item.href}
                  rel="noreferrer"
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  className="nesher-liquid nesher-hover-lift group rounded-[2rem] p-7"
                >
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-white text-primary transition group-hover:bg-primary group-hover:text-white">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mt-7 text-2xl font-semibold tracking-[-0.025em] text-[var(--nesher-ink)]">
                    {t(item.title)}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[var(--nesher-body)]">
                    {t(item.description)}
                  </p>
                  <p className="mt-5 text-sm font-semibold text-primary">
                    {t(item.label)}
                  </p>
                </a>
              );
            })}
          </div>
        </section>

        <section className="nesher-section px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.4fr_0.6fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold text-primary">
                {t("Konsultasi Gratis")}
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-[var(--nesher-ink)] sm:text-5xl">
                {t("Mulai dari brief singkat, kami bantu rapikan arahnya.")}
              </h2>
              <p className="mt-6 text-lg leading-8 text-[var(--nesher-body)]">
                {t(
                  "Isi detail kebutuhan Anda atau langsung hubungi kami via WhatsApp. Untuk pengiriman dokumen, proposal, atau brief yang lebih lengkap, email juga tersedia.",
                )}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {projectTypes.map((item) => (
                  <span
                    key={item}
                    className="nesher-chip inline-flex h-10 items-center rounded-full px-4 text-sm font-medium"
                  >
                    {t(item)}
                  </span>
                ))}
              </div>
            </div>

            <div className="nesher-liquid rounded-[2.5rem] p-6 sm:p-8">
              <form
                action={`mailto:${emailAddress}`}
                className="grid gap-5"
                data-gtag-conversion
                encType="text/plain"
                method="post"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-semibold text-[var(--nesher-ink)]">
                    {t("Nama")}
                    <input
                      name="Nama"
                      placeholder={t("Nama lengkap")}
                      className="nesher-input h-12 rounded-2xl px-4 text-sm font-normal transition"
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-semibold text-[var(--nesher-ink)]">
                    {t("Email Kerja")}
                    <input
                      name="Email"
                      placeholder={t("nama@perusahaan.com")}
                      type="email"
                      className="nesher-input h-12 rounded-2xl px-4 text-sm font-normal transition"
                    />
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-semibold text-[var(--nesher-ink)]">
                    {t("Telepon")}
                    <input
                      name="Telepon"
                      placeholder={t("+62")}
                      className="nesher-input h-12 rounded-2xl px-4 text-sm font-normal transition"
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-semibold text-[var(--nesher-ink)]">
                    {t("Perusahaan")}
                    <input
                      name="Perusahaan"
                      placeholder={t("Nama perusahaan")}
                      className="nesher-input h-12 rounded-2xl px-4 text-sm font-normal transition"
                    />
                  </label>
                </div>

                <label className="grid gap-2 text-sm font-semibold text-[var(--nesher-ink)]">
                  {t("Pesan")}
                  <textarea
                    name="Pesan"
                    placeholder={t(
                      "Ceritakan kebutuhan project, target, fitur utama, atau timeline yang diharapkan.",
                    )}
                    rows={6}
                    className="nesher-input resize-none rounded-2xl px-4 py-3 text-sm font-normal leading-6 transition"
                  />
                </label>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button type="submit" className="h-12 px-7 text-base">
                    {t("Kirim via Email")} <Send className="ml-2 size-4" />
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="h-12 px-7 text-base"
                  >
                    <a
                      data-gtag-conversion
                      href={whatsappUrl}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {t("Chat WhatsApp")} <Phone className="ml-2 size-4" />
                    </a>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative mx-auto h-[520px] max-w-7xl overflow-hidden rounded-[2.5rem] bg-[var(--nesher-surface-muted)] shadow-[var(--nesher-raised-shadow)] sm:h-[600px]">
            <iframe
              src={officeMapEmbedUrl}
              title={t("Lokasi kantor Nesher Tech di Google Maps")}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/70 to-transparent" />

            <div className="absolute left-4 top-4 max-w-sm rounded-[1.75rem] border border-white/80 bg-white/85 p-5 shadow-[var(--nesher-raised-shadow)] backdrop-blur-xl sm:left-8 sm:top-8 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="nesher-icon-tile flex size-11 shrink-0 items-center justify-center rounded-2xl">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <p className="text-base font-semibold text-[var(--nesher-ink)]">
                    {t("Nesher Tech")}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[var(--nesher-body)]">
                    {t(officeAddress)}
                  </p>
                  <a
                    href={officeMapUrl}
                    rel="noreferrer"
                    target="_blank"
                    className="mt-4 inline-flex text-sm font-semibold text-primary hover:text-[var(--nesher-purple-900)]"
                  >
                    {t("Buka di Google Maps")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
