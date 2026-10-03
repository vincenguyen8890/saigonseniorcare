"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/home-care", label: "Home Care" },
  { href: "/senior-living-homes", label: "Senior Living Homes" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-warm-white/95 backdrop-blur-sm border-b border-beige shadow-sm">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5">
              <LotusMark />
              <div className="leading-tight">
                <div className="font-serif font-bold text-navy text-base md:text-lg tracking-tight">
                  Saigon Senior Care
                </div>
                <div className="text-[11px] text-muted hidden sm:block">
                  Professional Care. Vietnamese Heart.
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-charcoal hover:text-burgundy transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-4">
              <LanguageToggle />
              <a
                href="tel:+18322346888"
                className="text-sm font-semibold text-navy hover:text-burgundy transition-colors duration-150 flex items-center gap-1.5"
              >
                <PhoneIcon />
                (832) 234-6888
              </a>
              <Link
                href="/contact"
                className="bg-burgundy hover:bg-burgundy-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-150 shadow-sm"
              >
                Request a Free Consultation
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-lg text-navy hover:bg-beige transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="lg:hidden border-t border-beige py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2.5 text-base font-medium text-charcoal hover:text-burgundy hover:bg-ivory rounded-lg transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-beige mt-3 flex items-center justify-between px-3">
                <LanguageToggle />
                <a
                  href="tel:+18322346888"
                  className="flex items-center gap-2 py-2 text-base font-semibold text-navy"
                >
                  <PhoneIcon />
                  (832) 234-6888
                </a>
              </div>
              <Link
                href="/contact"
                className="block w-full text-center bg-burgundy hover:bg-burgundy-dark text-white font-semibold px-5 py-3 rounded-full transition-colors mt-2"
                onClick={() => setMenuOpen(false)}
              >
                Free Care Consultation
              </Link>
            </div>
          )}
        </nav>
      </header>

      {/* Mobile sticky call/contact bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-warm-white border-t border-beige shadow-[0_-2px_8px_rgba(0,0,0,0.06)] grid grid-cols-2">
        <a
          href="tel:+18322346888"
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-navy"
        >
          <PhoneIcon />
          Call Now
        </a>
        <Link
          href="/contact"
          className="flex items-center justify-center py-3.5 text-sm font-semibold text-white bg-burgundy"
        >
          Free Consultation
        </Link>
      </div>
    </>
  );
}

function LanguageToggle() {
  return (
    <div className="flex items-center gap-1 text-xs font-semibold" aria-label="Language">
      <span className="px-2 py-1 rounded-md bg-navy text-white">EN</span>
      <span
        className="px-2 py-1 rounded-md text-muted cursor-default"
        title="Tiếng Việt — coming soon / sắp ra mắt"
      >
        VI
      </span>
    </div>
  );
}

function LotusMark() {
  return (
    <svg className="w-9 h-9 shrink-0" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <circle cx="18" cy="18" r="18" className="fill-burgundy" />
      <path
        d="M18 9c1.8 2.4 2.7 4.8 2.7 7.2 0 2.4-.9 4.4-2.7 6-1.8-1.6-2.7-3.6-2.7-6 0-2.4.9-4.8 2.7-7.2z"
        fill="#F8EEF0"
      />
      <path
        d="M10.5 14c2.7.6 4.8 1.8 6.2 3.6 1.4 1.8 1.9 3.9 1.5 6.2-2.7-.6-4.7-1.8-6.1-3.6-1.4-1.8-1.9-3.9-1.6-6.2z"
        fill="#D9A3AD"
      />
      <path
        d="M25.5 14c.3 2.3-.2 4.4-1.6 6.2-1.4 1.8-3.4 3-6.1 3.6-.4-2.3.1-4.4 1.5-6.2 1.4-1.8 3.5-3 6.2-3.6z"
        fill="#D9A3AD"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
