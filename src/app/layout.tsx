import type { Metadata } from "next";
import { Shippori_Mincho, Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";

const display = Shippori_Mincho({
  variable: "--font-display",
  weight: ["400", "600"],
  subsets: ["latin"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const utility = Space_Mono({
  variable: "--font-utility",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akmal — Full-Stack Software Engineer",
  description:
    "Portfolio of Akmal, a full-stack software engineer specializing in Go, Node.js, React, TypeScript, and Next.js. Freelance and independent project case studies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${utility.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-line bg-surface py-6 font-[family-name:var(--font-utility)] text-xs text-muted">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 px-6 sm:flex-row sm:justify-between">
            <span>Built with Next.js — 2026</span>
            <div className="flex gap-4">
              <a href="mailto:akmal.dz.f@gmail.com" className="hover:text-ink">
                Email
              </a>
              <a
                href="https://github.com/AzafaDev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/akmal-dzakwan-faiz-0bb98839b"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
