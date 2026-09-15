import { Mail, Phone, ExternalLink, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-24 lg:py-32 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="section-number">04</span>
          <span className="w-12 h-px bg-[var(--accent)]" />
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl text-[var(--foreground)] tracking-tight">
            Get in Touch
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: closing statement */}
          <div>
            <p className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl text-[var(--foreground)] leading-snug mb-6">
              Ahmed Moustafa
              <br />
              Hussein Ahmed
            </p>
            <p className="text-[var(--muted)] leading-relaxed max-w-md mb-8">
              Open to internships and collaboration in urban and environmental
              planning. If you&apos;re working on projects in strategic planning,
              GIS-based spatial analysis, or sustainable urban development — I&apos;d
              love to connect.
            </p>

            {/* Languages */}
            <div className="flex items-center gap-3 text-sm text-[var(--muted)]">
              <Globe size={14} className="text-[var(--accent)]" />
              <span>Arabic (Native)</span>
              <span className="text-[var(--accent)]" aria-hidden="true">
                ·
              </span>
              <span>English (Professional Working Proficiency)</span>
            </div>
          </div>

          {/* Right: contact links */}
          <div className="flex flex-col justify-center gap-5">
            <a
              href="mailto:mustafa_222014@stud.furp.cu.edu"
              id="footer-email"
              className="group flex items-center gap-4 p-4 border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
            >
              <div className="flex items-center justify-center w-10 h-10 border border-[var(--accent)] text-[var(--accent)] shrink-0">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs text-[var(--muted)] uppercase tracking-widest mb-0.5">
                  Email
                </p>
                <p className="text-sm text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                  mustafa_222014@stud.furp.cu.edu
                </p>
              </div>
            </a>

            <a
              href="tel:+2011214365"
              id="footer-phone"
              className="group flex items-center gap-4 p-4 border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
            >
              <div className="flex items-center justify-center w-10 h-10 border border-[var(--accent)] text-[var(--accent)] shrink-0">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-xs text-[var(--muted)] uppercase tracking-widest mb-0.5">
                  Phone
                </p>
                <p className="text-sm text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                  +20 112 143 650
                </p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/ahmedalnahal"
              target="_blank"
              rel="noopener noreferrer"
              id="footer-linkedin"
              className="group flex items-center gap-4 p-4 border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
            >
              <div className="flex items-center justify-center w-10 h-10 border border-[var(--accent)] text-[var(--accent)] shrink-0">
                <ExternalLink size={18} />
              </div>
              <div>
                <p className="text-xs text-[var(--muted)] uppercase tracking-widest mb-0.5">
                  LinkedIn
                </p>
                <p className="text-sm text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                  linkedin.com/in/ahmedalnahal
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--muted)] tracking-wide">
            © {currentYear} Ahmed Moustafa Hussein Ahmed. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-6 h-px bg-[var(--accent)]" />
            <span className="text-xs text-[var(--muted)] tracking-widest uppercase">
              Urban Planning Portfolio
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
