"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine which section is active
      const sections = ["contact", "experience", "education"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(`#${id}`);
            return;
          }
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--background)]/95 backdrop-blur-md border-b border-[var(--border)] shadow-[0_1px_8px_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo / Name */}
          <a
            href="#"
            className="group flex items-center gap-3"
            aria-label="Back to top"
          >
            <span className="inline-flex items-center justify-center w-9 h-9 border border-[var(--accent)] text-[var(--accent)] text-[10px] font-semibold tracking-[0.2em] transition-all duration-300 group-hover:bg-[var(--accent)] group-hover:text-white">
              AA
            </span>
            <span className="hidden sm:block font-[family-name:var(--font-playfair)] text-lg text-[var(--foreground)] tracking-tight transition-colors group-hover:text-[var(--accent)]">
              Ahmed Alnahal
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-[13px] tracking-[0.08em] uppercase font-medium transition-colors py-1 ${
                  activeSection === link.href
                    ? "text-[var(--accent)]"
                    : "text-[var(--muted)] hover:text-[var(--foreground)]"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-[1.5px] bg-[var(--accent)] transition-all duration-300 ${
                    activeSection === link.href ? "w-full" : "w-0"
                  }`}
                />
              </a>
            ))}
            <a
              href="mailto:mustafa_222014@stud.furp.cu.edu"
              className="inline-flex items-center gap-2 px-5 py-2 text-[13px] font-medium border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-all duration-300 tracking-wide group"
            >
              Get in touch
              <ArrowUpRight
                size={13}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <div className="relative w-[22px] h-[22px]">
              <X
                size={22}
                className={`absolute inset-0 transition-all duration-300 ${
                  isOpen
                    ? "opacity-100 rotate-0"
                    : "opacity-0 rotate-90"
                }`}
              />
              <Menu
                size={22}
                className={`absolute inset-0 transition-all duration-300 ${
                  isOpen
                    ? "opacity-0 -rotate-90"
                    : "opacity-100 rotate-0"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen
            ? "max-h-80 opacity-100 border-b border-[var(--border)]"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[var(--background)] px-6 pb-6 pt-3 flex flex-col gap-1">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-[13px] tracking-[0.08em] uppercase font-medium py-3 border-b border-[var(--border)] last:border-b-0 transition-all duration-300 ${
                activeSection === link.href
                  ? "text-[var(--accent)] pl-3 border-l-2 border-l-[var(--accent)]"
                  : "text-[var(--muted)] hover:text-[var(--foreground)] hover:pl-2"
              }`}
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:mustafa_222014@stud.furp.cu.edu"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-[13px] font-medium border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-all duration-300 tracking-wide mt-3"
          >
            Get in touch
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </nav>
  );
}
