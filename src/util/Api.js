import axios from "axios"

const GetGitHubRepo = async () => {
    let language = await axios.get('https://api.github.com/repos/LucasATS/MAPC/languages');
    let dados = await axios.get('https://api.github.com/repos/LucasATS/MAPC');
    let preview = 'https://raw.githubusercontent.com/LucasATS/MAPC/main/.github/preview.png';

    return { dados, language, preview };
    // name, description, stargazers_count, topics, watchers, /languages, html_url, homepage, forks
}

export { GetGitHubRepo };