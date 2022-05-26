import React from "react";

import Carousel from '../../components/carousel/carousel.js';
import Footer from '../../components/footer/footer.js';
import Header from "../../components/header/header.js";

import {Container} from './styles.js';

import yoga2 from '../../assets/yoga2.png';
import boat from '../../assets/boat.png';
import trail from '../../assets/trail.png';

function Dashboard () {
    return(
        <Container>
            <Header/>
            <Carousel/>
            <main>
                <div className="one">
                    <h1>Fonte de Saúde</h1>
                    <div className="one-two">
                        <p>A prática de canoagem, remar em uma canoa ou caiaque, vai além da prática de atividade física por si só. Além de ser uma atividade aeróbica,(envolve um alto gasto calórico, média de 600 por hora) pode aliar-se ou substituir a academia, fortalecendo boa parte dos músculos e ainda promove uma ótima integração à natureza, aliviando o estresse.</p>
                        <p>Durante as remadas, o tronco permanece em movimento o tempo todo, enquanto a parte inferior mantém o equilíbrio, se movimentando também. Desta forma você trabalha as costas, que são muito solicitadas; o abdome, que, juntamente com os joelhos, ajudam a elevar ou afundar a proa ou a popa do caiaque; os braços, que exercem uma força propulsora, auxiliados pelos ombros, as coxas e pernas, que realizam movimentos de flexão e extensão.
</p>
                    </div>
                </div>
                <div className="two">
                    <div className="news-one">
                        <figure>
                            <img src={yoga2} alt="yoga"/>
                            <figcaption>Beneficios da Yoga</figcaption>
                        </figure>
                    </div>
                    <div className="second-news">
                        <div className="news-two">
                            <figure>
                                <img src={boat} alt="yoga"/>
                                <figcaption>Prática de Exercícios</figcaption>
                            </figure>
                        </div>
                        <div className="news-three">
                            <figure>
                                <img src={trail} alt="yoga"/>
                                <figcaption>Prática de Exercícios</figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </Container>
    )
}

export default Dashboard;