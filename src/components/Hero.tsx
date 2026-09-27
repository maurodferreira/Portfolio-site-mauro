import { motion, useReducedMotion } from 'framer-motion'
import type { PortfolioData } from '../types/portfolio'

interface HeroProps {
  data: PortfolioData
}

export function Hero({ data }: HeroProps) {
  const reduceMotion = useReducedMotion()

  const contacts = [
    data.personal.email
      ? { label: data.ui.hero.email, href: `mailto:${data.personal.email}`, icon: 'bi-envelope', external: false }
      : null,
    data.personal.phone
      ? {
          label: data.ui.hero.phone,
          href: `tel:${data.personal.phone.replace(/[^\d+]/g, '')}`,
          icon: 'bi-telephone',
          external: false,
        }
      : null,
    data.personal.github
      ? { label: data.ui.hero.github, href: data.personal.github, icon: 'bi-github', external: true }
      : null,
    data.personal.linkedin
      ? { label: data.ui.hero.linkedin, href: data.personal.linkedin, icon: 'bi-linkedin', external: true }
      : null,
  ].filter((contact): contact is NonNullable<typeof contact> => contact !== null)

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
          <div className="avatar-placeholder" aria-label={`Foto de ${data.personal.fullName}`}>
            <span>{data.personal.initials}</span>
          </div>

          <span className="location-pill">
            <i className="bi bi-geo-alt" aria-hidden="true" />
            {data.personal.location}
          </span>
        </motion.div>

        <motion.h1 {...enter(1)}>{data.personal.fullName}</motion.h1>
        <motion.p {...enter(2)} className="hero-title">{data.personal.title}</motion.p>
        <motion.p {...enter(3)} className="hero-subtitle">{data.personal.subtitle}</motion.p>

        <motion.div {...enter(4)} className="contact-list">
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

          {data.personal.website && (
            <a href={data.personal.website} target="_blank" rel="noreferrer" className="contact-pill">
              <i className="bi bi-globe2" aria-hidden="true" />
              {data.ui.hero.website}
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
        <span>{data.ui.hero.scroll}</span>
        <i className="bi bi-chevron-down" aria-hidden="true" />
      </motion.button>
    </section>
  )
}
