import { React, useEffect, useState } from "react"
import { Hover3D } from "../util/Efeitos.js";
import './Card.css';

var cntLetras = 0, cntFrases = 1;
const Card = (props) => {

  const frases = props.texto;

  const VELOCIDADE_DE_ESCRITA = 15, VELOCIDADE_PASSAR_CARD = 4000;  // MILISEGUNDOS: 4000ms = 4s
  const [montarFrase, setMontarFrase] = useState('');
  const [fraseAtual, setFraseAtual] = useState(frases[0]);

  useEffect(() => {
    Hover3D('div', 25);
  })

  const AvancarCard = () => {
    if (cntFrases <= frases.length) {
      setFraseAtual(frases[cntFrases]);
      cntLetras = 0;
      setMontarFrase('');
      cntFrases++;

    } else {
      cntLetras = 0;
      cntFrases = 0;
      setMontarFrase('');
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (cntLetras < fraseAtual.length) {
        setMontarFrase(montarFrase + fraseAtual.charAt(cntLetras));
        cntLetras++;
      }
    }, VELOCIDADE_DE_ESCRITA);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      AvancarCard();
    }, VELOCIDADE_PASSAR_CARD);
    return () => clearInterval(interval);
  });

  return (
    <div className="CardHover" onLoad={() => { cntLetras = 0; cntFrases = 0; }} onClick={() => AvancarCard()}>
      <div className="Card">
        <span className="rol" style={{ paddingLeft: '0px', transformStyle: 'preserve-3d' }}>
          <span style={{ transform: 'translateZ(40px)' }} className="dot-red" />
          <span style={{ transform: 'translateZ(40px)' }} className="dot-yellow" />
          <span style={{ transform: 'translateZ(40px)' }} className="dot-green" />
        </span>
        <div style={{ transform: 'translateZ(40px)' }} dangerouslySetInnerHTML={{ __html: montarFrase }} />
      </div>
    </div>
  );
}

export default Card;