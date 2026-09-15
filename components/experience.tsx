"use client";

import { useState } from "react";
import {
  Briefcase,
  MapPin,
  Calendar,
  ArrowUpRight,
  Layers,
  Compass,
  Globe,
  CheckCircle2,
  Building2,
  Cpu,
  FileText,
  Sliders,
  ChevronRight,
  ShieldCheck,
  Maximize2,
} from "lucide-react";

interface Project {
  name: string;
  location: string;
  scale: string;
  typology: string;
  description: string;
  bullets: string[];
  tags: string[];
}

interface Role {
  id: string;
  title: string;
  company: string;
  location: string;
  date: string;
  type: string;
  summary: string;
  projects?: Project[];
  bullets?: string[];
  keyDeliverable: string;
}

const roles: Role[] = [
  {
    id: "mya",
    title: "Urban Planning Intern",
    company: "Mahmoud Yousry & Associates",
    location: "Cairo, Egypt",
    date: "Sep 2026",
    type: "Masterplanning Studio Practicum",
    summary: "High-level masterplanning, site analysis, and tender documentation for multi-scale industrial and high-end residential masterplans across Egypt and East Africa.",
    keyDeliverable: "620-Acre Industrial Masterplan Framework & Spatial Tender Dossier",
    projects: [
      {
        name: "El Sewedy Industrial Park",
        location: "Mlandizi, Kibaha, Tanzania",
        scale: "620 Acres",
        typology: "Industrial Master Planning & Spatial Framework",
        description:
          "Large-scale multi-industry masterplan requiring comprehensive spatial zoning, climatic response, and regional logistics integration.",
        tags: ["International Project", "Industrial Zoning", "Climatic Analysis", "Masterplanning"],
        bullets: [
          "Conducted site, environmental, and climatic analyses to assess terrain slope, prevailing winds, and regional environmental constraints to establish a resilient planning framework.",
          "Developed masterplanning concepts and spatial layout alternatives for a 620-acre multi-industry industrial park, translating analytical data into a viable spatial framework.",
          "Formulated the masterplan development dossier and concept report, establishing land-use distribution, spatial hierarchy, transportation corridors, and site-wide zoning.",
        ],
      },
      {
        name: "Swan Lake West",
        location: "6th of October City, Egypt",
        scale: "District Scale",
        typology: "Tender Documentation & Cadastral Plot Coordination",
        description:
          "High-end mixed-use residential development requiring rigorous GIS spatial referencing and executive tender drawings.",
        tags: ["Tender Documentation", "Plot Inventory", "Cadastral Referencing", "Executive Drawings"],
        bullets: [
          "Contributed to the preparation and coordination of executive tender drawings for masterplan infrastructure and plot subdivision schemes.",
          "Calculated, audited, and verified precise plot coordinates to guarantee accurate spatial georeferencing and plot documentation standards.",
          "Engineered and maintained the master plot inventory database, enabling cross-disciplinary data exchange across architectural and civil engineering teams.",
        ],
      },
    ],
  },
  {
    id: "gopp",
    title: "Urban Planning Intern",
    company: "Urban Research & Studies Consultancy Center / GOPP",
    location: "Giza / Cairo, Egypt",
    date: "Jul 2025 – Aug 2025",
    type: "National Strategic Planning",
    summary: "Strategic regional masterplanning and land-use analysis under the General Organization for Physical Planning (GOPP) for rural centers across Giza Governorate.",
    keyDeliverable: "18 Rural Village Strategic Masterplans Horizon 2030",
    bullets: [
      "Participated actively in the Giza Villages Strategic Master Plan Update Project — Horizon Target Year 2030.",
      "Contributed to comprehensive strategic planning reports and spatial masterplans for 18 rural villages across Giza Governorate.",
      "Conducted land-use allocation, spatial demographic projections, and public service catchment area assessments.",
      "Drafted Phase II and Phase III statutory planning reports, reviewing physical proposals against Egyptian national planning standards and building codes.",
    ],
  },
  {
    id: "nuca",
    title: "Urban Planning Intern",
    company: "Hadayek October City Development Authority (NUCA)",
    location: "Hadayek October, Egypt",
    date: "Jul 2024 – Aug 2024",
    type: "New Urban Community Authority",
    summary: "Conceptual urban expansion planning, municipal spatial database management, and field site monitoring for massive new city extensions.",
    keyDeliverable: "3,000-Acre Metropolitan Extension Proposal & Spatial Geodatabase",
    bullets: [
      "Synthesized and delivered a conceptual urban extension proposal for a massive 3,000-acre future development sector.",
      "Structured spatial geodatabases for the city authority, integrating parcel boundaries, utility corridors, and municipal planning records.",
      "Conducted on-site field visits and construction phase monitoring to observe infrastructure execution and alignment with masterplan guidelines.",
    ],
  },
];

