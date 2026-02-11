"use client";

import { useState, useEffect, useRef } from "react";

const orderLocations = [
  { name: "Tampa Palms", url: "https://order.simplemenu.com/store/1810" },
  { name: "New Port Richey", url: "https://order.mealkeyway.com/merchant/4d3865464e7368306574572f5530744e62666c734b413d3d/main" },
  { name: "Royal Palm Beach", url: "https://fromtherestaurant.com/koizi-endless-gourmet-grill--sushi/" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);
  const orderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (orderRef.current && !orderRef.current.contains(e.target as Node)) {
        setOrderOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { label: "Menu", href: "#menu" },
    { label: "Locations", href: "#locations" },
    { label: "About", href: "#about" },
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
              className="text-sm font-medium tracking-wider uppercase transition-all duration-200 hover:opacity-80"
              style={{ color: "var(--text-secondary)" }}
            >
              {link.label}
            </a>
          ))}

          {/* Order Online dropdown */}
          <div className="relative" ref={orderRef}>
            <button
              onClick={() => setOrderOpen(!orderOpen)}
              className="text-sm font-medium tracking-wider uppercase px-5 py-2 rounded-lg transition-all duration-200 cursor-pointer"
              style={{
                backgroundColor: "var(--primary)",
                color: "var(--text-primary)",
              }}
            >
              Order Online
            </button>
            {orderOpen && (
              <div
                className="absolute right-0 top-full mt-2 w-56 rounded-lg overflow-hidden shadow-xl"
                style={{ backgroundColor: "var(--surface-light)", border: "1px solid var(--surface)" }}
              >
                {orderLocations.map((loc) => (
                  <a
                    key={loc.name}
                    href={loc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-5 py-3 text-sm font-medium transition-all duration-150 hover:pl-6"
                    style={{ color: "var(--text-primary)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "var(--primary)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }}
                    onClick={() => setOrderOpen(false)}
                  >
                    {loc.name}
                  </a>
                ))}
              </div>
            )}
          </div>
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
              style={{ color: "var(--text-secondary)" }}
            >
              {link.label}
            </a>
          ))}
          <div
            className="pt-2"
            style={{ borderTop: "1px solid var(--surface-light)" }}
          >
            <p
              className="text-xs uppercase tracking-wider mb-3"
              style={{ color: "var(--text-secondary)" }}
            >
              Order Online
            </p>
            {orderLocations.map((loc) => (
              <a
                key={loc.name}
                href={loc.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="block text-base font-medium py-2 transition-opacity hover:opacity-80"
                style={{ color: "var(--primary)" }}
              >
                {loc.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
