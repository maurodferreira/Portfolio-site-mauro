import type { PortfolioData } from '../types/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

interface EducationProps {
  data: PortfolioData
}

export function Education({ data }: EducationProps) {
  return (
    <div className="section-content container-main">
      <SectionHeading
        index="05"
        title={data.ui.sections.education}
        subtitle={data.ui.sections.educationSubtitle}
      />

      <div className="education-list">
        {data.education.map((item, index) => (
          <Reveal key={`${item.course}-${item.institution}`} delay={index * 0.08}>
            <article className="education-item">
              <span className="education-dot" aria-hidden="true" />
              <p className="education-period">{item.period}</p>
              <h3>{item.course}</h3>
              <p className="education-institution">{item.institution}</p>
              {item.location && <p className="education-location">{item.location}</p>}
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
