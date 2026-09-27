import type { PortfolioData } from '../types/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

interface ExperienceProps {
  data: PortfolioData
}

export function Experience({ data }: ExperienceProps) {
  return (
    <div className="section-content container-main">
      <SectionHeading
        index="03"
        title={data.ui.sections.experience}
        subtitle={data.ui.sections.experienceSubtitle}
      />

      <div className="experience-track" aria-label={data.ui.sections.experience}>
        {data.experience.map((item, index) => (
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
    </div>
  )
}
