import { Outlet } from "react-router-dom";
import Toolbar from "./Toolbar";
import { React } from "react"
import './Base.css';

const Base = () => {
  return (
    <div>
      <Toolbar />
      <Outlet />
      
      <footer id="Contato">
        <p className="center row">
          <a href="https://github.com/LucasATS/">
            <span> <img style={{ borderRadius: '6px' }} src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&amp;logo=github&amp;logoColor=white" alt="Github" /> </span>
          </a>
          <a href="https://www.instagram.com/lukaolmd/">
            <span> <img style={{ borderRadius: '6px' }} src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&amp;logo=instagram&amp;logoColor=white" alt="instagram" /> </span>
          </a>
          <a href="https://www.linkedin.com/in/lucas-almeida-tiburtino-da-silva/">
            <span> <img style={{ borderRadius: '6px' }} src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&amp;logo=linkedin&amp;logoColor=white" alt="linkedin" /> </span>
          </a>
          <a href="mailto:lucas.almida.da.silva@gmail.com">
            <span> <img style={{ borderRadius: '6px' }} src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="gmail" /> </span>
          </a>
          <a href="https://discord.com/channels/@Lucas%20ATS#9901">
            <span> <img style={{ borderRadius: '6px' }} src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="discord" /> </span>
          </a>
          {/* <a className="hover-this" href="https://www.hackerrank.com/lucas_almida_da1?hr_r=1">
            <span> <img style={{ borderRadius: '6px' }} src="https://img.shields.io/badge/-Hackerrank-2EC866?style=for-the-badge&logo=HackerRank&logoColor=white" alt="hacker rank" /> </span>
          </a> */}
        </p>

        <h5 className="center"><span>Copyright © 2022. Lucas ATS. All rights reserved</span></h5>
      </footer>

    </div >

  );
}

export default Base;
