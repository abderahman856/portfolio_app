import type { FC } from "react";

const projects = [
    {
    name: "CDPP",
    tagline: "Cloud-Deployed Portfolio Platform (AWS ECS + CI/CD).",
    period: "2025",
    description:
      "Designed and deployed a production-ready portfolio application using Docker and AWS ECS (Fargate), with secure HTTPS access via an Application Load Balancer. The project includes Infrastructure as Code using Terraform and automated CI/CD deployments with GitHub Actions, following real-world DevOps best practices.",
    tech: ["React.js", "TypeScript", "Docker", "AWS", "Terraform", ],
    linkLabel: "View on GitHub",
    linkUrl: "https://github.com/Luul-Solutions/portfolio", // Placeholder
  },
  {
    name: "TCMS",
    tagline:
      "Tution Center Management System for students and eduction instutions.",
    period: "2025",
    description:
      "A multi-tenant web application for managing tuition centres, featuring role-based access and structured course, class, and lesson management, built with a React-based frontend and RESTful APIs.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Charting"],
    linkLabel: "View on GitHub",
    // Added your specific link here
    linkUrl: "https://github.com/Luul-Solutions/tcms/tree/develop",
  },
  {
    name: "CSCS",
    tagline: "Civic Security Compliance System.",
    period: "2025",
    description:
      "A full-stack web application designed to help authorities manage property, tenant, and SIM card compliance through role-based access, secure authentication, and data-driven dashboards.",
    tech: ["React.js", "Tailwind CSS", "Typescript"],
    linkLabel: "View on GitHub",
    linkUrl: "https://github.com/Luul-Solutions/cscs", // Placeholder for your other repo
  },

];

const Projects: FC = () => {
  return (
    <div>
      <p className="section-subtitle">Projects</p>
      <h2 className="section-title">Work that reflects how I build.</h2>
      <p className="mb-6 max-w-2xl text-sm text-slate-300 sm:text-[0.95rem]">
        A mix of product work, experiments and projects. Each one taught me
        something new about performance, DX, or collaboration — and they&apos;re
        all built with the tools I enjoy using day‑to‑day.
      </p>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4 text-sm shadow-2xl transition hover:-translate-y-1.5 hover:border-cyan-400/70 hover:shadow-cyan-500/40"
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/10 via-sky-500/0 to-indigo-500/10 opacity-0 transition group-hover:opacity-100" />
            <header className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-[0.95rem] font-semibold text-slate-100">
                  {project.name}
                </h3>
                <p className="text-xs text-sky-300/90">{project.tagline}</p>
              </div>
              <span className="rounded-full bg-slate-900/90 px-2 py-1 text-[0.7rem] text-slate-300">
                {project.period}
              </span>
            </header>

            <p className="mt-3 text-xs text-slate-300 sm:text-[0.8rem]">
              {project.description}
            </p>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="pill-badge border-slate-700/80 bg-slate-900/80 text-[0.7rem] text-slate-100"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Changed from <button> to <a> */}
            <a
              href={project.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-cyan-300 transition group-hover:translate-x-0.5"
            >
              {project.linkLabel}
              <span className="text-[0.7rem]">↗</span>
            </a>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;