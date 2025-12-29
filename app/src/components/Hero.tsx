import type { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="flex flex-col items-center gap-10 text-center  md:flex-row md:items-center md:text-left">
      <div className="flex-1 space-y-6">
      

        <div className="justify-center">
          <p className="section-subtitle">Typescript • React • Tailwind</p>
          <h1 className="section-title text-4xl sm:text-5xl md:text-6xl">
            Abdulrahman saciid
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-400 bg-clip-text text-transparent">
              Software Engineer
            </span>
          </h1>
        </div>

        <p className="max-w-xl text-sm text-slate-300 sm:text-base">
          I&apos;m a software engineer focused on crafting fast, accessible web
          experiences with clean architecture and thoughtful UI. This portfolio
          showcases a selection of projects, experiments, and ideas that reflect
          how I solve real-world problems with code.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/40 transition hover:-translate-y-0.5 hover:shadow-cyan-400/60"
          >
            View projects
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900/20 text-[0.65rem]">
              ↓
            </span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/60 px-4 py-2 text-sm font-medium text-slate-100 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-400/60 hover:bg-slate-900"
          >
            Let&apos;s collaborate
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
