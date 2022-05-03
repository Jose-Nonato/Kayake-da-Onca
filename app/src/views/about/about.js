import React from 'react';

import imgBoat from '../../assets/imgBoat.png';
import howOne from '../../assets/howOne.png';
import howTwo from '../../assets/howTwo.png';
import howThree from '../../assets/howThree.png';
import boat from '../../assets/boat.png';

import { Container } from './styles.js';
import Header from '../../components/header/header.js';
import Footer from '../../components/footer/footer.js';

function About() {
    return(
        <Container>
            <Header/>
            <main>
                <section className='start'>
                    <div className='text'>
                        <h1>Por que praticar remo ?</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nibh est, faucibus sollicitudin tortor a, fringilla 
rutrum risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasel-
us lacus odio, commodo eu sapien nec, vehicula tempus nisi. Cras in augue vel tortor egestas efficitur sed vi-
tae nulla. Etiam vitae blandit turpis. Praesent eget purus ac nibh aliquam ultrices. Etiam tortor velit, sodales
 elementum laoreet id, dapibus et enim. Duis consequat quam mi, quis laoreet tellus luctus a.</p>
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
                            <p>Integer tempus nibh ac accumsan aliquet. 
                                Aliquam erat volutpat. Vestibulum et tor-
                                tor vel dolor consectetur placerat ac ultri-
                                cies velit. Sed pulvinar rutrum augue, eu
                                facilisis lorem
                            </p>
                        </div>
                        <div className='box2'>
                            <img src={howTwo} alt="imagem 1"/>
                            <p>Integer tempus nibh ac accumsan aliquet. 
                                Aliquam erat volutpat. Vestibulum et tor-
                                tor vel dolor consectetur placerat ac ultri-
                                cies velit. Sed pulvinar rutrum augue, eu
                                facilisis lorem
                            </p>
                        </div>
                        <div className='box3'>
                            <img src={howThree} alt="imagem 1"/>
                            <p>Integer tempus nibh ac accumsan aliquet. 
                                Aliquam erat volutpat. Vestibulum et tor-
                                tor vel dolor consectetur placerat ac ultri-
                                cies velit. Sed pulvinar rutrum augue, eu
                                facilisis lorem
                            </p>
                        </div>
                    </div>
                </section>
                <section className='who'>
                    <h1>Quem somos ?</h1>
                    <div className='container'>
                        <div className='modal'>
                            <img src={boat} alt="barco"/>
                        </div>
                        <div className='text'>
                            <p>Integer tempus nibh ac accumsan aliquet. Aliquam erat volutpat. Vesti-
    bulum et tortor vel dolor consectetur placerat ac ultricies velit. Sed pulvi-
    nar rutrum augue, eu facilisis lorem. Nam quam velit, accumsan sit am-
    et urna vitae, fermentum commodo quam. Curabitur sit amet porta orci,
    eget facilisis mauris. Praesent vitae condimentum felis, id eleifend ur-
    na. Morbi euismod interdum metus, faucibus gravida mauris rhoncus eu
    . Vestibulum purus ante, blandit a dui vitae, vestibulum maximus leo. 
    Praesent scelerisque arcu a gravida ultrices. Sed egestas porttitor lorem,
    semper faucibus lorem finibus in. Integer tempus nibh ac accumsan aliquet. Aliquam erat volutpat. Vesti-
    bulum et tortor vel dolor consectetur placerat ac ultricies velit. Sed pulvi-
    nar rutrum augue, eu facilisis lorem. Nam quam velit, accumsan sit am-
    et urna vitae, fermentum commodo quam. Curabitur sit amet porta orci,
    eget facilisis mauris. Praesent vitae condimentum felis, id eleifend ur-
    na. Morbi euismod interdum metus, faucibus gravida mauris rhoncus eu
    . Vestibulum purus ante, blandit a dui vitae, vestibulum maximus leo. 
    Praesent scelerisque arcu a gravida ultrices. Sed egestas porttitor lorem,
    semper faucibus lorem finibus in. </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </Container>
    );
}

export default About;