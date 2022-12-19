import { React } from "react"
import './Habilidades.css';

const Habilidades = () => {
  return (
      <div class="orbit">

        <ul class="orbit-wrap">

          <li class="orbit-center">
            <i class="orbit-center__icon fa fa-code"></i>
          </li>

          <li>
            <ul class="ring-0">
              <li><i class="orbit-icon fa fa-Javascript"></i></li>
              <li><i class="orbit-icon fa fa-Python"></i></li>
              <li><i class="orbit-icon fa fa-Unity"></i></li>
              <li><i class="orbit-icon fa fa-Java"></i></li>
              <li><i class="orbit-icon fa fa-Css"></i></li>
              <li><i class="orbit-icon fa fa-Sql"></i></li>
            </ul>
          </li>

          <li>
            <ul class="ring-1">
              <li><i class="orbit-icon fa fa-Blender"></i></li>
              <li><i class="orbit-icon fa fa-Csharp"></i></li>
              <li><i class="orbit-icon fa fa-Php"></i></li>
              <li><i class="orbit-icon fa fa-Django"></i></li>
              <li><i class="orbit-icon fa fa-Html"></i></li>
            </ul>
          </li>
          {/* <li>
            <ul class="ring-2">
              <li><i class="orbit-icon fa fa-windows"></i></li>
              <li><i class="orbit-icon fa fa-safari"></i></li>
              <li><i class="orbit-icon fa fa-edge"></i></li>
              <li><i class="orbit-icon fa fa-linux"></i></li>
              <li><i class="orbit-icon fa fa-apple"></i></li>
              <li><i class="orbit-icon fa fa-chrome"></i></li>
              <li><i class="orbit-icon fa fa-android"></i></li>
              <li><i class="orbit-icon fa fa-firefox"></i></li>
            </ul>
          </li>
          <li>
            <ul class="ring-3">
              <li><i class="orbit-icon fa fa-coffee"></i></li>
              <li><i class="orbit-icon fa fa-terminal"></i></li>
              <li><i class="orbit-icon fa fa-heart-o"></i></li>
            </ul>
          </li> */}

        </ul>

      </div>);
}

export default Habilidades;