import { GraduationCap, Award, BookOpen, Trophy, CheckCircle, ShieldCheck, Layers, Compass } from "lucide-react";

const certifications = [
  {
    org: "NARSS",
    title: "Remote Sensing and GIS Applications",
    full: "National Authority for Remote Sensing & Space Sciences",
    domain: "Spatial Analytics & Satellite Imagery",
    code: "NARSS-RSGIS-01",
  },
  {
    org: "Esri",
    title: "Spatial Data Analysis & Advanced Cartography",
    full: "Esri Official MOOCs & Spatial Programs",
    domain: "Geostatistics & Spatial Modeling",
    code: "ESRI-GIS-DATA",
  },
  {
    org: "ITI",
    title: "Principles & Techniques of GIS",
    full: "Information Technology Institute (Ministry of Communications)",
    domain: "Geographic Information Systems",
    code: "ITI-GIS-TECH",
  },
  {
    org: "Cairo University",
    title: "CU-AI NEXUS Hackathon 2025",
    full: "Cairo University — Artificial Intelligence Innovation",
    domain: "Spatial AI & Urban Computing",
    code: "CU-AI-NEXUS-25",
  },
  {
    org: "Cap-Net",
    title: "Nature-based Water Retention Measures (NWRM)",
    full: "Cap-Net / Global Water Partnership (UNDP)",
    domain: "Climate Resilience & Water Systems",
    code: "CAPNET-NWRM-CR",
  },
  {
    org: "FURP",
    title: "Freehand Drawing & Architectural Sketching",
    full: "Faculty of Urban & Regional Planning — Cairo University",
    domain: "Spatial Representation & Visualization",
    code: "FURP-DSGN-SKETCH",
  },
];

const achievements = [
  {
    year: "2025–2026",
    title: "Ranked 1st in Class and Cohort",
    subtitle: "Faculty of Urban and Regional Planning, Cairo University",
    highlight: "Consecutive Valedictorian Standing",
    code: "HONOR-01",
  },
  {
    year: "2024–2025",
    title: "Ranked 1st in Cohort",
    subtitle: "Faculty of Urban and Regional Planning, Cairo University",
    highlight: "Highest Academic Distinction",
    code: "HONOR-02",
  },
  {
    year: "2023–2024",
    title: "Ministry of Social Solidarity Scholarship for Outstanding Students",
    subtitle: "National Governmental Merit Award for Academic Excellence",
    highlight: "Merit-Based Scholarship",
    code: "SCHOLAR-01",
  },
];

const coreDomains = [
  "Strategic Regional & Master Planning",
  "Environmental Planning & Urban Microclimate",
  "GIS Geodatabases & Spatial Analysis",
  "Land Suitability & Zoning Frameworks",
  "Climate-Responsive Infrastructure & NWRM",
  "Urban Design, Morphology & Landscape",
];

