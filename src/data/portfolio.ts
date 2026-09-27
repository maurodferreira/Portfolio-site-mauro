import type { PortfolioData } from '../types/portfolio'

/**
 * Fonte inicial: currículo de Mauro Diogo Fioravante Ferreira.
 * Edite este arquivo para manter o portfólio atualizado.
 */
export const portfolio: PortfolioData = {
  personal: {
    fullName: 'Mauro Diogo Fioravante Ferreira',
    shortName: 'Mauro Ferreira',
    title: 'Programador Front-end',
    location: 'Cornélio Procópio, Paraná, Brasil',
    email: 'maurodiogo56@gmail.com',
    phone: '',
    github: 'https://github.com/maurodferreira',
    linkedin: '',
    website: '',
    initials: 'MF',
  },

  summary:
    'Programador com experiência profissional em desenvolvimento front-end, com foco na construção de interfaces eficientes, intuitivas e voltadas à experiência do usuário. Busco contribuir na criação de soluções inovadoras, apoiar equipes no desenvolvimento de novos projetos e enfrentar desafios tecnológicos de forma criativa e estratégica.',

  skills: [
    {
      name: 'Front-end',
      description: 'Principal área de atuação',
      skills: [
        { name: 'JavaScript', level: 'primary' },
        { name: 'React', level: 'primary' },
        { name: 'HTML e CSS', level: 'primary' },
        { name: 'TypeScript', level: 'secondary' },
      ],
    },
    {
      name: 'Programação',
      description: 'Linguagens e tecnologias',
      skills: [
        { name: 'Node.js', level: 'secondary' },
        { name: 'C', level: 'secondary' },
        { name: 'Python', level: 'secondary' },
        { name: 'C#', level: 'secondary' },
      ],
    },
    {
      name: 'Competências',
      description: 'Trabalho e colaboração',
      skills: [
        { name: 'Comunicação eficaz', level: 'secondary' },
        { name: 'Trabalho em equipe', level: 'secondary' },
        { name: 'Liderança', level: 'secondary' },
        { name: 'Organização', level: 'secondary' },
        { name: 'Pensamento analítico', level: 'secondary' },
      ],
    },
    {
      name: 'Idiomas',
      description: 'Idiomas mencionados no currículo',
      skills: [
        { name: 'Inglês', level: 'secondary' },
        { name: 'Espanhol', level: 'secondary' },
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
        'Atuação com especialização em front-end, desenvolvendo interfaces eficientes e intuitivas com foco em experiência do usuário.',
        'Participação em projetos para B3 Investimentos, LP Cultura B3, Banco Santander, Teatro Santander, CAAB, Ping Seguro, SM Reguladora, Heineken Quiz e Cultura B3.',
        'Experiência em projetos envolvendo websites e aplicações.',
      ],
    },
  ],

  projects: [
    {
      name: 'B3 Investimentos',
      description: 'Participação no desenvolvimento do projeto durante a atuação na Yankton Technologies.',
      tags: ['Front-end', 'Projeto profissional'],
    },
    {
      name: 'LP Cultura B3',
      description: 'Participação no desenvolvimento do projeto durante a atuação na Yankton Technologies.',
      tags: ['Front-end', 'Projeto profissional'],
    },
    {
      name: 'Banco Santander',
      description: 'Participação no desenvolvimento de website e aplicativo.',
      tags: ['Website', 'Aplicativo'],
    },
    {
      name: 'Teatro Santander',
      description: 'Participação no desenvolvimento do projeto durante a atuação na Yankton Technologies.',
      tags: ['Front-end', 'Projeto profissional'],
    },
    {
      name: 'CAAB',
      description: 'Participação em projeto da Caixa de Assistência dos Advogados da Bahia.',
      tags: ['Front-end', 'Projeto profissional'],
    },
    {
      name: 'Ping Seguro',
      description: 'Participação no desenvolvimento do aplicativo Ping Seguro.',
      tags: ['Aplicativo', 'Projeto profissional'],
    },
    {
      name: 'SM Reguladora',
      description: 'Participação no desenvolvimento do projeto durante a atuação na Yankton Technologies.',
      tags: ['Front-end', 'Projeto profissional'],
    },
    {
      name: 'Heineken Quiz',
      description: 'Participação no desenvolvimento do projeto Heineken Quiz.',
      tags: ['Front-end', 'Projeto profissional'],
    },
    {
      name: 'Cultura B3',
      description: 'Participação no desenvolvimento do projeto durante a atuação na Yankton Technologies.',
      tags: ['Front-end', 'Projeto profissional'],
    },
  ],

  education: [
    {
      course: 'Engenharia da Computação',
      institution: 'Universidade Tecnológica Federal do Paraná (UTFPR)',
      location: 'Cornélio Procópio, Paraná',
      period: 'jul 2023 — conclusão prevista em 2027',
    },
    {
      course: 'Ensino Médio',
      institution: 'Escola Águia Master',
      location: 'Cornélio Procópio, Paraná',
      period: 'Concluído em 2022',
    },
  ],
}
