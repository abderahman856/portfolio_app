import type { FC } from 'react'

const Footer: FC = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-black/80 py-6">
      <div className="section-container flex flex-col items-center justify-between gap-3 text-xs text-slate-500 sm:flex-row">
        <p className="order-2 sm:order-1">
          © {new Date().getFullYear()} Abdulrahman. Crafted with React, TypeScript & Tailwind CSS.
        </p>
        <div className="order-1 flex items-center gap-4 sm:order-2">
          <a
            href="https://github.com/abderahman856"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-cyan-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/abderahman-sa-eed-391a0037b/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-cyan-300"
          >
            LinkedIn
          </a>
          <a
            href="mailto:abderahmansaeed7@gmail.com"
            className="transition hover:text-cyan-300"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