export default function Education() {
  return (
    <section id="education" className="py-24 lg:py-32 relative bg-[#fbf9f5] border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-6 border-b border-[var(--border)]">
          <div>
            <div className="section-number mb-2">
              <span>01 // ACADEMIC RECORD & QUALIFICATIONS</span>
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl text-[var(--foreground)] tracking-tight">
              Education & Academic Rigor
            </h2>
          </div>
          <div className="text-left sm:text-right">
            <span className="font-mono text-[11px] text-[var(--accent)] tracking-widest uppercase font-semibold block">
              INSTITUTION: CAIRO UNIVERSITY
            </span>
            <span className="font-mono text-[10px] text-[var(--muted)] block mt-0.5">
              FACULTY OF URBAN & REGIONAL PLANNING (FURP)
            </span>
          </div>
        </div>

        {/* Main Degree Specification Dossier */}
        <div className="drafting-card sheet-stripe p-8 sm:p-10 lg:p-12 mb-16 relative">
          {/* Card Header */}
          <div className="flex flex-wrap items-start justify-between gap-6 pb-8 border-b border-[var(--border)]">
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="flex items-center justify-center w-14 h-14 border-2 border-[var(--accent)] text-[var(--accent)] bg-[var(--accent-subtle)] shrink-0">
                <GraduationCap size={28} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 bg-[var(--accent)] text-white text-[9px] font-mono tracking-widest uppercase font-semibold">
                    Accredited Degree
                  </span>
                  <span className="text-[11px] font-mono text-[var(--muted)]">
                    REF: B.URP-FURP-2027
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-[var(--foreground)] leading-tight">
                  Cairo University
                </h3>
                <p className="text-sm sm:text-base text-[var(--accent)] font-medium mt-1">
                  Faculty of Urban and Regional Planning (FURP)
                </p>
                <p className="text-xs text-[var(--muted)] mt-0.5">
                  Cairo, Egypt
                </p>
              </div>
            </div>

            {/* Rank 1st Stamp Badge */}
            <div className="border border-[var(--accent)] bg-[var(--accent-subtle)] p-4 text-center sm:text-right shrink-0">
              <div className="flex items-center sm:justify-end gap-1.5 text-[var(--accent)] mb-1">
                <Trophy size={16} />
                <span className="font-mono text-[11px] uppercase tracking-widest font-bold">
                  Class Valedictorian Standing
                </span>
              </div>
              <p className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[var(--foreground)]">
                Ranked 1st in Class
              </p>
              <p className="text-[10px] font-mono text-[var(--muted)] mt-0.5">
                Faculty of Urban & Regional Planning
              </p>
            </div>
          </div>

          {/* Academic Details Matrix */}
          <div className="py-8 border-b border-[var(--border)]">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <p className="text-[10px] font-mono text-[var(--muted)] uppercase tracking-widest mb-1.5 font-medium">
                  Degree Conferred
                </p>
                <p className="text-[var(--foreground)] font-semibold text-base leading-snug">
                  Bachelor of Urban & Regional Planning
                </p>
                <p className="text-xs text-[var(--accent)] font-mono font-medium mt-1">
                  Specialization: Environmental Planning
                </p>
              </div>

              <div>
                <p className="text-[10px] font-mono text-[var(--muted)] uppercase tracking-widest mb-1.5 font-medium">
                  Timeline / Matriculation
                </p>
                <p className="text-[var(--foreground)] font-semibold text-base">
                  2022 – Expected 2027
                </p>
                <p className="text-xs text-[var(--muted)] font-mono mt-1">
                  5-Year Professional Program
                </p>
              </div>

              <div>
                <p className="text-[10px] font-mono text-[var(--muted)] uppercase tracking-widest mb-1.5 font-medium">
                  Academic Performance
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-[var(--foreground)] leading-none">
                    3.49
                  </span>
                  <span className="text-xs font-mono text-[var(--muted)]">/ 4.00 (A-)</span>
                </div>
                <p className="text-xs text-emerald-700 font-mono mt-1 font-medium">
                  Excellent with Honors
                </p>
              </div>

              <div>
                <p className="text-[10px] font-mono text-[var(--muted)] uppercase tracking-widest mb-1.5 font-medium">
                  Institutional Merit
                </p>
                <div className="flex items-center gap-2">
                  <Award size={18} className="text-[var(--accent)] shrink-0" />
                  <span className="font-semibold text-sm text-[var(--foreground)]">
                    Cohort Rank #1
                  </span>
                </div>
                <p className="text-xs text-[var(--muted)] font-mono mt-1">
                  Ministry Scholarship Recipient
                </p>
              </div>
            </div>
          </div>

          {/* Core Specialization Competencies */}
          <div className="pt-7">
            <p className="text-[10px] font-mono text-[var(--muted)] uppercase tracking-widest mb-3 font-semibold flex items-center gap-2">
              <Compass size={13} className="text-[var(--accent)]" />
              Core Academic Disciplines & Competency Focus Areas:
            </p>
            <div className="flex flex-wrap gap-2">
              {coreDomains.map((domain, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-[#faf7f2] border border-[var(--border)] text-xs text-[var(--foreground)] font-medium hover:border-[var(--accent)] transition-colors"
                >
                  <span className="text-[var(--accent)] mr-1.5 font-mono text-[10px] font-bold">
                    0{i + 1}.
                  </span>
                  {domain}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Dual Column: Certifications & Academic Honors */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Column 1: Certifications & Technical Accreditations */}
          <div>
            <div className="flex items-center justify-between pb-3 mb-6 border-b border-[var(--border)]">
              <div className="flex items-center gap-3">
                <ShieldCheck size={18} className="text-[var(--accent)]" />
                <h3 className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl font-bold text-[var(--foreground)]">
                  Certifications & Technical Training
                </h3>
              </div>
              <span className="text-[10px] font-mono text-[var(--muted)]">
                06 ACCREDITED
              </span>
            </div>

            <div className="space-y-3">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="drafting-card p-4 group transition-all duration-200 hover:border-[var(--accent)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 border border-[var(--border)] bg-[#faf7f2] flex flex-col items-center justify-center shrink-0 group-hover:border-[var(--accent)] transition-colors">
                        <span className="text-[9px] font-mono font-bold text-[var(--accent)] tracking-tighter leading-none">
                          {cert.org}
                        </span>
                        <span className="text-[7px] font-mono text-[var(--muted)] mt-0.5">
                          VERIF
                        </span>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors leading-snug">
                          {cert.title}
                        </h4>
                        <p className="text-xs text-[var(--muted)] mt-0.5">
                          {cert.full}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="inline-block text-[9px] font-mono uppercase tracking-wider text-[var(--accent)] bg-[var(--accent-subtle)] px-2 py-0.5">
                            {cert.domain}
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className="text-[9px] font-mono text-[var(--muted-light)] shrink-0 opacity-60 group-hover:opacity-100">
                      {cert.code}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Academic Honors & Competitive Milestones */}
          <div>
            <div className="flex items-center justify-between pb-3 mb-6 border-b border-[var(--border)]">
              <div className="flex items-center gap-3">
                <Trophy size={18} className="text-[var(--accent)]" />
                <h3 className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl font-bold text-[var(--foreground)]">
                  Academic Honors & Scholarships
                </h3>
              </div>
              <span className="text-[10px] font-mono text-[var(--muted)]">
                MERIT DISTINCTIONS
              </span>
            </div>

            <div className="space-y-4">
              {achievements.map((ach, idx) => (
                <div
                  key={idx}
                  className="drafting-card p-5 group relative overflow-hidden"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 border border-[var(--accent)] bg-[var(--accent-subtle)] text-[var(--accent)] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[var(--accent)] bg-[var(--card)] px-2 py-0.5 border border-[var(--border)]">
                          {ach.year}
                        </span>
                        <span className="text-[9px] font-mono text-[var(--muted-light)]">
                          {ach.code}
                        </span>
                      </div>
                      <h4 className="text-[15px] font-bold text-[var(--foreground)] leading-snug group-hover:text-[var(--accent)] transition-colors">
                        {ach.title}
                      </h4>
                      <p className="text-xs text-[var(--muted)] mt-1">
                        {ach.subtitle}
                      </p>
                      <div className="mt-2.5 pt-2 border-t border-[var(--border-subtle)] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                        <span className="text-[10px] font-mono text-[var(--foreground)] font-semibold uppercase tracking-wider">
                          {ach.highlight}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Atelier Note: Cairo University Distinction */}
              <div className="p-5 border border-dashed border-[var(--accent)] bg-[var(--accent-subtle)]/50">
                <div className="flex items-start gap-3">
                  <Layers size={18} className="text-[var(--accent)] shrink-0 mt-0.5" />
                  <div className="text-xs text-[var(--muted)] leading-relaxed">
                    <strong className="text-[var(--foreground)] block mb-1">
                      Faculty of Urban and Regional Planning (FURP) Standard:
                    </strong>
                    Consistently positioned as top student across both theoretical regional analysis and physical urban studio coursework, demonstrating advanced technical aptitude in environmental systems and spatial computing.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
