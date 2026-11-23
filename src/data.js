// Os dados pessoais ficam aqui para facilitar a atualização do portfólio.
export const profile = {
    name: "Thiago Guerra",
    github: "https://github.com/thiagoguerra-199",
    username: "thiagoguerra-199",
    email: "thiagoguerra199@gmail.com",
    whatsapp: "",
    linkedin: "https://www.linkedin.com/in/thiago-guerra-4282573b7/"
};

// Adicione em image uma captura real do projeto dentro de public/projetos.
export const projects = [
    {
        name: "Match Memory",
        date: "Junho de 2026",
        description: "Jogo da memória feito em grupo com Python e Pygame. O jogador precisa encontrar os pares de cartas antes que as vidas acabem. Foi meu primeiro projeto maior de programação na faculdade.",
        technologies: ["Python", "Pygame"],
        github: "https://github.com/thiagoguerra-199/trabalho-pratico-pc01",
        image: "/projetos/match-memory.png",
        category: "Em equipe"
    },
    {
        name: "CRUD de Produtos",
        date: "Setembro de 2026",
        description: "Sistema para cadastrar, listar, editar e excluir produtos. Fiz a interface com HTML, CSS e JavaScript e uma API com Node.js e Express para praticar a comunicação entre as duas partes.",
        technologies: ["JavaScript", "Node.js", "Express", "HTML", "CSS"],
        github: "https://github.com/thiagoguerra-199/atividade-pratica-1-",
        image: "/projetos/crud-produtos.jpg",
        category: "Desenvolvimento web"
    },
    {
        name: "Catálogo de Produtos",
        date: "Novembro de 2026",
        description: "Catálogo de produtos feito em React e conectado à API do projeto anterior. Permite pesquisar produtos e abrir seus detalhes. Também registrei os testes de listagem, busca e lista vazia.",
        technologies: ["React", "Vite", "JavaScript", "CSS", "API REST"],
        github: "https://github.com/thiagoguerra-199/atividade-pratica-1-11",
        image: "/projetos/catalogo-react.png",
        category: "React e integração"
    }
];

export const experiences = [
    {
        institution: "PUC Minas",
        role: "Estudante de Engenharia de Software",
        period: "Em andamento · 2º período",
        description: "Formação em programação, desenvolvimento web e construção de software. Aprendizado aplicado em trabalhos e projetos em equipe."
    },
    {
        institution: "Match Memory · Projeto acadêmico",
        role: "Desenvolvimento de jogo em equipe",
        period: "1º semestre de 2026",
        description: "Participação em um projeto com Python e Pygame, praticando lógica de programação, organização dos arquivos e colaboração com outros estudantes pelo GitHub."
    }
];
