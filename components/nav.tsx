"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--background)]/95 backdrop-blur-sm border-b border-[var(--border)] shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo / Name */}
          <a
            href="#"
            className="group flex items-center gap-3"
            aria-label="Back to top"
          >
            <span className="inline-flex items-center justify-center w-9 h-9 border border-[var(--accent)] text-[var(--accent)] text-xs font-medium tracking-widest">
              AA
            </span>
            <span className="hidden sm:block font-[family-name:var(--font-playfair)] text-lg text-[var(--foreground)] tracking-tight">
              Ahmed Alnahal
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] tracking-wide uppercase font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:mustafa_222014@stud.furp.cu.edu"
              className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-all duration-200 tracking-wide"
            >
              Get in touch
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[var(--foreground)]"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-72 border-b border-[var(--border)]" : "max-h-0"
        }`}
      >
        <div className="bg-[var(--background)] px-6 pb-6 pt-2 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] tracking-wide uppercase font-medium py-2 border-b border-[var(--border)] last:border-b-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:mustafa_222014@stud.furp.cu.edu"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-all duration-200 tracking-wide mt-2"
          >
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  );
}
