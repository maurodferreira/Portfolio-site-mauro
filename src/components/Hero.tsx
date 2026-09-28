import { motion, useReducedMotion } from 'framer-motion'
import type { PortfolioData } from '../types/portfolio'

interface HeroProps {
  data: PortfolioData
}

export function Hero({ data }: HeroProps) {
  const reduceMotion = useReducedMotion()

  const contacts = [
    data.personal.email
      ? { label: data.ui.hero.email, href: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(data.personal.email)}`, icon: 'bi-envelope', external: true }
      : null,
    data.personal.phone
      ? {
          label: data.ui.hero.phone,
          href: `https://wa.me/${data.personal.phone.replace(/\D/g, '')}`,
          icon: 'bi-whatsapp',
          external: true,
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
            {data.personal.avatar ? (
              <img
                src={data.personal.avatar}
                alt={data.personal.fullName}
                className="hero-avatar-image"
              />
            ) : (
              <span>{data.personal.initials}</span>
            )}
          </div>

          <div className="hero-status">
            <span className="location-pill">
              <i className="bi bi-geo-alt" aria-hidden="true" />
              {data.personal.location}
            </span>

            <span className="availability-pill">
              <i className="bi bi-briefcase" aria-hidden="true" />
              {data.personal.availability}
            </span>
          </div>
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
    </section>
  )
}
