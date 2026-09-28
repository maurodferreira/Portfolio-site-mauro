import type { PortfolioData } from '../types/portfolio'

interface FooterProps {
  data: PortfolioData
}

export function Footer({ data }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="container-main footer-inner">
        <p>© {new Date().getFullYear()} {data.personal.fullName}</p>

        <div>
          {data.personal.email && (
            <a href={`mailto:${data.personal.email}`} aria-label="Email">
              <i className="bi bi-envelope" />
            </a>
          )}
          {data.personal.phone && (
            <a
              href={`https://wa.me/${data.personal.phone.replace(/\D/g, '')}`}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <i className="bi bi-whatsapp" />
            </a>
          )}
          {data.personal.github && (
            <a href={data.personal.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <i className="bi bi-github" />
            </a>
          )}
          {data.personal.linkedin && (
            <a href={data.personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="bi bi-linkedin" />
            </a>
          )}
        </div>
      </div>
    </footer>
  )
}
