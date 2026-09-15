import Image from "next/image";
import { Mail, ExternalLink, Phone, FileText, Eye } from "lucide-react";

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
          <ellipse
            cx="900"
            cy="400"
            rx="300"
            ry="200"
            stroke="#b85c38"
            strokeWidth="1"
          />
          <ellipse
            cx="900"
            cy="400"
            rx="250"
            ry="165"
            stroke="#b85c38"
            strokeWidth="1"
          />
          <ellipse
            cx="900"
            cy="400"
            rx="200"
            ry="130"
            stroke="#b85c38"
            strokeWidth="1"
          />
          <ellipse
            cx="900"
            cy="400"
            rx="150"
            ry="95"
            stroke="#b85c38"
            strokeWidth="1"
          />
          <ellipse
            cx="900"
            cy="400"
            rx="100"
            ry="60"
            stroke="#b85c38"
            strokeWidth="1"
          />
          <ellipse
            cx="200"
            cy="600"
            rx="180"
            ry="120"
            stroke="#b85c38"
            strokeWidth="1"
          />
          <ellipse
            cx="200"
            cy="600"
            rx="130"
            ry="85"
            stroke="#b85c38"
            strokeWidth="1"
          />
          <ellipse
            cx="200"
            cy="600"
            rx="80"
            ry="50"
            stroke="#b85c38"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full py-16 lg:py-24">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
          {/* Left column: text content */}
          <div>
            {/* Coordinate label */}
            <div className="section-number mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-[var(--accent)]" />
              <span>30.0444° N, 31.2357° E — Cairo</span>
            </div>

            {/* Name */}
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[var(--foreground)] leading-[1.1] tracking-tight mb-4">
              Ahmed Moustafa
              <br />
              <span className="text-[var(--accent)]">Hussein Ahmed</span>
            </h1>

            {/* Title line */}
            <p className="text-base sm:text-lg text-[var(--muted)] tracking-wide uppercase font-medium mt-4 mb-8 flex flex-wrap items-center gap-x-3 gap-y-1">
              <span>Urban Planning</span>
              <span className="text-[var(--accent)]" aria-hidden="true">
                ·
              </span>
              <span>Environmental Planning</span>
              <span className="text-[var(--accent)]" aria-hidden="true">
                ·
              </span>
              <span>GIS & Spatial Analysis</span>
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-[var(--border)] mb-8" />

            {/* Professional summary */}
            <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-[var(--muted)] mb-10">
              Urban and Regional Planning student at Cairo University, specializing
              in Environmental Planning, ranked{" "}
              <strong className="text-[var(--foreground)]">1st in class</strong>.
              Experienced in urban planning, GIS-based spatial analysis,
              environmental assessment, urban design, and landscape planning — with a
              focus on strategic planning, climate-responsive urban development,
              sustainable planning, environmental resilience, and integrating spatial
              analysis with planning and design across multiple scales.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 sm:gap-12 mb-10">
              <StatBlock label="Class Rank" value="1st" />
              <StatBlock label="GPA" value="3.49 / 4.00" />
              <StatBlock label="Internships" value="3" />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="mailto:mustafa_222014@stud.furp.cu.edu"
                id="hero-email-cta"
                className="inline-flex items-center gap-2.5 px-7 py-3 bg-[var(--accent)] text-white text-sm font-medium tracking-wide hover:bg-[var(--accent-light)] transition-colors duration-200"
              >
                <Mail size={16} />
                Email me
              </a>
              <a
                href="https://linkedin.com/in/ahmedalnahal"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-linkedin-cta"
                className="inline-flex items-center gap-2.5 px-7 py-3 border border-[var(--foreground)] text-[var(--foreground)] text-sm font-medium tracking-wide hover:bg-[var(--foreground)] hover:text-white transition-all duration-200"
              >
                <ExternalLink size={16} />
                LinkedIn
              </a>
            </div>

            {/* Phone */}
            <a
              href="tel:+2011214365"
              className="inline-flex items-center gap-2 mt-5 text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
            >
              <Phone size={14} />
              +20 112 143 650
            </a>

            {/* Document Buttons */}
            <div className="mt-8 pt-8 border-t border-[var(--border)]">
              <p className="text-xs text-[var(--muted)] uppercase tracking-widest mb-4 flex items-center gap-2">
                <FileText size={12} className="text-[var(--accent)]" />
                Documents
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/assets/CV 2026 - Ahmed Moustafa.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-view-cv"
                  className="group inline-flex items-center gap-2.5 px-5 py-2.5 border border-[var(--border)] text-[var(--foreground)] text-sm font-medium tracking-wide hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200"
                >
                  <Eye size={15} className="text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors" />
                  View CV
                </a>
                <a
                  href="/assets/Portfolio 2026 - Ahmed Moustafa.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-view-portfolio"
                  className="group inline-flex items-center gap-2.5 px-5 py-2.5 border border-[var(--border)] text-[var(--foreground)] text-sm font-medium tracking-wide hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200"
                >
                  <Eye size={15} className="text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors" />
                  View Portfolio
                </a>
              </div>
            </div>
          </div>

          {/* Right column: portrait image */}
          <div className="hidden lg:flex flex-col items-center">
            <div className="relative">
              {/* Decorative frame lines */}
              <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-[var(--accent)] opacity-40" />
              <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-2 border-r-2 border-[var(--accent)] opacity-40" />

              {/* Image container */}
              <div className="relative w-[320px] h-[400px] overflow-hidden border border-[var(--border)]">
                <Image
                  src="/images/personal_image.jpeg"
                  alt="Ahmed Moustafa Hussein Ahmed — Urban Planning Student"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="320px"
                />
              </div>

              {/* Caption below image */}
              <div className="mt-4 text-center">
                <p className="section-number">Ahmed Alnahal</p>
                <p className="text-xs text-[var(--muted)] mt-1">
                  Cairo University · Class of 2027
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile portrait — shown only on smaller screens */}
        <div className="lg:hidden flex justify-center mt-12">
          <div className="relative">
            <div className="absolute -top-2 -left-2 w-14 h-14 border-t-2 border-l-2 border-[var(--accent)] opacity-40" />
            <div className="absolute -bottom-2 -right-2 w-14 h-14 border-b-2 border-r-2 border-[var(--accent)] opacity-40" />
            <div className="relative w-[220px] h-[280px] overflow-hidden border border-[var(--border)]">
              <Image
                src="/images/personal_image.jpeg"
                alt="Ahmed Moustafa Hussein Ahmed — Urban Planning Student"
                fill
                className="object-cover object-top"
                sizes="220px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl text-[var(--foreground)] font-semibold">
        {value}
      </span>
      <span className="text-xs text-[var(--muted)] uppercase tracking-widest mt-1">
        {label}
      </span>
    </div>
  );
}
