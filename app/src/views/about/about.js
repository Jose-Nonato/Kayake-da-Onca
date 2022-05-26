import React, {useState} from 'react';

import imgBoat from '../../assets/imgBoat.png';
import howOne from '../../assets/howOne.png';
import howTwo from '../../assets/howTwo.png';
import howThree from '../../assets/howThree.png';
import boat from '../../assets/boat.png';
import Logo from '../../assets/logo.png';

import { Container, Card } from './styles.js';
import Footer from '../../components/footer/footer.js';

import { clientService } from '../../services/client-serice';

import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import Fab from '@material-ui/core/Fab';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';

function About() {

    const [openCad, setOpenCad] = useState(false);
    const handleOpenCad = () => setOpenCad(true);
    const handleCloseCad = () => setOpenCad(false);

    let jsonData = clientService.listaClientes('user')
    

    const [name, setName] = useState("")
    const [email, setEmail] = useState("") 
    const [password, setPassword] = useState("")
    const [confirmedPassword, setConfirmedPassword] = useState("")

    function handlePassword(e){
        console.log(e.target.value)
        setPassword(e.target.value) 
    }
    function handleEmail(e){
        console.log(e.target.value)
        setEmail(e.target.value) 
    }
    function handleName(e){
        console.log(e.target.value)
        setName(e.target.value) 
    }
    function handleConfirmedPassword(e){
        console.log(e.target.value)
        setConfirmedPassword(e.target.value) 
    }

    function onRegister(){
        if(confirmedPassword == password){
            clientService.criaCliente(name,password,email)
            
        }
    }

    function onLogin(){
        jsonData.then(response=>{
            response.forEach(element => {
                if(element.senha == password && element.email){
                    window.location.href = "http://localhost:3000/dashboard"
                }
            })
        })
    }

    const [openIn, setOpenIn] = useState(false);
    const handleOpenIn = () => setOpenIn(true);
    const handleCloseIn = () => setOpenIn(false);

    return(
        <Container>
            
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
                        <h1>Bem-vindo de volta !</h1>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                        >
                            <Fab size="small" color="primary" aria-label="Add" className='icon'>
                                <FaFacebookF/>
                            </Fab>
                            <Fab size="small" color="secondary" aria-label="Add" className='icon'>
                                <FaGoogle/>
                            </Fab>
                        </Grid>
                        <TextField
                            id="outlined-email-input"
                            label="Email"
                            type="email"
                            name="email"
                            autoComplete="email"
                            variant="outlined"
                            onChange={handleEmail}
                            className='input'
                        />
                        <TextField
                            id="outlined-name-input"
                            label="Senha"
                            type="password"
                            name="password"
                            variant="outlined"
                            onChange={handlePassword}
                            className='input'
                        />
                        <Button variant="contained" onClick={onLogin} color="primary">Entrar</Button>
                    </Grid>
                </Card>
            </Modal>

            <Modal
            open={openCad}
            onClose={handleCloseCad}
            >
                <Card>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <h1>É um prazer tê-lo aqui !</h1>
                        <TextField
                            id="outlined-name-input"
                            label="Nome"
                            type="name"
                            name="name"
                            variant="outlined"
                            onChange={handleName}
                            className='input'
                        />
                        <TextField
                            id="outlined-email-input"
                            label="Email"
                            type="email"
                            name="email"
                            autoComplete="email"
                            variant="outlined"
                            onChange={handleEmail}
                            className='input'
                        />
                        <TextField
                            id="outlined-email-input"
                            label="Senha"
                            type="password"
                            name="password"
                            variant="outlined"
                            onChange={handlePassword}
                            className='input'
                        />
                        <TextField
                            id="outlined-email-input"
                            label="Confirme sua Senha"
                            type="password"
                            name="password"
                            variant="outlined"
                            onChange={handleConfirmedPassword}
                            className='input'
                        />
                        <Button variant="contained" onClick={onRegister} color="primary">Cadastrar</Button>
                    </Grid>
                </Card>
            </Modal>
            <header>
                <div className='logo'>
                    <img src={Logo} alt='logo'/>
                </div>
                <div className='links'>
                    <a href='#start'>Sobre nós</a>
                    <a href='#how'>Como funciona</a>
                    <a href='#who'>Quem somos</a>
                    <Button onClick={handleOpenCad} color="primary">Cadastrar</Button>
                    <Button onClick={handleOpenIn} color="primary">Entrar</Button>
                </div>
            </header>
            <main>
                <section className='start' id='start'>
                    <div className='text'>
                        <h1>Por que praticar remo ?</h1>
                        <p>O remo é um dos esportes mais completos do mundo e tem baixo risco de lesões. Ele trabalha, além dos braços, pernas, glúteos, costas e abdome, e sua prática queima, aproximadamente, 600 calorias por hora. Pode ser praticado tanto ao ar livre quanto em ambientes fechados com a ajuda de um aparelho que simula a prática na água.Os treinos são bastante intensos e como movimentam vários grupos musculares, a regularidade melhora a postura e favorece a perda de gordura, o ganho de massa muscular e o desenvolvimento de resistência aeróbica. 
</p>
                    </div>
                    <div className='img'>
                        <img src={imgBoat} alt="Imagem Barco"/>
                    </div>
                </section>
                <section className='how' id='how'>
                    <h1>Como funciona ?</h1>
                    <div className='container'>
                        <div className='box1'>
                            <img src={howOne} alt="imagem 1"/>
                            <h2>Cadastre-se</h2>
                        </div>
                        <div className='box2'>
                            <img src={howTwo} alt="imagem 1"/>
                            <h2>Escolha suas atividades</h2>
                        </div>
                        <div className='box3'>
                            <img src={howThree} alt="imagem 1"/>
                            <h2>Aroveite</h2>
                        </div>
                    </div>
                </section>
                <section className='who' id='who'>
                    <h1>Quem somos ?</h1>
                    <div className='container'>
                        <div className='modal'>
                            <img src={boat} alt="barco"/>
                        </div>
                        <div className='text'>
                            <p>Somos um grupo de alunos do curso de ciencia da computação do centro universitario do Pará. Visando o melhor desenvolvimento de localidades ribeirinhas amazonicas, desenvolvemos uma plataforma que visa atrair turistas do BRasil e de fora para regiões pouco exploradas pelo ecoturismo mas com potencial imenso, nesse caso utilizamos como referencia a Ilha das Onças, 
                                a qual possui a comunidade Usina Vitória, que além de possuir sua beleza natural oferece diversas atrações e pontos turisticos, como a Casa do Celso.</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </Container>
    );
}

export default About;