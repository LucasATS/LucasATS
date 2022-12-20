const textoCards = [
    // Pessoa
    `<h3 class="verde"><span class="roxo">const</span> <span class="amarelo">pessoa</span> <span class="azul">=</span> <span class="branco">{</span>
        <br/>&nbsp <span class="azul">nome</span><span class="branco">:</span> "Lucas ATS"<span class="branco">,</span>
        <br/>&nbsp <span class="azul">idade</span><span class="branco">:</span> 22<span class="branco">,</span>
        <br/>&nbsp <span class="azul">tipoSanguineo</span><span class="branco">:</span> "-O"<span class="branco">,</span>
      <br/><span class="branco">}</span></h3>`,

    // Quem sou eu
    `<h3 class="verde"><span class="roxo">const</span> <span class="amarelo">quemSouEu</span> <span class="azul">=</span> <span class="branco">{</span>
        <br/>&nbsp <span class="azul">euSou</span><span class="branco">:</span> "Programador e fã de IA 🤖"<span class="branco">,</span>
        <br/>&nbsp <span class="azul">amo</span><span class="branco">:</span> "Código<span class="branco">,</span> tanto quanto amo Design"<span class="branco">,</span>
        <br/>&nbsp <span class="azul">meFormando</span><span class="branco">:</span> "👨‍🎓 em TADS 💻 na INSTED"<span class="branco">,</span>
        <br/><span class="branco">}</span></h3>`,

    // Objetivos
    `<h3 class="verde"><span class="roxo">const</span> <span class="amarelo">objetivo</span> <span class="azul">=</span> <span class="branco">{</span>
        <br/>&nbsp <span class="azul">oqueBusco</span><span class="branco">:</span> "Melhorar as habilidades com código"<span class="branco">,</span>
        <br/>&nbsp <span class="azul">estudar</span><span class="branco">:</span> "Formas de facilitar a vida das pessoas"<span class="branco">,</span>
        <br/>&nbsp <span class="azul">pretendo</span><span class="branco">:</span> "Trabalhar com Startups de inovação"<span class="branco">,</span>
        <br/><span class="branco">}</span></h3>`,

    // Habilidades
    `<h3 class="verde"><span class="roxo">const</span> <span class="amarelo">habilidades</span> <span class="azul">=</span> <span class="branco">{</span>
        <br/>&nbsp <span class="azul">Javascript</span><span class="branco">:</span> "Avançado"<span class="branco">,</span>
        <br/>&nbsp <span class="azul">Unity</span><span class="branco">:</span> "Avançado"<span class="branco">,</span>
        <br/>&nbsp <span class="azul">Python</span><span class="branco">:</span> "Intermediário"<span class="branco">,</span>
        <br/>&nbsp <span class="azul">Java</span><span class="branco">:</span> "Intermediário"<span class="branco">,</span>
        <br/>&nbsp <span class="azul">CSS</span><span class="branco">:</span> "Intermediário"<span class="branco">,</span>
        <br/>&nbsp <span class="azul">Blender</span><span class="branco">:</span> "Intermediário"<span class="branco">,</span>
        <br/>&nbsp <span class="azul">C#</span><span class="branco">:</span> "Intermediário"<span class="branco">,</span>
        <br/>&nbsp <span class="azul">SQL</span><span class="branco">:</span> "Intermediário"<span class="branco">,</span>
        <br/>&nbsp <span class="azul">PHP</span><span class="branco">:</span> "Básico"<span class="branco">,</span>
        <br/>&nbsp <span class="azul">Django</span><span class="branco">:</span> "Básico"<span class="branco">,</span>
        <br/><span class="branco">}</span>`,
]

const historico = {
    experiencias: [
        { titulo: 'Março de 2020 - Janeiro de 2021', desc: 'Exército Brasileiro - TI - Trabalhei com tecnologia da informação, suporte ao usuário, manutenção de maquinas e prestação de serviços militares.' },
        { titulo: 'Agosto de 2019 - Novembro de 2019', desc: 'ProfEPT/IFMS - Suporte técnico - Auxiliei a turma do 3° ano do ensino médio na Escola Silvio Oliveira dos Santos no desenvolvimentos de jogos digitais voltados à biologia.' },
        { titulo: '2020', desc: 'BLA BLA BLA' },
    ],
    formacaoAcademica: [
        { titulo: '2021 - 2026', desc: 'UFMS - Bacharelado em Engenharia Elétrica, Tecnologia em Engenharia Elétrica e Eletrônica.' },
        { titulo: '2021 - 2023', desc: 'Faculdade Insted - Analise e Desenvolvimento de Sistemas, Tecnologia da Informação.' },
        { titulo: '2018', desc: 'Escola Dona Consuelo Müller - Ensino Médio Completo.' },
    ],
    certificados: [
        { titulo: 'Janeiro 2022', desc: 'Escola Conquer - Produtividade e Gestão do Tempo - Código da credencial: 44cac8ca-bcb8-4307-96ea-a5f72f92c40b' },
        { titulo: 'Dezembro 2021', desc: 'Faculdade Insted - Certificado de monitor - Código da credencial: 2022505' },
        { titulo: 'Novembro 2021', desc: 'Escola Conquer - Negociação e influência - Código da credencial: a72678f2-a17a-4780-818a-46ca35d9eeb5' },
        { titulo: 'Outubro 2021', desc: 'HackerRank - Java - Código da credencial: 58af90617964' },
        { titulo: 'Outubro 2021', desc: 'HackerRank - Python - Código da credencial: fad9b719b06d' },
        { titulo: 'Outubro 2021', desc: 'Wise Up Online - Certificado Wise Up Online 100horas' },
        { titulo: 'Setembro 2021', desc: 'Escola Conquer - Comunicação e Oratória - Código da credencial: 401f7147-cc6a-43d0-89a0-88784f2fafaf' },
        { titulo: 'Agosto 2021', desc: 'IA Expert Academy - MACHINE LEARNING, Inteligência Artificial' },
        { titulo: 'Maio 2021', desc: 'AI-900 Microsoft Azure - Código da credencial waA2C H9uh' },
        { titulo: '2019', desc: 'Cursos Atitude - Programação de Computadores - Geral' },
        { titulo: '2018', desc: 'Senac Brasil - Aprendizagem Profissional Comercial em Serviços Administrativos' },
        { titulo: '2017', desc: 'Olimpíada Brasileira de Robótica' },
    ]
}

export { textoCards, historico };