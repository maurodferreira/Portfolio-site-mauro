import { useEffect, useMemo, useState } from 'react'
import type { Language, PortfolioData, ResumeVariant } from '../types/portfolio'
import { useTheme } from '../hooks/useTheme'

interface NavbarProps {
  data: PortfolioData
  language: Language
  onLanguageChange: (language: Language) => void
  onOpenResume: (variant: ResumeVariant) => void
}

interface SearchResult {
  label: string
  description: string
  sectionId: string
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function Navbar({ data, language, onLanguageChange, onOpenResume }: NavbarProps) {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [resumeMenuOpen, setResumeMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')

  const navItems = useMemo(
    () => [
      { id: 'summary', label: data.ui.navigation.about },
      { id: 'skills', label: data.ui.navigation.skills },
      { id: 'experience', label: data.ui.navigation.experience },
      { id: 'projects', label: data.ui.navigation.projects },
      { id: 'education', label: data.ui.navigation.education },
      { id: 'courses', label: data.ui.sections.courses },
      { id: 'leadership', label: data.ui.sections.leadership },
    ],
    [data],
  )

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === '/' && !searchOpen) {
        const target = event.target as HTMLElement | null
        if (target?.tagName === 'INPUT' || target?.tagName === 'TEXTAREA') return
        event.preventDefault()
        setSearchOpen(true)
      }

      if (event.key === 'Escape') {
        setSearchOpen(false)
        setMenuOpen(false)
        setResumeMenuOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [searchOpen])

  const searchable = useMemo<SearchResult[]>(() => {
    const sectionResults = navItems.map((item) => ({
      label: item.label,
      description: data.ui.search.section,
      sectionId: item.id,
    }))

    const skillResults = data.skills.flatMap((category) =>
      category.skills.map((skill) => ({
        label: skill.name,
        description: `${data.ui.search.skill} • ${category.name}`,
        sectionId: 'skills',
      })),
    )

    const projectResults = data.projects.map((project) => ({
      label: project.name,
      description: data.ui.search.project,
      sectionId: 'projects',
    }))

    const courseResults = data.courses.map((course) => ({
      label: course.title,
      description: data.ui.search.course,
      sectionId: 'courses',
    }))

    return [...sectionResults, ...skillResults, ...projectResults, ...courseResults]
  }, [data, navItems])

  const results = searchable.filter((item) => {
    const term = query.trim().toLowerCase()
    if (!term) return true
    return `${item.label} ${item.description}`.toLowerCase().includes(term)
  })

  const chooseResult = (sectionId: string) => {
    setSearchOpen(false)
    setQuery('')
    window.setTimeout(() => scrollToSection(sectionId), 10)
  }

  const toggleLanguage = () => {
    onLanguageChange(language === 'pt' ? 'en' : 'pt')
  }

  const openResume = (variant: ResumeVariant) => {
    setMenuOpen(false)
    setResumeMenuOpen(false)
    onOpenResume(variant)
  }

  return (
    <>
      <header className="navbar-shell">
        <nav className="navbar container-wide" aria-label={data.ui.navigation.menu}>
          <button className="brand" type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            {data.personal.shortName}<span>.</span>
          </button>

          <div className="desktop-nav">
            {navItems.slice(0, 5).map((item) => (
              <button key={item.id} type="button" onClick={() => scrollToSection(item.id)}>
                {item.label}
              </button>
            ))}
          </div>

          <div className="nav-actions">
            <button
              className="icon-button"
              type="button"
              aria-label={data.ui.navigation.search}
              title={data.ui.navigation.search}
              onClick={() => setSearchOpen(true)}
            >
              <i className="bi bi-search" aria-hidden="true" />
            </button>

            <button
              className="icon-button"
              type="button"
              aria-label={data.ui.navigation.theme}
              title={data.ui.navigation.theme}
              onClick={toggleTheme}
            >
              <i className={`bi ${theme === 'dark' ? 'bi-sun' : 'bi-moon-stars'}`} aria-hidden="true" />
            </button>

            <button
              className="language-button"
              type="button"
              aria-label="Change language"
              title="Português / English"
              onClick={toggleLanguage}
            >
              <i className="bi bi-translate" aria-hidden="true" />
              {language.toUpperCase()}
            </button>

            <div className="resume-selector desktop-resume">
              <button
                className="resume-button"
                type="button"
                aria-haspopup="menu"
                aria-expanded={resumeMenuOpen}
                onClick={() => setResumeMenuOpen((current) => !current)}
              >
                <i className="bi bi-file-earmark-arrow-down" aria-hidden="true" />
                {data.ui.navigation.resume}
                <i
                  className={`bi bi-chevron-down resume-selector-chevron ${resumeMenuOpen ? 'open' : ''}`}
                  aria-hidden="true"
                />
              </button>

              {resumeMenuOpen && (
                <div className="resume-selector-menu" role="menu">
                  <button type="button" role="menuitem" onClick={() => openResume('visual')}>
                    <span className="resume-selector-icon">
                      <i className="bi bi-file-earmark-person" aria-hidden="true" />
                    </span>
                    <span>
                      <strong>{data.ui.navigation.resumeVisual}</strong>
                      <small>{language === 'pt' ? 'Versão visual com foto e layout' : 'Visual version with photo and layout'}</small>
                    </span>
                  </button>

                  <button type="button" role="menuitem" onClick={() => openResume('ats')}>
                    <span className="resume-selector-icon">
                      <i className="bi bi-file-earmark-text" aria-hidden="true" />
                    </span>
                    <span>
                      <strong>{data.ui.navigation.resumeAts}</strong>
                      <small>{language === 'pt' ? 'Versão linear para recrutamento' : 'Linear version for recruiting systems'}</small>
                    </span>
                  </button>
                </div>
              )}
            </div>

            <button
              className="icon-button mobile-menu-button"
              type="button"
              aria-label={data.ui.navigation.menu}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((current) => !current)}
            >
              <i className="bi bi-list" aria-hidden="true" />
            </button>
          </div>

          {menuOpen && (
            <div className="mobile-menu mobile-menu-grouped">
              <div className="mobile-menu-group">
                <p className="mobile-menu-label">{data.ui.navigation.menuSections}</p>

                {navItems.slice(0, 5).map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setMenuOpen(false)
                      scrollToSection(item.id)
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="mobile-menu-divider" />

              <div className="mobile-menu-group">
                <p className="mobile-menu-label">{data.ui.navigation.menuActions}</p>

                <button type="button" onClick={() => openResume('visual')}>
                  <i className="bi bi-file-earmark-person" aria-hidden="true" />
                  {data.ui.navigation.resumeVisual}
                </button>

                <button type="button" onClick={() => openResume('ats')}>
                  <i className="bi bi-file-earmark-text" aria-hidden="true" />
                  {data.ui.navigation.resumeAts}
                </button>

                <a
                  className="mobile-menu-link"
                  href={data.personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMenuOpen(false)}
                >
                  <i className="bi bi-linkedin" aria-hidden="true" />
                  LinkedIn
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {searchOpen && (
        <div className="search-backdrop" role="presentation" onMouseDown={() => setSearchOpen(false)}>
          <div
            className="search-panel"
            role="dialog"
            aria-modal="true"
            aria-label={data.ui.navigation.search}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="search-input-row">
              <i className="bi bi-search" aria-hidden="true" />
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={data.ui.search.placeholder}
              />
              <button type="button" onClick={() => setSearchOpen(false)}>Esc</button>
            </div>

            <div className="search-results">
              {results.slice(0, 10).map((result, index) => (
                <button key={`${result.label}-${index}`} type="button" onClick={() => chooseResult(result.sectionId)}>
                  <span>{result.label}</span>
                  <small>{result.description}</small>
                </button>
              ))}
              {!results.length && <p className="search-empty">{data.ui.search.empty}</p>}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
