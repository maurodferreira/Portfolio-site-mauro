import { portfolio } from '../data/portfolio'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-main footer-inner">
        <p>© {new Date().getFullYear()} {portfolio.personal.fullName}</p>
        <div>
          <a href={portfolio.personal.github} target="_blank" rel="noreferrer" aria-label="GitHub"><i className="bi bi-github" /></a>
          <a href={portfolio.personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="bi bi-linkedin" /></a>
          <a href={`mailto:${portfolio.personal.email}`} aria-label="Email"><i className="bi bi-envelope" /></a>
        </div>
      </div>
    </footer>
  )
}
