import { portfolio } from '../data/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <div className="section-content container-main">
      <SectionHeading index="01" title="Sobre" />
      <Reveal delay={0.08}>
        <p className="summary-text">{portfolio.summary}</p>
      </Reveal>
    </div>
  )
}
