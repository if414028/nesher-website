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
    <header className="sticky top-0 z-50 border-b border-[#E9DFFF]/80 bg-white/85 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        <Link href="/#home" className="inline-flex items-center">
          <Image
            src="/brand/nesher-logo.png"
            alt="Nesher Tech"
            width={1850}
            height={700}
            priority
            className="h-12 w-auto object-contain sm:h-14"
          />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              rel={link.href.startsWith("https://") ? "noreferrer" : undefined}
              target={link.href.startsWith("https://") ? "_blank" : undefined}
              className="text-sm font-medium text-[#6B7280] transition hover:text-[#3B0764]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button
            asChild
            className="h-11 rounded-full bg-[#6D28D9] px-6 text-white shadow-[0_14px_30px_rgba(109,40,217,0.22)] hover:bg-[#5B21B6] hover:text-white"
          >
            <a href={whatsappUrl} rel="noreferrer" target="_blank">
              Konsultasi Gratis
            </a>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full border border-[#E9DFFF] text-[#111827] lg:hidden"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "grid border-t border-[#E9DFFF]/70 bg-white transition-all lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                rel={
                  link.href.startsWith("https://") ? "noreferrer" : undefined
                }
                target={link.href.startsWith("https://") ? "_blank" : undefined}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-[#6B7280] hover:bg-[#FAF7FF] hover:text-[#3B0764]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="mt-2 h-11 rounded-full bg-[#6D28D9] text-white hover:bg-[#5B21B6] hover:text-white"
            >
              <a
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
    </header>
  );
}
