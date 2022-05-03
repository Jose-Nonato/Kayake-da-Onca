import React from 'react';

import { Container } from './styles.js';
import Logo from '../../assets/logo.png';

import { RiInstagramFill } from 'react-icons/ri';
import { ImFacebook2 } from 'react-icons/im';
import { FaTwitterSquare } from 'react-icons/fa';

function Footer() {
    return(
        <Container>
            <div className='box'>
                <div className='box-area'>
                    <img src={Logo} alt="logo"/>
                    <div className='icons'>
                        <a><RiInstagramFill/></a>
                        <a><ImFacebook2/></a>
                        <a><FaTwitterSquare/></a>
                    </div>
                </div>
                <p>Copyright © 2022 Todos os direitos reservados</p>
            </div>
        </Container>
    );
}

export default Footer;