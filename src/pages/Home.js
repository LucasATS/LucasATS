import Habilidades from '../components/Habilidades';
import SobreMim from '../components/Sobremim';
import Timeline from '../components/Timeline';
import './Home.css';

function App() {
  return (<>

    {/* 1° Section */}
    <div className='rol' style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <div style={{ position: 'absolute', top: '20%', left:'5%' }}><SobreMim /></div>
      <Habilidades />
    </div>

    {/* 2° Section */}
    <div>
      <Timeline />
    </div>
  </>);
}

export default App;

// position: absolute;
// left: 80%;
// top: 55%;