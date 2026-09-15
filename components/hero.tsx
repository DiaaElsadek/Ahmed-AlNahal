import Image from "next/image";
import { Mail, ExternalLink, Phone, FileText, Eye, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative hero-grid-bg min-h-screen flex items-center pt-20"
    >
      {/* Contour-line SVG background decoration */}
      <div className="contour-lines" aria-hidden="true">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="900" cy="400" rx="300" ry="200" stroke="#b85c38" strokeWidth="1" />
          <ellipse cx="900" cy="400" rx="250" ry="165" stroke="#b85c38" strokeWidth="1" />
          <ellipse cx="900" cy="400" rx="200" ry="130" stroke="#b85c38" strokeWidth="1" />
          <ellipse cx="900" cy="400" rx="150" ry="95" stroke="#b85c38" strokeWidth="1" />
          <ellipse cx="900" cy="400" rx="100" ry="60" stroke="#b85c38" strokeWidth="1" />
          <ellipse cx="200" cy="600" rx="180" ry="120" stroke="#b85c38" strokeWidth="1" />
          <ellipse cx="200" cy="600" rx="130" ry="85" stroke="#b85c38" strokeWidth="1" />
          <ellipse cx="200" cy="600" rx="80" ry="50" stroke="#b85c38" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-center">
          {/* Left column: text content */}
          <div>
            {/* Coordinate label */}
            <div className="section-number mb-6 flex items-center gap-3 animate-fade-in">
              <span className="w-10 h-px bg-[var(--accent)]" />
              <span>30.0444° N, 31.2357° E — Cairo</span>
            </div>

            {/* Name */}
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] text-[var(--foreground)] leading-[1.08] tracking-tight mb-5 animate-fade-in-up delay-100">
              Ahmed Moustafa
              <br />
              <span className="text-[var(--accent)] inline-block">Hussein Ahmed</span>
            </h1>

            {/* Title line */}
            <div className="animate-fade-in-up delay-200">
              <p className="text-sm sm:text-[15px] text-[var(--muted)] tracking-[0.12em] uppercase font-medium mt-3 mb-7 flex flex-wrap items-center gap-x-3 gap-y-1">
                <span>Urban Planning</span>
                <span className="text-[var(--accent)] text-xs" aria-hidden="true">◆</span>
                <span>Environmental Planning</span>
                <span className="text-[var(--accent)] text-xs" aria-hidden="true">◆</span>
                <span>GIS & Spatial Analysis</span>
              </p>
            </div>

            {/* Divider */}
            <div className="divider-accent mb-7 animate-fade-in delay-300" />

            {/* Professional summary */}
            <p className="max-w-xl text-[15px] sm:text-base leading-[1.75] text-[var(--muted)] mb-8 animate-fade-in-up delay-300">
              Urban and Regional Planning student at Cairo University, specializing
              in Environmental Planning, ranked{" "}
              <strong className="text-[var(--foreground)] font-semibold">1st in class</strong>.
              Experienced in urban planning, GIS-based spatial analysis,
              environmental assessment, urban design, and landscape planning — with a
              focus on strategic planning, climate-responsive urban development,
              sustainable planning, environmental resilience, and integrating spatial
              analysis with planning and design across multiple scales.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 mb-8 animate-fade-in-up delay-400">
              <StatBlock label="Class Rank" value="1st" />
              <StatBlock label="GPA" value="3.49 / 4.00" />
              <StatBlock label="Internships" value="3" />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 animate-fade-in-up delay-500">
              <a
                href="mailto:mustafa_222014@stud.furp.cu.edu"
                id="hero-email-cta"
                className="btn-primary"
              >
                <Mail size={15} />
                Email me
              </a>
              <a
                href="https://linkedin.com/in/ahmedalnahal"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-linkedin-cta"
                className="btn-outline"
              >
                <ExternalLink size={15} />
                LinkedIn
              </a>
            </div>

            {/* Phone */}
            <a
              href="tel:+2011214365"
              className="inline-flex items-center gap-2 mt-4 text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors animate-fade-in delay-600"
            >
              <Phone size={13} />
              +20 112 143 650
            </a>

            {/* Document Buttons */}
            <div className="mt-7 pt-7 border-t border-[var(--border)] animate-fade-in-up delay-700">
              <p className="text-[10px] text-[var(--muted)] uppercase tracking-[0.15em] mb-3 flex items-center gap-2 font-medium">
                <FileText size={11} className="text-[var(--accent)]" />
                Documents
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/assets/CV 2026 - Ahmed Moustafa.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-view-cv"
                  className="btn-ghost group"
                >
                  <Eye size={14} className="text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors" />
                  View CV
                </a>
                <a
                  href="/assets/Portfolio 2026 - Ahmed Moustafa.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-view-portfolio"
                  className="btn-ghost group"
                >
                  <Eye size={14} className="text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors" />
                  View Portfolio
                </a>
              </div>
            </div>
          </div>

          {/* Right column: portrait image (Desktop) */}
          <div className="hidden lg:flex flex-col items-center animate-slide-right delay-400">
            <div className="image-frame">
              <div className="relative w-[340px] h-[430px] overflow-hidden border border-[var(--border)] shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
                <Image
                  src="/images/personal_image.jpeg"
                  alt="Ahmed Moustafa Hussein Ahmed — Urban Planning Student"
                  fill
                  className="object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                  priority
                  sizes="340px"
                />
                {/* Subtle overlay gradient at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Caption below image */}
              <div className="mt-5 text-center">
                <p className="section-number tracking-[0.15em]">Ahmed Alnahal</p>
                <p className="text-[11px] text-[var(--muted)] mt-1 tracking-wide">
                  Cairo University · Class of 2027
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile portrait */}
        <div className="lg:hidden flex justify-center mt-12 animate-scale-in delay-500">
          <div className="image-frame">
            <div className="relative w-[240px] h-[300px] overflow-hidden border border-[var(--border)] shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
              <Image
                src="/images/personal_image.jpeg"
                alt="Ahmed Moustafa Hussein Ahmed — Urban Planning Student"
                fill
                className="object-cover object-top"
                sizes="240px"
              />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden lg:flex justify-center mt-16 animate-fade-in delay-800">
          <a
            href="#education"
            className="flex flex-col items-center gap-2 text-[var(--muted)] hover:text-[var(--accent)] transition-colors group"
            aria-label="Scroll to Education"
          >
            <span className="text-[10px] uppercase tracking-[0.15em] font-medium">Scroll</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}

function StatBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="stat-block">
      <span className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl text-[var(--foreground)] font-semibold block">
        {value}
      </span>
      <span className="text-[10px] text-[var(--muted)] uppercase tracking-[0.15em] mt-1 block font-medium">
        {label}
      </span>
    </div>
  );
}
