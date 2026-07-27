"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "https://www.asiacommerce.net/about" },
  { label: "Services", href: "https://www.asiacommerce.net/services" },
  { label: "Blog", href: "https://www.asiacommerce.net/blog" },
  { label: "Business Club", href: "https://www.asiacommerce.net/business-club" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = scrolled
    ? "text-dark-2 hover:text-brand"
    : "text-white/90 hover:text-white";

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="AsiaCommerce"
            width={180}
            height={40}
            className={`h-9 w-auto transition-all duration-300 ${
              scrolled ? "" : "brightness-0 invert"
            }`}
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className={`text-sm font-medium transition-colors duration-200 ${linkClass}`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="https://www.asiacommerce.net/contact"
            className="hidden md:inline-flex items-center gap-2 bg-brand text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-brand-hover transition-colors duration-200 shadow-sm"
          >
            Free Consultation
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-dark-2" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mx-4 mt-2 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="flex flex-col p-4 gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-dark-2 font-medium px-4 py-3 rounded-xl hover:bg-brand-soft hover:text-brand transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="https://www.asiacommerce.net/contact"
              className="mt-2 text-center bg-brand text-white font-semibold px-5 py-3 rounded-xl hover:bg-brand-hover transition-colors"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
