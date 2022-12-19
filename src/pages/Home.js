import Habilidades from '../components/Habilidades';
import SobreMim from '../components/Sobremim';
import Timeline from '../components/Timeline';
import './Home.css';

function App() {
  return (
    <div>

      {/* 1° Section */}
      <div className='row' style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <div style={{ marginLeft: '16px', marginTop: '50px', zIndex: '6' }}><SobreMim /></div>
        <Habilidades />
      </div>

      {/* 2° Section */}
      <div className='col'>
          <span id="Experiências"><Timeline titulo="MELHORES MOMENTOS DA MINHA VIDA"/></span>
          <span id="Certificados"><Timeline titulo="CAGADAS SUPLEMAS"/></span>
      </div>

    </div>);
}

export default App;

// position: absolute;
// left: 80%;
// top: 55%;