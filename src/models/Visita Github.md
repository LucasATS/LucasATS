# Sistema de botão para visitar página do github

## HTML

### subistitua <LINK DA PAGINA AQUI> por algum link do seu github

    <!-- VISITE MINHA PÁGINA NO GITHUB :D -->
    <style> 
        @media only screen and (orientation: portrait) { .github-img { width: 60px !important; } }
        .carimbo-github-img { width: 60px; border-radius: 360px; }
        .carimbo-github-link{ position: fixed; right: 20px; bottom: 20px; z-index: 10; }
    </style>
    <a title="Visite minha página no github" 
        href="<LINK DA PAGINA AQUI>"
        class="carimbo-github-link">
        <img class="carimbo-github-img" src="https://raw.githubusercontent.com/LucasATS/LucasATS/main/src/svg/github.svg">
    </a>