import type { PortfolioData } from '../types/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

interface LeadershipProps {
  data: PortfolioData
}

export function Leadership({ data }: LeadershipProps) {
  return (
    <div className="section-content compact-section container-main">
      <SectionHeading
        index="07"
        title={data.ui.sections.leadership}
        subtitle={data.ui.sections.leadershipSubtitle}
      />

      {data.leadership.map((item, index) => (
        <Reveal key={item.organization} delay={index * 0.06}>
          <article className="leadership-card">
            <div className="leadership-icon">
              <i className="bi bi-people" aria-hidden="true" />
            </div>

            <div>
              <p className="eyebrow">{item.period}</p>
              <h3>{item.organization}</h3>
              <p className="leadership-role">{item.role}</p>
              <ul>
                {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  )
}
