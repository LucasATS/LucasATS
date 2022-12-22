import { useEffect, useState } from 'react';
import { GetGitHubRepo } from '../util/Api';
import './RepoGrid.css';

const RepoCard = (props) => {
    return (
        <div className="painel-test">
            <h2>{props.name}</h2>
            <h3>{props.desc}</h3>
            <br/>
            <h3>stars: {props.stars}</h3>
            <h3>topics: {props.topics}</h3>
            <h3>watchers: {props.watchers}</h3>
            <h3>demo: {props.homepage}</h3>
            <h3>link: {props.link}</h3>
            <h3>forks: {props.forks}</h3>
            <h3>language: {props.language}</h3>
        </div>
    );
}

const RepoGrid = () => {
    const [card, setCard] = useState(<div className="painel-test"><h2>CARREGANDO...</h2></div>);

    useEffect(() => {
        const interval = setInterval(() => {
            GetGitHubRepo().then(res => {
                const dados = res.dados.data;
                const language = res.language.data;

                setCard(<RepoCard name={dados?.name} desc={dados?.description} stars={dados?.stargazers_count}
                    topics={dados?.topics} watchers={dados?.watchers} html_url={dados?.link}
                    homepage={dados?.homepage} forks={dados?.forks} language={language} />);
            })
        }, 2000);
        return () => clearInterval(interval);
    });

    return (<div>
        {card}
    </div>);
}

export { RepoGrid };

// console.log(dados?.name);
// console.log(dados?.description);
// console.log(dados?.stargazers_count);
// console.log(dados?.topics);
// console.log(dados?.watchers);
// console.log(dados?.html_url);
// console.log(dados?.homepage);
// console.log(dados?.forks);
// console.log(language);