import type { FC } from "react";

const About: FC = () => {
  return (
    <div className="glass-panel section-container rounded-3xl border border-slate-800/80 bg-slate-950/60 p-8 shadow-2xl">
      <div className="flex flex-col gap-8 md:flex-row md:items-start">
        <div className="flex-1">
          <p className="section-subtitle">About</p>
          <h2 className="section-title">
            A problem‑solver with a design‑driven mindset.
          </h2>
          <p className="mt-4 text-sm text-slate-300 sm:text-[0.95rem]">
            I’m a Junior Software Engineer and Frontend Developer with hands-on
            experience building modern web applications using React, TypeScript,
            and Tailwind CSS. I completed a professional frontend bootcamp and
            gained real-world experience through an internship and ongoing work,
            where I contributed to building reusable UI components, forms, and
            authenticated user flows. I enjoy turning requirements into clean,
            scalable interfaces and collaborating with teams to deliver
            reliable, user-focused solutions.
          </p>
        
        </div>

        <div className="flex w-full max-w-sm flex-col gap-4 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4 text-sm text-slate-200 md:w-72">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.18em] text-slate-400">
              Snapshot
            </span>
            <span className="rounded-full bg-slate-900/90 px-2 py-1 text-[0.7rem] text-cyan-300">
              Frontend‑leaning
            </span>
          </div>
          <dl className="space-y-2 text-xs sm:text-[0.8rem]">
            <div className="flex justify-between gap-6">
              <dt className="text-slate-400">Experience</dt>
              <dd className="font-medium text-slate-100 pl-5.5">
                Months of building systems
              </dd>
            </div>
            <div className="flex justify-between gap-6">
              <dt className="text-slate-400">Primary stack</dt>
              <dd className="font-medium text-slate-100 pl-5.5">
                TypeScript, React, Javascript
              </dd>
            </div>
            <div className="flex justify-between gap-6">
              <dt className="text-slate-400">Currently based</dt>
              <dd className="font-medium text-slate-100">
                Remote‑first • Anywhere
              </dd>
            </div>
            <div className="flex justify-between gap-6">
              <dt className="text-slate-400">Preferred work</dt>
              <dd className="font-medium text-slate-100 pl-4">
                Product engineering & UX
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default About;
