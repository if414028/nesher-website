"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function ContactHeroMascot() {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.fromTo(
        "[data-contact-mascot]",
        { scale: 0.82, opacity: 0, y: 32 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: rootRef }
  );

  return (
    <div ref={rootRef} className="pointer-events-none absolute inset-0 z-10">
      <div
        aria-hidden="true"
        className="absolute left-[8%] top-[20%] h-72 w-72 rounded-full bg-primary/20 blur-[80px]"
      />
      <Image
        data-contact-mascot
        src="/images/contact/eagle-contact.png"
        alt="Maskot elang Nesher siap membantu melalui chat, email, dan konsultasi kebutuhan digital"
        width={1210}
        height={1300}
        priority
        sizes="(min-width: 1024px) 520px, 92vw"
        className="absolute left-[3%] top-0 h-auto w-[82%] object-contain drop-shadow-[0_28px_38px_rgba(63,19,104,0.2)] transition-transform duration-700 ease-out sm:left-[2%] sm:w-[72%] lg:left-0 lg:w-[76%]"
      />
    </div>
  );
}
