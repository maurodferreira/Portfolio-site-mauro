import type { PortfolioData } from '../types/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

interface AboutProps {
  data: PortfolioData
}

export function About({ data }: AboutProps) {
  return (
    <div className="section-content container-main">
      <SectionHeading index="01" title={data.ui.sections.about} />
      <Reveal delay={0.08}>
        <p className="summary-text">{data.summary}</p>
      </Reveal>
    </div>
  )
}
