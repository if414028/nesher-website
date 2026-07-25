import Image from "next/image";
import Link from "next/link";

import {
  emailAddress,
  navLinks,
  officeAddress,
  officeMapUrl,
  services,
} from "@/lib/landing-data";

export function Footer() {
  return (
    <footer className="border-t border-[var(--nesher-purple-border)] bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Image
            src="/brand/nesher-logo.png"
            alt="Nesher Tech"
            width={1850}
            height={700}
            className="h-16 w-auto object-contain"
          />
          <p className="mt-4 max-w-sm text-base leading-7 text-[var(--nesher-body)]">
            Partner digital untuk website, web application, dashboard, dan
            aplikasi custom.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-[var(--nesher-carbon)]">Menu</h3>
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
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-[var(--nesher-carbon)]">Services</h3>
          <div className="mt-4 grid gap-3">
            {services.slice(0, 5).map((service) => (
              <Link
                key={service.title}
                href="/#services"
                className="text-sm text-[var(--nesher-body)] transition hover:text-primary"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-[var(--nesher-carbon)]">Contact</h3>
          <div className="mt-4 grid gap-3 text-sm text-[var(--nesher-body)]">
            <a
              href={`mailto:${emailAddress}`}
              className="transition hover:text-primary"
            >
              {emailAddress}
            </a>
            <a
              href={officeMapUrl}
              rel="noreferrer"
              target="_blank"
              className="leading-6 transition hover:text-primary"
            >
              {officeAddress}
            </a>
            <a
              href="https://www.neshertechnology.id"
              className="transition hover:text-primary"
            >
              www.neshertechnology.id
            </a>
            <Link
              href="/privacy-policy"
              className="transition hover:text-primary"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--nesher-purple-border)] px-4 py-6 text-center text-sm text-[var(--nesher-body)]">
        © 2026 Nesher Tech. All rights reserved.
      </div>
    </footer>
  );
}
