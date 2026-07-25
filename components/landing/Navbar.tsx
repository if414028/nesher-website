"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { navLinks, whatsappUrl } from "@/lib/landing-data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-5">
      <div className="pointer-events-auto mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] border border-white/65 bg-white/55 shadow-[var(--nesher-raised-shadow)] ring-1 ring-[var(--nesher-purple-border)]/40 backdrop-blur-2xl">
        <nav
          className="flex items-center justify-between px-4 py-3 sm:px-5 lg:px-6"
          aria-label="Primary navigation"
        >
          <Link href="/#home" className="inline-flex items-center">
            <Image
              src="/brand/nesher-logo.png"
              alt="Nesher Tech"
              width={1850}
              height={700}
              priority
              className="h-10 w-auto object-contain sm:h-11"
            />
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                rel={link.href.startsWith("https://") ? "noreferrer" : undefined}
                target={link.href.startsWith("https://") ? "_blank" : undefined}
                className="text-sm font-medium text-[var(--nesher-body)] transition hover:text-[var(--nesher-purple-900)]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button
              asChild
              className="h-11 px-6"
            >
              <a
                data-gtag-conversion
                href={whatsappUrl}
                rel="noreferrer"
                target="_blank"
              >
                Konsultasi Gratis
              </a>
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full border border-white/70 bg-white/45 text-[var(--nesher-carbon)] transition hover:bg-white/75 lg:hidden"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>

        <div
          className={cn(
            "grid border-t border-white/55 bg-white/40 transition-all duration-300 lg:hidden",
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          )}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-2 px-4 py-4 sm:px-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  rel={
                    link.href.startsWith("https://") ? "noreferrer" : undefined
                  }
                  target={
                    link.href.startsWith("https://") ? "_blank" : undefined
                  }
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-[var(--nesher-body)] transition hover:bg-white/80 hover:text-[var(--nesher-purple-900)]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="mt-2 h-11"
              >
                <a
                  data-gtag-conversion
                  href={whatsappUrl}
                  onClick={() => setOpen(false)}
                  rel="noreferrer"
                  target="_blank"
                >
                  Konsultasi Gratis
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
