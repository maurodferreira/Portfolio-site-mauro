import { useEffect, useMemo, useState } from 'react'
import type { Language, PortfolioData } from '../types/portfolio'
import { useTheme } from '../hooks/useTheme'

interface NavbarProps {
  data: PortfolioData
  language: Language
  onLanguageChange: (language: Language) => void
  onOpenResume: () => void
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
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')

  const navItems = useMemo(
    () => [
      { id: 'summary', label: data.ui.navigation.about },
      { id: 'skills', label: data.ui.navigation.skills },
      { id: 'experience', label: data.ui.navigation.experience },
      { id: 'projects', label: data.ui.navigation.projects },
      { id: 'education', label: data.ui.navigation.education },
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

  return (
    <>
      <header className="navbar-shell">
        <nav className="navbar container-wide" aria-label={data.ui.navigation.menu}>
          <button className="brand" type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            {data.personal.shortName}<span>.</span>
          </button>

          <div className="desktop-nav">
            {navItems.map((item) => (
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
              className="language-button"
              type="button"
              aria-label="Change language"
              title="Português / English"
              onClick={toggleLanguage}
            >
              <i className="bi bi-globe2" aria-hidden="true" />
              {language.toUpperCase()}
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

            <button className="resume-button desktop-resume" type="button" onClick={onOpenResume}>
              <i className="bi bi-file-earmark-arrow-down" aria-hidden="true" />
              {data.ui.navigation.resume}
            </button>

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
            <div className="mobile-menu">
              {navItems.map((item) => (
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
              <button
                type="button"
                onClick={() => {
                  toggleLanguage()
                  setMenuOpen(false)
                }}
              >
                <i className="bi bi-globe2" aria-hidden="true" />
                {language === 'pt' ? 'English' : 'Português'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false)
                  onOpenResume()
                }}
              >
                <i className="bi bi-file-earmark-text" aria-hidden="true" />
                {data.ui.navigation.resume}
              </button>
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
