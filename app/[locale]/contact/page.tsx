import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n/routing";
import { createPageMetadata } from "@/lib/seo";
import { ContactPageContent } from "@/components/contact/ContactPageContent";

export default function Page() {
  return <ContactPageContent />;
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
    title: "Contact | Nesher Tech",
    description:
      "Hubungi Nesher Tech untuk konsultasi website, web application, dashboard, mobile app, dan solusi digital custom.",
    path: "/contact",
  });
}
