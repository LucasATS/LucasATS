import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GetGitHubRepo } from '../util/Api';
import './RepoGrid.css';

const RepoCard = (props) => {
    return (
        <div className="RepoCard">
            <span className='RepoCard-span-img'>
                <span className='RepoCard-img' style={{ background: `#60606000 url(https://raw.githubusercontent.com/LucasATS/${props.name}/main/.github/preview.png) center center/cover no-repeat` }} />
                <h4>{props.name}</h4>
            </span>
            <h5>{props.desc}</h5>
            <h5>topics: {props.topics.map((a) => (a + " "))}</h5>
            <h5>language: {props.language}</h5>
            <span>
                <span className='RC-left  RepoCard-LinksExternos'>
                    { props.homepage !== '' ? <a href={props.homepage} target="_blank" rel="noreferrer"><h5>Testar</h5></a> : ''}
                    <a href={props.html_url} target="_blank" rel="noreferrer"><h5>Codigo</h5></a>
                </span>
                <span className='RC-right RepoCard-StarWatchForks'>
                    <h5 title='Stars'>⭐ {props.stars}</h5>
                    <h5 title='Watchers'>👁️ {props.watchers}</h5>
                    <h5 title='Forks'>✨ {props.forks}</h5>
                </span>
            </span>
        </div>
    );
}

let RepoGridTrigger = false;
const RepoGrid = () => {
    const [card, setCard] = useState(<div className="RepoCard-loading"><h2>CARREGANDO...</h2></div>);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!RepoGridTrigger) {
                GetGitHubRepo().then(res => {
                    const dados = res.dados.data;
                    if (dados !== undefined) RepoGridTrigger = true;
                    setCard(dados.map((a) => {
                        return <RepoCard name={a?.name} desc={a?.description} stars={a?.stargazers_count}
                            topics={a?.topics} watchers={a?.watchers} html_url={a?.html_url}
                            homepage={a?.homepage} forks={a?.forks} language={a?.language} />
                    }
                    ));
                })
            }
        }, 1500);
        return () => clearInterval(interval);
    });

    return (<span className='RepoGrid'> <span className='RepoGrid-grid'> {card} </span> </span>);
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