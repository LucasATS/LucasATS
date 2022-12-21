import { historico, textoCards } from '../util/Listas.js';
import Habilidades from '../components/Habilidades.js';
import Timeline from '../components/Timeline.js';
import Card from "../components/Card.js";
import './Pages.css';

function App() {
  return (
    <div>
      {/* 1° Section */}
      <section className='section1'>
        <div className='section1-Card'><Card texto={textoCards} /></div>
        <div className='section1-Habilidade'><Habilidades /></div>
      </section>

      {/* 2° Section */}
      <section className='col'>
        <span id="Experiências" className='section2-span' />
        <span ><Timeline titulo="Experiências" textos={historico.experiencias} /></span>

        <span id="FormacaoAcademica" className='section2-span' />
        <span><Timeline titulo="Formação Acadêmica" textos={historico.formacaoAcademica} /></span>

        <span id="Certificados" className='section2-span' />
        <span ><Timeline titulo="Certificados" textos={historico.certificados} /></span>
      </section>
    </div>);
}

export default App;