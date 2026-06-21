"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

const revealSelector = [
  "[data-apple-reveal-item]",
  "main section > div",
  "main section article",
  "main section aside",
  "main section form",
  "footer > div",
].join(",");

export function AppleReveal() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(revealSelector)
    ).filter(
      (element) =>
        !element.dataset.appleReveal &&
        (element.hasAttribute("data-apple-reveal-item") ||
          !element.closest('[data-apple-reveal="off"]'))
    );

    if (reducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.dataset.appleReveal = "visible";
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target as HTMLElement;
          element.dataset.appleReveal = "visible";
          observer.unobserve(element);
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.08,
      }
    );

    elements.forEach((element, index) => {
      element.dataset.appleReveal = "hidden";
      element.style.setProperty("transition", "none");
      element.style.setProperty(
        "--apple-reveal-delay",
        element.dataset.appleRevealDelay ??
          `${Math.min(index % 4, 3) * 55}ms`
      );
    });

    let observerFrame = 0;
    const preparationFrame = window.requestAnimationFrame(() => {
      observerFrame = window.requestAnimationFrame(() => {
        elements.forEach((element) => {
          element.style.removeProperty("transition");
          observer.observe(element);
        });
      });
    });

    return () => {
      window.cancelAnimationFrame(preparationFrame);
      window.cancelAnimationFrame(observerFrame);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
