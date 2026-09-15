import Image from "next/image";
import { Mail, ExternalLink, Phone, FileText, Eye, ArrowDown, Compass, Layers, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative drafting-grid min-h-screen flex flex-col justify-between pt-24 lg:pt-28 pb-12 overflow-hidden"
    >
      {/* Architectural Contour Lines Background Accent */}
      <div className="contour-lines" aria-hidden="true">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1400 900"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Topographic elevation contours with subtle line-weights */}
          <path
            d="M-100,200 C300,100 600,450 1000,300 C1200,200 1350,350 1500,250"
            stroke="#b85028"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <path
            d="M-100,280 C320,180 580,520 980,380 C1180,290 1320,420 1500,340"
            stroke="#b85028"
            strokeWidth="1.2"
          />
          <path
            d="M-100,360 C340,260 560,590 960,460 C1160,370 1300,490 1500,420"
            stroke="#b85028"
            strokeWidth="1"
          />
          <path
            d="M-100,450 C360,340 540,660 940,540 C1140,460 1280,570 1500,510"
            stroke="#b85028"
            strokeWidth="0.8"
            strokeDasharray="6 3"
          />
          {/* Spatial Grid intersection crosses */}
          <text x="960" y="450" fill="#b85028" fontSize="10" fontFamily="monospace" opacity="0.6">+ EL 140m</text>
          <text x="340" y="250" fill="#b85028" fontSize="10" fontFamily="monospace" opacity="0.6">+ EL 125m</text>
          <text x="1200" y="210" fill="#b85028" fontSize="10" fontFamily="monospace" opacity="0.6">+ EL 150m</text>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full relative z-10">
        {/* Top Architectural Telemetry Strip */}
        <div className="flex flex-wrap items-center justify-between gap-y-2 gap-x-4 border-b border-[var(--border)] pb-4 mb-10 text-[11px] font-mono text-[var(--muted)] animate-fade-in">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse" />
            <span className="tracking-widest uppercase font-semibold text-[var(--accent)]">
              Dossier ref: FURP-CU-2027
            </span>
            <span className="hidden sm:inline text-[var(--border)]">|</span>
            <span className="hidden sm:inline">
              Cairo University · Faculty of Urban & Regional Planning
            </span>
          </div>
          <div className="flex items-center gap-4 text-[10px] sm:text-[11px]">
            <span className="flex items-center gap-1.5">
              <Compass size={13} className="text-[var(--accent)]" />
              <span>30°02&apos;48&quot; N, 31°13&apos;48&quot; E</span>
            </span>
            <span className="text-[var(--border)]">|</span>
            <span>DATUM: WGS 84</span>
          </div>
        </div>

        {/* Main Grid Content */}
        <div className="grid lg:grid-cols-[1.18fr_410px] gap-12 lg:gap-16 items-start">
          {/* Left Column: Dossier Information */}
          <div>
            {/* Specialization Domain Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-6 animate-fade-in-up">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[var(--card)] border border-[var(--border)] text-[10px] font-mono uppercase tracking-wider text-[var(--foreground)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                Urban & Regional Planning
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[var(--card)] border border-[var(--border)] text-[10px] font-mono uppercase tracking-wider text-[var(--foreground)]">
                <Layers size={11} className="text-[var(--accent)]" />
                Environmental Planning Track
              </span>
              <span className="inline-flex items-center px-2.5 py-1 bg-[var(--accent-subtle)] border border-transparent text-[10px] font-mono uppercase tracking-wider text-[var(--accent)] font-semibold">
                Rank 01 / Cohort
              </span>
            </div>

            {/* Candidate Name */}
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl lg:text-[4.75rem] text-[var(--foreground)] leading-[1.04] tracking-tight mb-5 animate-fade-in-up delay-100">
              Ahmed Moustafa
              <br />
              <span className="text-[var(--accent)] font-semibold italic">Hussein Ahmed</span>
            </h1>

            {/* Sub-headline / Studio Statement */}
            <div className="animate-fade-in-up delay-200">
              <p className="text-xs sm:text-sm font-mono text-[var(--muted)] tracking-[0.14em] uppercase mb-6 flex flex-wrap items-center gap-x-3 gap-y-1.5">
                <span className="font-semibold text-[var(--foreground)]">Master Planning</span>
                <span className="text-[var(--accent)]" aria-hidden="true">■</span>
                <span className="font-semibold text-[var(--foreground)]">GIS Spatial Analysis</span>
                {/* <span className="text-[var(--accent)]" aria-hidden="true">■</span> */}
                {/* <span className="font-semibold text-[var(--foreground)]">Climate Resilience</span> */}
                <span className="text-[var(--accent)]" aria-hidden="true">■</span>
                <span className="font-semibold text-[var(--foreground)]">Urban Design</span>
              </p>
            </div>

            {/* Architectural Divider */}
            <div className="divider-architectural mb-6 animate-fade-in delay-300" />

            {/* Professional Summary */}
            <p className="text-[15px] sm:text-[16px] leading-[1.8] text-[var(--muted)] max-w-2xl mb-8 animate-fade-in-up delay-300">
              Top-ranked Urban and Regional Planning student at Cairo University (Faculty of Urban and Regional Planning), specializing in Environmental Planning and ranked{" "}
              <strong className="text-[var(--foreground)] font-semibold underline decoration-[var(--accent)] decoration-2 underline-offset-4">
                1st in class
              </strong>
              . Proven studio and field experience delivering masterplan frameworks, spatial analysis, and technical planning documentation for large-scale development schemes up to{" "}
              <strong className="text-[var(--foreground)] font-semibold">3,000+ acres</strong> in Egypt and international projects in Tanzania. Passionate about climate-responsive urban design, GIS-driven decision models, and resilient regional growth.
            </p>

            {/* Project Metrics & Spec Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-9 animate-fade-in-up delay-400">
              <div className="data-tile">
                <span className="block font-mono text-[10px] text-[var(--muted)] uppercase tracking-wider mb-1">
                  Academic Rank
                </span>
                <span className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-[var(--accent)] leading-tight block">
                  1st
                </span>
                <span className="text-[10px] font-mono text-[var(--muted-light)] mt-0.5 block">
                  Top of Cohort
                </span>
              </div>

              <div className="data-tile">
                <span className="block font-mono text-[10px] text-[var(--muted)] uppercase tracking-wider mb-1">
                  Cumulative GPA
                </span>
                <span className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-[var(--foreground)] leading-tight block">
                  3.49
                </span>
                <span className="text-[10px] font-mono text-[var(--muted-light)] mt-0.5 block">
                  / 4.00 (A-)
                </span>
              </div>

              {/* <div className="data-tile">
                <span className="block font-mono text-[10px] text-[var(--muted)] uppercase tracking-wider mb-1">
                  Masterplan Scale
                </span>
                <span className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-[var(--foreground)] leading-tight block">
                  3k+
                </span>
                <span className="text-[10px] font-mono text-[var(--muted-light)] mt-0.5 block">
                  Acres Planned
                </span>
              </div> */}

              <div className="data-tile">
                <span className="block font-mono text-[10px] text-[var(--muted)] uppercase tracking-wider mb-1">
                  Internships 
                </span>
                <span className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-[var(--foreground)] leading-tight block">
                  03
                </span>
                <span className="text-[10px] font-mono text-[var(--muted-light)] mt-0.5 block">
                  
                </span>
              </div>
            </div>

            {/* Direct Contact & Document Access Triggers */}
            <div className="space-y-4 animate-fade-in-up delay-500">
              {/* Primary Contact Actions */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="mailto:mustafa_222014@stud.furp.cu.edu"
                  id="hero-email-cta"
                  className="btn-primary"
                >
                  <Mail size={15} />
                  <span>mustafa_222014@stud.furp.cu.edu</span>
                </a>

                <a
                  href="https://linkedin.com/in/ahmedalnahal"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-linkedin-cta"
                  className="btn-outline"
                >
                  <ExternalLink size={14} />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href="tel:+2011214365"
                  className="inline-flex items-center gap-2 text-xs font-mono text-[var(--muted)] hover:text-[var(--accent)] transition-colors px-2 py-1"
                >
                  <Phone size={13} className="text-[var(--accent)]" />
                  <span>+20 112 143 650</span>
                </a>
              </div>

              {/* Portfolio & CV Documents (View-Only In New Tab) */}
              <div className="pt-5 border-t border-[var(--border)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-[var(--muted)] flex items-center gap-2 font-semibold">
                    <FileText size={12} className="text-[var(--accent)]" />
                    Technical Portfolio & Credentials (PDF Drawing Sets)
                  </span>
                  <span className="text-[9px] font-mono text-[var(--muted-light)] uppercase tracking-wider">
                    Opens inline · View only
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  {/* View CV Button */}
                  <a
                    href="/assets/CV 2026 - Ahmed Moustafa.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="hero-view-cv"
                    className="btn-document group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 flex items-center justify-center bg-[var(--accent-subtle)] text-[var(--accent)] text-xs">
                        <FileText size={14} />
                      </div>
                      <div>
                        <span className="block text-[13px] font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                          Curriculum Vitae (2026)
                        </span>
                        <span className="block text-[10px] font-mono text-[var(--muted)]">
                          Format: PDF · 254 KB · Verified
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-mono text-[var(--accent)] opacity-80 group-hover:opacity-100">
                      <Eye size={13} />
                      <span>View</span>
                    </div>
                  </a>

                  {/* View Portfolio Button */}
                  <a
                    href="/assets/Portfolio 2026 - Ahmed Moustafa.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="hero-view-portfolio"
                    className="btn-document group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 flex items-center justify-center bg-[var(--accent-subtle)] text-[var(--accent)] text-xs">
                        <Layers size={14} />
                      </div>
                      <div>
                        <span className="block text-[13px] font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                          Masterplanning Portfolio (2026)
                        </span>
                        <span className="block text-[10px] font-mono text-[var(--muted)]">
                          Complete Studio Work · 52 MB PDF
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-mono text-[var(--accent)] opacity-80 group-hover:opacity-100">
                      <Eye size={13} />
                      <span>View</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Architect's Monograph Portrait */}
          <div className="flex flex-col items-center animate-slide-right delay-300">
            <div className="relative w-full max-w-[360px]">
              {/* Corner crosshairs marking architectural drawing frame */}
              <div className="corner-crosshair relative bg-[var(--card)] p-3 border border-[var(--border)] shadow-[0_12px_40px_rgba(24,24,27,0.06)]">
                {/* Frame header tag */}
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-[var(--border-subtle)] text-[9px] font-mono text-[var(--muted)]">
                  <span className="flex items-center gap-1">
                    <MapPin size={10} className="text-[var(--accent)]" />
                    CAIRO, EG · 30.04° N
                  </span>
                  <span>PL-01 // PORTRAIT</span>
                </div>

                {/* Main Photo container */}
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#e8e2d8]">
                  <Image
                    src="/images/personal_image.jpeg"
                    alt="Ahmed Moustafa Hussein Ahmed — Urban & Regional Planning Student at Cairo University"
                    fill
                    className="object-cover object-top filter contrast-[1.02] hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                  {/* Subtle technical gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                  {/* Overlaid status badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 bg-[#fbf9f5]/95 backdrop-blur-sm border border-[var(--border)]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--foreground)] font-semibold">
                          Available for Practicum / Roles
                        </span>
                      </div>
                      <span className="text-[9px] font-mono text-[var(--muted)]">2026/2027</span>
                    </div>
                  </div>
                </div>

                {/* Frame footer metadata */}
                <div className="mt-3 pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-[10px] font-mono text-[var(--muted)]">
                  <div>
                    <span className="block font-semibold text-[var(--foreground)] text-[11px]">
                      Ahmed Moustafa H. Ahmed
                    </span>
                    <span className="block text-[9px] text-[var(--accent)]">
                      Faculty of Urban & Regional Planning
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="block text-[9px] text-[var(--muted-light)]">SCALE: 1:1</span>
                    <span className="block font-bold text-[var(--accent)]">RANK 01</span>
                  </div>
                </div>
              </div>

              {/* Architectural Graphic Accent: Scale bar below portrait */}
              <div className="mt-4 flex items-center justify-between text-[9px] font-mono text-[var(--muted-light)] px-1">
                <span>0mm</span>
                <div className="flex-1 mx-3 h-[2px] bg-[var(--border)] relative">
                  <span className="absolute top-0 left-1/4 w-px h-1.5 bg-[var(--accent)] -translate-y-1/2" />
                  <span className="absolute top-0 left-1/2 w-px h-2 bg-[var(--foreground)] -translate-y-1/2" />
                  <span className="absolute top-0 left-3/4 w-px h-1.5 bg-[var(--accent)] -translate-y-1/2" />
                </div>
                <span>100mm // REF GRID</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Technical Bar & Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full mt-12 relative z-10">
        <div className="border-t border-[var(--border)] pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-[var(--muted-light)]">
          <div className="flex items-center gap-4">
            <span className="text-[var(--foreground)] font-medium">DISCIPLINE: REGIONAL & URBAN SYSTEMS</span>
            <span>·</span>
            <span>PROJECTION: UTM ZONE 36N</span>
          </div>

          <a
            href="#education"
            className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--accent)] transition-colors group"
            aria-label="Scroll to Section 01: Education"
          >
            <span className="uppercase tracking-[0.16em] text-[10px] font-semibold">
              Explore Academic Dossier
            </span>
            <ArrowDown size={13} className="animate-bounce text-[var(--accent)]" />
          </a>
        </div>
      </div>
    </section>
  );
}
