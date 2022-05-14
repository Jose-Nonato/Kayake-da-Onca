import React from "react";

import barco from './assets/barco.png'
import kayake from './assets/Kayke.png'


import YogaEco from './assets/yoga.png'
import natacao from './assets/natacao.png'
import trilha from './assets/trilha.png'


import { Container } from './styles'

import CardHowGo from "../../components/cardHowGo/cardHowGo";
import Header from '../../components/header/header.js';
import Footer from "../../components/footer/footer";

function Schedule() {
    return(
        <Container>
            <Header/>
                <section>
                    <div className="agengaCard">
                        <h2>Agenda</h2>

                        <div className="chooseAct">
                            <p>Escolha suas atividades abaixo</p>
                        </div>

                        <div className="shopCart">
                            <div className="shopCard__title"></div>
                        </div>
                    </div>

                    <h1 className="title">Como Ir?</h1>   
                        <div className="how__go">   
                            <CardHowGo imgCard={barco} alternativeText="Imagem de Barco"/>
                            <CardHowGo imgCard={kayake} alternativeText="Imagem de Kayake"/>
                        </div>
                    
                    <h1 className="title">Atividades</h1>   

                    <div className="activities">

                        <div className="card__activities">
                            <div className="title__activities">
                                <img src={YogaEco} alt="Yoga"/>

                                <h1>Yoga Ecológico</h1>
                            </div>

                            <div className="btn">
                                <div className="btn-func">
                                    <button>+</button> 
                                    <span>Adicionar</span>
                                </div>
                                <div className="btn-func">
                                    <button>
                                        i
                                    </button>
                                    <span>Informações</span>
                                </div>
                            </div>
                        </div>

                        <div className="card__activities">
                            <div className="title__activities">
                                <img src={trilha} alt="Trilha"/>

                                <h1>Trilha Ecológica</h1>
                            </div>

                            <div className="btn">
                                <div className="btn-func">
                                    <button>+</button> 
                                    <span>Adicionar</span>
                                </div>
                                <div className="btn-func">
                                    <button>
                                    i
                                    </button>
                                    <span>Informações</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="card__activities">
                            <div className="title__activities">
                                <img src={natacao} alt="natacao"/>

                                <h1>Natação</h1>
                            </div>

                            <div className="btn">
                                <div className="btn-func">
                                    <button>+</button> 
                                    <span>Adicionar</span>
                                </div>
                                <div className="btn-func">
                                    <button>
                                    i
                                    </button>
                                    <span>Informações</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            <Footer/>
        </Container>
    )
}

export default Schedule;