import type { PortfolioData } from '../types/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

interface SkillsProps {
  data: PortfolioData
}

function getInitials(text: string) {
  return text
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join('')
    .toUpperCase()
}

export function Skills({ data }: SkillsProps) {
  return (
    <div className="section-content container-main">
      <SectionHeading
        index="02"
        title={data.ui.sections.skills}
        subtitle={data.ui.sections.skillsSubtitle}
      />

      <div className="skills-grid">
        {data.skills.map((category, index) => (
          <Reveal key={category.name} delay={index * 0.05}>
            <article className="skill-card">
              <div className="skill-card-header">
                <span className="skill-icon">{getInitials(category.name)}</span>
                <div>
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                </div>
              </div>

              <div className="skill-tags">
                {[...category.skills]
                  .sort((a, b) => Number(b.level === 'primary') - Number(a.level === 'primary'))
                  .map((skill) => (
                    <span key={skill.name} className={skill.level === 'primary' ? 'skill-tag primary' : 'skill-tag'}>
                      {skill.level === 'primary' && <span aria-hidden="true">★</span>}
                      {skill.name}
                    </span>
                  ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
