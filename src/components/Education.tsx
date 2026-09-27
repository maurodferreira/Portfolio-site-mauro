import { portfolio } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Education() {
  return (
    <div className="section-content container-main">
      <SectionHeading index="04" title="Educação" subtitle={`${portfolio.education.length} formações e certificações`} />
      <div className="education-list">
        {portfolio.education.map((item, index) => (
          <Reveal key={`${item.course}-${item.institution}`} delay={index * 0.08}>
            <article className="education-item">
              <span className="education-dot" aria-hidden="true" />
              <p className="education-period">{item.period}</p>
              <h3>{item.course}</h3>
              <p className="education-institution">{item.institution}</p>
              <p className="education-location">{item.location}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
