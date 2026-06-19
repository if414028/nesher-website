"use client";

import { useEffect, useRef } from "react";

type Point = {
  x: number;
  y: number;
};

const ribbonColors = [
  "109, 40, 217",
  "91, 33, 182",
  "59, 7, 100",
  "76, 145, 155",
];

export function HeroFlowBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const pointer: Point = { x: 0.55, y: 0.38 };
    const pointerTarget: Point = { ...pointer };
    let frame = 0;
    let visible = true;
    let width = 0;
    let height = 0;

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const scale = Math.min(window.devicePixelRatio || 1, 1.5);

      width = Math.max(1, bounds.width);
      height = Math.max(1, bounds.height);
      canvas.width = Math.round(width * scale);
      canvas.height = Math.round(height * scale);
      context.setTransform(scale, 0, 0, scale, 0, 0);
    };

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);
      context.lineCap = "round";

      pointer.x += (pointerTarget.x - pointer.x) * 0.035;
      pointer.y += (pointerTarget.y - pointer.y) * 0.035;

      const background = context.createRadialGradient(
        width * 0.48,
        height * 0.28,
        0,
        width * 0.48,
        height * 0.42,
        Math.max(width, height)
      );
      background.addColorStop(0, "#FFFFFF");
      background.addColorStop(0.48, "#FAF7FF");
      background.addColorStop(1, "#F4EEFF");
      context.fillStyle = background;
      context.fillRect(0, 0, width, height);

      const seconds = reducedMotion ? 1.8 : time * 0.00008;
      const compact = width < 640;
      const ribbonCount = compact ? 5 : 7;
      const strandsPerRibbon = compact ? 18 : 26;

      for (let ribbon = 0; ribbon < ribbonCount; ribbon += 1) {
        const ribbonProgress = ribbon / Math.max(1, ribbonCount - 1);
        const ribbonPhase = ribbon * 1.17;
        const ribbonCenter =
          height * (-0.04 + ribbonProgress * 0.92) +
          Math.sin(seconds * 2.4 + ribbonPhase) * height * 0.045;
        const ribbonWidth = height * (compact ? 0.12 : 0.09);

        context.save();
        context.beginPath();
        context.filter = `blur(${compact ? 12 : 20}px)`;

        for (let x = -width * 0.14; x <= width * 1.14; x += 18) {
          const normalizedX = x / Math.max(width, 1);
          const broadCurve =
            Math.sin(
              normalizedX * (compact ? 2.7 : 3.4) +
                seconds * 3.1 +
                ribbonPhase
            ) *
            height *
            (compact ? 0.09 : 0.075);
          const foldedCurve =
            Math.sin(normalizedX * 7.4 - seconds * 1.4 + ribbonPhase) *
            height *
            0.018;
          const sweep =
            Math.pow(normalizedX - 0.45, 2) *
            height *
            (ribbon % 2 === 0 ? 0.32 : -0.2);
          const y = ribbonCenter + broadCurve + foldedCurve + sweep;

          if (x <= -width * 0.13) {
            context.moveTo(x, y);
          } else {
            context.lineTo(x, y);
          }
        }

        context.strokeStyle =
          ribbon % 2 === 0
            ? "rgba(109, 40, 217, 0.055)"
            : "rgba(59, 7, 100, 0.035)";
        context.lineWidth = ribbonWidth * 0.72;
        context.stroke();
        context.restore();

        for (let strand = 0; strand < strandsPerRibbon; strand += 1) {
          const strandProgress =
            strand / Math.max(1, strandsPerRibbon - 1) - 0.5;
          const color =
            ribbonColors[(ribbon + Math.floor(strand / 7)) % ribbonColors.length];
          const phase = ribbonPhase + strandProgress * 1.8;
          const alpha =
            0.012 +
            (1 - Math.abs(strandProgress) * 1.7) * 0.014 +
            (strand % 9 === 0 ? 0.016 : 0);

          context.beginPath();

          for (let x = -width * 0.14; x <= width * 1.14; x += 14) {
            const normalizedX = x / Math.max(width, 1);
            const distanceFromPointer = Math.abs(normalizedX - pointer.x);
            const pointerPull =
              Math.max(0, 1 - distanceFromPointer * 3.5) *
              (pointer.y - 0.5) *
              height *
              0.08;
            const broadCurve =
              Math.sin(
                normalizedX * (compact ? 2.7 : 3.4) +
                  seconds * 3.1 +
                  phase
              ) *
              height *
              (compact ? 0.09 : 0.075);
            const foldedCurve =
              Math.sin(normalizedX * 7.4 - seconds * 1.4 + ribbonPhase) *
              height *
              0.018;
            const sweep =
              Math.pow(normalizedX - 0.45, 2) *
              height *
              (ribbon % 2 === 0 ? 0.32 : -0.2);
            const y =
              ribbonCenter +
              strandProgress * ribbonWidth +
              broadCurve +
              foldedCurve +
              sweep +
              pointerPull;

            if (x <= -width * 0.13) {
              context.moveTo(x, y);
            } else {
              context.lineTo(x, y);
            }
          }

          context.strokeStyle = `rgba(${color}, ${Math.max(alpha, 0.01)})`;
          context.lineWidth = strand % 9 === 0 ? 2.2 : 0.75;
          context.stroke();
        }
      }

      const vignette = context.createLinearGradient(0, 0, 0, height);
      vignette.addColorStop(0, "rgba(255, 255, 255, 0.04)");
      vignette.addColorStop(0.55, "rgba(255, 255, 255, 0)");
      vignette.addColorStop(1, "rgba(255, 255, 255, 0.58)");
      context.fillStyle = vignette;
      context.fillRect(0, 0, width, height);

      if (!reducedMotion && visible) {
        frame = window.requestAnimationFrame(draw);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width;
      const y = (event.clientY - bounds.top) / bounds.height;

      if (x >= 0 && x <= 1 && y >= 0 && y <= 1) {
        pointerTarget.x = x;
        pointerTarget.y = y;
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      resize();
      if (reducedMotion) {
        draw(0);
      }
    });
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;

      if (visible && !reducedMotion && frame === 0) {
        frame = window.requestAnimationFrame(draw);
      }

      if (!visible && frame) {
        window.cancelAnimationFrame(frame);
        frame = 0;
      }
    });

    resizeObserver.observe(canvas);
    visibilityObserver.observe(canvas);
    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    resize();
    draw(0);

    return () => {
      window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
