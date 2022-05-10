import React from "react";

import KayaqueAtividade from './assets/Kayke.png'
import BarcoAtividade from './assets/barco.png'

import YogaEco from './assets/yoga.png'
import natacao from './assets/natacao.png'
import trilha from './assets/trilha.png'


import { Container } from './styles'
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
                    </div>

                    <h1 className="title">Como Ir?</h1>   
                    <div className="how__go">

                        <div className="card__how__go">

                            <div className='imgBx'>
                                <img src={KayaqueAtividade} alt="Kayake"/>
                            </div>
                            
                            <div className='infoBtn'>   
                                <span>
                                    i
                                </span>
                            </div>
                            <div className='content'>
                                <div className='infoText'>
                                    <h3>Kayake</h3>
                                    <p>
                                        Donec commodo, lacus ut rutrum aliquam, 
                                        nibh elit rutrum risus, finibus venenatis tellus 
                                        sapien at quam. Donec rhoncus turpis massa, 
                                        quis pellentesque turpis vestibulum in. 
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="card__how__go">

                            <div className='imgBx'>
                                <img src={BarcoAtividade} alt="barco"/>
                            </div>
                            
                            <div className='infoBtn'>   
                                <span>
                                i
                                </span>
                            </div>
                            <div className='content'>
                                <div className='infoText'>
                                    <h3>Kayake</h3>
                                    <p>
                                        Donec commodo, lacus ut rutrum aliquam, 
                                        nibh elit rutrum risus, finibus venenatis tellus 
                                        sapien at quam. Donec rhoncus turpis massa, 
                                        quis pellentesque turpis vestibulum in. 
                                    </p>
                                </div>
                            </div>
                        </div>
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