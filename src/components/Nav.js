import { Outlet, Link } from "react-router-dom";
import { React, useEffect, useState } from "react"
import { HoverDrag } from "../util/Efeitos.js";
import './Nav.css';

const menu = (operacao) => {
  let menu = document.getElementById("painelMenu");
  let menuFundo = document.getElementById("fundoMenu");

  if (operacao === "1") {
    menu.style.left = "0px";
    menu.style.visibility = "visible";
    /* background-color: ; */
    menuFundo.style.backgroundColor = "rgba(0, 0, 0, 0.70)";
    menuFundo.style.visibility = "visible";
  } else {
    menu.style.left = "-250px";
    menu.style.visibility = "hidden";
    menuFundo.style.backgroundColor = "rgba(0, 0, 0, 0)";
    menuFundo.style.visibility = "hidden";
  }
}

const Nav = () => {

  useEffect(() => {
    HoverDrag('span');
  });

  const navHeight = window.innerHeight/2;
  const [navBgColor, setNavBgColor] = useState({});

  const scrollFunction = () => {
    if (document.body.scrollTop > navHeight || document.documentElement.scrollTop > navHeight) {
      setNavBgColor('rgba(0, 0, 0, 0.20)');
    } else {
      setNavBgColor('#00000000');
    }
  }

  window.onscroll = () => { scrollFunction(); menu('0'); }

  return (
    <div>
      <nav className='nav-painel' style={{ backgroundColor: navBgColor }}>
        <Link className='center hover-this' to="" onClick={() => { window.location.href = "#inicio"; }}><span>😎 Lucas ATS</span></Link>
        <Link className='center hover-this' to="Projetos"><span>🏛️ Projetos</span></Link>
        <Link className='center hover-this' to="" onClick={() => { window.location.href = "#Experiências"; }}><span>👩‍💻 Experiências</span></Link>
        <Link className='center hover-this' to="" onClick={() => { window.location.href = "#FormacaoAcademica"; }}><span>👨‍🎓 Formação Acadêmica</span></Link>
        <Link className='center hover-this' to="" onClick={() => { window.location.href = "#Certificados"; }}><span>🎓 Certificados</span></Link>
        <Link className='center hover-this' to="" onClick={() => { window.location.href = "#Contato"; }}><span>📞 Contato</span></Link>
      </nav>

      <nav className='nav-painel-mobile' style={{ backgroundColor: navBgColor }}>
        <Link className='center hover-this' to="" onClick={() => { window.location.href = "#inicio"; }}><span>😎 Lucas ATS</span></Link>
        <Link className='center hover-this' to="Projetos"><span>🏛️ Projetos</span></Link>
        <span className='center' onClick={() => { menu('1') }}>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
            <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
          </svg>
        </span>
      </nav>

      <span id="fundoMenu" class="menu-fundo" onClick={() => { menu('0'); }} />
      <div id="painelMenu" class="menu">
        <span class="menu-fechar" onClick={() => { menu('0'); }} >
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26px" height="26px" viewBox="0 0 172 172"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: 'normal' }}>
            <path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M33.73372,23.59961l-10.13411,10.13411l52.26628,52.26628l-52.26628,52.26628l10.13411,10.13411l52.26628,-52.26628l52.26628,52.26628l10.13411,-10.13411l-52.26628,-52.26628l52.26628,-52.26628l-10.13411,-10.13411l-52.26628,52.26628z"></path></g></g></svg>
        </span>
        <nav class="col center nav-painel-mobile-vertical">
          {/* <Link className='center hover-this' to="Projetos"><span>🏛️ Projetos</span></Link> */}
          <Link className='center hover-this' to="" onClick={() => { window.location.href = "#Experiências"; }}><span>👩‍💻 Experiências</span></Link>
          <Link className='center hover-this' to="" onClick={() => { window.location.href = "#FormacaoAcademica"; }}><span>👨‍🎓 Formação Acadêmica</span></Link>
          <Link className='center hover-this' to="" onClick={() => { window.location.href = "#Certificados"; }}><span>🎓 Certificados</span></Link>
          <Link className='center hover-this' to="" onClick={() => { window.location.href = "#Contato"; }}><span>📞 Contato</span></Link>
        </nav>
      </div>

      <span id="inicio" style={{ width: 100 + '%', height: 60 + 'px' }} />

      <Outlet />

      <footer id="Contato">
        <p className="center row">
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
          {/* <a className="hover-this" href="https://www.hackerrank.com/lucas_almida_da1?hr_r=1">
            <span> <img style={{ borderRadius: '6px' }} src="https://img.shields.io/badge/-Hackerrank-2EC866?style=for-the-badge&logo=HackerRank&logoColor=white" alt="hacker rank" /> </span>
          </a> */}
        </p>

        <h5 className="center"><span>Copyright © 2022. Lucas ATS. All rights reserved</span></h5>
      </footer>

    </div >

  );
}

export default Nav;
