// Translation system for bilingual PT-BR/EN portfolio
export type Language = 'pt' | 'en'

export interface Translations {
  header: {
    nav: {
      services: string
      premiumServices: string
      experience: string
      method: string
      skills: string
      contact: string
    }
    cta: string
  }
  hero: {
    greeting: string
    name: string
    title: string
    subtitle: string
    bio: string
    badges: {
      experience: string
      countries: string
      tools: string
    }
    cta: {
      primary: string
      secondary: string
    }
    stats: {
      experience: string
      countries: string
      projects: string
    }
  }
  services: {
    title: string
    subtitle: string
    intro: {
      title: string
      description: string
    }
    list: Array<{
      title: string
      description: string
      deliverables: string
      metrics: string
    }>
  }
  premiumServices: {
    badge: string
    title: string
    subtitle: string
    services: Array<{
      title: string
      description: string
      keyPoints?: string[]
      techStack?: string[]
      deliverables?: string[]
      diagnosticContent?: string[]
      badge: string
    }>
    differentiation: {
      text: string
      tagline: string
    }
  }
  timeline: {
    title: string
    subtitle: string
    jobs: Array<{
      title: string
      company: string
      location: string
      description: string
      achievements: string[]
    }>
  }
  beforeAfter: {
    title: string
    subtitle: string
    before: string
    after: string
    comparisons: Array<{
      before: string
      after: string
    }>
  }
  roi: {
    title: string
    subtitle: string
    metrics: Array<{
      value: string
      label: string
      description: string
    }>
  }
  whyMe: {
    title: string
    subtitle: string
    reasons: Array<{
      title: string
      description: string
    }>
  }
  method: {
    badge: string
    title: string
    subtitle: string
    steps: Array<{
      title: string
      description: string
    }>
  }
  skills: {
    title: string
    subtitle: string
    categories: Array<{
      title: string
      skills: string[]
    }>
  }
  diplomas: {
    title: string
    subtitle: string
    items: Array<{
      title: string
      institution: string
      year: string
      description: string
    }>
  }
  testimonials: {
    title: string
    subtitle: string
    items: Array<{
      name: string
      role: string
      company: string
      text: string
    }>
  }
  cta: {
    title: string
    subtitle: string
    button: string
  }
  footer: {
    tagline: string
    navigation: {
      title: string
      links: Array<{ label: string; href: string }>
    }
    services: {
      title: string
      links: Array<{ label: string; href: string }>
    }
    contact: {
      title: string
      email: string
      phone: string
      linkedin: string
    }
    legal: {
      title: string
      links: Array<{ label: string; href: string }>
    }
    copyright: string
  }
  floatingCta: {
    text: string
  }
}

