import { React } from "react"
import './Timeline.css';

const direcao = {
  left: "TL-left",
  right: "TL-right"
}

const TimelineCard = (props) => {
  return (
    <div className={"TL-container " + props.direcao}>
      <div className="TL-content">
        <h2>{props.titulo}</h2>
        <p>{props.texto}</p>
      </div>
    </div>
  );
}

const Timeline = (props) => {
  return (
    <div className="timeline">
      <div className="center col"><h2 className="TL-titulo">{props.titulo}</h2></div>
      <TimelineCard titulo="2017" texto="Lorem ipsum.." direcao={direcao.left} />
      <TimelineCard titulo="2010" texto="Lorem ipsum.." direcao={direcao.right} />
      <TimelineCard titulo="2017" texto="Lorem ipsum.." direcao={direcao.left} />
      <TimelineCard titulo="2010" texto="Lorem ipsum.." direcao={direcao.right} />
      <TimelineCard titulo="2017" texto="Lorem ipsum.." direcao={direcao.left} />
      <TimelineCard titulo="2010" texto="Lorem ipsum.." direcao={direcao.right} />
      <TimelineCard titulo="2017" texto="Lorem ipsum.." direcao={direcao.left} />
      <TimelineCard titulo="2010" texto="Lorem ipsum.." direcao={direcao.right} />
      <TimelineCard titulo="2017" texto="Lorem ipsum.." direcao={direcao.left} />
      <TimelineCard titulo="2010" texto="Lorem ipsum.." direcao={direcao.right} />
      <TimelineCard titulo="2017" texto="Lorem ipsum.." direcao={direcao.left} />
      <TimelineCard titulo="2010" texto="Lorem ipsum.." direcao={direcao.right} />
      <TimelineCard titulo="2017" texto="Lorem ipsum.." direcao={direcao.left} />
      <TimelineCard titulo="2010" texto="Lorem ipsum.." direcao={direcao.right} />
      <TimelineCard titulo="2017" texto="Lorem ipsum.." direcao={direcao.left} />
      <TimelineCard titulo="2010" texto="Lorem ipsum.." direcao={direcao.right} />
    </div>
  );
}

export default Timeline;