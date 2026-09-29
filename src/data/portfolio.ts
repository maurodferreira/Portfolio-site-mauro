import type { Language, PortfolioData } from '../types/portfolio'

const sharedPersonal = {
  fullName: 'Mauro Diogo Fioravante Ferreira',
  shortName: 'Mauro Ferreira',
  location: 'Cornélio Procópio, Paraná, Brasil',
  email: 'maurodiogo56@gmail.com',
  phone: '+55 (43) 98482-0118',
  github: 'https://github.com/maurodferreira',
  linkedin: 'https://www.linkedin.com/in/mauro-diogo-fioravante-ferreira-aa5114291/',
  website: '',
  initials: 'MF',
  avatar: '/profile-mauro.png',
}

const pt: PortfolioData = {
  personal: {
    ...sharedPersonal,
    title: 'Desenvolvedor Full Stack',
    subtitle: 'React • TypeScript • Next.js • Node.js',
    availability: 'Remoto • PJ',
  },

  summary:
    'Desenvolvedor Full Stack com experiência na construção e manutenção de aplicações web para projetos de diferentes segmentos. Atuo profissionalmente em regime PJ, trabalhando principalmente com React, TypeScript, Next.js, Node.js e NestJS, desde a implementação de interfaces e regras de negócio até integração com APIs, bancos de dados e manutenção de sistemas existentes. Já participei de projetos para marcas como Santander, B3, Heineken e Museu Light, além de desenvolver projetos próprios como o CodeMpi.',

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
      role: 'Desenvolvedor Full Stack',
      company: 'Yankton Technologies',
      location: 'Home-office • PJ',
      period: 'mar 2024 — Atual',
      highlights: [
        'Atuação como Desenvolvedor Full Stack em regime PJ, no desenvolvimento e manutenção de aplicações web.',
        'Implementação de interfaces responsivas, regras de negócio, formulários, fluxos de agendamento e integração com APIs.',
        'Desenvolvimento de front-end com React, TypeScript, Next.js e Vite, além de backend com Node.js, NestJS e TypeORM.',
        'Participação em projetos para Santander, B3, Museu Light, Teatro Santander, Heineken, CAAB, Ping Seguro e outros clientes.',
      ],
    },
  ],

  projects: [
    {
      name: 'CodeMpi',
      description:
        'Plataforma educacional para aprender programação do zero a níveis avançados, com aulas, exercícios, revisão de conceitos, editor CodeMirror e experiência mobile-first.',
      contribution:
        'Planejamento do fluxo de aprendizagem e implementação das aulas, exercícios, editor de código, revisão de conceitos e refinamento da experiência em desktop e mobile.',
      highlights: [
        'Editor CodeMirror integrado ao fluxo de prática.',
        'Sistema de exercícios, dicas, XP e revisão de conceitos.',
      ],
      status: 'Em desenvolvimento • Repositório privado',
      tags: ['React', 'TypeScript', 'Vite', 'CodeMirror'],
    },
    {
      name: 'Portfolio Site',
      description:
        'Portfólio profissional bilíngue criado para apresentar experiência, projetos, habilidades técnicas e versões de currículo visual e ATS.',
      contribution:
        'Arquitetura e desenvolvimento completo do site, com foco em responsividade, acessibilidade, SEO, experiência do recrutador e manutenção centralizada dos dados.',
      highlights: [
        'PT/EN, tema claro/escuro e currículos visual e ATS.',
        'SEO estruturado, Open Graph, JSON-LD e design responsivo.',
      ],
      link: 'https://github.com/maurodferreira/Portfolio-site-mauro',
      tags: ['React', 'TypeScript', 'Vite', 'SEO'],
    },
    {
      name: 'Museu Light',
      description:
        'Evolução do site e dos fluxos de visitação, incluindo conteúdo interativo, responsividade, agendamentos, integrações com API e manutenção de sistemas modernos e legados.',
      contribution:
        'Atuação no frontend Next.js e apoio no backend NestJS, com manutenção de funcionalidades atuais e integração com partes do sistema legado.',
      highlights: [
        'Páginas de Ebooks, Jogos, Playlists e Visite.',
        'Fluxos de visitação, agendamento e integração com API.',
      ],
      tags: ['Next.js', 'NestJS', 'TypeORM', 'AngularJS'],
    },
    {
      name: 'Heineken GameTalent',
      description:
        'Desenvolvimento de experiências interativas em React, incluindo o módulo Mestre das Palavras com exercícios, dicas, cronômetro, critérios de aprovação e fluxo de conclusão.',
      contribution:
        'Implementação do módulo Mestre das Palavras e das regras de progressão, feedback, erro e conclusão da atividade.',
      highlights: [
        '6 exercícios com critério de aprovação de 70%.',
        'Dicas, cronômetro e tratamento do fluxo de erro/conclusão.',
      ],
      tags: ['React', 'JavaScript', 'UX', 'Lógica de jogo'],
    },
    {
      name: 'NR01',
      description:
        'Aplicação com fluxo de avaliação psicossocial, frontend em React/TypeScript e backend em NestJS, utilizando formulários validados e persistência em PostgreSQL.',
      contribution:
        'Construção e integração do fluxo psicossocial entre frontend e API, com formulários tipados, validação e persistência de dados.',
      highlights: [
        'React Query, React Hook Form e Zod no frontend.',
        'NestJS, TypeORM e PostgreSQL no backend.',
      ],
      tags: ['React', 'MUI', 'NestJS', 'PostgreSQL'],
    },
    {
      name: 'CAAB',
      description:
        'Trabalho em fluxos de agendamento com horários, indisponibilidades, validações e testes de regras de negócio.',
      contribution:
        'Validação funcional e QA dos cenários de agendamento, indisponibilidades e regras de horários.',
      highlights: [
        'Testes de horários, bloqueios e indisponibilidades.',
        'Validação de comportamento e regras de negócio.',
      ],
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
    {
      course: 'Educação Física — Bacharelado',
      institution: 'UNOPAR',
      location: '',
      period: 'fev 2026 — conclusão prevista em jan 2030',
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
    role: 'Escrivão e Mestre Conselheiro',
    period: '2017 — 2026',
    highlights: [
      'Escrivão: responsável pela gestão da documentação oficial, atas de reuniões e registros administrativos do Capítulo; recebi duas Canetas de Ouro em 2021.',
      'Mestre Conselheiro: eleito para liderar o Capítulo, presidindo reuniões, representando seus membros e supervisionando projetos e atividades ao longo da gestão.',
      'Serviço Meritório: cumpri os requisitos da Campanha Nacional de Incentivo à Excelência e fui agraciado com o Prêmio de Past Mestre Conselheiro por Serviços Meritórios em dezembro de 2023.'
    ],
  },
],

  ui: {
    navigation: {
      about: 'Resumo Profissional',
      skills: 'Habilidades Técnicas',
      experience: 'Experiência de Trabalho',
      projects: 'Projetos',
      education: 'Formação',
      resume: 'Currículo',
      resumeVisual: 'Currículo (PDF)',
      resumeAts: 'Currículo ATS (PDF)',
      menuSections: 'Seções',
      menuActions: 'Ações',
      search: 'Pesquisar',
      theme: 'Alternar tema',
      menu: 'Abrir menu',
    },
    hero: {
      email: 'Email',
      openGmail: 'Abrir no Gmail',
      copyEmail: 'Copiar email',
      emailCopied: 'Email copiado',
      phone: 'Telefone',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      website: 'Website',
    },
    sections: {
      about: 'Resumo Profissional',
      skills: 'Habilidades Técnicas',
      skillsSubtitle: 'Tecnologias, bibliotecas e ferramentas que fazem parte do meu trabalho.',
      experience: 'Experiência de Trabalho',
      experienceSubtitle: 'Experiência profissional e responsabilidades.',
      projects: 'Projetos em destaque',
      projectsSubtitle: 'Alguns dos projetos em que tive atuação técnica mais direta.',
      clients: 'Outros projetos e clientes',
      clientsSubtitle: 'Marcas e produtos dos quais participei durante minha trajetória profissional.',
      education: 'Formação',
      educationSubtitle: 'Formação acadêmica.',
      courses: 'Cursos',
      coursesSubtitle: 'Formação complementar relevante para desenvolvimento e tecnologia.',
      leadership: 'Liderança & Atividades Extracurriculares',
      leadershipSubtitle: 'Experiências que desenvolveram liderança, comunicação, organização e responsabilidade.',
      projectContribution: 'Minha atuação',
      projectHighlights: 'Destaques',
      projectOpen: 'Ver código',
      contactTitle: 'Vamos conversar?',
      contactSubtitle: 'Se meu perfil fizer sentido para sua equipe ou projeto, estes são os melhores canais para entrar em contato comigo.',
    },
    search: {
      placeholder: 'Pesquisar habilidades, projetos, cursos e seções...',
      empty: 'Nenhum resultado encontrado.',
      section: 'Seção',
      skill: 'Habilidade técnica',
      project: 'Projeto',
      course: 'Curso',
    },
    resume: {
      back: 'Voltar ao portfólio',
      print: 'Imprimir / Salvar PDF',
      summary: 'Resumo profissional',
      experience: 'Experiência de Trabalho',
      projects: 'Projetos selecionados',
      skills: 'Habilidades Técnicas',
      education: 'Formação',
      courses: 'Cursos',
      leadership: 'Liderança & Atividades Extracurriculares',
      contact: 'Contato',
      atsLabel: 'Currículo otimizado para ATS',
    },
  },
}

