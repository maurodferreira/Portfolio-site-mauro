import type { Language, PortfolioData } from '../types/portfolio'

interface AtsResumePageProps {
  data: PortfolioData
  language: Language
  onLanguageChange: (language: Language) => void
  onBack: () => void
}

export function AtsResumePage({ data, language, onLanguageChange, onBack }: AtsResumePageProps) {
  const printResume = () => {
    const previousTitle = document.title
    document.title = language === 'pt'
      ? 'Mauro-Ferreira-Curriculo-ATS-PT'
      : 'Mauro-Ferreira-ATS-Resume-EN'

    window.print()
    document.title = previousTitle
  }

  const allSkills = data.skills.map((category) => ({
    category: category.name,
    values: category.skills.map((skill) => skill.name).join(', '),
  }))

  return (
    <div className="resume-page ats-resume-page">
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

      <main className="ats-sheet">
        <header className="ats-header">
          <h1>{data.personal.fullName}</h1>
          <p>{data.personal.title}</p>

          <div className="ats-contact-line">
            <span>{data.personal.location}</span>
            <a href={`mailto:${data.personal.email}`}>{data.personal.email}</a>
            {data.personal.phone && (
              <a
                href={`https://wa.me/${data.personal.phone.replace(/\D/g, '')}`}
                target="_blank"
                rel="noreferrer"
              >
                {data.personal.phone}
              </a>
            )}
            <a href={data.personal.github} target="_blank" rel="noreferrer">github.com/maurodferreira</a>
            <a href={data.personal.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/mauro-diogo-fioravante-ferreira-aa5114291</a>
          </div>
        </header>

        <section className="ats-section">
          <h2>{data.ui.resume.summary}</h2>
          <p>{data.summary}</p>
        </section>

        <section className="ats-section">
          <h2>{data.ui.resume.experience}</h2>
          {data.experience.map((item) => (
            <article key={`${item.company}-${item.role}`} className="ats-entry">
              <div className="ats-entry-heading">
                <div>
                  <h3>{item.role}</h3>
                  <p>{item.company} | {item.location}</p>
                </div>
                <span>{item.period}</span>
              </div>
              <ul>
                {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </article>
          ))}
        </section>

        <section className="ats-section">
          <h2>{data.ui.resume.skills}</h2>
          <div className="ats-skills-list">
            {allSkills.map((group) => (
              <p key={group.category}>
                <strong>{group.category}:</strong> {group.values}
              </p>
            ))}
          </div>
        </section>

        <section className="ats-section">
          <h2>{data.ui.resume.projects}</h2>
          {data.projects.slice(0, 5).map((project) => (
            <article key={project.name} className="ats-project">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p><strong>Stack:</strong> {project.tags.join(', ')}</p>
            </article>
          ))}
        </section>

        <section className="ats-section">
          <h2>{data.ui.resume.education}</h2>
          {data.education.map((item) => (
            <article key={item.course} className="ats-entry">
              <div className="ats-entry-heading">
                <div>
                  <h3>{item.course}</h3>
                  <p>{item.institution} | {item.location}</p>
                </div>
                <span>{item.period}</span>
              </div>
            </article>
          ))}
        </section>

        <section className="ats-section">
          <h2>{data.ui.resume.courses}</h2>
          <ul className="ats-simple-list">
            {data.courses.map((course) => (
              <li key={course.title}>
                <strong>{course.title}</strong> — {course.institution} | {course.period}
              </li>
            ))}
          </ul>
        </section>

        <section className="ats-section">
          <h2>{data.ui.resume.leadership}</h2>
          {data.leadership.map((item) => (
            <article key={item.organization} className="ats-entry">
              <div className="ats-entry-heading">
                <div>
                  <h3>{item.role}</h3>
                  <p>{item.organization}</p>
                </div>
                <span>{item.period}</span>
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