const skillCategories = [
  {
    title: "GIS & Spatial Analytics",
    code: "TOOL-01",
    icon: Globe,
    skills: [
      { name: "ArcGIS Pro", level: "Advanced" },
      { name: "Spatial Analysis", level: "Advanced" },
      { name: "Cartographic Design", level: "Expert" },
      { name: "Remote Sensing & Satellite Imagery", level: "Proficient" },
      { name: "Geodatabases & Attribute Queries", level: "Advanced" },
      { name: "Spatial Modeling", level: "Proficient" },
    ],
  },
  {
    title: "CAD, BIM & Simulation",
    code: "TOOL-02",
    icon: Building2,
    skills: [
      { name: "AutoCAD (2D & Architectural)", level: "Advanced" },
      { name: "ENVI-met (Microclimate Simulation)", level: "Proficient" },
      { name: "Autodesk Revit", level: "Intermediate" },
      { name: "Civil 3D (Site & Grading)", level: "Intermediate" },
      { name: "Digital Elevation Models (DEM)", level: "Advanced" },
    ],
  },
  {
    title: "Urban Strategy & Methodologies",
    code: "TOOL-03",
    icon: Compass,
    skills: [
      { name: "Comprehensive Master Planning", level: "Studio Practice" },
      { name: "Environmental Planning & Impact", level: "Specialization" },
      { name: "Land-Use Zoning Frameworks", level: "Studio Practice" },
      { name: "Nature-Based Solutions (NWRM)", level: "Cap-Net Certified" },
      { name: "Climate-Responsive Design", level: "Specialization" },
      { name: "Urban Morphology & Site Planning", level: "Studio Practice" },
    ],
  },
  {
    title: "Visual Communication",
    code: "TOOL-04",
    icon: FileText,
    skills: [
      { name: "Adobe Photoshop (Plan Rendering)", level: "Advanced" },
      { name: "Freehand Architectural Sketching", level: "FURP Certified" },
      { name: "Technical Planning Reports", level: "GOPP Standards" },
      { name: "Tender & Executive Drawing Sets", level: "Studio Practice" },
      { name: "Microsoft Office Suite", level: "Advanced" },
    ],
  },
];

