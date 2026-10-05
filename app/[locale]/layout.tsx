import type { Metadata } from "next";
import Script from "next/script";
import "../globals.css";

import { notFound } from "next/navigation";
import { LocaleProvider } from "@/components/i18n/LocaleProvider";
import { getDictionary, getTranslator } from "@/lib/i18n/translations";
import { isLocale, locales } from "@/lib/i18n/routing";
import { AppleReveal } from "@/components/site/AppleReveal";
import { createPageMetadata, siteConfig } from "@/lib/seo";

const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return {
    ...baseMetadata,
    ...createPageMetadata({
      locale,
      title:
        "Nesher Teknologi Nusantara | Software House & Digital Product Studio",
      description: siteConfig.description,
      path: "/",
    }),
  };
}
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getTranslator(locale);
  return (
    <html lang={locale} className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <a className="skip-link" href="#main-content">
          {t("Lewati ke konten utama")}
        </a>
        <LocaleProvider locale={locale} dictionary={getDictionary(locale)}>
          {children}
          <AppleReveal />
        </LocaleProvider>
      </body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-18246471925"
        strategy="afterInteractive"
      />
      <Script id="google-ads-tag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18246471925');

          window.gtag_report_conversion = function gtagReportConversion(url) {
            var callback = function () {
              if (typeof url !== 'undefined') {
                window.location = url;
              }
            };

            gtag('event', 'conversion', {
              'send_to': 'AW-18246471925/0AoUCLai0sAcEPWhzPxD',
              'value': 1.0,
              'currency': 'IDR',
              'event_callback': callback
            });

            return false;
          };

          document.addEventListener('click', function (event) {
            if (!event.target || !event.target.closest) {
              return;
            }

            var target = event.target.closest('[data-gtag-conversion]');

            if (!target) {
              return;
            }

            var url = target.href;
            var targetWindow = target.getAttribute('target');

            if (url) {
              if (targetWindow === '_blank' || url.indexOf('mailto:') === 0) {
                gtag('event', 'conversion', {
                  'send_to': 'AW-18246471925/0AoUCLai0sAcEPWhzPxD',
                  'value': 1.0,
                  'currency': 'IDR'
                });
                return;
              }

              event.preventDefault();
              window.gtag_report_conversion(url);
              return;
            }

            gtag('event', 'conversion', {
              'send_to': 'AW-18246471925/0AoUCLai0sAcEPWhzPxD',
              'value': 1.0,
              'currency': 'IDR'
            });
          });

          document.addEventListener('submit', function (event) {
            if (!event.target || !event.target.matches('[data-gtag-conversion]')) {
              return;
            }

            gtag('event', 'conversion', {
              'send_to': 'AW-18246471925/0AoUCLai0sAcEPWhzPxD',
              'value': 1.0,
              'currency': 'IDR'
            });
          });
        `}
      </Script>
    </html>
  );
}
