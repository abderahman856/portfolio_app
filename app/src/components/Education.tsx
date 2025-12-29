import type { FC } from 'react'

const entries = [
  {
    school: 'Fasttrack Technology Academy',
    program: 'Software Engineering',
    period: '4/2025-9/2025',
    details:
      'Completed a professional software engineering program at Fasttrack Technology Academy, where I built a strong foundation in frontend development, modern JavaScript, React, version control with Git and GitHub, and real-world development workflows through hands-on projects and practical training.',
  },
  {
    school: 'New Generation University',
    program: 'Business Adminstration',
    period: 'Ongoing',
    details:
      'Currently pursuing a Bachelor’s degree in Business Administration at New Generation University, gaining knowledge in management, organizational behavior, and business fundamentals that complement my technical background.',
  },
]

const Education: FC = () => {
  return (
    <div>
      <p className="section-subtitle">Education</p>
      <h2 className="section-title">How I stay sharp.</h2>
      <p className="mb-6 max-w-2xl text-sm text-slate-300 sm:text-[0.95rem]">
        A mix of formal education and self‑directed learning. I care less about titles and more about continuously
        leveling up my ability to ship well‑crafted products.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {entries.map((entry) => (
          <div
            key={entry.school}
            className="glass-panel rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4 text-sm shadow-2xl transition hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-cyan-500/30"
          >
            <h3 className="text-[0.95rem] font-semibold text-slate-100">{entry.school}</h3>
            <p className="mt-1 text-xs text-slate-400">{entry.program}</p>
            <p className="mt-1 text-[0.75rem] text-slate-400">{entry.period}</p>
            <p className="mt-3 text-xs text-slate-300 sm:text-[0.8rem]">{entry.details}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education
