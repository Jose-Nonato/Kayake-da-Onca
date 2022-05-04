import styled from 'styled-components';

export const Container = styled.div`
    main {
        .one {
            h1 {
                text-align: center;
                padding: 30px;
            }
            .one-two {
                display: flex;
                flex-direction: row;
                text-align: justify;
                width: 70%;
                margin: 0 auto;
                p {
                    padding: 10px;
                }
            }
        }

        .two {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            .news-one {
                padding: 12px 12px 12px 0px;
                figure {
                    img {
                        width: 400px;
                        height: 464px;
                        box-shadow: 10px 10px 10px -9px rgba(0,0,0,0.75);
                    }
                    display: inline-block;
                    position: relative;
                }
                figcaption {
                    position: absolute;
                    top: 425px;
                    right: 15px;
                    font-size: 25px;
                    color: #fff;
                    text-shadow: 0px 0px 5px black;
                }
            }
            .second-news {
                display: flex;
                flex-direction: column;
                .news-two {
                    figure {
                        img {
                            width: 400px;
                            height: 230px;
                            box-shadow: 10px 10px 10px -9px rgba(0,0,0,0.75);
                        }
                        display: inline-block;
                        position: relative;
                    }
                    figcaption {
                        position: absolute;
                        top: 190px;
                        right: 150px;
                        font-size: 25px;
                        color: #fff;
                        text-shadow: 0px 0px 5px black;
                    }
                }
                .news-three {
                    figure {
                        img {
                            width: 400px;
                            height: 230px;
                            box-shadow: 10px 10px 10px -9px rgba(0,0,0,0.75);
                        }
                        display: inline-block;
                        position: relative;
                    }
                    figcaption {
                        position: absolute;
                        top: 190px;
                        right: 150px;
                        font-size: 25px;
                        color: #fff;
                        text-shadow: 0px 0px 5px black;
                    }
                }
            }
        }
    }
`;