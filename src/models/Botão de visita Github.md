# Sistema de botão para visitar página do github

## Modelo simples

### subistitua <LINK DA PAGINA AQUI> por algum link ou pelo repostirório do projeto.

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

## Modelo 2

    <!-- VISITE MINHA PÁGINA NO GITHUB :D -->
    <style> 
        .carimbo-github-img { width: 60px; }
        .carimbo-github-pos { position: fixed; right: 20px; bottom: 20px; z-index: 10; display: flex; 
                              flex-direction: row; align-items: center;}
        .carimbo-github-h3  { background-color: #80D8FF; color: #455A64; border: 2px solid #455A64;
                              border-radius: 12px; padding: 5px; margin-right: 5px; font: 16px Arial, sans-serif;} 
    </style>
    <span class="carimbo-github-pos">
        <h3 class="carimbo-github-h3">
            ⭐ <b>Give a star</b></h3>
        <a title="Visite minha página no github" 
            href="<LINK DA PAGINA AQUI>">
            <img class="carimbo-github-img" src="https://raw.githubusercontent.com/LucasATS/LucasATS/main/src/svg/github.svg">
        </a>
    </span>