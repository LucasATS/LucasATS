import { React } from "react"
import { TextoCards } from "../util/Listas.js";
import Card from "./Card.js";
import './Sobremim.css';

function SobreMim() {
  
  return (
    <div>
      <Card texto={ TextoCards }/>
    </div>
  );
}

export default SobreMim;