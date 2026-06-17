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
    <footer className="border-t border-[#E9DFFF] bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Image
            src="/brand/nesher-logo.png"
            alt="Nesher Tech"
            width={1850}
            height={700}
            className="h-16 w-auto object-contain"
          />
          <p className="mt-4 max-w-sm text-base leading-7 text-[#6B7280]">
            Partner digital untuk website, web application, dashboard, dan
            aplikasi custom.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-[#111827]">Menu</h3>
          <div className="mt-4 grid gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                rel={
                  link.href.startsWith("https://") ? "noreferrer" : undefined
                }
                target={link.href.startsWith("https://") ? "_blank" : undefined}
                className="text-sm text-[#6B7280] transition hover:text-[#6D28D9]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-[#111827]">Services</h3>
          <div className="mt-4 grid gap-3">
            {services.slice(0, 5).map((service) => (
              <Link
                key={service.title}
                href="/#services"
                className="text-sm text-[#6B7280] transition hover:text-[#6D28D9]"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-[#111827]">Contact</h3>
          <div className="mt-4 grid gap-3 text-sm text-[#6B7280]">
            <a
              href={`mailto:${emailAddress}`}
              className="transition hover:text-[#6D28D9]"
            >
              {emailAddress}
            </a>
            <a
              href={officeMapUrl}
              rel="noreferrer"
              target="_blank"
              className="leading-6 transition hover:text-[#6D28D9]"
            >
              {officeAddress}
            </a>
            <a
              href="https://www.neshertechnology.id"
              className="transition hover:text-[#6D28D9]"
            >
              www.neshertechnology.id
            </a>
            <Link
              href="/privacy-policy"
              className="transition hover:text-[#6D28D9]"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-[#E9DFFF] px-4 py-6 text-center text-sm text-[#6B7280]">
        © 2026 Nesher Tech. All rights reserved.
      </div>
    </footer>
  );
}
