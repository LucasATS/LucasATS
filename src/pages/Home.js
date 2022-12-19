import Habilidades from '../components/Habilidades.js';
// import { Sobremim } from '../components/Sobremim.js';
import Timeline from '../components/Timeline.js';
import './Home.css';

function App() {
  return (
    <div>

      {/* 1° Section */}
      <div className='row' style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        {/* <div style={{ marginLeft: '16px', marginTop: '50px', zIndex: '6' }}><Sobremim /></div> */}
        <Habilidades />
      </div>

      {/* 2° Section */}
      <div className='col'>
        <span id="Experiências"><Timeline titulo="MELHORES MOMENTOS DA MINHA VIDA" /></span>
        <span id="Certificados"><Timeline titulo="CAGADAS SUPLEMAS" /></span>
      </div>

    </div>);
}

export default App;

// position: absolute;
// left: 80%;
// top: 55%;