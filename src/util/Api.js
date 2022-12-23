import axios from "axios"

const GetGitHubRepo = async () => {
    let dados = await axios.get('https://api.github.com/users/LucasATS/repos');

    // let preview = 'https://raw.githubusercontent.com/LucasATS/MAPC/main/.github/preview.png';

    return { dados };
    // name, description, stargazers_count, topics, watchers, /languages, html_url, homepage, forks
}

const GetGithubLanguage = async (link) => {
    let language = await axios.get(link);

    return { language };
}

export { GetGitHubRepo, GetGithubLanguage };