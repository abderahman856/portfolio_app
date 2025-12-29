import type { FC } from 'react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

const Navbar: FC = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-slate-800/80 bg-black/70 backdrop-blur-xl">
      <nav className="section-container flex h-16 items-center justify-between gap-4">
        <a
          href="#home"
          className="group flex items-center gap-2 text-sm font-semibold tracking-tight text-slate-100"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-500 text-xs font-bold shadow-lg shadow-cyan-500/40">
            A
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xs uppercase tracking-[0.22em] text-slate-400">Abdulrahman</span>
            <span className="text-sm text-slate-100">SWE</span>
          </div>
        </a>

        <div className="hidden items-center gap-6 text-xs font-medium text-slate-300 sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative inline-flex items-center gap-1.5 text-[0.8rem] tracking-wide text-slate-300 transition-colors hover:text-cyan-300"
            >
              <span>{link.label}</span>
              <span className="h-px w-4 origin-left scale-x-0 bg-gradient-to-r from-cyan-400 to-indigo-400 transition-transform duration-200 group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/abderahman856"
            target="_blank"
            rel="noreferrer"
            className="group rounded-full border border-slate-800 bg-slate-900/70 p-2 text-slate-300 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-400/60 hover:bg-slate-900 hover:text-cyan-300"
            aria-label="GitHub profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-current"
            >
              <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.51 2.87 8.33 6.84 9.68.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.48.55-3-1.23-3-1.23-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.52 1.06 1.52 1.06.89 1.55 2.34 1.1 2.91.84.09-.66.35-1.1.63-1.35-1.98-.23-4.06-1.02-4.06-4.54 0-1 .35-1.82.93-2.46-.09-.23-.4-1.17.09-2.44 0 0 .75-.24 2.46.94a8.23 8.23 0 0 1 4.48 0c1.7-1.18 2.45-.94 2.45-.94.5 1.27.19 2.21.1 2.44.58.64.93 1.46.93 2.46 0 3.53-2.09 4.3-4.08 4.53.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/abderahman-sa-eed-391a0037b/"
            target="_blank"
            rel="noreferrer"
            className="group rounded-full border border-slate-800 bg-slate-900/70 p-2 text-slate-300 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-400/60 hover:bg-slate-900 hover:text-cyan-300"
            aria-label="LinkedIn profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-current"
            >
              <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.08 1 2.48 1 4.96 2.12 4.98 3.5zM.32 8.32h4.34V24H.32zM8.63 8.32h4.16v2.13h.06c.58-1.1 2-2.26 4.12-2.26 4.4 0 5.22 2.9 5.22 6.67V24h-4.34v-7.47c0-1.78-.03-4.06-2.48-4.06-2.48 0-2.86 1.93-2.86 3.93V24H8.63z" />
            </svg>
          </a>

          <a
            href="mailto:abderahmansaeed7@gmail.com"
            className="group hidden rounded-full border border-cyan-500/20 bg-gradient-to-r from-cyan-500/15 via-sky-500/10 to-indigo-500/20 px-3 py-1.5 text-[0.78rem] font-medium text-cyan-200 shadow-sm shadow-cyan-500/30 transition hover:-translate-y-0.5 hover:border-cyan-400/60 hover:text-cyan-100 sm:inline-flex"
          >
            <span className="mr-1 text-xs">●</span>
            Available for work
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
