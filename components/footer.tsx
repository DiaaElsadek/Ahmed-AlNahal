import { Mail, Phone, ExternalLink, Globe, ArrowUpRight, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-24 lg:py-32 border-t border-[var(--border)] relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--accent-subtle)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-14">
          <span className="section-number">04</span>
          <span className="w-12 h-px bg-[var(--accent)]" />
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl text-[var(--foreground)] tracking-tight">
            Get in Touch
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-14 lg:gap-20">
          {/* Left: closing statement */}
          <div>
            <p className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl text-[var(--foreground)] leading-snug mb-6">
              Ahmed Moustafa
              <br />
              <span className="text-[var(--accent)]">Hussein Ahmed</span>
            </p>
            <p className="text-[15px] text-[var(--muted)] leading-[1.75] max-w-md mb-8">
              Open to internships and collaboration in urban and environmental
              planning. If you&apos;re working on projects in strategic planning,
              GIS-based spatial analysis, or sustainable urban development — I&apos;d
              love to connect.
            </p>

            {/* Location & Languages */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-sm text-[var(--muted)]">
                <MapPin size={14} className="text-[var(--accent)]" />
                <span>Cairo, Egypt</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[var(--muted)]">
                <Globe size={14} className="text-[var(--accent)]" />
                <span>Arabic <span className="text-[11px] text-[var(--muted)] opacity-70">(Native)</span></span>
                <span className="text-[var(--accent)] text-xs" aria-hidden="true">◆</span>
                <span>English <span className="text-[11px] text-[var(--muted)] opacity-70">(Professional Working)</span></span>
              </div>
            </div>
          </div>

          {/* Right: contact links */}
          <div className="flex flex-col justify-center gap-4">
            <a
              href="mailto:mustafa_222014@stud.furp.cu.edu"
              id="footer-email"
              className="contact-card group flex items-center gap-4 p-5"
            >
              <div className="flex items-center justify-center w-11 h-11 border border-[var(--accent)] text-[var(--accent)] shrink-0 transition-all duration-300 group-hover:bg-[var(--accent)] group-hover:text-white">
                <Mail size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] text-[var(--muted)] uppercase tracking-[0.15em] mb-0.5 font-medium">
                  Email
                </p>
                <p className="text-sm text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors truncate">
                  mustafa_222014@stud.furp.cu.edu
                </p>
              </div>
              <ArrowUpRight
                size={16}
                className="text-[var(--muted)] opacity-0 group-hover:opacity-100 group-hover:text-[var(--accent)] transition-all duration-300 shrink-0"
              />
            </a>

            <a
              href="tel:+2011214365"
              id="footer-phone"
              className="contact-card group flex items-center gap-4 p-5"
            >
              <div className="flex items-center justify-center w-11 h-11 border border-[var(--accent)] text-[var(--accent)] shrink-0 transition-all duration-300 group-hover:bg-[var(--accent)] group-hover:text-white">
                <Phone size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] text-[var(--muted)] uppercase tracking-[0.15em] mb-0.5 font-medium">
                  Phone
                </p>
                <p className="text-sm text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                  +20 112 143 650
                </p>
              </div>
              <ArrowUpRight
                size={16}
                className="text-[var(--muted)] opacity-0 group-hover:opacity-100 group-hover:text-[var(--accent)] transition-all duration-300 shrink-0"
              />
            </a>

            <a
              href="https://linkedin.com/in/ahmedalnahal"
              target="_blank"
              rel="noopener noreferrer"
              id="footer-linkedin"
              className="contact-card group flex items-center gap-4 p-5"
            >
              <div className="flex items-center justify-center w-11 h-11 border border-[var(--accent)] text-[var(--accent)] shrink-0 transition-all duration-300 group-hover:bg-[var(--accent)] group-hover:text-white">
                <ExternalLink size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] text-[var(--muted)] uppercase tracking-[0.15em] mb-0.5 font-medium">
                  LinkedIn
                </p>
                <p className="text-sm text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                  linkedin.com/in/ahmedalnahal
                </p>
              </div>
              <ArrowUpRight
                size={16}
                className="text-[var(--muted)] opacity-0 group-hover:opacity-100 group-hover:text-[var(--accent)] transition-all duration-300 shrink-0"
              />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-[var(--muted)] tracking-wide">
            © {currentYear} Ahmed Moustafa Hussein Ahmed
          </p>
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-px bg-[var(--accent)]" />
            <span className="text-[10px] text-[var(--muted)] tracking-[0.15em] uppercase font-medium">
              Urban Planning Portfolio
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
