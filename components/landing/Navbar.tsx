"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { navLinks, whatsappUrl } from "@/lib/landing-data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="pointer-events-none fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-5">
      <a href="#main-content" className="pointer-events-auto sr-only rounded-full bg-white px-5 py-3 text-sm font-semibold text-black focus:not-sr-only focus:absolute focus:left-5 focus:top-5">Lewati ke konten</a>
      <div className={cn("nesher-nav-glass pointer-events-auto mx-auto max-w-[1440px] overflow-hidden border border-white/15 bg-[#0b0b0d]/78 shadow-[0_20px_70px_rgba(0,0,0,.24)] backdrop-blur-2xl transition-[border-radius]", open ? "rounded-[1.75rem]" : "rounded-full")}>
        <nav
          className="flex items-center justify-between px-4 py-3 sm:px-5 lg:px-6"
          aria-label="Primary navigation"
        >
          <Link href="/#home" aria-label="Nesher Tech, kembali ke beranda" className="group inline-flex min-h-11 items-center gap-3 text-white">
            <span className="grid size-8 place-items-center rounded-full bg-[#c4b5fd] text-sm font-black text-[#17131f] transition-transform duration-500 group-hover:rotate-12">N</span>
            <span className="text-sm font-semibold tracking-[-0.02em]">Nesher Tech</span>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => {
              const active = link.href === "/portfolio" ? pathname.startsWith("/portfolio") : pathname === link.href;
              return <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                rel={link.href.startsWith("https://") ? "noreferrer" : undefined}
                target={link.href.startsWith("https://") ? "_blank" : undefined}
                className={cn("relative inline-flex min-h-11 items-center text-sm font-medium transition after:absolute after:inset-x-0 after:bottom-1 after:h-px after:origin-left after:bg-[#c4b5fd] after:transition-transform", active ? "text-white after:scale-x-100" : "text-white/65 after:scale-x-0 hover:text-white hover:after:scale-x-100")}
              >
                {link.label}
              </Link>
            })}
          </div>

          <div className="hidden lg:block">
            <Button
              asChild
              className="h-11 rounded-full bg-white px-6 text-black hover:bg-[#c4b5fd]"
            >
              <a
                data-gtag-conversion
                href={whatsappUrl}
                rel="noreferrer"
                target="_blank"
              >
                Mulai proyek
              </a>
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>

        <div
          className={cn(
            "grid border-t border-white/10 bg-[#0b0b0d]/95 transition-all duration-300 lg:hidden",
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          )}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-2 px-4 py-4 sm:px-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={link.href === "/portfolio" && pathname.startsWith("/portfolio") ? "page" : undefined}
                  rel={
                    link.href.startsWith("https://") ? "noreferrer" : undefined
                  }
                  target={
                    link.href.startsWith("https://") ? "_blank" : undefined
                  }
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-white/60 transition hover:bg-white/10 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="mt-2 h-11 rounded-full bg-[#c4b5fd] text-[#17131f] hover:bg-white"
              >
                <a
                  data-gtag-conversion
                  href={whatsappUrl}
                  onClick={() => setOpen(false)}
                  rel="noreferrer"
                  target="_blank"
                >
                  Mulai proyek
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
