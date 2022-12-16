import { Outlet, Link } from "react-router-dom";
import { React, useEffect } from "react"
import './Nav.css';

const animacao = (elemento, sensibilidade = 15) => {
  const link = document.querySelectorAll('.hover-this');
  const animateit = function (e) {
    const elmnto = this.querySelector(elemento);
    const { offsetX: x, offsetY: y } = e,
      { offsetWidth: width, offsetHeight: height } = this,
      xMove = x / width * (sensibilidade * 2) - sensibilidade,
      yMove = y / height * (sensibilidade * 2) - sensibilidade;
      elmnto.style.transform = `translate(${xMove}px, ${yMove}px)`;
    if (e.type === 'mouseleave') elmnto.style.transform = '';
  };
  link.forEach(b => b.addEventListener('mousemove', animateit));
  link.forEach(b => b.addEventListener('mouseleave', animateit));
}

function Nav() {

  useEffect(() => {
    animacao('span');
  });

  return (
    <div>
      <nav className='nav-painel'>
        <Link className='center hover-this' to="/"><span>🏠 Home</span></Link>
        <Link className='center hover-this' to="/Projetos"><span>🏛️ Projetos</span></Link>
        <Link className='center hover-this' to="/Sobre"><span>💁🏻 Sobre mim</span></Link>
        <Link className='center hover-this' to="/Experiencias"><span>👩‍💻 Experiencias</span></Link>
        <Link className='center hover-this' to="/Certificados"><span>🏠 Certificados</span></Link>
        <Link className='center hover-this' to="/Contato"><span>👨‍🎓 Contatos</span></Link>
      </nav>

      <Outlet />

      <footer>
        <p className="center" style={{gap: '12px', filter: 'drop-shadow(0px 10px 10px #0000003e)'}}>
          <a className="hover-this" href="https://github.com/LucasATS/">
            <span> <img style={{borderRadius: '6px'}} src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&amp;logo=github&amp;logoColor=white" alt="Github" /> </span>
          </a>
          <a className="hover-this" href="https://www.instagram.com/lukaolmd/">
            <span> <img style={{borderRadius: '6px'}} src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&amp;logo=instagram&amp;logoColor=white" alt="instagram" /> </span>
          </a>
          <a className="hover-this" href="https://www.linkedin.com/in/lucas-almeida-tiburtino-da-silva/">
            <span> <img style={{borderRadius: '6px'}} src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&amp;logo=linkedin&amp;logoColor=white" alt="linkedin" /> </span>
          </a>
          <a className="hover-this" href="mailto:lucas.almida.da.silva@gmail.com">
            <span> <img style={{borderRadius: '6px'}} src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="gmail" /> </span>
          </a>
          <a className="hover-this" href="https://discord.com/channels/@Lucas%20ATS#9901">
            <span> <img style={{borderRadius: '6px'}} src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="discord" /> </span>
          </a>
        </p>
      
        <h5 className="center"><span>Copyright © 2022. Lucas ATS. All rights reserved</span></h5>
      </footer>

    </div >

  );
}

export default Nav;
