import { portfolio } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Experience() {
  return (
    <div className="section-content container-main">
      <SectionHeading
        index="03"
        title="Experiência"
        subtitle={`${portfolio.experience.length} experiências • ${portfolio.projects.length} projetos`}
      />

      <div className="experience-track" aria-label="Experiências profissionais">
        {portfolio.experience.map((item, index) => (
          <Reveal key={`${item.company}-${item.role}`} delay={index * 0.08} className="experience-item">
            <div className="experience-date">{item.period}</div>
            <span className="timeline-dot" aria-hidden="true" />
            <article className="experience-card">
              <p className="eyebrow">{item.company}</p>
              <h3>{item.role}</h3>
              <p className="muted-row">
                <i className="bi bi-geo-alt" aria-hidden="true" /> {item.location}
              </p>
              <ul>
                {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="projects-block">
        <Reveal>
          <h3 className="projects-title">Projetos</h3>
        </Reveal>
        <div className="projects-grid">
          {portfolio.projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.06}>
              <article className="project-card">
                <div>
                  <div className="project-topline">
                    <i className="bi bi-folder2-open" aria-hidden="true" />
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noreferrer" aria-label={`Abrir ${project.name}`}>
                        <i className="bi bi-arrow-up-right" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                  <h4>{project.name}</h4>
                  <p>{project.description}</p>
                </div>
                <div className="project-tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}
