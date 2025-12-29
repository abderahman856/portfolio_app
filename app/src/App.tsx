import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background text-slate-100">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),transparent_55%),_radial-gradient(circle_at_bottom,_rgba(129,140,248,0.18),transparent_55%)]" />
      <Navbar />
      <main className="pt-24 pb-16 space-y-24">
        <section id="home" className="section-container animate-fade-in-up">
          <Hero />
        </section>
        <section id="about" className="section-container animate-fade-in-up">
          <About />
        </section>
        <section id="skills" className="section-container animate-fade-in-up">
          <Skills />
        </section>
        <section id="experience" className="section-container animate-fade-in-up">
          <Experience />
        </section>
        <section id="projects" className="section-container animate-fade-in-up">
          <Projects />
        </section>
        <section id="education" className="section-container animate-fade-in-up">
          <Education />
        </section>
        <section id="contact" className="section-container animate-fade-in-up">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
