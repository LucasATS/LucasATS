import { RepoGrid } from '../components/RepoGrid.js';
import './Pages.css';

function Projetos() {
  return (
    <div>
      {/* 1° Section */}
      <section>
        <RepoGrid trigger={false}/>
      </section>
    </div>);
}

export default Projetos;