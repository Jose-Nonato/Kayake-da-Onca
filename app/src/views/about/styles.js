import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    scroll-behavior: smooth;
    main {
        .start {
            display: flex;
            flex-direction: row;
            width: 70%;
            margin: 0 auto;
            padding: 50px 0px 100px 0px;

            .text {
                h1 {
                    text-align: center;
                    padding: 15px 0px;
                }
                p {
                    text-align: justify;
                }
            }

            .img {
                margin-left: 5rem;
                img {
                    box-shadow: 0px 10px 18px -7px rgba(0,0,0,0.75);
                }
            }
        }

        .how {
            h1 {
                text-align: center;
            }
            .container {
                display: flex;
                flex-direction: row;
                width: 70%;
                margin: 0 auto;
                padding: 4rem;

                .box1 {
                    align-items: center;
                    margin-right: 3rem;
                    img {
                        width: 120px;
                        height: 120px;
                        padding: 0px 0px 0px 100px;
                    }
                    p {
                        text-align: justify;
                    }
                }

                .box2 {
                    align-items: center;
                    margin-right: 3rem;
                    img {
                        width: 120px;
                        height: 120px;
                        padding: 0px 0px 0px 100px;
                    }
                    p {
                        text-align: justify;
                    }
                }

                .box3 {
                    align-items: center;
                    margin-right: 3rem;
                    img {
                        width: 120px;
                        height: 120px;
                        padding: 0px 0px 0px 100px;
                    }
                    p {
                        text-align: justify;
                    }
                }
            }
        }

        .who {
            width: 70%;
            margin: 0 auto;
            padding: 50px 0px 100px 0px;

            h1 {
                text-align: center;
                padding: 0px 0px 40px 0px;
            }

            .container {
                display: flex;
                flex-direction: row;
            }

            .modal {
                img {
                    width: 500px;
                    height: 400px;
                    box-shadow: 0px 10px 18px -7px rgba(0,0,0,0.75);
                }
            }

            .text {
                p {
                    text-align: justify;
                    margin-left: 20px;
                }
            }
        }
    }

`;