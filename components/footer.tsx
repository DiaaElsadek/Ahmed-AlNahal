import { Mail, Phone, ExternalLink, Globe, ArrowUpRight, MapPin, FileText, Compass, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-16 sm:py-24 lg:py-32 bg-[#fbf9f5] border-t border-[var(--border)] relative overflow-hidden">
      {/* Subtle architectural grid pattern */}
      <div className="absolute inset-0 drafting-grid opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-16 pb-6 border-b border-[var(--border)]">
          <div>
            <div className="section-number mb-2">
              <Compass size={13} />
              <span>03 // INQUIRIES & COLLABORATION</span>
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-4xl lg:text-5xl text-[var(--foreground)] tracking-tight">
              Get in Touch
            </h2>
          </div>
          <div className="text-left sm:text-right">
            <span className="font-mono text-[10px] sm:text-[11px] text-[var(--accent)] tracking-widest uppercase font-semibold block">
              STATUS: ACCEPTING INQUIRIES
            </span>
            <span className="font-mono text-[9px] sm:text-[10px] text-[var(--muted)] block mt-0.5">
              INTERNSHIPS, MASTERPLANNING & GIS ROLES
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 sm:gap-14 lg:gap-20 items-start">
          {/* Left: Candidate Dossier & Availability */}
          <div className="w-full">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider mb-5 sm:mb-6 max-w-full">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse shrink-0" />
              <span className="truncate sm:overflow-visible">Available for Internships & Project Collaborations</span>
            </div>

            {/* Candidate Name */}
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--foreground)] leading-tight mb-3 sm:mb-4">
              <span className="text-[var(--accent)] font-semibold italic">Ahmed Moustafa</span>
              <br />
              Hussein Ahmed
            </h3>

            <p className="text-xs sm:text-sm font-mono text-[var(--muted)] uppercase tracking-wider mb-5 sm:mb-6 leading-relaxed">
              Faculty of Urban and Regional Planning · Cairo University
              <br />
              <span className="text-[var(--accent)] font-semibold">Ranked 1st in Class · Environmental Planning Track</span>
            </p>

            <p className="text-sm sm:text-[15px] lg:text-[16px] text-[var(--muted)] leading-relaxed max-w-xl mb-6 sm:mb-8">
              Open to internship opportunities, research collaborations, and spatial planning roles with forward-thinking urban design ateliers, regional development consultancies, and GIS analytical teams. Let&apos;s build resilient, climate-conscious urban environments together.
            </p>

            {/* Geographic & Linguistic Telemetry */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5 sm:pt-6 border-t border-[var(--border)] mb-6 sm:mb-8">
              <div className="space-y-1">
                <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-[var(--muted)] block">
                  Studio Base & Coordinates
                </span>
                <p className="text-xs sm:text-sm font-semibold text-[var(--foreground)] flex items-center gap-1.5">
                  <MapPin size={13} className="text-[var(--accent)] shrink-0" />
                  Cairo, Egypt (GMT+2)
                </p>
                <p className="text-[11px] font-mono text-[var(--muted-light)]">
                  30°02&apos;48&quot; N, 31°13&apos;48&quot; E
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-[var(--muted)] block">
                  Linguistic Capabilities
                </span>
                <p className="text-xs sm:text-sm font-semibold text-[var(--foreground)] flex items-center gap-1.5">
                  <Globe size={13} className="text-[var(--accent)] shrink-0" />
                  Arabic <span className="text-xs font-normal text-[var(--muted)]">(Native)</span>
                </p>
                <p className="text-xs text-[var(--foreground)] font-semibold pl-5">
                  English <span className="text-xs font-normal text-[var(--muted)]">(Professional Working)</span>
                </p>
              </div>
            </div>

            {/* Document Fast-Access Links */}
            <div className="p-3.5 sm:p-4 bg-[var(--card)] border border-[var(--border)]">
              <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-[var(--accent)] font-bold block mb-2.5">
                Quick Document Verification (Opens PDF):
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                <a
                  href="/assets/CV 2026 - Ahmed Moustafa.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-2 text-xs font-mono text-[var(--foreground)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all py-2 px-3 border border-[var(--border-subtle)] bg-[#faf7f2]/60"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <FileText size={13} className="text-[var(--accent)] shrink-0" />
                    <span className="truncate">CV (254 KB PDF)</span>
                  </div>
                  <ArrowUpRight size={12} className="opacity-60 shrink-0" />
                </a>

                <a
                  href="/assets/Portfolio 2026 - Ahmed Moustafa.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-2 text-xs font-mono text-[var(--foreground)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all py-2 px-3 border border-[var(--border-subtle)] bg-[#faf7f2]/60"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <FileText size={13} className="text-[var(--accent)] shrink-0" />
                    <span className="truncate">Portfolio (52 MB PDF)</span>
                  </div>
                  <ArrowUpRight size={12} className="opacity-60 shrink-0" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Direct Contact Tiles */}
          <div className="w-full space-y-3 sm:space-y-4">
            {/* Email Card */}
            <a
              href="mailto:mustafa_222014@stud.furp.cu.edu"
              id="footer-email"
              className="contact-tile group flex items-center gap-3 sm:gap-4 p-3.5 sm:p-5 w-full block transition-all"
            >
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 border border-[var(--accent)] text-[var(--accent)] bg-[var(--accent-subtle)] shrink-0 group-hover:bg-[var(--accent)] group-hover:text-white transition-all duration-300">
                <Mail size={18} className="sm:w-5 sm:h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[9px] sm:text-[10px] font-mono text-[var(--muted)] uppercase tracking-widest mb-0.5">
                  Academic & Direct Inquiries
                </p>
                <p className="text-xs sm:text-sm font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors break-all sm:truncate">
                  mustafa_222014@stud.furp.cu.edu
                </p>
                <p className="text-[9px] sm:text-[10px] font-mono text-[var(--muted-light)] mt-0.5 hidden sm:block">
                  Institutional Domain · Cairo University
                </p>
              </div>
              <ArrowUpRight
                size={16}
                className="text-[var(--muted)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0 sm:w-[18px] sm:h-[18px]"
              />
            </a>

            {/* Phone Card */}
            <a
              href="tel:+2011214365"
              id="footer-phone"
              className="contact-tile group flex items-center gap-3 sm:gap-4 p-3.5 sm:p-5 w-full block transition-all"
            >
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 border border-[var(--accent)] text-[var(--accent)] bg-[var(--accent-subtle)] shrink-0 group-hover:bg-[var(--accent)] group-hover:text-white transition-all duration-300">
                <Phone size={18} className="sm:w-5 sm:h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[9px] sm:text-[10px] font-mono text-[var(--muted)] uppercase tracking-widest mb-0.5">
                  Direct Line / WhatsApp
                </p>
                <p className="text-xs sm:text-sm font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                  +20 112 143 650
                </p>
                <p className="text-[9px] sm:text-[10px] font-mono text-[var(--muted-light)] mt-0.5 hidden sm:block">
                  Egypt Mobile (GMT+2)
                </p>
              </div>
              <ArrowUpRight
                size={16}
                className="text-[var(--muted)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0 sm:w-[18px] sm:h-[18px]"
              />
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://linkedin.com/in/ahmedalnahal"
              target="_blank"
              rel="noopener noreferrer"
              id="footer-linkedin"
              className="contact-tile group flex items-center gap-3 sm:gap-4 p-3.5 sm:p-5 w-full block transition-all"
            >
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 border border-[var(--accent)] text-[var(--accent)] bg-[var(--accent-subtle)] shrink-0 group-hover:bg-[var(--accent)] group-hover:text-white transition-all duration-300">
                <ExternalLink size={18} className="sm:w-5 sm:h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[9px] sm:text-[10px] font-mono text-[var(--muted)] uppercase tracking-widest mb-0.5">
                  Professional Network
                </p>
                <p className="text-xs sm:text-sm font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors truncate">
                  linkedin.com/in/ahmedalnahal
                </p>
                <p className="text-[9px] sm:text-[10px] font-mono text-[var(--muted-light)] mt-0.5 hidden sm:block">
                  Verified Academic Profile
                </p>
              </div>
              <ArrowUpRight
                size={16}
                className="text-[var(--muted)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0 sm:w-[18px] sm:h-[18px]"
              />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 sm:mt-20 pt-6 sm:pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] sm:text-[11px] font-mono text-[var(--muted)] text-center sm:text-left">
          <p>
            © {currentYear} Ahmed Moustafa Hussein Ahmed · All Rights Reserved.
          </p>

          <div className="flex items-center gap-5 sm:gap-6">
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
