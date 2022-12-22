import { useEffect } from 'react';
import { RepoGrid } from '../components/RepoGrid.js';
import Timeline from '../components/Timeline.js';
import { GetGitHubRepo } from '../util/Api.js';
import { historico } from '../util/Listas.js';
import './Pages.css';

function Projetos() {
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     GetGitHubRepo().then(res => { 
  //       const dados = res.dados.data;
  //       const language = res.language.data;
  //       console.log('name', dados?.name);
  //       console.log('description', dados?.description);
  //       console.log(dados?.stargazers_count);
  //       console.log(dados?.topics);
  //       console.log(dados?.watchers);
  //       console.log(dados?.html_url);
  //       console.log(dados?.homepage);
  //       console.log(dados?.forks);      
  //       console.log(language);      
  //     })
  //   }, 2000);
  //   return () => clearInterval(interval);
  // });

  return (
    <div>
      {/* 1° Section */}
      <section>
        <RepoGrid />
      </section>
    </div>);
}

export default Projetos;