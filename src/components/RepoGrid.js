import { useEffect, useState } from 'react';
import { GetGitHubRepo } from '../util/Api';
import Loading from './Loading';
import './RepoGrid.css';

const usuario = 'lucasATS';
// let RepoGridTrigger = false;

const RepoCard = (props) => {
    const topicos = props.topics;
    const bgImagePreview = {
        background: `#454545 url(https://raw.githubusercontent.com/${usuario}/${props.name}/main/.github/preview.png) center center/cover no-repeat`
    };

    return (
        <div className="RepoCard">
            <span className='RepoCard-span-img'>
                <span className='RepoCard-img' style={bgImagePreview} />
                <h4 className='RC-titulo'>{props.name}</h4>
                <h5 className='RC-desc'>{props.desc}</h5>
                <h4 className='RC-language'>{props.language}</h4>
            </span>
            <span className='RC-topics'> {topicos.map((a) => (<h5>{a}</h5>))} </span>

            <span>
                <span className='RC-left RepoCard-LinksExternos'>
                    {
                        props.has_pages ? <a href={props.homepage} target="_blank" rel="noreferrer"><h5>Site</h5></a> : ``
                    }
                    <br />
                    <a href={props.html_url} target="_blank" rel="noreferrer"><h5>Código</h5></a>
                </span>

                <span className='RC-right RepoCard-StarWatchForks'>
                    <h5 title='Stars'>⭐{props.stars}</h5>
                    {/* <h5 title='Watchers'>👁️{props.watchers}</h5> */}
                    <h5 title='Forks'>✨{props.forks}</h5>
                </span>
            </span>
        </div>
    );
}

let RepoGridTrigger = false;
const RepoGrid = (props) => {
    const [repoCards, setRepoCard] = useState(<Loading />);
    if (RepoGridTrigger !== props.trigger) {
        RepoGridTrigger = props.trigger;
    }

    useEffect(() => {
        const interval = setInterval(() => {

            if (!RepoGridTrigger) {
                GetGitHubRepo(usuario).then(res => {

                    const dados = res.dados.data;
                    if (dados !== undefined) RepoGridTrigger = true;

                    setRepoCard(dados.map((a) => {
                        return <RepoCard name={a?.name}
                            desc={a?.description}
                            stars={a?.stargazers_count}
                            topics={a?.topics}
                            watchers={a?.watchers}
                            html_url={a?.html_url}
                            homepage={a?.homepage}
                            has_pages={a?.has_pages}
                            forks={a?.forks}
                            language={a?.language}
                        />
                    }));
                })
            }
        }, 2000);
        return () => clearInterval(interval);
    });

    return (
        <span className='RepoGrid'>
            <span className='RepoGrid-grid'> {repoCards} </span>
        </span>);
}

export { RepoGrid };