export const translations: Record<Language, Translations> = {
  pt: {
    header: {
      nav: {
        services: 'Sobre',
        premiumServices: 'Resultados',
        experience: 'Experiência',
        method: 'Portfólio',
        skills: 'Certificações',
        contact: 'Contato',
      },
      cta: 'Fale Comigo',
    },
    hero: {
      greeting: 'Olá, sou',
      name: 'Rafael Moreira Ferreira',
      title: 'Gerente Sênior de Processos, Qualidade e Planejamento',
      subtitle: 'Gestão de Processos • Qualidade • Lean Seis Sigma • Operações',
      bio: '+20 anos de excelência em Gestão de Processos, Qualidade, Lean Seis Sigma e Operações. Experiência internacional na França e Estados Unidos. Especialista em SGI (ISO 9001, 14001, 45001, IATF), Planejamento Estratégico e Lean Black Belt.',
      badges: {
        experience: '+20 anos de experiência',
        countries: 'Experiência Internacional (FR/EUA)',
        tools: 'SGI • Lean Six Sigma • BPMN',
      },
      cta: {
        primary: 'Download CV',
        secondary: 'Fale comigo',
      },
      stats: {
        experience: 'Anos de experiência',
        countries: 'Países',
        projects: 'Projetos realizados',
      },
    },
    services: {
      title: 'Sobre Mim',
      subtitle: 'Expertise em Gestão de Processos, Qualidade e Excelência Operacional',
      intro: {
        title: 'Profissional sênior com experiência global em transformação de processos e qualidade',
        description: 'Mais de 20 anos de experiência em manufatura, BPO, supply chain, logística nacional e internacional, e energia. Especialista em planejamento estratégico, padronização, SGI, KPIs, e auditorias internas e externas.',
      },
      list: [
        {
          title: 'Formação e Expertise',
          description: 'Graduado em Gestão da Qualidade e Produtividade pela UnG (2011). Mais de 20 anos atuando em manufatura, BPO, supply chain, logística e energia.',
          deliverables: 'SGI (ISO 9001, 14001, 45001, IATF), Planejamento Estratégico, KPIs',
          metrics: 'Auditorias Internas e Externas, Certificações Internacionais',
        },
        {
          title: 'Experiência Internacional',
          description: 'Vivência profissional na França (startup de operações) e Estados Unidos (duas temporadas), desenvolvendo habilidades em contextos multiculturais e globais.',
          deliverables: 'Gestão internacional, Adaptabilidade cultural, Benchmarking global',
          metrics: 'Projetos multinacionais, Equipes internacionais',
        },
        {
          title: 'Liderança e Transformação Cultural',
          description: 'Habilidade comprovada em negociação, liderança de equipes multidisciplinares, transformação cultural e mapeamento de processos para excelência operacional.',
          deliverables: 'Transformação cultural, Liderança de equipes, Mapeamento de processos',
          metrics: 'Engajamento de equipes, Resultados sustentáveis',
        },
      ],
    },
    premiumServices: {
      badge: 'Possibilidades de Atuação Global',
      title: 'Integração Estratégica Internacional',
      subtitle: 'Forte aderência a projetos globais em Qualidade, Processos e Excelência Operacional',
      services: [
        {
          title: 'Consultorias Internacionais',
          description: 'Atuação em projetos de consultoria internacional com foco em Europa e França, trazendo experiência comprovada em implementação de SGI e gestão de processos.',
          keyPoints: [
            'Vivência internacional (França, EUA)',
            'Experiência em startups e multinacionais',
            'Conhecimento de normas e padrões internacionais',
            'Capacidade de trabalho multicultural',
            'Fluência em contextos globais de negócios',
          ],
          badge: 'Experiência global diferenciada para projetos internacionais.',
        },
        {
          title: 'Soluções Digitais em SGI e Qualidade',
          description: 'Forte aderência a projetos SaaS de gestão integrada, com experiência prática em implementação de sistemas informatizados de SGQ, auditorias, não-conformidades e gestão documental.',
          techStack: ['WMS/ERP/Protheus', 'Sistemas SGQ', 'BPMN', 'Ferramentas de Qualidade', 'Plataformas de Auditoria'],
          deliverables: [
            'Implementação de sistemas de gestão',
            'Integração de processos digitais',
            'Automação de auditorias e inspeções',
          ],
          badge: 'Perfeito fit para soluções tecnológicas em Qualidade e Processos.',
        },
        {
          title: 'Auditorias e Excelência Operacional',
          description: 'Auditor Líder certificado em SGI (ISO 9001, 14001, 45001) com comprovada expertise em condução de auditorias internas e externas, implementação de metodologias Lean e projetos de melhoria contínua.',
          diagnosticContent: [
            'Auditorias internas e externas de SGI',
            'Projetos Lean Black Belt',
            'Implementação de 5S e Run at Rate',
            'Análise de conformidade e gaps',
            'Planos de ação e melhoria contínua',
          ],
          badge: 'Especialista certificado com resultados comprovados em excelência operacional.',
        },
      ],
      differentiation: {
        text: 'Rafael combina experiência técnica sólida com vivência internacional e mentalidade de excelência operacional.',
        tagline: 'Um profissional sênior com visão global e resultados locais.',
      },
    },
    timeline: {
      title: 'Experiência Profissional',
      subtitle: '+20 anos de expertise em Qualidade, Processos e Operações',
      jobs: [
        {
          title: 'Gerente de Processos Sênior',
          company: 'Maestria Serviços em Saúde',
          location: 'Brasil',
          description: 'Estruturação estratégica de processos via Cadeia de Valor, modelagem BPMN, desdobramento de planejamento estratégico, KPIs e SLAs',
          achievements: [
            'Estruturação estratégica de processos via Cadeia de Valor',
            'Modelagem BPMN e mapeamento de processos críticos',
            'Desdobramento de planejamento estratégico em processos operacionais',
            'Definição e implementação de KPIs, SLAs e catálogo de serviços',
            'Auditorias internas e programas de treinamento',
            'Base técnica de processos para implementação de ERP',
          ],
        },
        {
          title: 'Coordenador de Qualidade',
          company: 'COTESA Engenharia',
          location: 'Brasil',
          description: 'Manutenção da conformidade SGI (ISO 9001, 14001, 45001), liderança de auditorias, gestão de processos e KPIs',
          achievements: [
            'Manutenção da conformidade SGI (ISO 9001, 14001, 45001)',
            'Alinhamento SESMT com gestão ambiental integrada',
            'Liderança de auditorias internas e externas',
            'Revisão de missão, visão e valores organizacionais',
            'Implantação de sistema de KPIs e análises críticas',
            'Gestão completa de processos, documentação e software de gestão',
          ],
        },
        {
          title: 'Consultor do Sistema de Gestão da Qualidade',
          company: 'Argos Global Partner Services',
          location: 'Brasil / Internacional',
          description: 'Gestão global do SGQ, liderança de equipes internacionais, projetos Lean Black Belt e implementação de metodologias',
          achievements: [
            'Gestão global do Sistema de Gestão da Qualidade',
            'Liderança de equipes internacionais e multiculturais',
            'Benchmarking e reuniões estratégicas com clientes multinacionais',
            'Implantação de 5S em grupo multinacional',
            'Implementação de logística interna em clientes-chave',
            'Condução de auditorias, inspeções e tratamento de não-conformidades',
            'Projetos Lean Black Belt focados em eficiência operacional',
            'Projetos Run at Rate (R&R) com ganhos sustentáveis',
          ],
        },
      ],
    },
    beforeAfter: {
      title: 'Resultados Alcançados',
      subtitle: 'Impacto mensurável e transformação concreta nas organizações',
      before: 'Antes',
      after: 'Depois',
      comparisons: [
        {
          before: 'Reclamações frequentes de clientes',
          after: 'Redução para 0 reclamações em 3 contas-chave',
        },
        {
          before: 'Acurácia de inventário em 89%',
          after: 'Acurácia elevada para 98-99%',
        },
        {
          before: 'NPS de apenas 15%',
          after: 'NPS aumentado para 72%',
        },
        {
          before: 'Insatisfação com fornecedores em 22%',
          after: 'Insatisfação reduzida para menos de 5%',
        },
        {
          before: 'Processos manuais e sem padronização',
          after: 'Sistema SGQ informatizado com economia significativa',
        },
      ],
    },
    roi: {
      title: 'Impacto Mensurável',
      subtitle: 'Resultados concretos e quantificáveis',
      metrics: [
        {
          value: '0',
          label: 'Reclamações de clientes',
          description: 'Redução completa em 3 contas-chave',
        },
        {
          value: '98-99%',
          label: 'Acurácia de inventário',
          description: 'Aumento de 89% para 98-99%',
        },
        {
          value: '+57pp',
          label: 'NPS',
          description: 'Crescimento de 15% para 72%',
        },
        {
          value: '+28%',
          label: 'Novos negócios',
          description: 'Após integrar Qualidade na prospecção',
        },
      ],
    },
    whyMe: {
      title: 'Valores Profissionais',
      subtitle: 'Princípios que guiam minha atuação e entrega de resultados',
      reasons: [
        {
          title: 'Excelência Operacional',
          description: 'Compromisso com a busca contínua pela melhoria e eficiência em todos os processos',
        },
        {
          title: 'Rigor Técnico',
          description: 'Aplicação precisa de metodologias, normas e melhores práticas internacionais',
        },
        {
          title: 'Ética e Transparência',
          description: 'Conduta profissional íntegra, com comunicação clara e honesta',
        },
        {
          title: 'Mentalidade Lean',
          description: 'Foco em eliminação de desperdícios e criação de valor sustentável',
        },
        {
          title: 'Foco em Desempenho e Resultados',
          description: 'Orientação para entrega de resultados mensuráveis e impacto real',
        },
        {
          title: 'Melhoria Contínua',
          description: 'Cultura de aprendizado constante e evolução sistemática',
        },
        {
          title: 'Liderança Colaborativa',
          description: 'Engajamento de equipes e desenvolvimento de pessoas',
        },
        {
          title: 'Mentalidade Internacional',
          description: 'Visão global com adaptabilidade a diferentes contextos culturais',
        },
      ],
    },
    method: {
      badge: 'Meu Método',
      title: 'Abordagem Estruturada em Gestão de Processos e Qualidade',
      subtitle: 'Metodologia comprovada para transformar performance organizacional através de processos, qualidade e excelência operacional',
      steps: [
        {
          title: 'Diagnóstico Estratégico de Processos',
          description: 'Análise profunda da cadeia de valor, mapeamento de processos-chave e identificação de gaps críticos de performance.',
        },
        {
          title: 'Modelagem e Padronização',
          description: 'Modelagem BPMN, criação de procedimentos e padrões alinhados às melhores práticas e normas internacionais.',
        },
        {
          title: 'Implementação de SGI e KPIs',
          description: 'Estruturação de Sistema de Gestão Integrado (ISO 9001, 14001, 45001) com definição de indicadores estratégicos e operacionais.',
        },
        {
          title: 'Auditorias e Conformidade',
          description: 'Condução de auditorias internas e externas, tratamento de não-conformidades e garantia de conformidade contínua.',
        },
        {
          title: 'Melhoria Contínua e Lean',
          description: 'Aplicação de metodologias Lean Six Sigma, projetos de melhoria e acompanhamento de resultados sustentáveis.',
        },
      ],
    },
    skills: {
      title: 'Competências e Certificações',
      subtitle: 'Expertise técnica e qualificações profissionais',
      categories: [
        {
          title: 'Sistemas de Gestão Integrada',
          skills: ['ISO 9001', 'ISO 14001', 'ISO 45001', 'IATF 16949', 'Auditorias Internas/Externas'],
        },
        {
          title: 'Gestão de Processos',
          skills: ['BPMN', 'Cadeia de Valor', 'Mapeamento de Processos', 'Modelagem', 'Padronização'],
        },
        {
          title: 'Lean Six Sigma & Qualidade',
          skills: ['Lean Black Belt', '5S', 'FMEA', 'Run at Rate', 'Controle Estatístico'],
        },
        {
          title: 'Planejamento e Gestão',
          skills: ['Planejamento Estratégico', 'KPIs', 'SLAs', 'Gestão de Projetos', 'Análise Crítica'],
        },
        {
          title: 'Sistemas e Ferramentas',
          skills: ['WMS/ERP/Protheus', 'Sistemas SGQ', 'Metrologia', 'Ensaios Físicos/Mecânicos'],
        },
      ],
    },
    diplomas: {
      title: 'Formação e Certificações',
      subtitle: 'Qualificações acadêmicas e profissionais',
      items: [
        {
          title: 'Gestão da Qualidade e Produtividade',
          institution: 'Universidade Guarulhos (UnG)',
          year: '2011',
          description: 'Graduação em Gestão da Qualidade e Produtividade com foco em processos, sistemas de gestão e melhoria contínua',
        },
        {
          title: 'Auditor Líder SGI (ISO 9001, 14001, 45001)',
          institution: 'BVQI',
          year: 'Certificado',
          description: 'Certificação internacional como Auditor Líder em Sistemas de Gestão Integrada',
        },
        {
          title: 'Lean Six Sigma Black Belt',
          institution: 'Formação Completa',
          year: 'Formado',
          description: 'Formação completa em Lean Six Sigma Black Belt (certificação em andamento)',
        },
        {
          title: 'LGPD - Lei Geral de Proteção de Dados',
          institution: 'SENAI',
          year: 'Certificado',
          description: 'Certificação em proteção de dados e privacidade conforme legislação brasileira',
        },
        {
          title: 'Certificações Técnicas Complementares',
          institution: 'Diversas Instituições',
          year: 'Múltiplas',
          description: 'Ensaios físicos/mecânicos, Metrologia, Movimentação/armazenamento, WMS/ERP/Protheus',
        },
      ],
    },
    testimonials: {
      title: 'Reconhecimento',
      subtitle: 'Resultados reconhecidos por clientes e organizações',
      items: [
        {
          name: 'Cliente Multinacional',
          role: 'Setor Automotivo',
          company: 'SCANIA',
          text: 'Metodologias robustas implementadas e reconhecidas pela excelência na gestão de processos e qualidade.',
        },
        {
          name: 'Resultados Maestria',
          role: 'Gerência Executiva',
          company: 'Maestria Serviços em Saúde',
          text: 'Estruturação completa da base de processos, criando fundação sólida para implementação do ERP e crescimento sustentável.',
        },
        {
          name: 'Transformação COTESA',
          role: 'Diretoria',
          company: 'COTESA Engenharia',
          text: 'Manutenção impecável da conformidade SGI com revisão estratégica de missão, visão e valores, e implementação de cultura de melhoria contínua.',
        },
      ],
    },
    cta: {
      title: 'Vamos conversar sobre seu projeto?',
      subtitle: 'Entre em contato para discutir como posso contribuir com sua organização',
      button: 'Entrar em contato',
    },
    footer: {
      tagline: 'Gestão de Processos • Qualidade • Lean Six Sigma • Excelência Operacional',
      navigation: {
        title: 'Navegação',
        links: [
          { label: 'Sobre', href: '#services' },
          { label: 'Resultados', href: '#premium-services' },
          { label: 'Experiência', href: '#experience' },
          { label: 'Portfólio', href: '#method' },
          { label: 'Certificações', href: '#skills' },
          { label: 'Contato', href: '#contact' },
        ],
      },
      services: {
        title: 'Expertise',
        links: [
          { label: 'SGI (ISO 9001, 14001, 45001)', href: '#services' },
          { label: 'Gestão de Processos (BPMN)', href: '#services' },
          { label: 'Lean Six Sigma', href: '#services' },
          { label: 'Auditorias', href: '#services' },
          { label: 'Planejamento Estratégico', href: '#services' },
          { label: 'KPIs e Performance', href: '#services' },
        ],
      },
      contact: {
        title: 'Contato',
        email: 'rmoreiracontato@yahoo.com',
        phone: '+55 48 988086888',
        linkedin: 'LinkedIn',
      },
      legal: {
        title: 'Legal',
        links: [
          { label: 'Termos de Uso', href: '/terms' },
          { label: 'Política de Privacidade', href: '/privacy' },
        ],
      },
      copyright: '© 2025 Rafael Moreira Ferreira. Todos os direitos reservados.',
    },
    floatingCta: {
      text: 'Vamos conversar',
    },
  },
  en: {
    header: {
      nav: {
        services: 'About',
        premiumServices: 'Results',
        experience: 'Experience',
        method: 'Portfolio',
        skills: 'Certifications',
        contact: 'Contact',
      },
      cta: 'Contact Me',
    },
    hero: {
      greeting: 'Hello, I\'m',
      name: 'Rafael Moreira Ferreira',
      title: 'Senior Process, Quality & Planning Manager',
      subtitle: 'Process Management • Quality • Lean Six Sigma • Operations',
      bio: '+20 years of excellence in Process Management, Quality, Lean Six Sigma, and Operations. International experience in France and the United States. Expert in IMS (ISO 9001, 14001, 45001, IATF), Strategic Planning, and Lean Black Belt.',
      badges: {
        experience: '+20 years of experience',
        countries: 'International Experience (FR/USA)',
        tools: 'IMS • Lean Six Sigma • BPMN',
      },
      cta: {
        primary: 'Download CV',
        secondary: 'Contact me',
      },
      stats: {
        experience: 'Years of experience',
        countries: 'Countries',
        projects: 'Completed projects',
      },
    },
    services: {
      title: 'About Me',
      subtitle: 'Expertise in Process Management, Quality, and Operational Excellence',
      intro: {
        title: 'Senior professional with global experience in process transformation and quality',
        description: 'Over 20 years of experience in manufacturing, BPO, supply chain, national and international logistics, and energy. Expert in strategic planning, standardization, IMS, KPIs, and internal and external audits.',
      },
      list: [
        {
          title: 'Education and Expertise',
          description: 'Bachelor\'s degree in Quality and Productivity Management from UnG (2011). Over 20 years working in manufacturing, BPO, supply chain, logistics, and energy.',
          deliverables: 'IMS (ISO 9001, 14001, 45001, IATF), Strategic Planning, KPIs',
          metrics: 'Internal and External Audits, International Certifications',
        },
        {
          title: 'International Experience',
          description: 'Professional experience in France (operations startup) and the United States (two seasons), developing skills in multicultural and global contexts.',
          deliverables: 'International management, Cultural adaptability, Global benchmarking',
          metrics: 'Multinational projects, International teams',
        },
        {
          title: 'Leadership and Cultural Transformation',
          description: 'Proven ability in negotiation, multidisciplinary team leadership, cultural transformation, and process mapping for operational excellence.',
          deliverables: 'Cultural transformation, Team leadership, Process mapping',
          metrics: 'Team engagement, Sustainable results',
        },
      ],
    },
    premiumServices: {
      badge: 'Global Opportunities',
      title: 'International Strategic Integration',
      subtitle: 'Strong alignment with global projects in Quality, Processes, and Operational Excellence',
      services: [
        {
          title: 'International Consulting',
          description: 'Working on international consulting projects focused on Europe and France, bringing proven experience in IMS implementation and process management.',
          keyPoints: [
            'International experience (France, USA)',
            'Experience in startups and multinationals',
            'Knowledge of international norms and standards',
            'Multicultural work capability',
            'Fluency in global business contexts',
          ],
          badge: 'Differentiated global experience for international projects.',
        },
        {
          title: 'Digital Solutions in IMS and Quality',
          description: 'Strong alignment with SaaS integrated management projects, with practical experience in implementing computerized QMS systems, audits, non-conformities, and document management.',
          techStack: ['WMS/ERP/Protheus', 'QMS Systems', 'BPMN', 'Quality Tools', 'Audit Platforms'],
          deliverables: [
            'Implementation of management systems',
            'Digital process integration',
            'Automation of audits and inspections',
          ],
          badge: 'Perfect fit for technological solutions in Quality and Processes.',
        },
        {
          title: 'Audits and Operational Excellence',
          description: 'Certified Lead Auditor in IMS (ISO 9001, 14001, 45001) with proven expertise in conducting internal and external audits, implementing Lean methodologies, and continuous improvement projects.',
          diagnosticContent: [
            'Internal and external IMS audits',
            'Lean Black Belt projects',
            'Implementation of 5S and Run at Rate',
            'Compliance and gap analysis',
            'Action plans and continuous improvement',
          ],
          badge: 'Certified specialist with proven results in operational excellence.',
        },
      ],
      differentiation: {
        text: 'Rafael combines solid technical experience with international exposure and operational excellence mindset.',
        tagline: 'A senior professional with global vision and local results.',
      },
    },
    timeline: {
      title: 'Professional Experience',
      subtitle: '+20 years of expertise in Quality, Processes, and Operations',
      jobs: [
        {
          title: 'Senior Process Manager',
          company: 'Maestria Health Services',
          location: 'Brazil',
          description: 'Strategic process structuring via Value Chain, BPMN modeling, strategic planning deployment, KPIs and SLAs',
          achievements: [
            'Strategic process structuring via Value Chain',
            'BPMN modeling and critical process mapping',
            'Strategic planning deployment into operational processes',
            'Definition and implementation of KPIs, SLAs, and service catalog',
            'Internal audits and training programs',
            'Technical process foundation for ERP implementation',
          ],
        },
        {
          title: 'Quality Coordinator',
          company: 'COTESA Engineering',
          location: 'Brazil',
          description: 'IMS compliance maintenance (ISO 9001, 14001, 45001), audit leadership, process and KPI management',
          achievements: [
            'IMS compliance maintenance (ISO 9001, 14001, 45001)',
            'OHSMS alignment with integrated environmental management',
            'Internal and external audit leadership',
            'Organizational mission, vision, and values review',
            'KPI system implementation and critical analyses',
            'Complete management of processes, documentation, and management software',
          ],
        },
        {
          title: 'Quality Management System Consultant',
          company: 'Argos Global Partner Services',
          location: 'Brazil / International',
          description: 'Global QMS management, international team leadership, Lean Black Belt projects, and methodology implementation',
          achievements: [
            'Global Quality Management System management',
            'International and multicultural team leadership',
            'Benchmarking and strategic meetings with multinational clients',
            '5S implementation in multinational group',
            'Internal logistics implementation at key clients',
            'Conducting audits, inspections, and non-conformity management',
            'Lean Black Belt projects focused on operational efficiency',
            'Run at Rate (R&R) projects with sustainable gains',
          ],
        },
      ],
    },
    beforeAfter: {
      title: 'Achieved Results',
      subtitle: 'Measurable impact and concrete organizational transformation',
      before: 'Before',
      after: 'After',
      comparisons: [
        {
          before: 'Frequent customer complaints',
          after: 'Reduced to 0 complaints in 3 key accounts',
        },
        {
          before: 'Inventory accuracy at 89%',
          after: 'Accuracy increased to 98-99%',
        },
        {
          before: 'NPS of only 15%',
          after: 'NPS increased to 72%',
        },
        {
          before: 'Supplier dissatisfaction at 22%',
          after: 'Dissatisfaction reduced to less than 5%',
        },
        {
          before: 'Manual processes without standardization',
          after: 'Computerized QMS system with significant savings',
        },
      ],
    },
    roi: {
      title: 'Measurable Impact',
      subtitle: 'Concrete and quantifiable results',
      metrics: [
        {
          value: '0',
          label: 'Customer complaints',
          description: 'Complete reduction in 3 key accounts',
        },
        {
          value: '98-99%',
          label: 'Inventory accuracy',
          description: 'Increase from 89% to 98-99%',
        },
        {
          value: '+57pp',
          label: 'NPS',
          description: 'Growth from 15% to 72%',
        },
        {
          value: '+28%',
          label: 'New business',
          description: 'After integrating Quality into prospecting',
        },
      ],
    },
    whyMe: {
      title: 'Professional Values',
      subtitle: 'Principles that guide my work and results delivery',
      reasons: [
        {
          title: 'Operational Excellence',
          description: 'Commitment to continuous pursuit of improvement and efficiency in all processes',
        },
        {
          title: 'Technical Rigor',
          description: 'Precise application of methodologies, norms, and international best practices',
        },
        {
          title: 'Ethics and Transparency',
          description: 'Professional conduct with integrity, clear and honest communication',
        },
        {
          title: 'Lean Mindset',
          description: 'Focus on waste elimination and sustainable value creation',
        },
        {
          title: 'Performance and Results Focus',
          description: 'Orientation towards delivering measurable results and real impact',
        },
        {
          title: 'Continuous Improvement',
          description: 'Culture of constant learning and systematic evolution',
        },
        {
          title: 'Collaborative Leadership',
          description: 'Team engagement and people development',
        },
        {
          title: 'International Mindset',
          description: 'Global vision with adaptability to different cultural contexts',
        },
      ],
    },
    method: {
      badge: 'My Method',
      title: 'Structured Approach to Process and Quality Management',
      subtitle: 'Proven methodology to transform organizational performance through processes, quality, and operational excellence',
      steps: [
        {
          title: 'Strategic Process Diagnosis',
          description: 'Deep analysis of value chain, key process mapping, and identification of critical performance gaps.',
        },
        {
          title: 'Modeling and Standardization',
          description: 'BPMN modeling, creation of procedures and standards aligned with international best practices and norms.',
        },
        {
          title: 'IMS and KPI Implementation',
          description: 'Integrated Management System structuring (ISO 9001, 14001, 45001) with strategic and operational indicator definition.',
        },
        {
          title: 'Audits and Compliance',
          description: 'Conducting internal and external audits, non-conformity management, and ensuring continuous compliance.',
        },
        {
          title: 'Continuous Improvement and Lean',
          description: 'Application of Lean Six Sigma methodologies, improvement projects, and sustainable results monitoring.',
        },
      ],
    },
    skills: {
      title: 'Skills and Certifications',
      subtitle: 'Technical expertise and professional qualifications',
      categories: [
        {
          title: 'Integrated Management Systems',
          skills: ['ISO 9001', 'ISO 14001', 'ISO 45001', 'IATF 16949', 'Internal/External Audits'],
        },
        {
          title: 'Process Management',
          skills: ['BPMN', 'Value Chain', 'Process Mapping', 'Modeling', 'Standardization'],
        },
        {
          title: 'Lean Six Sigma & Quality',
          skills: ['Lean Black Belt', '5S', 'FMEA', 'Run at Rate', 'Statistical Control'],
        },
        {
          title: 'Planning and Management',
          skills: ['Strategic Planning', 'KPIs', 'SLAs', 'Project Management', 'Critical Analysis'],
        },
        {
          title: 'Systems and Tools',
          skills: ['WMS/ERP/Protheus', 'QMS Systems', 'Metrology', 'Physical/Mechanical Tests'],
        },
      ],
    },
    diplomas: {
      title: 'Education and Certifications',
      subtitle: 'Academic and professional qualifications',
      items: [
        {
          title: 'Quality and Productivity Management',
          institution: 'Guarulhos University (UnG)',
          year: '2011',
          description: 'Bachelor\'s degree in Quality and Productivity Management focusing on processes, management systems, and continuous improvement',
        },
        {
          title: 'IMS Lead Auditor (ISO 9001, 14001, 45001)',
          institution: 'BVQI',
          year: 'Certified',
          description: 'International certification as Lead Auditor in Integrated Management Systems',
        },
        {
          title: 'Lean Six Sigma Black Belt',
          institution: 'Complete Training',
          year: 'Trained',
          description: 'Complete Lean Six Sigma Black Belt training (certification in progress)',
        },
        {
          title: 'LGPD - General Data Protection Law',
          institution: 'SENAI',
          year: 'Certified',
          description: 'Certification in data protection and privacy according to Brazilian legislation',
        },
        {
          title: 'Complementary Technical Certifications',
          institution: 'Various Institutions',
          year: 'Multiple',
          description: 'Physical/mechanical testing, Metrology, Handling/storage, WMS/ERP/Protheus',
        },
      ],
    },
    testimonials: {
      title: 'Recognition',
      subtitle: 'Results acknowledged by clients and organizations',
      items: [
        {
          name: 'Multinational Client',
          role: 'Automotive Sector',
          company: 'SCANIA',
          text: 'Robust methodologies implemented and recognized for excellence in process and quality management.',
        },
        {
          name: 'Maestria Results',
          role: 'Executive Management',
          company: 'Maestria Health Services',
          text: 'Complete process base structuring, creating a solid foundation for ERP implementation and sustainable growth.',
        },
        {
          name: 'COTESA Transformation',
          role: 'Board of Directors',
          company: 'COTESA Engineering',
          text: 'Impeccable IMS compliance maintenance with strategic review of mission, vision, and values, and implementation of continuous improvement culture.',
        },
      ],
    },
    cta: {
      title: 'Let\'s discuss your project?',
      subtitle: 'Contact me to discuss how I can contribute to your organization',
      button: 'Get in touch',
    },
    footer: {
      tagline: 'Process Management • Quality • Lean Six Sigma • Operational Excellence',
      navigation: {
        title: 'Navigation',
        links: [
          { label: 'About', href: '#services' },
          { label: 'Results', href: '#premium-services' },
          { label: 'Experience', href: '#experience' },
          { label: 'Portfolio', href: '#method' },
          { label: 'Certifications', href: '#skills' },
          { label: 'Contact', href: '#contact' },
        ],
      },
      services: {
        title: 'Expertise',
        links: [
          { label: 'IMS (ISO 9001, 14001, 45001)', href: '#services' },
          { label: 'Process Management (BPMN)', href: '#services' },
          { label: 'Lean Six Sigma', href: '#services' },
          { label: 'Audits', href: '#services' },
          { label: 'Strategic Planning', href: '#services' },
          { label: 'KPIs and Performance', href: '#services' },
        ],
      },
      contact: {
        title: 'Contact',
        email: 'rmoreiracontato@yahoo.com',
        phone: '+55 48 988086888',
        linkedin: 'LinkedIn',
      },
      legal: {
        title: 'Legal',
        links: [
          { label: 'Terms of Use', href: '/terms' },
          { label: 'Privacy Policy', href: '/privacy' },
        ],
      },
      copyright: '© 2025 Rafael Moreira Ferreira. All rights reserved.',
    },
    floatingCta: {
      text: 'Let\'s talk',
    },
  },
}
