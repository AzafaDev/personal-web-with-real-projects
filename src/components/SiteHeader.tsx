"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-line bg-surface">
      <nav className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-5">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="font-[family-name:var(--font-display)] text-xl tracking-wide"
        >
          AKMAL
        </Link>

        <div className="hidden items-center gap-x-6 font-[family-name:var(--font-utility)] text-xs uppercase tracking-[0.15em] sm:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-accent">
              {link.label}
            </Link>
          ))}
          <Link href="/#portfolio" className="stamp inline-block px-3 py-1.5">
            Portfolio
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-none items-center justify-center border border-line sm:hidden"
        >
          <span className="relative block h-3 w-4" aria-hidden="true">
            <span
              className={`absolute left-0 top-0 h-px w-4 bg-ink transition-transform duration-200 ${
                open ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-ink transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-px w-4 bg-ink transition-transform duration-200 ${
                open ? "-translate-y-[5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-line transition-[max-height] duration-300 ease-out sm:hidden ${
          open ? "max-h-40" : "max-h-0 border-t-0"
        }`}
      >
        <div className="flex flex-col items-start gap-1 px-6 py-4 font-[family-name:var(--font-utility)] text-xs uppercase tracking-[0.15em]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-2 hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#portfolio"
            onClick={() => setOpen(false)}
            className="stamp mt-1 inline-block px-3 py-1.5"
          >
            Portfolio
          </Link>
        </div>
      </div>
    </header>
  );
}
