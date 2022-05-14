import { FaHome, FaArrowAltCircleLeft } from "react-icons/fa";
import { Container } from "./style";


import boatBackground from './assets/boat-background.jpg'

function Historic(){

    function goBack(){
        window.location.href="/dashboard"
    }
    return(
        <Container>
            <div className="boxOverall">
                <img src={boatBackground}></img>
                <section>
                    <div className="box">
                        <div className="historic__menu">
                            <FaArrowAltCircleLeft onClick={goBack} className="iconHome" size={'30px'}/>
                            <h1>Histórico de compras</h1>
                            <FaHome onClick={goBack} className="iconHome" size={'30px'}/>
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