export default function Experience() {
  const [activeRoleId, setActiveRoleId] = useState<string>(roles[0].id);

  const currentRole = roles.find((r) => r.id === activeRoleId) || roles[0];

  return (
    <section id="experience" className="py-24 lg:py-32 relative bg-white border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-6 border-b border-[var(--border)]">
          <div>
            <div className="section-number mb-2">
              <Briefcase size={14} />
              <span>03 // PROFESSIONAL STUDIO PRACTICE</span>
            </div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl text-[var(--foreground)] tracking-tight">
              Practicum & Masterplanning
            </h2>
          </div>
          <div className="text-left sm:text-right">
            <span className="font-mono text-[11px] text-[var(--accent)] tracking-widest uppercase font-semibold block">
              PORTFOLIO SCOPE: 3,000+ ACRES
            </span>
            <span className="font-mono text-[10px] text-[var(--muted)] block mt-0.5">
              EGYPT & EAST AFRICA (TANZANIA)
            </span>
          </div>
        </div>

        {/* Interactive Studio Practicum Switcher */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Sliders size={14} className="text-[var(--accent)]" />
            <span className="text-xs font-mono uppercase tracking-wider text-[var(--muted)] font-semibold">
              Select Practicum Dossier to Inspect:
            </span>
          </div>

          <div className="grid sm:grid-cols-3 gap-3">
            {roles.map((role, idx) => {
              const isActive = role.id === activeRoleId;
              return (
                <button
                  key={role.id}
                  onClick={() => setActiveRoleId(role.id)}
                  className={`text-left p-4 border transition-all duration-200 relative ${
                    isActive
                      ? "border-[var(--accent)] bg-[#faf7f2] shadow-sm"
                      : "border-[var(--border)] bg-white hover:border-[var(--accent)]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="font-mono text-[10px] uppercase font-bold text-[var(--accent)]">
                      DOSSIER 0{idx + 1}
                    </span>
                    <span className="font-mono text-[10px] text-[var(--muted)]">
                      {role.date}
                    </span>
                  </div>
                  <h4 className="font-semibold text-sm text-[var(--foreground)] leading-snug line-clamp-1">
                    {role.company}
                  </h4>
                  <p className="text-xs text-[var(--muted)] mt-0.5 font-mono truncate">
                    {role.title}
                  </p>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--accent)]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Practicum Dossier Display */}
        <div className="drafting-card p-6 sm:p-8 lg:p-10 mb-20 relative">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-[var(--border)]">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2 py-0.5 bg-[var(--accent-subtle)] text-[var(--accent)] font-mono text-[10px] uppercase font-bold tracking-widest">
                  {currentRole.type}
                </span>
                <span className="text-[11px] font-mono text-[var(--muted)]">
                  REF: {currentRole.id.toUpperCase()}-2026
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-[var(--foreground)] leading-snug">
                {currentRole.title}
              </h3>
              <p className="text-base font-semibold text-[var(--accent)] mt-1">
                {currentRole.company}
              </p>
              <p className="text-xs text-[var(--muted)] flex items-center gap-1.5 mt-1 font-mono">
                <MapPin size={12} className="text-[var(--accent)]" />
                <span>{currentRole.location}</span>
              </p>
            </div>

            <div className="flex flex-col items-end gap-2 shrink-0">
              <div className="flex items-center gap-2 px-3.5 py-1.5 border border-[var(--border)] bg-[#faf7f2] font-mono text-xs text-[var(--foreground)] font-semibold">
                <Calendar size={13} className="text-[var(--accent)]" />
                <span>{currentRole.date}</span>
              </div>
              <span className="text-[10px] font-mono text-[var(--muted)] bg-[var(--card)] px-2 py-0.5 border border-[var(--border)]">
                Key Milestone: {currentRole.keyDeliverable}
              </span>
            </div>
          </div>

          {/* Role Summary */}
          <p className="text-sm sm:text-[15px] text-[var(--muted)] leading-relaxed py-5 border-b border-[var(--border-subtle)]">
            {currentRole.summary}
          </p>

          {/* Projects Breakdown (if any) */}
          {currentRole.projects ? (
            <div className="pt-6 space-y-8">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[var(--accent)] font-bold flex items-center gap-2">
                  <Layers size={13} />
                  Masterplanning Project Case Studies:
                </span>
                <span className="text-[10px] font-mono text-[var(--muted-light)]">
                  0{currentRole.projects.length} PROJECTS
                </span>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                {currentRole.projects.map((proj, pIdx) => (
                  <div
                    key={pIdx}
                    className="p-6 bg-[#fbf9f5] border border-[var(--border)] hover:border-[var(--accent)] transition-colors relative"
                  >
                    {/* Project Header Bar */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <span className="text-[10px] font-mono text-[var(--accent)] uppercase font-bold tracking-wider block">
                          {proj.typology}
                        </span>
                        <h4 className="text-lg font-bold text-[var(--foreground)] font-[family-name:var(--font-playfair)] mt-0.5">
                          {proj.name}
                        </h4>
                      </div>
                      <span className="px-2 py-0.5 border border-[var(--accent)] bg-white text-[10px] font-mono font-bold text-[var(--accent)] shrink-0">
                        {proj.scale}
                      </span>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-1.5 text-xs text-[var(--muted)] mb-3 font-mono">
                      <Globe size={12} className="text-[var(--accent)]" />
                      <span>{proj.location}</span>
                    </div>

                    <p className="text-xs text-[var(--muted)] leading-relaxed mb-4">
                      {proj.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {proj.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 bg-white border border-[var(--border)] text-[var(--foreground)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-2.5 pt-3 border-t border-[var(--border-subtle)]">
                      {proj.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs text-[var(--foreground)] leading-relaxed">
                          <ArrowUpRight size={13} className="text-[var(--accent)] shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Plain Bullets (GOPP and Hadayek October) */
            <div className="pt-6">
              <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[var(--accent)] font-bold flex items-center gap-2 mb-4">
                <Compass size={13} />
                Project Scope & Key Technical Contributions:
              </span>
              <div className="grid sm:grid-cols-2 gap-4">
                {currentRole.bullets?.map((bullet, bIdx) => (
                  <div
                    key={bIdx}
                    className="p-4 bg-[#fbf9f5] border border-[var(--border)] flex items-start gap-3 hover:border-[var(--accent)] transition-colors"
                  >
                    <CheckCircle2 size={15} className="text-[var(--accent)] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-[13px] text-[var(--foreground)] leading-relaxed">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Technical Skills & Design Matrix */}
        <div id="skills">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14 pb-6 border-b border-[var(--border)]">
            <div>
              <div className="section-number mb-2">
                <Cpu size={14} />
                <span>04 // URBAN PLANNING & GIS CAPABILITIES</span>
              </div>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl text-[var(--foreground)] tracking-tight">
                Technical Toolset & Design Matrix
              </h2>
            </div>
            <span className="font-mono text-[11px] text-[var(--muted)]">
              SOFTWARE, SYSTEMS & PLANNING METHODOLOGIES
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((cat, idx) => {
              const IconComponent = cat.icon;
              return (
                <div
                  key={idx}
                  className="drafting-card p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-[var(--border)]">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent)] font-bold">
                        {cat.code}
                      </span>
                      <IconComponent size={15} className="text-[var(--accent)]" />
                    </div>
                    <h4 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[var(--foreground)] mb-4">
                      {cat.title}
                    </h4>

                    <div className="space-y-2.5">
                      {cat.skills.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          className="p-2.5 bg-[#fbf9f5] border border-[var(--border-subtle)] hover:border-[var(--accent)] transition-colors"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs font-medium text-[var(--foreground)]">
                              {skill.name}
                            </span>
                            <span className="text-[9px] font-mono text-[var(--accent)] shrink-0 font-semibold">
                              {skill.level}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
