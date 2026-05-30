import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nesher Tech | Software House & Digital Product Studio",
  description:
    "Nesher Tech membantu bisnis membangun website, web application, dashboard, dan aplikasi custom yang modern dan scalable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
