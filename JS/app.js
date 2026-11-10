// [R1] Dados do Catálogo

const ferramentas = [
    //Linguagens
    {id: 1, nome: 'Python', categoria: 'Linguagem', descricao: 'Linguagem versátil utilizada em automação, dados e inteligência artificial.', ano: 1991, destaque: true},
    {id: 2, nome: 'JavaScript', categoria: 'Linguagem', descricao: 'Linguagem muito utilizada no desenvolvimento de aplicações web.', ano: 1995, destaque: false},
    {id: 3, nome: 'Java', categoria: 'Linguagem', descricao: 'Linguagem utilizada em sistemas corporativos e aplicações backend.', ano: 1995, destaque: true},
    {id: 4, nome: 'C#', categoria: 'Linguagem', descricao: 'Linguagem utilizada no desenvolvimento de sistemas com .NET e jogos.', ano: 2000, destaque: true},
    {id: 5, nome: 'PHP', categoria: 'Linguagem', descricao: 'Linguagem utilizada principalmente no desenvolvimento de aplicações web.', ano: 1995, destaque: false},
    {id: 6, nome: 'TypeScript', categoria: 'Linguagem', descricao: 'Linguagem baseada em JavaScript que adiciona tipagem estática.', ano: 2012, destaque: true},
    {id: 7, nome: 'Go (Golang)', categoria: 'Linguagem', descricao: 'Linguagem eficiente utilizada em sistemas backend e aplicações em nuvem.', ano: 2009, destaque: true},
    {id: 8, nome: 'Assembly', categoria: 'Linguagem', descricao: 'Linguagem de baixo nível utilizada para programação próxima ao hardware.', ano: 1949, destaque: false},
    {id: 9, nome: 'COBOL', categoria: 'Linguagem', descricao: 'Linguagem tradicional utilizada em sistemas financeiros e bancários.', ano: 1959, destaque: false},
    {id: 10, nome: 'SQL', categoria: 'Linguagem', descricao: 'Linguagem utilizada para consultar e manipular bancos de dados.', ano: 1974, destaque: true},
    {id: 11, nome: 'C', categoria: 'Linguagem', descricao: 'Linguagem de baixo nível de abstração utilizada em sistemas operacionais e embarcados.', ano: 1972, destaque: true},
    {id: 12, nome: 'C++', categoria: 'Linguagem', descricao: 'Linguagem utilizada em jogos, sistemas de alto desempenho e aplicações complexas.', ano: 1985, destaque: true},

    //Frameworks
    {id: 13, nome: 'React', categoria: 'Framework', descricao: 'Biblioteca utilizada para construir interfaces de usuário.', ano: 2013, destaque: true},
    {id: 14, nome: 'Angular', categoria: 'Framework', descricao: 'Framework completo para desenvolvimento de aplicações web.', ano: 2016, destaque: true},
    {id: 15, nome: 'Vue.js', categoria: 'Framework', descricao: 'Framework progressivo para criação de interfaces web.', ano: 2014, destaque: true},
    {id: 16, nome: 'Django', categoria: 'Framework', descricao: 'Framework Python utilizado para desenvolver aplicações web.', ano: 2005, destaque: true},
    {id: 17, nome: 'Laravel', categoria: 'Framework', descricao: 'Framework PHP que facilita o desenvolvimento de aplicações web.', ano: 2011, destaque: true},
    {id: 18, nome: 'ASP.NET Core', categoria: 'Framework', descricao: 'Framework da Microsoft para desenvolver APIs e aplicações web.', ano: 2016, destaque: true},
    {id: 19, nome: 'Spring Boot', categoria: 'Framework', descricao: 'Framework Java utilizado para criar aplicações e serviços backend.', ano: 2014, destaque: true},
    {id: 20, nome: 'Express.js', categoria: 'Framework', descricao: 'Framework Node.js utilizado para desenvolver APIs e servidores web.', ano: 2010, destaque: true},
    {id: 21, nome: 'Next.js', categoria: 'Framework', descricao: 'Framework React utilizado para criar aplicações web modernas.', ano: 2016, destaque: true},

    //IDEs
    {id: 22, nome: 'Visual Studio Code', categoria: 'IDE', descricao: 'Editor de código leve e extensível para diversas linguagens.', ano: 2015, destaque: true},
    {id: 23, nome: 'IntelliJ IDEA', categoria: 'IDE', descricao: 'Ambiente de desenvolvimento completo, especialmente para Java.', ano: 2001, destaque: true},
    {id: 24, nome: 'Visual Studio', categoria: 'IDE', descricao: 'Ambiente de desenvolvimento utilizado principalmente com tecnologias Microsoft.', ano: 1997, destaque: true},
    {id: 25, nome: 'PyCharm', categoria: 'IDE', descricao: 'Ambiente de desenvolvimento especializado em Python.', ano: 2010, destaque: true},
    {id: 26, nome: 'Eclipse', categoria: 'IDE', descricao: 'Ambiente de desenvolvimento extensível utilizado com Java.', ano: 2001, destaque: false},

    //Inteligência Artificial
    {id: 27, nome: 'ChatGPT', categoria: 'IA', descricao: 'Inteligência artificial utilizada para responder perguntas e auxiliar em tarefas.', ano: 2022, destaque: true},
    {id: 28, nome: 'GitHub Copilot', categoria: 'IA', descricao: 'Assistente de IA que sugere códigos e auxilia no desenvolvimento.', ano: 2021, destaque: true},
    {id: 29, nome: 'Google Gemini', categoria: 'IA', descricao: 'Inteligência artificial do Google para pesquisa, criação e programação.', ano: 2023, destaque: true},
    {id: 30, nome: 'Claude Code', categoria: 'IA', descricao: 'Assistente de programação que ajuda a analisar e modificar projetos.', ano: 2025, destaque: true},
    {id: 31, nome: 'DeepSeek', categoria: 'IA', descricao: 'Inteligência artificial capaz de responder perguntas, gerar textos, auxiliar em problemas.', ano: 2023, destaque: false}
];


const catalogo = {
    nome : 'Ferramentas Programação', itens : ferramentas,
    adicionar : function(item){
        this.itens.push(item);
    },
    emDestaque : function(){
        let ferramentasDestaque = []

        this.itens.forEach((f) =>{
            if(f.destaque === true){
                ferramentasDestaque.push(f);
            }
        });

        return ferramentasDestaque;
    }
};

