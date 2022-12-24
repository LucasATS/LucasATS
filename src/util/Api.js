import axios from "axios"

const GetGitHubRepo = async (user) => {
    let dados = await axios.get(`https://api.github.com/users/${user}/repos`);
    return { dados };
}

export { GetGitHubRepo };