import type { Language, PortfolioData } from '../types/portfolio'

interface ResumePageProps {
  data: PortfolioData
  language: Language
  onLanguageChange: (language: Language) => void
  onBack: () => void
}

export function ResumePage({ data, language, onLanguageChange, onBack }: ResumePageProps) {
  const printResume = () => {
    const previousTitle = document.title
    document.title = language === 'pt'
      ? 'Mauro-Ferreira-Curriculo-FullStack-PT'
      : 'Mauro-Ferreira-FullStack-Resume-EN'

    window.print()
    document.title = previousTitle
  }

  const primarySkills = data.skills.flatMap((category) =>
    category.skills.filter((skill) => skill.level === 'primary').map((skill) => skill.name),
  )

  const secondarySkills = data.skills.flatMap((category) =>
    category.skills.filter((skill) => skill.level === 'secondary').map((skill) => skill.name),
  )

  return (
    <div className="resume-page">
      <div className="resume-toolbar">
        <button type="button" onClick={onBack}>
          <i className="bi bi-arrow-left" aria-hidden="true" />
          {data.ui.resume.back}
        </button>

        <div className="resume-toolbar-actions">
          <div className="resume-language-switch" aria-label="Language">
            <button
              className={language === 'pt' ? 'active' : ''}
              type="button"
              onClick={() => onLanguageChange('pt')}
            >
              PT
            </button>
            <button
              className={language === 'en' ? 'active' : ''}
              type="button"
              onClick={() => onLanguageChange('en')}
            >
              EN
            </button>
          </div>

          <button className="resume-print-button" type="button" onClick={printResume}>
            <i className="bi bi-printer" aria-hidden="true" />
            {data.ui.resume.print}
          </button>
        </div>
      </div>

      <main className="resume-sheet">
        <header className="resume-header">
          <div className="resume-profile-block">
            {data.personal.avatar ? (
              <img
                src={data.personal.avatar}
                alt={data.personal.fullName}
                className="resume-avatar"
              />
            ) : (
              <div className="resume-avatar resume-avatar-fallback" aria-hidden="true">
                {data.personal.initials}
              </div>
            )}

            <div>
              <p className="resume-kicker">{data.personal.subtitle}</p>
              <h1>{data.personal.fullName}</h1>
              <h2>{data.personal.title}</h2>
            </div>
          </div>

          <div className="resume-contact">
            <span><i className="bi bi-geo-alt" aria-hidden="true" />{data.personal.location}</span>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(data.personal.email)}`}
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-envelope" aria-hidden="true" />{data.personal.email}
            </a>
            {data.personal.phone && (
              <a
                href={`https://wa.me/${data.personal.phone.replace(/\D/g, '')}`}
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-whatsapp" aria-hidden="true" />
                {data.personal.phone}
              </a>
            )}
            <a href={data.personal.github} target="_blank" rel="noreferrer"><i className="bi bi-github" aria-hidden="true" />github.com/maurodferreira</a>
            <a href={data.personal.linkedin} target="_blank" rel="noreferrer"><i className="bi bi-linkedin" aria-hidden="true" />LinkedIn</a>
          </div>
        </header>

        <section className="resume-section">
          <h3>{data.ui.resume.summary}</h3>
          <p className="resume-summary">{data.summary}</p>
        </section>

        <section className="resume-section">
          <h3>{data.ui.resume.experience}</h3>
          {data.experience.map((item) => (
            <article className="resume-experience" key={`${item.company}-${item.role}`}>
              <div className="resume-item-heading">
                <div>
                  <strong>{item.role}</strong>
                  <span>{item.company} · {item.location}</span>
                </div>
                <time>{item.period}</time>
              </div>
              <ul>
                {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </article>
          ))}
        </section>

        <section className="resume-section">
          <h3>{data.ui.resume.projects}</h3>
          <div className="resume-projects">
            {data.projects.slice(0, 4).map((project) => (
              <article key={project.name}>
                <strong>{project.name}</strong>
                <p>{project.description}</p>
                <span>{project.tags.join(' · ')}</span>
              </article>
            ))}
          </div>
        </section>

        <div className="resume-two-columns">
          <section className="resume-section">
            <h3>{data.ui.resume.skills}</h3>
            <div className="resume-skills">
              {primarySkills.map((skill) => <span className="primary" key={skill}>{skill}</span>)}
              {secondarySkills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </section>

          <section className="resume-section">
            <h3>{data.ui.resume.education}</h3>
            {data.education.map((item) => (
              <article className="resume-education" key={item.course}>
                <strong>{item.course}</strong>
                <span>
                  {item.institution}
                  {item.location ? ` · ${item.location}` : ''}
                </span>
                <small>{item.period}</small>
              </article>
            ))}
          </section>
        </div>

        <section className="resume-section resume-courses-section">
          <h3>{data.ui.resume.courses}</h3>
          <div className="resume-courses">
            {data.courses.map((course) => (
              <article key={course.title}>
                <strong>{course.title}</strong>
                <span>{course.institution} · {course.period}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="resume-section resume-leadership">
          <h3>{data.ui.resume.leadership}</h3>
          {data.leadership.map((item) => (
            <article key={item.organization}>
              <div className="resume-item-heading">
                <div>
                  <strong>{item.role}</strong>
                  <span>{item.organization}</span>
                </div>
                <time>{item.period}</time>
              </div>
              <ul>
                {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </article>
          ))}
        </section>
      </main>
    </div>
  )
}
