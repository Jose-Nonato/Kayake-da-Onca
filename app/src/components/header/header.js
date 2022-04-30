import React from "react";
import logo from '../../assets/logo.png'
import { Container } from './styles.js';

function Header() {
    return(
        <Container>
            <div className="logo">
                <a><img src={logo}></img></a>
            </div>

            <div className="menu">
                <ul className="nav__item__1">
                    <li><a>Início</a></li>
                    <li><a href="#how">Como Funciona</a></li>
                    <li><a>Quem Somos</a></li>
                    <li><a>Fale Conosco</a></li>
                </ul>
                <ul className="nav__item__2">
                    <li><a>Cadastrar</a></li>
              
                    <li><a>Entrar</a></li>
                </ul>
            </div>
        </Container>
    );
}

export default Header;