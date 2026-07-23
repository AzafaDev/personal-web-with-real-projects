import type { Metadata } from "next";
import { Shippori_Mincho, Inter, Space_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

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
        <header className="border-b border-line bg-surface">
          <nav className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-5">
            <Link href="/" className="font-[family-name:var(--font-display)] text-xl tracking-wide">
              AKMAL
            </Link>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-[family-name:var(--font-utility)] text-xs uppercase tracking-[0.15em]">
              <Link href="/#about" className="hover:text-accent">
                About
              </Link>
              <Link href="/#experience" className="hover:text-accent">
                Experience
              </Link>
              <Link href="/#portfolio" className="stamp inline-block px-3 py-1.5">
                Portfolio
              </Link>
            </div>
          </nav>
        </header>
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
