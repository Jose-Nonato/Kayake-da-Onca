import React from "react";
import logo from '../../assets/logo.png'

import { Container } from './styles.js';

function Header() {
    return(
        <Container>
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="links">
                <a href="/dashboard">Inicio</a>
                <a href="/schedule">Agenda</a>
                <a href="/">Histórico</a>
                <a href="/">Sair</a>
            </div>
        </Container>
    );
}

export default Header;