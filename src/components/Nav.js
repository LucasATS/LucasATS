import { Outlet, Link } from "react-router-dom";
import { React, useEffect } from "react"
import { HoverDrag } from "../util/Efeitos.js";
import './Nav.css';

function Nav() {

  useEffect(() => {
    HoverDrag('span');
  });

  return (
    <div>
      <nav className='nav-painel'>
        <Link className='center hover-this' to=""><span>🏠 Home</span></Link>
        <Link className='center hover-this' to="Projetos"><span>🏛️ Projetos</span></Link>
        <Link className='center hover-this' to="Sobre"><span>💁🏻 Sobre mim</span></Link>
        <Link className='center hover-this' to="" onClick={() => { window.location.href = "#Experiências"; }}><span>👩‍💻 Experiências</span></Link>
        <Link className='center hover-this' to="" onClick={() => { window.location.href = "#Certificados"; }}><span>👨‍🎓 Certificados</span></Link>
        <Link className='center hover-this' to="" onClick={() => { window.location.href = "#Contato"; }}><span>📞 Contato</span></Link>
      </nav>

      <Outlet />

      <footer id="Contato">
        <p className="center">
          <a className="hover-this" href="https://github.com/LucasATS/">
            <span> <img style={{ borderRadius: '6px' }} src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&amp;logo=github&amp;logoColor=white" alt="Github" /> </span>
          </a>
          <a className="hover-this" href="https://www.instagram.com/lukaolmd/">
            <span> <img style={{ borderRadius: '6px' }} src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&amp;logo=instagram&amp;logoColor=white" alt="instagram" /> </span>
          </a>
          <a className="hover-this" href="https://www.linkedin.com/in/lucas-almeida-tiburtino-da-silva/">
            <span> <img style={{ borderRadius: '6px' }} src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&amp;logo=linkedin&amp;logoColor=white" alt="linkedin" /> </span>
          </a>
          <a className="hover-this" href="mailto:lucas.almida.da.silva@gmail.com">
            <span> <img style={{ borderRadius: '6px' }} src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="gmail" /> </span>
          </a>
          <a className="hover-this" href="https://discord.com/channels/@Lucas%20ATS#9901">
            <span> <img style={{ borderRadius: '6px' }} src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="discord" /> </span>
          </a>
        </p>

        <h5 className="center"><span>Copyright © 2022. Lucas ATS. All rights reserved</span></h5>
      </footer>

    </div >

  );
}

export default Nav;
