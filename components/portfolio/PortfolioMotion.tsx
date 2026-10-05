"use client";

import { useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function PortfolioMotion({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(
    () => {
      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils
          .toArray<HTMLElement>("[data-work-reveal]")
          .forEach((element) => {
            gsap.from(element, {
              opacity: 0,
              y: 16,
              duration: 0.55,
              ease: "power2.out",
              clearProps: "all",
              scrollTrigger: { trigger: element, start: "top 96%", once: true },
            });
          });
        gsap.utils
          .toArray<HTMLElement>("[data-work-media]")
          .forEach((element) => {
            gsap.from(element, {
              scale: 0.985,
              duration: 0.7,
              ease: "power2.out",
              clearProps: "all",
              scrollTrigger: { trigger: element, start: "top 96%", once: true },
            });
          });
      });
      return () => media.revert();
    },
    { scope, dependencies: [pathname], revertOnUpdate: true },
  );

  return <div ref={scope}>{children}</div>;
}
