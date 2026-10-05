import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n/routing";
import { createPageMetadata } from "@/lib/seo";
import { PrivacyPageContent } from "@/components/privacy/PrivacyPageContent";

export default function Page() {
  return <PrivacyPageContent />;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return createPageMetadata({
    locale,
    title: "Privacy Policy | Nesher Teknologi Nusantara",
    description:
      "Kebijakan privasi Nesher Teknologi Nusantara tentang pengumpulan, penggunaan, penyimpanan, dan perlindungan data pribadi pengunjung website.",
    path: "/privacy-policy",
  });
}
