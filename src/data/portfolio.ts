import type { Language, PortfolioData } from '../types/portfolio'

const sharedPersonal = {
  fullName: 'Mauro Diogo Fioravante Ferreira',
  shortName: 'Mauro Ferreira',
  location: 'Cornélio Procópio, Paraná, Brasil',
  email: 'maurodiogo56@gmail.com',
  phone: '',
  github: 'https://github.com/maurodferreira',
  linkedin: '',
  website: '',
  initials: 'MF',
}

const pt: PortfolioData = {
  personal: {
    ...sharedPersonal,
    title: 'Desenvolvedor de Software',
    subtitle: 'React • TypeScript • Next.js • Node.js',
  },

  summary:
    'Desenvolvedor de Software com experiência na construção e manutenção de aplicações web para projetos de diferentes segmentos. Minha atuação é concentrada principalmente em React e TypeScript, trabalhando desde a implementação de interfaces e regras de negócio até integração com APIs e manutenção de sistemas existentes. Já participei de projetos para marcas como Santander, B3, Heineken e Museu Light, além de desenvolver produtos próprios como o CodeMpi.',

  skills: [
    {
      name: 'Front-end',
      description: 'Principal área de atuação',
      skills: [
        { name: 'React', level: 'primary' },
        { name: 'TypeScript', level: 'primary' },
        { name: 'Next.js', level: 'primary' },
        { name: 'JavaScript', level: 'primary' },
        { name: 'Vite', level: 'secondary' },
        { name: 'AngularJS', level: 'secondary' },
        { name: 'HTML', level: 'secondary' },
        { name: 'CSS', level: 'secondary' },
        { name: 'MUI', level: 'secondary' },
      ],
    },
    {
      name: 'Back-end & APIs',
      description: 'Serviços e regras de negócio',
      skills: [
        { name: 'Node.js', level: 'primary' },
        { name: 'NestJS', level: 'primary' },
        { name: 'TypeORM', level: 'primary' },
        { name: 'REST APIs', level: 'secondary' },
      ],
    },
    {
      name: 'Dados',
      description: 'Bancos relacionais',
      skills: [
        { name: 'PostgreSQL', level: 'primary' },
        { name: 'MySQL', level: 'secondary' },
        { name: 'SQL Server', level: 'secondary' },
      ],
    },
    {
      name: 'Ecossistema React',
      description: 'Bibliotecas usadas no dia a dia',
      skills: [
        { name: 'TanStack Query', level: 'primary' },
        { name: 'React Hook Form', level: 'secondary' },
        { name: 'Zod', level: 'secondary' },
        { name: 'CodeMirror', level: 'secondary' },
        { name: 'dayjs', level: 'secondary' },
        { name: 'lodash', level: 'secondary' },
      ],
    },
    {
      name: 'Ferramentas',
      description: 'Fluxo de desenvolvimento',
      skills: [
        { name: 'Git', level: 'primary' },
        { name: 'GitHub', level: 'primary' },
        { name: 'VS Code', level: 'primary' },
        { name: 'npm', level: 'secondary' },
        { name: 'pnpm', level: 'secondary' },
      ],
    },
    {
      name: 'Outros conhecimentos',
      description: 'Base de programação',
      skills: [
        { name: 'Python', level: 'secondary' },
        { name: 'C', level: 'secondary' },
        { name: 'C#', level: 'secondary' },
      ],
    },
  ],

  experience: [
    {
      role: 'Estagiário (Programador)',
      company: 'Yankton Technologies',
      location: 'Home-office',
      period: 'mar 2024 — Atual',
      highlights: [
        'Desenvolvimento e manutenção de aplicações web com foco em React, TypeScript, Next.js e Vite.',
        'Implementação de interfaces responsivas, regras de negócio, formulários, fluxos de agendamento e integração com APIs.',
        'Atuação também em backend com NestJS e TypeORM, além da manutenção de sistemas legados.',
        'Participação em projetos para Santander, B3, Museu Light, Teatro Santander, Heineken, CAAB, Ping Seguro e outros clientes.',
      ],
    },
  ],

  projects: [
    {
      name: 'CodeMpi',
      description:
        'Plataforma educacional para aprender programação do zero a níveis avançados, com aulas, exercícios, revisão de conceitos, editor CodeMirror e experiência mobile-first.',
      link: 'https://github.com/maurodferreira/CodeMpi',
      tags: ['React', 'TypeScript', 'Vite', 'CodeMirror'],
    },
    {
      name: 'Museu Light',
      description:
        'Evolução do site e dos fluxos de visitação, incluindo conteúdo interativo, responsividade, agendamentos, integrações com API e manutenção de sistemas modernos e legados.',
      tags: ['Next.js', 'NestJS', 'TypeORM', 'AngularJS'],
    },
    {
      name: 'Heineken GameTalent',
      description:
        'Desenvolvimento de experiências interativas em React, incluindo o módulo Mestre das Palavras com exercícios, dicas, cronômetro, critérios de aprovação e fluxo de conclusão.',
      tags: ['React', 'JavaScript', 'UX', 'Lógica de jogo'],
    },
    {
      name: 'NR01',
      description:
        'Aplicação com fluxo de avaliação psicossocial, frontend em React/TypeScript e backend em NestJS, utilizando formulários validados e persistência em PostgreSQL.',
      tags: ['React', 'MUI', 'NestJS', 'PostgreSQL'],
    },
    {
      name: 'CAAB',
      description:
        'Trabalho em fluxos de agendamento com horários, indisponibilidades, validações e testes de regras de negócio.',
      tags: ['Agendamento', 'Regras de negócio', 'QA'],
    },
  ],

  clients: [
    'Santander',
    'B3 Investimentos',
    'Cultura B3',
    'Teatro Santander',
    'Ping Seguro',
    'SM Reguladora',
    'ABAC',
  ],

  education: [
    {
      course: 'Engenharia da Computação',
      institution: 'Universidade Tecnológica Federal do Paraná (UTFPR)',
      location: 'Cornélio Procópio, Paraná',
      period: 'jul 2023 — conclusão prevista em 2027',
    },
  ],

  courses: [
    {
      title: 'Curso de JavaScript Completo',
      institution: 'Udemy',
      period: 'fev 2024 — mai 2024',
    },
    {
      title: 'Introdução a Python para Ciência de Dados',
      institution: 'UTFPR',
      period: 'nov 2023',
    },
    {
      title: 'Algoritmo e Lógica de Programação — O Curso Completo',
      institution: 'Udemy',
      period: 'ago 2022 — set 2022',
    },
    {
      title: 'Front-end: HTML e CSS',
      institution: 'SECOMP 2024 — UNECT',
      period: 'out 2024',
    },
    {
      title: 'Introdução ao Power BI',
      institution: 'SECOMP 2024 — Douglas Azevedo / TO Brasil',
      period: 'out 2024',
    },
  ],

  leadership: [
    {
      organization: 'Ordem DeMolay — Capítulo Mozart Vallim nº 793',
      role: 'Liderança e atividades extracurriculares',
      period: '2017 — 2023',
      highlights: [
        'Atuação como Escrivão do capítulo, com duas Canetas de Ouro em 2021.',
        'Atuação como Mestre Conselheiro.',
        'Reconhecimento por Serviço Meritório em dezembro de 2023.',
      ],
    },
  ],

  ui: {
    navigation: {
      about: 'Sobre',
      skills: 'Stack',
      experience: 'Experiência',
      projects: 'Projetos',
      education: 'Educação',
      resume: 'Currículo',
      search: 'Pesquisar',
      theme: 'Alternar tema',
      menu: 'Abrir menu',
    },
    hero: {
      scroll: 'Role para explorar',
      email: 'Email',
      phone: 'Telefone',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      website: 'Website',
    },
    sections: {
      about: 'Sobre',
      skills: 'Stack & Tecnologias',
      skillsSubtitle: 'Tecnologias e ferramentas que fazem parte do meu trabalho.',
      experience: 'Experiência',
      experienceSubtitle: 'Experiência profissional e responsabilidades.',
      projects: 'Projetos em destaque',
      projectsSubtitle: 'Alguns dos projetos em que tive atuação técnica mais direta.',
      clients: 'Outros projetos e clientes',
      clientsSubtitle: 'Marcas e produtos dos quais participei durante minha trajetória profissional.',
      education: 'Educação',
      educationSubtitle: 'Formação acadêmica.',
      courses: 'Cursos',
      coursesSubtitle: 'Formação complementar relevante para desenvolvimento e tecnologia.',
      leadership: 'Liderança',
      leadershipSubtitle: 'Experiências extracurriculares que contribuíram para comunicação e responsabilidade.',
    },
    search: {
      placeholder: 'Pesquisar stack, projetos, cursos e seções...',
      empty: 'Nenhum resultado encontrado.',
      section: 'Seção',
      skill: 'Tecnologia',
      project: 'Projeto',
      course: 'Curso',
    },
    resume: {
      back: 'Voltar ao portfólio',
      print: 'Imprimir / Salvar PDF',
      summary: 'Resumo profissional',
      experience: 'Experiência',
      projects: 'Projetos selecionados',
      skills: 'Tecnologias',
      education: 'Formação',
      courses: 'Cursos',
      contact: 'Contato',
    },
  },
}

