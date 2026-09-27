import type { PortfolioData } from '../types/portfolio'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

interface CoursesProps {
  data: PortfolioData
}

export function Courses({ data }: CoursesProps) {
  return (
    <div className="section-content compact-section container-main">
      <SectionHeading
        index="06"
        title={data.ui.sections.courses}
        subtitle={data.ui.sections.coursesSubtitle}
      />

      <div className="courses-grid">
        {data.courses.map((course, index) => (
          <Reveal key={`${course.title}-${course.institution}`} delay={index * 0.04}>
            <article className="course-card">
              <i className="bi bi-journal-code" aria-hidden="true" />
              <div>
                <p>{course.period}</p>
                <h3>{course.title}</h3>
                <span>{course.institution}</span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
