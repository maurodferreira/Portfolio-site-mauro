import { useEffect, useState } from 'react'
import { About } from './components/About'
import { Courses } from './components/Courses'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Leadership } from './components/Leadership'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { ResumePage } from './components/ResumePage'
import { Skills } from './components/Skills'
import { portfolioByLanguage } from './data/portfolio'
import type { Language } from './types/portfolio'
import './App.css'

function getInitialLanguage(): Language {
  const queryLanguage = new URLSearchParams(window.location.search).get('lang')
  if (queryLanguage === 'pt' || queryLanguage === 'en') return queryLanguage

  const storedLanguage = localStorage.getItem('portfolio-language')
  if (storedLanguage === 'pt' || storedLanguage === 'en') return storedLanguage

  return navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)
  const resumeMode = new URLSearchParams(window.location.search).get('resume') === '1'
  const data = portfolioByLanguage[language]

  useEffect(() => {
    localStorage.setItem('portfolio-language', language)
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en'

    if (resumeMode) {
      const url = new URL(window.location.href)
      url.searchParams.set('lang', language)
      window.history.replaceState({}, '', url)
    }

    document.title = resumeMode
      ? `${data.personal.fullName} | ${data.ui.navigation.resume}`
      : `${data.personal.fullName} | ${data.personal.title}`
  }, [data, language, resumeMode])

  const openResume = () => {
    const url = new URL(window.location.href)
    url.search = ''
    url.searchParams.set('resume', '1')
    url.searchParams.set('lang', language)
    window.open(url.toString(), '_blank', 'noopener,noreferrer')
  }

  const backToPortfolio = () => {
    const url = new URL(window.location.href)
    url.search = ''
    window.location.href = url.toString()
  }

  if (resumeMode) {
    return (
      <ResumePage
        data={data}
        language={language}
        onLanguageChange={setLanguage}
        onBack={backToPortfolio}
      />
    )
  }

  return (
    <div className="app-shell">
      <div className="site-background" aria-hidden="true" />

      <Navbar
        data={data}
        language={language}
        onLanguageChange={setLanguage}
        onOpenResume={openResume}
      />

      <main>
        <Hero data={data} />

        <section id="summary" className="page-section"><About data={data} /></section>
        <section id="skills" className="page-section"><Skills data={data} /></section>
        <section id="experience" className="page-section"><Experience data={data} /></section>
        <section id="projects" className="page-section"><Projects data={data} /></section>
        <section id="education" className="page-section"><Education data={data} /></section>
        <section id="courses" className="page-section"><Courses data={data} /></section>
        <section id="leadership" className="page-section"><Leadership data={data} /></section>
      </main>

      <Footer data={data} />
    </div>
  )
}

export default App