const en: PortfolioData = {
  personal: {
    ...sharedPersonal,
    location: 'Cornélio Procópio, Paraná, Brazil',
    title: 'Software Developer',
    subtitle: 'React • TypeScript • Next.js • Node.js',
  },

  summary:
    'Software Developer with experience building and maintaining web applications across different industries. My work is mainly focused on React and TypeScript, covering user interfaces, business rules, API integration and maintenance of existing systems. I have contributed to projects for brands such as Santander, B3, Heineken and Museu Light, while also building personal products such as CodeMpi.',

  skills: [
    {
      name: 'Front-end',
      description: 'Main area of expertise',
      skills: [
        { name: 'React', level: 'primary' },
        { name: 'TypeScript', level: 'primary' },
        { name: 'Next.js', level: 'primary' },
        { name: 'JavaScript', level: 'primary' },
        { name: 'Vite', level: 'secondary' },
        { name: 'AngularJS', level: 'secondary' },
        { name: 'HTML', level: 'secondary' },
        { name: 'CSS', level: 'secondary' },
        { name: 'MUI', level: 'secondary' },
      ],
    },
    {
      name: 'Back-end & APIs',
      description: 'Services and business rules',
      skills: [
        { name: 'Node.js', level: 'primary' },
        { name: 'NestJS', level: 'primary' },
        { name: 'TypeORM', level: 'primary' },
        { name: 'REST APIs', level: 'secondary' },
      ],
    },
    {
      name: 'Data',
      description: 'Relational databases',
      skills: [
        { name: 'PostgreSQL', level: 'primary' },
        { name: 'MySQL', level: 'secondary' },
        { name: 'SQL Server', level: 'secondary' },
      ],
    },
    {
      name: 'React ecosystem',
      description: 'Libraries used in day-to-day work',
      skills: [
        { name: 'TanStack Query', level: 'primary' },
        { name: 'React Hook Form', level: 'secondary' },
        { name: 'Zod', level: 'secondary' },
        { name: 'CodeMirror', level: 'secondary' },
        { name: 'dayjs', level: 'secondary' },
        { name: 'lodash', level: 'secondary' },
      ],
    },
    {
      name: 'Tools',
      description: 'Development workflow',
      skills: [
        { name: 'Git', level: 'primary' },
        { name: 'GitHub', level: 'primary' },
        { name: 'VS Code', level: 'primary' },
        { name: 'npm', level: 'secondary' },
        { name: 'pnpm', level: 'secondary' },
      ],
    },
    {
      name: 'Additional knowledge',
      description: 'Programming foundations',
      skills: [
        { name: 'Python', level: 'secondary' },
        { name: 'C', level: 'secondary' },
        { name: 'C#', level: 'secondary' },
      ],
    },
  ],

  experience: [
    {
      role: 'Programming Intern',
      company: 'Yankton Technologies',
      location: 'Remote',
      period: 'Mar 2024 — Present',
      highlights: [
        'Development and maintenance of web applications focused on React, TypeScript, Next.js and Vite.',
        'Implementation of responsive interfaces, business rules, forms, scheduling flows and API integrations.',
        'Back-end contributions with NestJS and TypeORM, plus maintenance of legacy systems.',
        'Contributed to projects for Santander, B3, Museu Light, Teatro Santander, Heineken, CAAB, Ping Seguro and other clients.',
      ],
    },
  ],

  projects: [
    {
      name: 'CodeMpi',
      description:
        'Educational platform for learning programming from beginner to advanced levels, featuring lessons, exercises, concept review, a CodeMirror editor and a mobile-first experience.',
      link: 'https://github.com/maurodferreira/CodeMpi',
      tags: ['React', 'TypeScript', 'Vite', 'CodeMirror'],
    },
    {
      name: 'Museu Light',
      description:
        'Evolution of the website and visitor flows, including interactive content, responsive interfaces, scheduling, API integrations and maintenance across modern and legacy systems.',
      tags: ['Next.js', 'NestJS', 'TypeORM', 'AngularJS'],
    },
    {
      name: 'Heineken GameTalent',
      description:
        'Development of interactive React experiences, including the Mestre das Palavras module with exercises, hints, timer, passing criteria and completion flows.',
      tags: ['React', 'JavaScript', 'UX', 'Game logic'],
    },
    {
      name: 'NR01',
      description:
        'Application with a psychosocial assessment flow, React/TypeScript front-end and NestJS back-end, using validated forms and PostgreSQL persistence.',
      tags: ['React', 'MUI', 'NestJS', 'PostgreSQL'],
    },
    {
      name: 'CAAB',
      description:
        'Work on scheduling flows with time slots, unavailability rules, validations and business-rule testing.',
      tags: ['Scheduling', 'Business rules', 'QA'],
    },
  ],

  clients: [
    'Santander',
    'B3 Investimentos',
    'Cultura B3',
    'Teatro Santander',
    'Ping Seguro',
    'SM Reguladora',
    'ABAC',
  ],

  education: [
    {
      course: 'Computer Engineering',
      institution: 'Federal University of Technology — Paraná (UTFPR)',
      location: 'Cornélio Procópio, Paraná, Brazil',
      period: 'Jul 2023 — expected 2027',
    },
  ],

  courses: [
    {
      title: 'Complete JavaScript Course',
      institution: 'Udemy',
      period: 'Feb 2024 — May 2024',
    },
    {
      title: 'Introduction to Python for Data Science',
      institution: 'UTFPR',
      period: 'Nov 2023',
    },
    {
      title: 'Algorithms and Programming Logic — Complete Course',
      institution: 'Udemy',
      period: 'Aug 2022 — Sep 2022',
    },
    {
      title: 'Front-end: HTML and CSS',
      institution: 'SECOMP 2024 — UNECT',
      period: 'Oct 2024',
    },
    {
      title: 'Introduction to Power BI',
      institution: 'SECOMP 2024 — Douglas Azevedo / TO Brasil',
      period: 'Oct 2024',
    },
  ],

  leadership: [
    {
      organization: 'DeMolay Order — Mozart Vallim Chapter no. 793',
      role: 'Leadership and extracurricular activities',
      period: '2017 — 2023',
      highlights: [
        'Served as Chapter Scribe, receiving two Golden Pen recognitions in 2021.',
        'Served as Master Councilor.',
        'Received a Meritorious Service recognition in December 2023.',
      ],
    },
  ],

  ui: {
    navigation: {
      about: 'About',
      skills: 'Stack',
      experience: 'Experience',
      projects: 'Projects',
      education: 'Education',
      resume: 'Resume',
      search: 'Search',
      theme: 'Toggle theme',
      menu: 'Open menu',
    },
    hero: {
      scroll: 'Scroll to explore',
      email: 'Email',
      phone: 'Phone',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      website: 'Website',
    },
    sections: {
      about: 'About',
      skills: 'Stack & Technologies',
      skillsSubtitle: 'Technologies and tools that are part of my work.',
      experience: 'Experience',
      experienceSubtitle: 'Professional experience and responsibilities.',
      projects: 'Featured Projects',
      projectsSubtitle: 'Projects in which I had more direct technical involvement.',
      clients: 'Other projects and clients',
      clientsSubtitle: 'Brands and products I contributed to throughout my professional experience.',
      education: 'Education',
      educationSubtitle: 'Academic background.',
      courses: 'Courses',
      coursesSubtitle: 'Additional education relevant to software development and technology.',
      leadership: 'Leadership',
      leadershipSubtitle: 'Extracurricular experiences that strengthened communication and responsibility.',
    },
    search: {
      placeholder: 'Search stack, projects, courses and sections...',
      empty: 'No results found.',
      section: 'Section',
      skill: 'Technology',
      project: 'Project',
      course: 'Course',
    },
    resume: {
      back: 'Back to portfolio',
      print: 'Print / Save PDF',
      summary: 'Professional Summary',
      experience: 'Experience',
      projects: 'Selected Projects',
      skills: 'Technologies',
      education: 'Education',
      courses: 'Courses',
      contact: 'Contact',
    },
  },
}

export const portfolioByLanguage: Record<Language, PortfolioData> = { pt, en }
