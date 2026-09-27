import { motion, useReducedMotion } from 'framer-motion'
import { portfolio } from '../data/portfolio'

const contacts = [
  { label: 'Email', href: `mailto:${portfolio.personal.email}`, icon: 'bi-envelope', external: false },
  { label: 'Telefone', href: `tel:${portfolio.personal.phone.replace(/[^\d+]/g, '')}`, icon: 'bi-telephone', external: false },
  { label: 'GitHub', href: portfolio.personal.github, icon: 'bi-github', external: true },
  { label: 'LinkedIn', href: portfolio.personal.linkedin, icon: 'bi-linkedin', external: true },
]

export function Hero() {
  const reduceMotion = useReducedMotion()
  const enter = (index: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] as const },
  })

  return (
    <section className="hero-section" id="top">
      <div className="dot-grid" aria-hidden="true" />
      <div className="hero-content container-main">
        <motion.div {...enter(0)} className="hero-meta">
          <div className="avatar-placeholder" aria-label={`Foto de ${portfolio.personal.fullName}`}>
            <span>{portfolio.personal.initials}</span>
          </div>
          <span className="location-pill">
            <i className="bi bi-geo-alt" aria-hidden="true" />
            {portfolio.personal.location}
          </span>
        </motion.div>

        <motion.h1 {...enter(1)}>{portfolio.personal.fullName}</motion.h1>
        <motion.p {...enter(2)} className="hero-title">{portfolio.personal.title}</motion.p>

        <motion.div {...enter(3)} className="contact-list">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.external ? '_blank' : undefined}
              rel={contact.external ? 'noreferrer' : undefined}
              className="contact-pill"
            >
              <i className={`bi ${contact.icon}`} aria-hidden="true" />
              {contact.label}
            </a>
          ))}
          {portfolio.personal.website && (
            <a href={portfolio.personal.website} target="_blank" rel="noreferrer" className="contact-pill">
              <i className="bi bi-globe2" aria-hidden="true" />
              Website
            </a>
          )}
        </motion.div>
      </div>

      <motion.button
        {...enter(6)}
        className="scroll-cue"
        type="button"
        onClick={() => document.getElementById('summary')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span>Role para explorar</span>
        <i className="bi bi-chevron-down" aria-hidden="true" />
      </motion.button>
    </section>
  )
}
