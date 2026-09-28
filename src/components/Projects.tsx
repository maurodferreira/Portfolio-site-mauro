import type { PortfolioData } from '../types/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

interface ProjectsProps {
  data: PortfolioData
}

export function Projects({ data }: ProjectsProps) {
  return (
    <div className="section-content container-main">
      <SectionHeading
        index="04"
        title={data.ui.sections.projects}
        subtitle={data.ui.sections.projectsSubtitle}
      />

      <div className="projects-grid featured-projects-grid">
        {data.projects.map((project, index) => (
          <Reveal key={project.name} delay={index * 0.05}>
            <article className="project-card">
              <div>
                <div className="project-topline">
                  <i className="bi bi-folder2-open" aria-hidden="true" />

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${data.ui.sections.projectOpen}: ${project.name}`}
                      title={data.ui.sections.projectOpen}
                    >
                      <i className="bi bi-arrow-up-right" aria-hidden="true" />
                    </a>
                  )}
                </div>

                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>

                {project.contribution && (
                  <div className="project-case-block">
                    <span>{data.ui.sections.projectContribution}</span>
                    <p>{project.contribution}</p>
                  </div>
                )}

                {project.highlights?.length ? (
                  <div className="project-case-block">
                    <span>{data.ui.sections.projectHighlights}</span>
                    <ul className="project-highlights">
                      {project.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>

              <div className="project-card-footer">
                <div className="project-tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>

                {project.link && (
                  <a className="project-code-link" href={project.link} target="_blank" rel="noreferrer">
                    <i className="bi bi-github" aria-hidden="true" />
                    {data.ui.sections.projectOpen}
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.08}>
        <div className="clients-panel">
          <div>
            <h3>{data.ui.sections.clients}</h3>
            <p>{data.ui.sections.clientsSubtitle}</p>
          </div>

          <div className="client-chips">
            {data.clients.map((client) => <span key={client}>{client}</span>)}
          </div>
        </div>
      </Reveal>
    </div>
  )
}
