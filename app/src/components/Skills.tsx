import type { FC } from 'react'

const categories = [
  {
    name: 'Frontend',
    skills: ['HTML', 'CSS', 'Javascript', 'Tailwind CSS', 'React.js', 'Typescript'],
  },
  {
    name: 'Backend & APIs',
    skills: ['Node.js', 'MySQL',],
  },
  {
    name: 'Tooling & Quality',
    skills: ['Git & GitHub', 'Vite', 'ESLint & Prettier', 'Jest / React Testing Library'],
  },
  {
    name: 'Soft skills',
    skills: ['Communication', 'Collaboration', 'Problem solving', 'Technical writing'],
  },
]

const Skills: FC = () => {
  return (
    <div>
      <p className="section-subtitle">Skills</p>
      <h2 className="section-title">What I work with day‑to‑day.</h2>
      <p className="mb-6 max-w-2xl text-sm text-slate-300 sm:text-[0.95rem]">
        A snapshot of the technologies and practices I use to ship reliable, maintainable software. These are
        intentionally focused — I prefer depth in a few tools over surface‑level familiarity with everything.
      </p>

      <div className="grid gap-5 md:grid-cols-2">
        {categories.map((category) => (
          <div
            key={category.name}
            className="glass-panel flex flex-col gap-3 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4 text-sm shadow-2xl transition hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-cyan-500/30"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-[0.9rem] font-semibold text-slate-100">{category.name}</h3>
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="pill-badge border-slate-700/80 bg-slate-900/80 text-[0.7rem] text-slate-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
