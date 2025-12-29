import type { FC } from "react";

const experiences = [
  {
    company: "Luulsolutions",
    role: "Frontend Engineer",
    period: "2025 — Present",
    location: "Remote",
    highlights: [
      "Worked as a Junior Software Engineer / Frontend Developer on real production-level web applications.",
      "Built and maintained reusable UI components using React and TypeScript.",
      "Developed forms and authentication flows with validation and user-friendly UX.",
      "Integrated frontend features with RESTful APIs for data fetching and updates.",
      "Collaborated with team members using Git and GitHub for version control.",
      "Followed clean code practices and component-based architecture",
      "Contributed to improving UI consistency, responsiveness, and usability",
    ],
  },
];

const Experience: FC = () => {
  return (
    <div>
      <p className="section-subtitle">Experience</p>
      <h2 className="section-title">Selected roles & impact.</h2>
      <p className="mb-6 max-w-2xl text-sm text-slate-300 sm:text-[0.95rem]">
        A quick overview of the kind of work I&apos;ve done recently. These
        examples focus less on titles and more on the outcomes and collaboration
        involved.
      </p>

      <ol className="relative border-l border-slate-800/80 pl-6">
        {experiences.map((exp) => (
          <li key={exp.company} className="mb-8 last:mb-0">
            <div className="absolute -left-[9px] mt-1 h-4 w-4 rounded-full border border-cyan-400/60 bg-slate-950" />
            <div className="glass-panel rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4 shadow-2xl transition hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-cyan-500/30">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-[0.95rem] font-semibold text-slate-100">
                    {exp.role}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {exp.company} • {exp.location}
                  </p>
                </div>
                <span className="rounded-full bg-slate-900/80 px-2 py-1 text-[0.7rem] text-slate-300">
                  {exp.period}
                </span>
              </div>
              <ul className="mt-3 space-y-1.5 text-xs text-slate-300 sm:text-[0.8rem]">
                {exp.highlights.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Experience;
