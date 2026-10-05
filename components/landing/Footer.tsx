"use client";

import { useTranslations } from "@/components/i18n/LocaleProvider";
import Image from "next/image";
import { LocaleLink as Link } from "@/components/i18n/LocaleLink";

import {
  emailAddress,
  navLinks,
  officeAddress,
  officeMapUrl,
  services,
} from "@/lib/landing-data";

export function Footer() {
  const { t } = useTranslations();

  return (
    <footer className="border-t border-[var(--nesher-purple-border)] bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Image
            src="/brand/nesher-logo.png"
            alt={t("Nesher Tech")}
            width={1850}
            height={700}
            className="h-16 w-auto object-contain"
          />
          <p className="mt-4 max-w-sm text-base leading-7 text-[var(--nesher-body)]">
            {t(
              "Partner digital untuk website, web application, dashboard, dan aplikasi custom.",
            )}
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-[var(--nesher-carbon)]">
            {t("Menu")}
          </h3>
          <div className="mt-4 grid gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                rel={
                  link.href.startsWith("https://") ? "noreferrer" : undefined
                }
                target={link.href.startsWith("https://") ? "_blank" : undefined}
                className="text-sm text-[var(--nesher-body)] transition hover:text-primary"
              >
                {t(link.label)}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-[var(--nesher-carbon)]">
            {t("Services")}
          </h3>
          <div className="mt-4 grid gap-3">
            {services.slice(0, 5).map((service) => (
              <Link
                key={service.title}
                href="/#services"
                className="text-sm text-[var(--nesher-body)] transition hover:text-primary"
              >
                {t(service.title)}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-[var(--nesher-carbon)]">
            {t("Contact")}
          </h3>
          <div className="mt-4 grid min-w-0 gap-3 text-sm text-[var(--nesher-body)] [overflow-wrap:anywhere]">
            <a
              href={`mailto:${emailAddress}`}
              className="transition hover:text-primary"
            >
              {t(emailAddress)}
            </a>
            <a
              href={officeMapUrl}
              rel="noreferrer"
              target="_blank"
              className="leading-6 transition hover:text-primary"
            >
              {t(officeAddress)}
            </a>
            <Link href="/" className="transition hover:text-primary">
              {t("www.neshertechnology.id")}
            </Link>
            <Link
              href="/privacy-policy"
              className="transition hover:text-primary"
            >
              {t("Privacy Policy")}
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--nesher-purple-border)] px-4 py-6 text-center text-sm text-[var(--nesher-body)]">
        {t("© 2026 Nesher Tech. All rights reserved.")}
      </div>
    </footer>
  );
}
