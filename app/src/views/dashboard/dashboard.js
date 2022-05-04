import React from "react";

import Carousel from '../../components/carousel/carousel.js';
import Footer from '../../components/footer/footer.js';

import {Container} from './styles.js';

import yoga2 from '../../assets/yoga2.png';
import boat from '../../assets/boat.png';
import trail from '../../assets/trail.png';

function Dashboard () {
    return(
        <Container>
            <Carousel/>
            <main>
                <div className="one">
                    <h1>Fonte de Saúde</h1>
                    <div className="one-two">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel sagittis tellus. Pellentesque ut 
auctor felis, sit amet porta orci. Vivamus sed quam accumsan, auctor elit et, facilisis risus. Sed 
interdum lacus et ultrices mollis. Fusce laoreet neque id velit efficitur, ac lobortis erat ultrices. 
Vestibulum at mauris auctor, tincidunt sapien eu, sodales felis.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel sagittis tellus. Pellentesque ut 
auctor felis, sit amet porta orci. Vivamus sed quam accumsan, auctor elit et, facilisis risus. Sed 
interdum lacus et ultrices mollis. Fusce laoreet neque id velit efficitur, ac lobortis erat ultrices. 
Vestibulum at mauris auctor, tincidunt sapien eu, sodales felis.</p>
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