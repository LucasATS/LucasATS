import Habilidades from '../components/Habilidades.js';
import { Sobremim } from '../components/Sobremim.js';
import Timeline from '../components/Timeline.js';
import { historico } from '../util/Listas.js';
import './Home.css';

function App() {
  return (
    <div>

      {/* 1° Section */}
      <div className='row' style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <div style={{ marginLeft: '16px', marginTop: '50px', zIndex: '6' }}><Sobremim /></div>
        <Habilidades />
      </div>

      {/* 2° Section */}
      <div className='col'>
        <span id="Experiências"><Timeline titulo="Experiências" textos={ historico.experiencias } /></span>
        <span id="FormacaoAcademica"><Timeline titulo="Formação Acadêmica" textos={ historico.formacaoAcademica } /></span>
        <span id="Certificados"><Timeline titulo="Certificados" textos={ historico.certificados } /></span>
      </div>

    </div>);
}

export default App;

// position: absolute;
// left: 80%;
// top: 55%;