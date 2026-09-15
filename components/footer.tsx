import { Mail, Phone, ExternalLink, Globe, ArrowUpRight, MapPin, FileText, Compass, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-24 lg:py-32 bg-[#fbf9f5] border-t border-[var(--border)] relative overflow-hidden">
      {/* Subtle architectural grid pattern */}
      <div className="absolute inset-0 drafting-grid opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-6 border-b border-[var(--border)]">
          <div>
            <div className="section-number mb-2">
              <span>04 // INQUIRIES & COLLABORATION</span>
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl text-[var(--foreground)] tracking-tight">
              Get in Touch
            </h2>
          </div>
          <div className="text-left sm:text-right">
            <span className="font-mono text-[11px] text-[var(--accent)] tracking-widest uppercase font-semibold block">
              STATUS: ACCEPTING INQUIRIES
            </span>
            <span className="font-mono text-[10px] text-[var(--muted)] block mt-0.5">
              INTERNSHIPS, MASTERPLANNING & GIS ROLES
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-14 lg:gap-20 items-start">
          {/* Left: Candidate Dossier & Availability */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-mono uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>Available for Internships & Project Collaborations</span>
            </div>

            <h3 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-[var(--foreground)] leading-tight mb-4">
              Ahmed Moustafa
              <br />
              <span className="text-[var(--accent)] italic">Hussein Ahmed</span>
            </h3>

            <p className="text-sm font-mono text-[var(--muted)] uppercase tracking-wider mb-6">
              Faculty of Urban and Regional Planning · Cairo University
              <br />
              <span className="text-[var(--accent)] font-semibold">Ranked 1st in Class · Environmental Planning Specialization</span>
            </p>

            <p className="text-[15px] sm:text-[16px] text-[var(--muted)] leading-[1.8] max-w-xl mb-8">
              Open to internship opportunities, research collaborations, and spatial planning roles with forward-thinking urban design ateliers, regional development consultancies, and GIS analytical teams. Let&apos;s build resilient, climate-conscious urban environments together.
            </p>

            {/* Geographic & Linguistic Telemetry */}
            <div className="grid sm:grid-cols-2 gap-4 pt-6 border-t border-[var(--border)] mb-8">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--muted)] block">
                  Studio Base & Coordinates
                </span>
                <p className="text-sm font-semibold text-[var(--foreground)] flex items-center gap-1.5">
                  <MapPin size={14} className="text-[var(--accent)]" />
                  Cairo, Egypt (GMT+2)
                </p>
                <p className="text-xs font-mono text-[var(--muted-light)]">
                  30°02&apos;48&quot; N, 31°13&apos;48&quot; E
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--muted)] block">
                  Linguistic Capabilities
                </span>
                <p className="text-sm font-semibold text-[var(--foreground)] flex items-center gap-1.5">
                  <Globe size={14} className="text-[var(--accent)]" />
                  Arabic <span className="text-xs font-normal text-[var(--muted)]">(Native)</span>
                </p>
                <p className="text-xs text-[var(--foreground)] font-semibold pl-5">
                  English <span className="text-xs font-normal text-[var(--muted)]">(Professional Working)</span>
                </p>
              </div>
            </div>

            {/* Document Fast-Access Links */}
            <div className="p-4 bg-[var(--card)] border border-[var(--border)]">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent)] font-bold block mb-2.5">
                Quick Document Verification (Opens PDF):
              </span>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/assets/CV 2026 - Ahmed Moustafa.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono text-[var(--foreground)] hover:text-[var(--accent)] transition-colors py-1 px-2 border border-[var(--border-subtle)] hover:border-[var(--accent)]"
                >
                  <FileText size={12} className="text-[var(--accent)]" />
                  <span>Curriculum Vitae (254 KB)</span>
                  <ArrowUpRight size={11} className="opacity-60" />
                </a>
                <a
                  href="/assets/Portfolio 2026 - Ahmed Moustafa.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono text-[var(--foreground)] hover:text-[var(--accent)] transition-colors py-1 px-2 border border-[var(--border-subtle)] hover:border-[var(--accent)]"
                >
                  <FileText size={12} className="text-[var(--accent)]" />
                  <span>Urban Portfolio (52 MB)</span>
                  <ArrowUpRight size={11} className="opacity-60" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Direct Contact Tiles */}
          <div className="space-y-4">
            {/* Email Card */}
            <a
              href="mailto:mustafa_222014@stud.furp.cu.edu"
              id="footer-email"
              className="contact-tile group flex items-center gap-4 block"
            >
              <div className="flex items-center justify-center w-12 h-12 border border-[var(--accent)] text-[var(--accent)] bg-[var(--accent-subtle)] shrink-0 group-hover:bg-[var(--accent)] group-hover:text-white transition-all duration-300">
                <Mail size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-mono text-[var(--muted)] uppercase tracking-widest mb-0.5">
                  Academic & Direct Inquiries
                </p>
                <p className="text-sm font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors truncate">
                  mustafa_222014@stud.furp.cu.edu
                </p>
                <p className="text-[10px] font-mono text-[var(--muted-light)] mt-0.5">
                  Institutional Domain · Cairo University
                </p>
              </div>
              <ArrowUpRight
                size={18}
                className="text-[var(--muted)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0"
              />
            </a>

            {/* Phone Card */}
            <a
              href="tel:+2011214365"
              id="footer-phone"
              className="contact-tile group flex items-center gap-4 block"
            >
              <div className="flex items-center justify-center w-12 h-12 border border-[var(--accent)] text-[var(--accent)] bg-[var(--accent-subtle)] shrink-0 group-hover:bg-[var(--accent)] group-hover:text-white transition-all duration-300">
                <Phone size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-mono text-[var(--muted)] uppercase tracking-widest mb-0.5">
                  Direct Line / WhatsApp
                </p>
                <p className="text-sm font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                  +20 112 143 650
                </p>
                <p className="text-[10px] font-mono text-[var(--muted-light)] mt-0.5">
                  Egypt Mobile (GMT+2)
                </p>
              </div>
              <ArrowUpRight
                size={18}
                className="text-[var(--muted)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0"
              />
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://linkedin.com/in/ahmedalnahal"
              target="_blank"
              rel="noopener noreferrer"
              id="footer-linkedin"
              className="contact-tile group flex items-center gap-4 block"
            >
              <div className="flex items-center justify-center w-12 h-12 border border-[var(--accent)] text-[var(--accent)] bg-[var(--accent-subtle)] shrink-0 group-hover:bg-[var(--accent)] group-hover:text-white transition-all duration-300">
                <ExternalLink size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-mono text-[var(--muted)] uppercase tracking-widest mb-0.5">
                  Professional Network
                </p>
                <p className="text-sm font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                  linkedin.com/in/ahmedalnahal
                </p>
                <p className="text-[10px] font-mono text-[var(--muted-light)] mt-0.5">
                  Verified Academic Profile
                </p>
              </div>
              <ArrowUpRight
                size={18}
                className="text-[var(--muted)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0"
              />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[var(--muted)]">
          <p>
            © {currentYear} Ahmed Moustafa Hussein Ahmed · All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-[var(--accent)] uppercase font-semibold">
              Urban & Regional Planning Portfolio
            </span>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              aria-label="Back to top"
            >
              <span>TOP</span>
              <ArrowUp size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
