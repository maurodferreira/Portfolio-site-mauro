import type { PortfolioData } from '../types/portfolio'
import { EmailContactMenu } from './EmailContactMenu'
import { Reveal } from './Reveal'

interface ContactCtaProps {
  data: PortfolioData
}

export function ContactCta({ data }: ContactCtaProps) {
  const whatsapp = data.personal.phone
    ? `https://wa.me/${data.personal.phone.replace(/\D/g, '')}`
    : ''

  return (
    <section className="contact-cta-section" aria-labelledby="contact-cta-title">
      <div className="container-main">
        <Reveal>
          <div className="contact-cta">
            <div className="contact-cta-copy">
              <span className="contact-cta-kicker">08</span>
              <div>
                <h2 id="contact-cta-title">{data.ui.sections.contactTitle}</h2>
                <p>{data.ui.sections.contactSubtitle}</p>
              </div>
            </div>

            <div className="contact-cta-actions">
              <EmailContactMenu
                email={data.personal.email}
                label={data.ui.hero.email}
                openGmailLabel={data.ui.hero.openGmail}
                copyLabel={data.ui.hero.copyEmail}
                copiedLabel={data.ui.hero.emailCopied}
                variant="cta"
              />

              {whatsapp && (
                <a href={whatsapp} target="_blank" rel="noreferrer" className="contact-cta-link">
                  <i className="bi bi-whatsapp" aria-hidden="true" />
                  <span>WhatsApp</span>
                </a>
              )}

              <a href={data.personal.github} target="_blank" rel="noreferrer" className="contact-cta-link">
                <i className="bi bi-github" aria-hidden="true" />
                <span>GitHub</span>
              </a>

              <a href={data.personal.linkedin} target="_blank" rel="noreferrer" className="contact-cta-link">
                <i className="bi bi-linkedin" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
