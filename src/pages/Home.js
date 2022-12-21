import { historico, textoCards } from '../util/Listas.js';
import Habilidades from '../components/Habilidades.js';
import Timeline from '../components/Timeline.js';
import Card from "../components/Card.js";
import './Home.css';

function App() {
  return (
    <div>
      {/* 1° Section */}
      <div className='row' style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <div style={{ marginLeft: '16px', marginTop: '50px', zIndex: '6' }}><Card texto={textoCards} /></div>
        <Habilidades />
      </div>

      {/* 2° Section */}
      <div className='col'>
        <span id="Experiências" style={{ width: 100 + '%', height: 60 + 'px' }} />
        <span ><Timeline titulo="Experiências" textos={historico.experiencias} /></span>

        <span id="FormacaoAcademica" style={{ width: 100 + '%', height: 60 + 'px' }} />
        <span><Timeline titulo="Formação Acadêmica" textos={historico.formacaoAcademica} /></span>

        <span id="Certificados" style={{ width: 100 + '%', height: 60 + 'px' }} />
        <span ><Timeline titulo="Certificados" textos={historico.certificados} /></span>
      </div>
    </div>);
}

export default App;