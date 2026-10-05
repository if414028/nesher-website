"use client";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { useTranslations } from "@/components/i18n/LocaleProvider";
import { LocaleLink } from "@/components/i18n/LocaleLink";
import { Button } from "@/components/ui/button";
export default function NotFound() {
  const { t } = useTranslations();
  return (
    <>
      <Navbar />
      <main
        id="main-content"
        className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 pb-24 pt-40 text-center"
      >
        <p className="text-sm font-semibold text-primary">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">
          {t("Halaman tidak ditemukan")}
        </h1>
        <p className="mt-6 text-lg leading-8 text-[var(--nesher-body)]">
          {t(
            "Halaman yang Anda cari tidak tersedia. Kembali ke beranda untuk menjelajahi layanan dan karya kami.",
          )}
        </p>
        <Button asChild className="mt-8">
          <LocaleLink href="/">{t("Kembali ke Beranda")}</LocaleLink>
        </Button>
      </main>
      <Footer />
    </>
  );
}
