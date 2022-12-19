import { React, useEffect, useState } from "react"
import { Hover3D } from "../util/Efeitos";
import './Card.css';

var i = 0, j = 1;

const Card = (props) => {
  const [frases, setFrases] = useState('');
  const [texto, setTexto] = useState(props.texto[0]);

  const FraseNext = () => {
    if (j < props.texto.length) {
      setTexto(props.texto[j]);
      i = 0; setFrases(''); j++;
    } else {
      i = 0; j = -1; setFrases('');
    }
  }

  useEffect(() => {
    Hover3D('div', 25);
  })

  useEffect(() => {
    const interval = setInterval(() => {
      if (i < texto.length) {
        setFrases(frases + texto.charAt(i));
        i++;
      }
    }, 25);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      FraseNext();
    }, 4000);
    return () => clearInterval(interval);
  });

  return (
    <div className="CardHover" onClick={() => FraseNext()}>
      <div className="Card">
        <span className="rol" style={{ paddingLeft: '0px', transformStyle: 'preserve-3d' }}>
          <span style={{ transform: 'translateZ(40px)' }} className="dot-red" />
          <span style={{ transform: 'translateZ(40px)' }} className="dot-yellow" />
          <span style={{ transform: 'translateZ(40px)' }} className="dot-green" />
        </span>
        <div style={{ transform: 'translateZ(40px)' }} dangerouslySetInnerHTML={{ __html: frases }} />
      </div>
    </div>
  );
}

export default Card;