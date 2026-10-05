import type { ReactNode } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import "./portfolio.css";

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--nesher-canvas)] font-sans">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
