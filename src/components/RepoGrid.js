import { useEffect, useState } from 'react';
import { GetGithubLanguage, GetGitHubRepo } from '../util/Api';
import './RepoGrid.css';

let RepoCardTrigger = false;
const RepoCard = (props) => {
    const [languages, setLanguages] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            if (!RepoCardTrigger) {
                GetGithubLanguage(props.languages_url).then(res => setLanguages(res.data));
                console.log(languages, typeof(languages));
                if (languages !== '') RepoCardTrigger = true;
                console.log('RepoCardTrigger:', RepoCardTrigger);
            }
        }, 500);
        return () => clearInterval(interval);
    });

    return (
        <div className="painel-test">
            <h4>{props.name}</h4>
            <h5>{props.desc}</h5>
            <h5>stars: {props.stars}</h5>
            <h5>topics: {props.topics.map((a) => (a + " "))}</h5>
            <h5>watchers: {props.watchers}</h5>
            <h5>demo: {props.homepage}</h5>
            <h5>link: {props.link}</h5>
            <h5>forks: {props.forks}</h5>
            {/* { if (typeof(languages) !== typeof('string'))  } */}
            {/* <h5 dangerouslySetInnerHTML={{ if(5>4) __html: Object.keys(languages).map(a => ' ' + a + '.') }}/> */} 
            <h5>preview: {props.preview}</h5>
            <span style={{ width: 350 + 'px', height: 200 + 'px', background: `#fff url(https://raw.githubusercontent.com/LucasATS/${props.name}/main/.github/preview.png) center center/contain no-repeat` }} />
            <br />
        </div>
    );
}

let RepoGridTrigger = false;
const RepoGrid = () => {
    const [card, setCard] = useState(<div className="painel-test"><h2>CARREGANDO...</h2></div>);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!RepoGridTrigger) {
                GetGitHubRepo().then(res => {
                    const dados = res.dados.data;
                    // const language = GetGithubLanguage();

                    // console.log( dados[0] );
                    // setCard(<div className="painel-test"><h2 dangerouslySetInnerHTML={{__html: dados.map((a) => ' ' + a.name) + '.'}}/></div>)

                    if (dados !== undefined) RepoGridTrigger = true;
                    console.log('trigger:', RepoGridTrigger);
                    setCard(dados.map((a) => {

                        // if (dados !== undefined && language !== '') trigger = true;

                        return <RepoCard name={a?.name} desc={a?.description} stars={a?.stargazers_count}
                            topics={a?.topics} watchers={a?.watchers} html_url={a?.link}
                            homepage={a?.homepage} forks={a?.forks} languages_url={a.languages_url} />
                    }
                    ));
                })
            }
        }, 2100);

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