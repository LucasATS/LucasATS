import { React } from "react"
import { TextoCards } from "../util/Listas.js";
import Card from "./Card.js";
import './Sobremim.css';

function Sobremim() {
  
  return (
    <div>
      <Card texto={ TextoCards }/>
    </div>
  );
}

export { Sobremim };