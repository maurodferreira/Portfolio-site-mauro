import type { Language, PortfolioData, ResumeVariant } from '../types/portfolio'

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)

  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value)
  })
}

function upsertLink(rel: string, id: string, href: string, extra: Record<string, string> = {}) {
  let element = document.head.querySelector<HTMLLinkElement>(`link[data-seo-id="${id}"]`)

  if (!element) {
    element = document.createElement('link')
    element.dataset.seoId = id
    document.head.appendChild(element)
  }

  element.rel = rel
  element.href = href

  Object.entries(extra).forEach(([key, value]) => {
    element?.setAttribute(key, value)
  })
}

export function updateSeo(
  data: PortfolioData,
  language: Language,
  resumeVariant: ResumeVariant | null,
) {
  const origin = window.location.origin
  const pathname = window.location.pathname
  const canonicalUrl = `${origin}${pathname}`
  const imageUrl = `${origin}${data.personal.avatar ?? '/profile-mauro.png'}`
  const locale = language === 'pt' ? 'pt_BR' : 'en_US'
  const alternateLocale = language === 'pt' ? 'en_US' : 'pt_BR'

  const pageTitle = resumeVariant
    ? resumeVariant === 'ats'
      ? language === 'pt'
        ? 'Mauro Ferreira | Currículo ATS Full Stack'
        : 'Mauro Ferreira | ATS Full-Stack Resume'
      : language === 'pt'
        ? 'Mauro Ferreira | Currículo Full Stack'
        : 'Mauro Ferreira | Full-Stack Resume'
    : `${data.personal.fullName} | ${data.personal.title}`

  const description = resumeVariant
    ? language === 'pt'
      ? 'Currículo profissional de Mauro Diogo Fioravante Ferreira, Desenvolvedor Full Stack com experiência em React, TypeScript, Next.js, Node.js e NestJS.'
      : 'Professional resume of Mauro Diogo Fioravante Ferreira, Full-Stack Developer experienced with React, TypeScript, Next.js, Node.js and NestJS.'
    : data.summary

  document.title = pageTitle

  upsertMeta('meta[name="description"]', { name: 'description', content: description })
  upsertMeta('meta[name="robots"]', { name: 'robots', content: 'index, follow' })
  upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'profile' })
  upsertMeta('meta[property="og:title"]', { property: 'og:title', content: pageTitle })
  upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description })
  upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl })
  upsertMeta('meta[property="og:image"]', { property: 'og:image', content: imageUrl })
  upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: locale })
  upsertMeta('meta[property="og:locale:alternate"]', {
    property: 'og:locale:alternate',
    content: alternateLocale,
  })
  upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary' })
  upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: pageTitle })
  upsertMeta('meta[name="twitter:description"]', {
    name: 'twitter:description',
    content: description,
  })
  upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: imageUrl })

  upsertLink('canonical', 'canonical', canonicalUrl)
  upsertLink('alternate', 'alternate-pt', `${canonicalUrl}?lang=pt`, {
    hreflang: 'pt-BR',
  })
  upsertLink('alternate', 'alternate-en', `${canonicalUrl}?lang=en`, {
    hreflang: 'en',
  })
  upsertLink('alternate', 'alternate-default', canonicalUrl, {
    hreflang: 'x-default',
  })

  let structuredData = document.getElementById('portfolio-person-jsonld') as HTMLScriptElement | null

  if (!structuredData) {
    structuredData = document.createElement('script')
    structuredData.id = 'portfolio-person-jsonld'
    structuredData.type = 'application/ld+json'
    document.head.appendChild(structuredData)
  }

  const skills = Array.from(
    new Set(data.skills.flatMap((category) => category.skills.map((skill) => skill.name))),
  )

  structuredData.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: data.personal.fullName,
    jobTitle: data.personal.title,
    description: data.summary,
    email: `mailto:${data.personal.email}`,
    image: imageUrl,
    url: origin,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Cornélio Procópio',
      addressRegion: 'PR',
      addressCountry: 'BR',
    },
    sameAs: [data.personal.github, data.personal.linkedin].filter(Boolean),
    knowsAbout: skills,
    worksFor: {
      '@type': 'Organization',
      name: 'Yankton Technologies',
    },
  })
}
