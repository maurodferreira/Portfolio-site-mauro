import { useEffect, useMemo, useState } from 'react'
import { portfolio } from '../data/portfolio'
import { useTheme } from '../hooks/useTheme'

const navItems = [
  { id: 'summary', label: 'Sobre' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experiência' },
  { id: 'education', label: 'Educação' },
]

interface SearchResult {
  label: string
  description: string
  sectionId: string
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')

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
      description: `Ir para a seção ${item.label}`,
      sectionId: item.id,
    }))
    const skillResults = portfolio.skills.flatMap((category) =>
      category.skills.map((skill) => ({
        label: skill.name,
        description: category.name,
        sectionId: 'skills',
      })),
    )
    const projectResults = portfolio.projects.map((project) => ({
      label: project.name,
      description: 'Projeto',
      sectionId: 'experience',
    }))
    return [...sectionResults, ...skillResults, ...projectResults]
  }, [])

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

  return (
    <>
      <header className="navbar-shell">
        <nav className="navbar container-wide" aria-label="Navegação principal">
          <button className="brand" type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            {portfolio.personal.shortName}<span>.</span>
          </button>

          <div className="desktop-nav">
            {navItems.map((item) => (
              <button key={item.id} type="button" onClick={() => scrollToSection(item.id)}>
                {item.label}
              </button>
            ))}
          </div>

          <div className="nav-actions">
            <button className="icon-button" type="button" aria-label="Pesquisar" title="Pesquisar (/)" onClick={() => setSearchOpen(true)}>
              <i className="bi bi-search" aria-hidden="true" />
            </button>
            <button className="icon-button" type="button" aria-label="Alternar tema" title="Alternar tema" onClick={toggleTheme}>
              <i className={`bi ${theme === 'dark' ? 'bi-sun' : 'bi-moon-stars'}`} aria-hidden="true" />
            </button>
            <button className="resume-button desktop-resume" type="button" onClick={() => window.print()}>
              <i className="bi bi-file-earmark-arrow-down" aria-hidden="true" />
              Currículo
            </button>
            <button
              className="icon-button mobile-menu-button"
              type="button"
              aria-label="Abrir menu"
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
              <button type="button" onClick={() => window.print()}>
                <i className="bi bi-file-earmark-text" aria-hidden="true" />
                Currículo
              </button>
            </div>
          )}
        </nav>
      </header>

      {searchOpen && (
        <div className="search-backdrop" role="presentation" onMouseDown={() => setSearchOpen(false)}>
          <div className="search-panel" role="dialog" aria-modal="true" aria-label="Pesquisar no portfólio" onMouseDown={(event) => event.stopPropagation()}>
            <div className="search-input-row">
              <i className="bi bi-search" aria-hidden="true" />
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Pesquisar skills, projetos e seções..."
              />
              <button type="button" onClick={() => setSearchOpen(false)}>Esc</button>
            </div>
            <div className="search-results">
              {results.slice(0, 8).map((result, index) => (
                <button key={`${result.label}-${index}`} type="button" onClick={() => chooseResult(result.sectionId)}>
                  <span>{result.label}</span>
                  <small>{result.description}</small>
                </button>
              ))}
              {!results.length && <p className="search-empty">Nenhum resultado encontrado.</p>}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
