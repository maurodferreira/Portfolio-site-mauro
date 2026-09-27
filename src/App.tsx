import { About } from './components/About'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Skills } from './components/Skills'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <div className="site-background" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <section id="summary" className="page-section"><About /></section>
        <section id="skills" className="page-section"><Skills /></section>
        <section id="experience" className="page-section"><Experience /></section>
        <section id="education" className="page-section"><Education /></section>
      </main>
      <Footer />
    </div>
  )
}

export default App
