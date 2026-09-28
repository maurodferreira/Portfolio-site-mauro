import { useEffect, useState } from 'react'
import { About } from './components/About'
import { AtsResumePage } from './components/AtsResumePage'
import { ContactCta } from './components/ContactCta'
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
import { updateSeo } from './lib/seo'
import type { Language, ResumeVariant } from './types/portfolio'
import './App.css'

function getInitialLanguage(): Language {
  const queryLanguage = new URLSearchParams(window.location.search).get('lang')
  if (queryLanguage === 'pt' || queryLanguage === 'en') return queryLanguage

  const storedLanguage = localStorage.getItem('portfolio-language')
  if (storedLanguage === 'pt' || storedLanguage === 'en') return storedLanguage

  return navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

function getResumeVariant(): ResumeVariant | null {
  const pathname = window.location.pathname.replace(/\/$/, '')

  if (pathname.endsWith('/resume/ats')) return 'ats'
  if (pathname.endsWith('/resume')) return 'visual'

  const value = new URLSearchParams(window.location.search).get('resume')
  if (value === 'ats') return 'ats'
  if (value === 'visual' || value === '1') return 'visual'

  return null
}

function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)
  const resumeVariant = getResumeVariant()
  const data = portfolioByLanguage[language]

  useEffect(() => {
    localStorage.setItem('portfolio-language', language)
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en'

    if (resumeVariant) {
      const url = new URL(window.location.href)
      url.searchParams.set('lang', language)
      url.searchParams.delete('resume')
      window.history.replaceState({}, '', url)
    }

    updateSeo(data, language, resumeVariant)
  }, [data, language, resumeVariant])

  const openResume = (variant: ResumeVariant) => {
    const url = new URL(window.location.href)
    url.pathname = variant === 'ats' ? '/resume/ats' : '/resume'
    url.search = ''
    url.searchParams.set('lang', language)
    window.open(url.toString(), '_blank', 'noopener,noreferrer')
  }

  const backToPortfolio = () => {
    const url = new URL(window.location.href)
    url.pathname = '/'
    url.search = ''
    window.location.href = url.toString()
  }

  if (resumeVariant === 'ats') {
    return (
      <AtsResumePage
        data={data}
        language={language}
        onLanguageChange={setLanguage}
        onBack={backToPortfolio}
      />
    )
  }

  if (resumeVariant === 'visual') {
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
        <ContactCta data={data} />
      </main>

      <Footer data={data} />
    </div>
  )
}

export default App
