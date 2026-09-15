import { GraduationCap, Award, BookOpen } from "lucide-react";

const certifications = [
  "National Authority for Remote Sensing & Space Sciences (NARSS) — Remote Sensing and GIS Applications",
  "Cairo University — CU-AI NEXUS Hackathon 2025",
  "Information Technology Institute (ITI) — Principles and Techniques of Geographic Information Systems",
  "Faculty of Urban and Regional Planning — Freehand Drawing and Architectural Sketching",
  "Cap-Net — NWRM for Climate Resilience",
  "Esri MOOCs — Spatial Data Analysis, Cartography",
];

const achievements = [
  "Ministry of Social Solidarity Scholarship for Outstanding Students, 2023–2024",
  "Ranked 1st in cohort, Faculty of Urban and Regional Planning, Cairo University, 2024–2025",
  "Ranked 1st in class and cohort, Faculty of Urban and Regional Planning, Cairo University, 2025–2026",
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
        <div className="border border-[var(--border)] bg-[var(--card)] p-8 sm:p-10 lg:p-12 mb-16">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex items-center justify-center w-10 h-10 border border-[var(--accent)] text-[var(--accent)] shrink-0">
              <GraduationCap size={20} />
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl text-[var(--foreground)] leading-tight">
                Cairo University
              </h3>
              <p className="text-sm text-[var(--muted)] mt-1">
                Faculty of Urban and Regional Planning
              </p>
            </div>
          </div>

          <div className="border-t border-[var(--border)] pt-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-xs text-[var(--muted)] uppercase tracking-widest mb-1">
                  Degree
                </p>
                <p className="text-[var(--foreground)] leading-relaxed">
                  Bachelor of Urban and Regional Planning
                  <br />
                  <span className="text-[var(--accent)] font-medium">
                    Environmental Planning Track
                  </span>
                </p>
              </div>
              <div>
                <p className="text-xs text-[var(--muted)] uppercase tracking-widest mb-1">
                  Duration
                </p>
                <p className="text-[var(--foreground)]">
                  2022 – Expected 2027
                </p>
              </div>
              <div>
                <p className="text-xs text-[var(--muted)] uppercase tracking-widest mb-1">
                  GPA
                </p>
                <p className="text-[var(--foreground)]">
                  <span className="font-[family-name:var(--font-playfair)] text-2xl font-semibold">
                    3.49
                  </span>
                  <span className="text-[var(--muted)]"> / 4.00 (A-)</span>
                </p>
              </div>
              <div>
                <p className="text-xs text-[var(--muted)] uppercase tracking-widest mb-1">
                  Distinction
                </p>
                <p className="text-[var(--foreground)] flex items-center gap-2">
                  <Award size={16} className="text-[var(--accent)]" />
                  <span className="font-semibold">Ranked 1st in Class</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Two-column: Certifications & Achievements */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <BookOpen size={18} className="text-[var(--accent)]" />
              <h3 className="font-[family-name:var(--font-playfair)] text-xl text-[var(--foreground)]">
                Certifications & Training
              </h3>
            </div>
            <ul className="space-y-4">
              {certifications.map((cert, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 shrink-0" />
                  <span className="text-sm leading-relaxed text-[var(--muted)]">
                    {cert}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Achievements */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Award size={18} className="text-[var(--accent)]" />
              <h3 className="font-[family-name:var(--font-playfair)] text-xl text-[var(--foreground)]">
                Achievements
              </h3>
            </div>
            <ul className="space-y-4">
              {achievements.map((ach, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 shrink-0" />
                  <span className="text-sm leading-relaxed text-[var(--muted)]">
                    {ach}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
