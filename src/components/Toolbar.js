import { HoverDrag } from "../util/Efeitos.js";
import { React, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import './Toolbar.css';

const ControlePainelMenuMobile = (operacao) => {
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

const Toolbar = () => {
    useEffect(() => {
        HoverDrag('span');
    });

    const navHeight = window.innerHeight / 2;
    const [navStyle, setNavStyle] = useState({});

    const scrollFunction = () => {
        if (document.body.scrollTop > navHeight || document.documentElement.scrollTop > navHeight) {
            setNavStyle({
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(2px)'
            });
        } else {
            setNavStyle({
                backgroundColor: 'rgba(0, 0, 0, 0)',
                backdropFilter: 'blur(0px)'
            });
        }
    }
    window.onscroll = () => { scrollFunction(); ControlePainelMenuMobile('0'); }

    return (<div>
        <nav className='nav-painel' style={navStyle}>
            <Link className='center hover-this' to="" onClick={() => { window.location.href = "#inicio"; }}><span>😎 LucasATS</span></Link>
            <Link className='center hover-this' to="Projetos"><span>🏛️ Projetos</span></Link>
            <Link className='center hover-this' to="Artigos"><span>📰 Artigos</span></Link>
            <Link className='center hover-this' to="" onClick={() => { window.location.href = "#Experiências"; }}><span>👩‍💻 Experiências</span></Link>
            <Link className='center hover-this' to="" onClick={() => { window.location.href = "#FormacaoAcademica"; }}><span>👨‍🎓 Formação Acadêmica</span></Link>
            <Link className='center hover-this' to="" onClick={() => { window.location.href = "#Certificados"; }}><span>🎓 Certificados</span></Link>
            <Link className='center hover-this' to="" onClick={() => { window.location.href = "#Contato"; }}><span>📞 Contato</span></Link>
        </nav>

        {/* <nav className='nav-painel-mobile' style={{ backgroundColor: navBgColor }}> */}
        <nav className='nav-painel-mobile' style={navStyle}>
            <Link className='center hover-this' to="" onClick={() => { window.location.href = "#inicio"; }}><span>😎 Lucas ATS</span></Link>
            <Link className='center hover-this' to="Projetos"><span>🏛️ Projetos</span></Link>
            <span className='center' onClick={() => { ControlePainelMenuMobile('1') }}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
                    <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
                </svg>
            </span>
        </nav>

        <span id="fundoMenu" class="menu-fundo" onClick={() => { ControlePainelMenuMobile('0'); }} />
        <div id="painelMenu" class="menu">
            <span class="menu-fechar" onClick={() => { ControlePainelMenuMobile('0'); }} >
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26px" height="26px" viewBox="0 0 172 172"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: 'normal' }}>
                    <path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M33.73372,23.59961l-10.13411,10.13411l52.26628,52.26628l-52.26628,52.26628l10.13411,10.13411l52.26628,-52.26628l52.26628,52.26628l10.13411,-10.13411l-52.26628,-52.26628l52.26628,-52.26628l-10.13411,-10.13411l-52.26628,52.26628z"></path></g></g></svg>
            </span>
            <nav class="col center nav-painel-mobile-vertical">
                <Link className='center hover-this' to="Artigos"><span>📰 Artigos</span></Link>
                <Link className='center hover-this' to="" onClick={() => { window.location.href = "#Experiências"; }}><span>👩‍💻 Experiências</span></Link>
                <Link className='center hover-this' to="" onClick={() => { window.location.href = "#FormacaoAcademica"; }}><span>👨‍🎓 Formação Acadêmica</span></Link>
                <Link className='center hover-this' to="" onClick={() => { window.location.href = "#Certificados"; }}><span>🎓 Certificados</span></Link>
                <Link className='center hover-this' to="" onClick={() => { window.location.href = "#Contato"; }}><span>📞 Contato</span></Link>
            </nav>
        </div>

        <span id="inicio" style={{ width: 100 + '%', height: 60 + 'px' }} />
    </div>);
}

export default Toolbar;