import { React } from "react"
import { textoCards } from "../util/Listas.js";
import Card from "./Card.js";
import './Sobremim.css';

function Sobremim() {
  
  return (
    <div>
      <Card texto={ textoCards }/>
    </div>
  );
}

export { Sobremim };