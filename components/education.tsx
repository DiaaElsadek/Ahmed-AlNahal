import { GraduationCap, Award, BookOpen, Trophy, CheckCircle } from "lucide-react";

const certifications = [
  {
    org: "NARSS",
    title: "Remote Sensing and GIS Applications",
    full: "National Authority for Remote Sensing & Space Sciences",
  },
  {
    org: "Cairo University",
    title: "CU-AI NEXUS Hackathon 2025",
    full: "Cairo University",
  },
  {
    org: "ITI",
    title: "Principles and Techniques of Geographic Information Systems",
    full: "Information Technology Institute",
  },
  {
    org: "FURP",
    title: "Freehand Drawing and Architectural Sketching",
    full: "Faculty of Urban and Regional Planning",
  },
  {
    org: "Cap-Net",
    title: "NWRM for Climate Resilience",
    full: "Cap-Net",
  },
  {
    org: "Esri",
    title: "Spatial Data Analysis, Cartography",
    full: "Esri MOOCs",
  },
];

const achievements = [
  {
    year: "2023–2024",
    title: "Ministry of Social Solidarity Scholarship for Outstanding Students",
  },
  {
    year: "2024–2025",
    title: "Ranked 1st in cohort, Faculty of Urban and Regional Planning, Cairo University",
  },
  {
    year: "2025–2026",
    title: "Ranked 1st in class and cohort, Faculty of Urban and Regional Planning, Cairo University",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="section-number">01</span>
          <span className="w-12 h-px bg-[var(--accent)]" />
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl text-[var(--foreground)] tracking-tight">
            Education
          </h2>
        </div>

        {/* Main degree card */}
        <div className="card-interactive p-8 sm:p-10 lg:p-12 mb-16 relative overflow-hidden">
          {/* Subtle accent top border */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--accent)] via-[var(--accent-light)] to-transparent" />

          <div className="flex items-start gap-5 mb-8">
            <div className="flex items-center justify-center w-12 h-12 border border-[var(--accent)] text-[var(--accent)] shrink-0 transition-all duration-300 hover:bg-[var(--accent)] hover:text-white">
              <GraduationCap size={22} />
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-[1.7rem] text-[var(--foreground)] leading-tight">
                Cairo University
              </h3>
              <p className="text-sm text-[var(--muted)] mt-1.5 tracking-wide">
                Faculty of Urban and Regional Planning
              </p>
            </div>
          </div>

          <div className="border-t border-[var(--border)] pt-7">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
              <div className="space-y-1.5">
                <p className="text-[10px] text-[var(--muted)] uppercase tracking-[0.15em] font-medium">
                  Degree
                </p>
                <p className="text-[var(--foreground)] text-[15px] leading-relaxed">
                  Bachelor of Urban and Regional Planning
                </p>
                <p className="text-[var(--accent)] font-medium text-sm">
                  Environmental Planning Track
                </p>
              </div>
              <div className="space-y-1.5">
                <p className="text-[10px] text-[var(--muted)] uppercase tracking-[0.15em] font-medium">
                  Duration
                </p>
                <p className="text-[var(--foreground)] text-[15px]">
                  2022 – Expected 2027
                </p>
              </div>
              <div className="space-y-1.5">
                <p className="text-[10px] text-[var(--muted)] uppercase tracking-[0.15em] font-medium">
                  GPA
                </p>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[var(--foreground)]">
                    3.49
                  </span>
                  <span className="text-sm text-[var(--muted)]">/ 4.00 (A-)</span>
                </div>
              </div>
              <div className="space-y-1.5">
                <p className="text-[10px] text-[var(--muted)] uppercase tracking-[0.15em] font-medium">
                  Distinction
                </p>
                <p className="text-[var(--foreground)] flex items-center gap-2">
                  <Award size={18} className="text-[var(--accent)]" />
                  <span className="font-semibold text-[15px]">Ranked 1st in Class</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Two-column: Certifications & Achievements */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <BookOpen size={18} className="text-[var(--accent)]" />
              <h3 className="font-[family-name:var(--font-playfair)] text-xl text-[var(--foreground)]">
                Certifications & Training
              </h3>
            </div>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-3.5 p-3 -mx-3 rounded-sm transition-colors hover:bg-[var(--accent-subtle)]"
                >
                  <div className="flex items-center justify-center w-8 h-8 border border-[var(--border)] text-[10px] font-semibold text-[var(--accent)] tracking-wider shrink-0 mt-0.5 group-hover:border-[var(--accent)] transition-colors">
                    {cert.org.slice(0, 2).toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-[var(--foreground)] leading-snug">
                      {cert.title}
                    </p>
                    <p className="text-[11px] text-[var(--muted)] mt-0.5">
                      {cert.full}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Trophy size={18} className="text-[var(--accent)]" />
              <h3 className="font-[family-name:var(--font-playfair)] text-xl text-[var(--foreground)]">
                Achievements
              </h3>
            </div>
            <div className="space-y-4">
              {achievements.map((ach, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-4 p-4 card-interactive"
                >
                  <div className="flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle size={18} className="text-[var(--accent)]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-[var(--foreground)] leading-snug">
                      {ach.title}
                    </p>
                    <p className="text-[11px] text-[var(--muted)] mt-1 uppercase tracking-widest font-medium">
                      {ach.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