const en: PortfolioData = {
  personal: {
    ...sharedPersonal,
    location: 'Cornélio Procópio, Paraná, Brazil',
    title: 'Full-Stack Developer',
    subtitle: 'React • TypeScript • Next.js • Node.js',
    availability: 'Remote • Contractor',
  },

  summary:
    'Full-Stack Developer with experience building and maintaining web applications across different industries. I work professionally as an independent contractor, mainly with React, TypeScript, Next.js, Node.js and NestJS, covering user interfaces, business rules, API integrations, databases and maintenance of existing systems. I have contributed to projects for brands such as Santander, B3, Heineken and Museu Light, while also building personal projects such as CodeMpi.',

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
      role: 'Full-Stack Developer',
      company: 'Yankton Technologies',
      location: 'Remote • Contractor',
      period: 'Mar 2024 — Present',
      highlights: [
        'Full-Stack Developer working as an independent contractor on the development and maintenance of web applications.',
        'Implementation of responsive interfaces, business rules, forms, scheduling flows and API integrations.',
        'Front-end development with React, TypeScript, Next.js and Vite, plus back-end work with Node.js, NestJS and TypeORM.',
        'Contributed to projects for Santander, B3, Museu Light, Teatro Santander, Heineken, CAAB, Ping Seguro and other clients.',
      ],
    },
  ],

  projects: [
    {
      name: 'CodeMpi',
      description:
        'Educational platform for learning programming from beginner to advanced levels, featuring lessons, exercises, concept review, a CodeMirror editor and a mobile-first experience.',
      contribution:
        'Planned the learning flow and implemented lessons, exercises, the code editor, concept review and UX refinements across desktop and mobile.',
      highlights: [
        'CodeMirror editor integrated into the practice flow.',
        'Exercise, hint, XP and concept-review system.',
      ],
      status: 'In development • Private repository',
      tags: ['React', 'TypeScript', 'Vite', 'CodeMirror'],
    },
    {
      name: 'Portfolio Site',
      description:
        'Bilingual professional portfolio built to present experience, projects, technical skills and both visual and ATS resume versions.',
      contribution:
        'Designed and developed the full site with a focus on responsiveness, accessibility, SEO, recruiter experience and centralized content maintenance.',
      highlights: [
        'PT/EN, light/dark themes and visual/ATS resumes.',
        'Structured SEO, Open Graph, JSON-LD and responsive design.',
      ],
      link: 'https://github.com/maurodferreira/Portfolio-site-mauro',
      tags: ['React', 'TypeScript', 'Vite', 'SEO'],
    },
    {
      name: 'Museu Light',
      description:
        'Evolution of the website and visitor flows, including interactive content, responsive interfaces, scheduling, API integrations and maintenance across modern and legacy systems.',
      contribution:
        'Worked on the Next.js frontend and supported the NestJS backend, maintaining current features and integrating parts of the legacy system.',
      highlights: [
        'Ebooks, Games, Playlists and Visit pages.',
        'Visitor, scheduling and API integration flows.',
      ],
      tags: ['Next.js', 'NestJS', 'TypeORM', 'AngularJS'],
    },
    {
      name: 'Heineken GameTalent',
      description:
        'Development of interactive React experiences, including the Mestre das Palavras module with exercises, hints, timer, passing criteria and completion flows.',
      contribution:
        'Implemented the Mestre das Palavras module and its progression, feedback, failure and completion rules.',
      highlights: [
        '6 exercises with a 70% passing threshold.',
        'Hints, timer and failure/completion flow handling.',
      ],
      tags: ['React', 'JavaScript', 'UX', 'Game logic'],
    },
    {
      name: 'NR01',
      description:
        'Application with a psychosocial assessment flow, React/TypeScript front-end and NestJS back-end, using validated forms and PostgreSQL persistence.',
      contribution:
        'Built and integrated the psychosocial flow between frontend and API, with typed forms, validation and data persistence.',
      highlights: [
        'React Query, React Hook Form and Zod on the frontend.',
        'NestJS, TypeORM and PostgreSQL on the backend.',
      ],
      tags: ['React', 'MUI', 'NestJS', 'PostgreSQL'],
    },
    {
      name: 'CAAB',
      description:
        'Work on scheduling flows with time slots, unavailability rules, validations and business-rule testing.',
      contribution:
        'Performed functional validation and QA for scheduling scenarios, unavailability and time-slot rules.',
      highlights: [
        'Testing of time slots, blocks and unavailability.',
        'Validation of behavior and business rules.',
      ],
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
    {
      course: "Physical Education — Bachelor's Degree",
      institution: 'UNOPAR',
      location: '',
      period: 'Feb 2026 — expected Jan 2030',
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
    organization: 'DeMolay Order — Mozart Vallim Chapter No. 793',
    role: 'Chapter Scribe and Master Councilor',
    period: '2017 — 2026',
    highlights: [
      'Chapter Scribe: oversaw official documentation, meeting minutes, and administrative records for the Chapter; received two Golden Pen Awards in 2021.',
      'Master Councilor: elected to lead the Chapter, presiding over meetings, representing its members, and overseeing projects and activities throughout the term.',
      'Meritorious Service: fulfilled the requirements of the National Excellence Campaign and was awarded the Past Master Councilor Meritorious Service Award in December 2023.'
    ],
  },
],

  ui: {
    navigation: {
      about: 'Professional Summary',
      skills: 'Technical Skills',
      experience: 'Work Experience',
      projects: 'Projects',
      education: 'Education',
      resume: 'Resume',
      resumeVisual: 'Resume (PDF)',
      resumeAts: 'ATS Resume (PDF)',
      menuSections: 'Sections',
      menuActions: 'Actions',
      search: 'Search',
      theme: 'Toggle theme',
      menu: 'Open menu',
    },
    hero: {
      email: 'Email',
      openGmail: 'Open in Gmail',
      copyEmail: 'Copy email',
      emailCopied: 'Email copied',
      phone: 'Phone',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      website: 'Website',
    },
    sections: {
      about: 'Professional Summary',
      skills: 'Technical Skills',
      skillsSubtitle: 'Technologies, libraries and tools that are part of my work.',
      experience: 'Work Experience',
      experienceSubtitle: 'Professional experience and responsibilities.',
      projects: 'Featured Projects',
      projectsSubtitle: 'Projects in which I had more direct technical involvement.',
      clients: 'Other projects and clients',
      clientsSubtitle: 'Brands and products I contributed to throughout my professional experience.',
      education: 'Education',
      educationSubtitle: 'Academic background.',
      courses: 'Courses',
      coursesSubtitle: 'Additional education relevant to software development and technology.',
      leadership: 'Leadership & Extracurricular Activities',
      leadershipSubtitle: 'Experiences that strengthened leadership, communication, organization and responsibility.',
      projectContribution: 'My contribution',
      projectHighlights: 'Highlights',
      projectOpen: 'View code',
      contactTitle: 'Let’s talk?',
      contactSubtitle: 'If my profile is a good fit for your team or project, these are the most direct ways to reach me.',
    },
    search: {
      placeholder: 'Search technical skills, projects, courses and sections...',
      empty: 'No results found.',
      section: 'Section',
      skill: 'Technical skill',
      project: 'Project',
      course: 'Course',
    },
    resume: {
      back: 'Back to portfolio',
      print: 'Print / Save PDF',
      summary: 'Professional Summary',
      experience: 'Work Experience',
      projects: 'Selected Projects',
      skills: 'Technical Skills',
      education: 'Education',
      courses: 'Courses',
      leadership: 'Leadership & Extracurricular Activities',
      contact: 'Contact',
      atsLabel: 'ATS-optimized resume',
    },
  },
}

export const portfolioByLanguage: Record<Language, PortfolioData> = { pt, en }
