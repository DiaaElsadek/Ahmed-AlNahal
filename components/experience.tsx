import { Briefcase, MapPin, Calendar, ArrowUpRight } from "lucide-react";

interface Project {
  name: string;
  description: string;
  bullets: string[];
}

interface Role {
  title: string;
  company: string;
  date: string;
  projects?: Project[];
  bullets?: string[];
}

const roles: Role[] = [
  {
    title: "Urban Planning Intern",
    company: "Mahmoud Yousry & Associates",
    date: "Sep 2026",
    projects: [
      {
        name: "El Sewedy Industrial Park",
        description:
          "Mlandizi, Kibaha, Tanzania — Industrial Master Planning Project, 620 acres",
        bullets: [
          "Conducted site, environmental, and climatic analyses to assess site conditions and inform the planning approach.",
          "Developed a planning concept and masterplan alternative for a 620-acre multi-industry industrial park, translating analysis into a spatial planning framework.",
          "Contributed to the masterplan development and concept report, including land-use organization, spatial structure, and overall site layout.",
        ],
      },
      {
        name: "Swan Lake West",
        description:
          "October, Egypt — Tender Documentation, Plot Coordination & Inventory",
        bullets: [
          "Contributed to the preparation of tender and executive drawings for the project.",
          "Prepared and verified plot coordinates to ensure accurate spatial referencing and plot documentation.",
          "Developed and organized plot inventory data for use within the project's technical documentation.",
        ],
      },
    ],
  },
  {
    title: "Urban Planning Intern",
    company: "Urban Research and Studies Consultancy Center / GOPP",
    date: "Jul 2025 – Aug 2025",
    bullets: [
      "Participated in the Giza Villages Strategic Master Plan Update Project — Target Year 2030.",
      "Contributed to strategic planning reports and spatial master plans for 18 villages in Giza Governorate.",
      "Supported land-use planning, spatial analysis, and planning documentation.",
      "Contributed to Phase II and Phase III planning reports and reviewed planning proposals according to national planning standards.",
    ],
  },
  {
    title: "Urban Planning Intern",
    company: "Hadayek October City Development Authority",
    date: "Jul 2024 – Aug 2024",
    bullets: [
      "Developed and presented a conceptual urban extension proposal for a 3,000-acre development area.",
      "Contributed to planning presentations, technical reports, and the city's spatial database.",
      "Participated in site visits, construction monitoring, and on-site training.",
    ],
  },
];

const skillGroups = [
  {
    category: "Planning & Analysis",
    icon: "📐",
    skills: [
      "Strategic Planning",
      "Environmental Planning",
      "Land Use Planning",
      "Urban Design & Landscape",
      "Urban/Regional Analysis",
    ],
  },
  {
    category: "GIS & Spatial",
    icon: "🗺️",
    skills: [
      "GIS",
      "Spatial Analysis",
      "Cartography",
      "Remote Sensing",
      "Spatial Databases",
    ],
  },
  {
    category: "Software",
    icon: "💻",
    skills: [
      "ArcGIS",
      "AutoCAD",
      "Adobe Photoshop",
      "ENVI-met",
      "Revit",
      "Civil 3D",
      "Microsoft Office",
    ],
  },
  {
    category: "Additional",
    icon: "✏️",
    skills: [
      "Manual Sketching",
      "Architectural Sketching",
      "Planning Documentation",
      "Technical Reporting",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="section-number">02</span>
          <span className="w-12 h-px bg-[var(--accent)]" />
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl text-[var(--foreground)] tracking-tight">
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="space-y-0">
          {roles.map((role, idx) => (
            <div key={idx} className="flex gap-6 sm:gap-8 group/role">
              {/* Timeline rail */}
              <div className="flex flex-col items-center pt-1.5">
                <div className="timeline-dot group-hover/role:timeline-dot-active" />
                {idx < roles.length - 1 && (
                  <div className="timeline-line flex-1 my-1" />
                )}
              </div>

              {/* Content */}
              <div className="pb-16 flex-1 min-w-0">
                {/* Role header card */}
                <div className="mb-5 p-5 sm:p-6 card-interactive">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                    <div>
                      <h3 className="font-[family-name:var(--font-playfair)] text-lg sm:text-xl text-[var(--foreground)] leading-snug">
                        {role.title}
                      </h3>
                      <p className="text-sm font-medium text-[var(--accent)] mt-1">
                        {role.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[var(--accent-subtle)] text-[11px] text-[var(--accent)] uppercase tracking-[0.12em] font-semibold shrink-0">
                      <Calendar size={11} />
                      <span>{role.date}</span>
                    </div>
                  </div>
                </div>

                {/* Projects or plain bullets */}
                {role.projects ? (
                  <div className="space-y-5 ml-2">
                    {role.projects.map((project, pIdx) => (
                      <div
                        key={pIdx}
                        className="border-l-2 border-[var(--border)] pl-5 hover:border-l-[var(--accent)] transition-colors duration-300"
                      >
                        <div className="flex items-start gap-2 mb-3">
                          <MapPin
                            size={14}
                            className="text-[var(--accent)] mt-0.5 shrink-0"
                          />
                          <div>
                            <p className="text-sm font-semibold text-[var(--foreground)]">
                              {project.name}
                            </p>
                            <p className="text-[11px] text-[var(--muted)] mt-0.5 leading-relaxed">
                              {project.description}
                            </p>
                          </div>
                        </div>
                        <ul className="space-y-2.5 mt-3">
                          {project.bullets.map((bullet, bIdx) => (
                            <li
                              key={bIdx}
                              className="flex items-start gap-3"
                            >
                              <ArrowUpRight size={12} className="text-[var(--accent)] mt-1 shrink-0 opacity-60" />
                              <span className="text-[13px] leading-relaxed text-[var(--muted)]">
                                {bullet}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="space-y-2.5 ml-2">
                    {role.bullets?.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3">
                        <ArrowUpRight size={12} className="text-[var(--accent)] mt-1 shrink-0 opacity-60" />
                        <span className="text-[13px] leading-relaxed text-[var(--muted)]">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="divider-accent my-20" />

        {/* Technical Skills */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <span className="section-number">03</span>
            <span className="w-12 h-px bg-[var(--accent)]" />
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl text-[var(--foreground)] tracking-tight">
              Technical Skills
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 lg:gap-10">
            {skillGroups.map((group) => (
              <div key={group.category} className="p-5 card-interactive">
                <p className="text-[11px] text-[var(--muted)] uppercase tracking-[0.12em] mb-4 flex items-center gap-2.5 font-semibold">
                  <span className="text-base">{group.icon}</span>
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
