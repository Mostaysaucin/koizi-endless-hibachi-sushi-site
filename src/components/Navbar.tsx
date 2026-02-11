"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Menu", href: "#menu" },
    { label: "Locations", href: "#locations" },
    { label: "About", href: "#about" },
    { label: "Order Online", href: "#locations", accent: true },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(15, 15, 15, 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--surface-light)" : "1px solid transparent",
      }}
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 sm:px-8 lg:px-12 py-4">
        {/* Brand */}
        <a
          href="#"
          className="text-2xl sm:text-3xl tracking-[0.15em] uppercase transition-opacity hover:opacity-80"
          style={{
            color: "var(--accent)",
            fontFamily: "'DM Serif Display', serif",
            fontWeight: 400,
          }}
        >
          Koizi
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium tracking-wider uppercase transition-all duration-200 ${
                link.accent
                  ? "px-5 py-2 rounded-lg"
                  : "hover:opacity-80"
              }`}
              style={
                link.accent
                  ? {
                      backgroundColor: "var(--primary)",
                      color: "var(--text-primary)",
                    }
                  : { color: "var(--text-secondary)" }
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <div className="space-y-1.5">
            <span
              className="block w-6 h-0.5 transition-all duration-200"
              style={{
                backgroundColor: "var(--text-primary)",
                transform: menuOpen ? "rotate(45deg) translate(3px, 3px)" : "none",
              }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-200"
              style={{
                backgroundColor: "var(--text-primary)",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-200"
              style={{
                backgroundColor: "var(--text-primary)",
                transform: menuOpen ? "rotate(-45deg) translate(3px, -3px)" : "none",
              }}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 space-y-4"
          style={{ backgroundColor: "rgba(15, 15, 15, 0.98)" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-base font-medium py-2 transition-opacity hover:opacity-80"
              style={{
                color: link.accent ? "var(--primary)" : "var(--text-secondary)",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
