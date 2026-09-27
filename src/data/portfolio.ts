import type { PortfolioData } from '../types/portfolio'

/**
 * EDITE ESTE ARQUIVO para trocar as informações do portfólio.
 * O layout lê os dados daqui para evitar textos espalhados pelos componentes.
 */
export const portfolio: PortfolioData = {
  personal: {
    fullName: 'Mauro Ferreira',
    shortName: 'Mauro Ferreira',
    title: 'Desenvolvedor de Software',
    location: 'Paraná, Brasil',
    email: 'seuemail@exemplo.com',
    phone: '+55 (00) 00000-0000',
    github: 'https://github.com/maurodferreira',
    linkedin: 'https://www.linkedin.com/in/seu-usuario',
    website: '',
    initials: 'MF',
  },
  summary:
    'Desenvolvedor focado em construir experiências web modernas, responsivas e bem estruturadas. Gosto de transformar problemas reais em interfaces claras, produtos consistentes e código fácil de manter.',
  skills: [
    {
      name: 'Frontend',
      description: 'Tecnologias principais',
      skills: [
        { name: 'React', level: 'primary' },
        { name: 'TypeScript', level: 'primary' },
        { name: 'Next.js', level: 'primary' },
        { name: 'Vite', level: 'secondary' },
        { name: 'HTML', level: 'secondary' },
        { name: 'CSS', level: 'secondary' },
      ],
    },
    {
      name: 'Backend',
      description: 'APIs e serviços',
      skills: [
        { name: 'Node.js', level: 'primary' },
        { name: 'NestJS', level: 'primary' },
        { name: 'TypeORM', level: 'secondary' },
        { name: 'REST APIs', level: 'secondary' },
      ],
    },
    {
      name: 'Ferramentas',
      description: 'Fluxo de desenvolvimento',
      skills: [
        { name: 'Git', level: 'primary' },
        { name: 'GitHub', level: 'primary' },
        { name: 'VS Code', level: 'secondary' },
        { name: 'SQL', level: 'secondary' },
      ],
    },
  ],
  experience: [
    {
      role: 'Desenvolvedor de Software',
      company: 'Sua empresa atual',
      location: 'Remoto / Brasil',
      period: '2025 — Atual',
      highlights: [
        'Descreva aqui sua principal responsabilidade ou impacto no projeto.',
        'Adicione tecnologias, produtos ou resultados relevantes.',
        'Prefira frases curtas, objetivas e fáceis de escanear.',
      ],
    },
    {
      role: 'Experiência anterior',
      company: 'Empresa / Projeto',
      location: 'Brasil',
      period: '2024 — 2025',
      highlights: [
        'Inclua aqui outra experiência profissional, estágio ou projeto relevante.',
        'Você pode remover este card se não precisar dele.',
      ],
    },
  ],
  projects: [
    {
      name: 'Projeto em destaque',
      description:
        'Use este espaço para apresentar um projeto forte do seu portfólio, explicando em uma frase o problema que ele resolve.',
      link: 'https://github.com/maurodferreira',
      tags: ['React', 'TypeScript'],
    },
    {
      name: 'Projeto pessoal',
      description:
        'Outro projeto que demonstre iniciativa, arquitetura, interface ou integração com APIs.',
      link: 'https://github.com/maurodferreira',
      tags: ['Vite', 'Node.js'],
    },
    {
      name: 'Aplicação web',
      description:
        'Troque este conteúdo por um projeto real e adicione o link do repositório ou da aplicação publicada.',
      tags: ['Frontend', 'UI'],
    },
  ],
  education: [
    {
      course: 'Engenharia da Computação',
      institution: 'Sua instituição de ensino',
      location: 'Paraná, Brasil',
      period: '2023 — Atual',
    },
    {
      course: 'Curso / Certificação',
      institution: 'Instituição',
      location: 'Online',
      period: '2024',
    },
  ],
}
