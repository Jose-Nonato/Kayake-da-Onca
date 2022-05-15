import React, {useEffect, useState} from "react";

import barco from './assets/barco.png'
import kayake from './assets/Kayke.png'


import YogaEco from './assets/yoga.png';
import natacao from './assets/natacao.png';
import trilha from './assets/trilha.png';
import qrcode from '../../assets/qrcode.png';

import { Container, Card } from './styles'

import CardHowGo from "../../components/cardHowGo/cardHowGo";
import Header from '../../components/header/header.js';
import Footer from "../../components/footer/footer";

import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import AgendaCart from "../../components/agendaCartLine/AgendaCart";
import { clientService } from "../../services/client-serice";

function Schedule() {
    let jsonData = clientService.listaClientes('cart')
    let jsonTotal = clientService.listaClientes('total')


    function yogaDetail(){
        clientService.adicionarItem("Yoga Ecológico", 70.00)
        jsonTotal.total += 70.00
        
        window.location.reload()
    }
    function natacaoDetail(){
        clientService.adicionarItem("Natação", 30.00)
        jsonTotal.then(response=>{
            response.total += 30.00
        })
        window.location.reload()
    }
    function trilhaDetail(){
        clientService.adicionarItem("Trilha Ecológica", 50.00)
        jsonTotal.then(response=>{
            response.total += 50.00
        })

        window.location.reload()
    }
    const [openIn, setOpenIn] = useState(false);
    const handleOpenIn = () => setOpenIn(true);
    const handleCloseIn = () => setOpenIn(false);

    const [openInTwo, setOpenInTwo] = useState(false);
    const handleOpenInTwo = () => setOpenInTwo(true);
    const handleCloseInTwo = () => setOpenInTwo(false);

    const [cart, setCart] = useState([])
    useEffect(()=>{
        jsonData.then(response=>{
            setCart(response)
            console.log(response)
        })
    },[])
    return(
        <Container>

            <Modal
            open={openInTwo}
            onClose={handleCloseInTwo}
            >
                <Card>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <h1>Ida e Volta de Barco</h1>
                        <p>Disponibilizado pela equipe <strong>Navegaonça</strong>.</p>
                    </Grid>
                </Card>
            </Modal>

            <Modal
            open={openIn}
            onClose={handleCloseIn}
            >
                <Card>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <h1>Ida e Volta de Kayake</h1>
                        <p>Leia o QR Code para descobrir os horários de maré que seja melhor para você.</p>
                        <img src={qrcode} alt="aqcode"/>
                        <p>Ligue para: <strong>2345678</strong> e agende o seu horário e discuta sobre os protocolos de segurança.</p>
                    </Grid>
                </Card>
            </Modal>

            <Header/>
                <section>
                    <div className="agengaCard">
                        <h2>Agenda</h2>

                        <div className="chooseAct">
                            <p>Escolha suas atividades abaixo</p>
                        </div>

                        {
                            cart.map(item=>{
                                return(
                                    <div className="mg-5">
                                        <AgendaCart
                                            removeFunc = {function(){
                                                clientService.removeCliente(item.id)
                                                jsonTotal.then(response=>{
                                                    response.total -= item.preco
                                                })

                                                window.location.reload()
                                            }}
                                            key={item.id}
                                            title={item.title}
                                            price={"R$"+item.preco}
                                            />
                                        
                                    </div>
                                )
                            })
                        }
                        <button className="btnBuy">Comprar</button>
                        <input className="date" type="date"/>
                    </div>

                    <h1 className="title">Como Ir?</h1>   
                        <div className="how__go">   
                            <CardHowGo imgCard={barco} alternativeText="Imagem de Barco" title="Barco" abrir={handleOpenInTwo}/>
                            <CardHowGo imgCard={kayake} alternativeText="Imagem de Kayake" title="Kayake" abrir={handleOpenIn}/>
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
                                    <button onClick={yogaDetail}>+</button> 
                                    <span>Adicionar</span>
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
                                    <button onClick={trilhaDetail}>+</button> 
                                    <span>Adicionar</span>
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
                                    <button onClick={natacaoDetail}>+</button> 
                                    <span>Adicionar</span>
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