"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";

const navLinks = [
  { num: "01", label: "Education", href: "#education" },
  { num: "02", label: "Experience", href: "#experience" },
  { num: "03", label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const sections = ["contact", "experience", "education"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) {
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#fbf9f5]/92 backdrop-blur-md border-b border-[var(--border)] shadow-[0_1px_12px_rgba(24,24,27,0.04)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Studio Brand Mark */}
          <a
            href="#"
            className="group flex items-center gap-3.5"
            aria-label="Ahmed Al Nahal — Return to top"
          >
            <div className="relative flex items-center justify-center w-9 h-9 border border-[var(--accent)] text-[var(--accent)] text-[11px] font-mono font-bold tracking-widest transition-all duration-300 group-hover:bg-[var(--accent)] group-hover:text-white">
              AA
              <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-[var(--accent)] rounded-full animate-pulse" />
            </div>
            <div>
              <span className="block font-[family-name:var(--font-playfair)] text-lg sm:text-xl font-bold text-[var(--foreground)] tracking-tight leading-none group-hover:text-[var(--accent)] transition-colors">
                Ahmed Al Nahal
              </span>
              <span className="block font-mono text-[9px] sm:text-[10px] text-[var(--muted)] tracking-[0.14em] uppercase mt-1">
                Urban Planning Undergraduate  
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`group relative text-[12px] font-mono tracking-[0.12em] uppercase py-1 transition-colors ${
                  activeSection === link.href
                    ? "text-[var(--accent)] font-semibold"
                    : "text-[var(--muted)] hover:text-[var(--foreground)]"
                }`}
              >
                <span className="text-[10px] text-[var(--accent)] mr-1 opacity-60 group-hover:opacity-100 transition-opacity">
                  {link.num} //
                </span>
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[1.5px] bg-[var(--accent)] transition-all duration-300 ${
                    activeSection === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            ))}

            {/* Quick action: View Portfolio PDF */}
            <a
              href="/assets/Portfolio 2026 - Ahmed Moustafa.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[var(--border)] text-[11px] font-mono tracking-wider uppercase text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200 bg-[var(--card)]"
            >
              <FileText size={12} className="text-[var(--accent)]" />
              <span>Portfolio.pdf</span>
            </a>

            {/* Direct Inquiry Button */}
            <a
              href="mailto:mustafa_222014@stud.furp.cu.edu"
              className="inline-flex items-center gap-2 px-4 py-2 text-[12px] font-mono tracking-wider uppercase border border-[var(--accent)] bg-[var(--accent)] text-white hover:bg-[var(--accent-light)] hover:border-[var(--accent-light)] transition-all duration-200 shadow-sm group"
            >
              <span>Contact</span>
              <ArrowUpRight
                size={13}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[var(--foreground)] hover:text-[var(--accent)] transition-colors focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <div className="relative w-6 h-6">
              <X
                size={24}
                className={`absolute inset-0 transition-all duration-300 ${
                  isOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
                }`}
              />
              <Menu
                size={24}
                className={`absolute inset-0 transition-all duration-300 ${
                  isOpen ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen
            ? "max-h-96 opacity-100 border-b border-[var(--border)] bg-[#fbf9f5]/98 backdrop-blur-lg"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-5 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between py-3 border-b border-[var(--border-subtle)] text-[13px] font-mono tracking-[0.1em] uppercase ${
                activeSection === link.href
                  ? "text-[var(--accent)] font-bold pl-2 border-l-2 border-l-[var(--accent)]"
                  : "text-[var(--muted)] hover:text-[var(--foreground)]"
              }`}
            >
              <span>
                <span className="text-[var(--accent)] mr-2">{link.num} //</span>
                {link.label}
              </span>
              <ArrowUpRight size={14} className="opacity-40" />
            </a>
          ))}

          <div className="pt-3 flex flex-col gap-2.5">
            <a
              href="/assets/Portfolio 2026 - Ahmed Moustafa.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 border border-[var(--border)] text-[12px] font-mono tracking-wider uppercase text-[var(--foreground)] bg-[var(--card)]"
            >
              <FileText size={13} className="text-[var(--accent)]" />
              <span>View Portfolio (52 MB PDF)</span>
            </a>
            <a
              href="mailto:mustafa_222014@stud.furp.cu.edu"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 py-2.5 bg-[var(--accent)] text-white text-[12px] font-mono tracking-wider uppercase font-medium shadow-sm"
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
