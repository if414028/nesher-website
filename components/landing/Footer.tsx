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
    <footer className="border-t border-white/10 bg-[#0b0b0d] text-white">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="text-2xl font-semibold tracking-[-0.04em]">Nesher Tech</p>
          <p className="mt-4 max-w-sm text-base leading-7 text-white/45">
            Partner digital untuk website, web application, dashboard, dan
            aplikasi custom.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-white">Menu</h3>
          <div className="mt-4 grid gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                rel={
                  link.href.startsWith("https://") ? "noreferrer" : undefined
                }
                target={link.href.startsWith("https://") ? "_blank" : undefined}
                className="text-sm text-white/45 transition hover:text-[#c4b5fd]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-white">Services</h3>
          <div className="mt-4 grid gap-3">
            {services.slice(0, 5).map((service) => (
              <Link
                key={service.title}
                href="/#services"
                className="text-sm text-white/45 transition hover:text-[#c4b5fd]"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-white">Contact</h3>
          <div className="mt-4 grid gap-3 text-sm text-white/45">
            <a
              href={`mailto:${emailAddress}`}
              className="transition hover:text-[#c4b5fd]"
            >
              {emailAddress}
            </a>
            <a
              href={officeMapUrl}
              rel="noreferrer"
              target="_blank"
              className="leading-6 transition hover:text-[#c4b5fd]"
            >
              {officeAddress}
            </a>
            <a
              href="https://www.neshertechnology.id"
              className="transition hover:text-[#c4b5fd]"
            >
              www.neshertechnology.id
            </a>
            <Link
              href="/privacy-policy"
              className="transition hover:text-[#c4b5fd]"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-6 text-center text-sm text-white/35">
        © 2026 Nesher Tech. All rights reserved.
      </div>
    </footer>
  );
}
