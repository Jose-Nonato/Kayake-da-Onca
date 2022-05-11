import { FaHome, FaArrowAltCircleLeft } from "react-icons/fa";
import { Container } from "./style";


import boatBackground from './assets/boat-background.jpg'

function Historic(){
    return(
        <Container>
            <div className="boxOverall">
                <img src={boatBackground} alt="Barco"/>
                <section>
                    <div className="box">
                        <div className="historic__menu">
                            <a href="/schedule"><FaArrowAltCircleLeft className="iconHome" size={'30px'}/></a>
                            <h1>Histórico de compras</h1>
                            <a href="/dashboard"><FaHome className="iconHome" size={'30px'}/></a>
                        </div>
                        

                        <div className="recent__buy">
                            <table className="userInfo">
                                <tr>
                                    <th>Nome</th>
                                    <th>Código</th>
                                    <th>Data</th>
                                    <th>Preço</th>
                                </tr>
                                <tr>
                                    <td>Eduardo</td>
                                    <td>12572-456</td>
                                    <td>20-04-2021</td>
                                    <td><span>R$</span> 25,99</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </Container>
    )
}

export default Historic;