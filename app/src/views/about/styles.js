import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    scroll-behavior: smooth;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 20px 100px;
        background: rgba(0, 153, 255, 0.52);
        box-shadow: -5px 7px 10px -7px rgba(0,0,0,0.75);

        .logo {
            img {
                width: 90px;
                height: 90px;
            }
        }

        .links {
            a {
                text-decoration: none;
                color: black;
                margin-left: 15px;
                cursor: pointer;
                transition: .3s ease-in-out;
                &:hover {
                    color: white;
                }
            }
            Button {
                color: black;
                margin-left: 15px;
                transition: .3s ease-in-out;
                &:hover {
                    color: white;
                }
            }
        }
    }

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
                    h2 {
                        text-align: center;
                        padding: 0px 0px 0px 90px;
                    }
                }

                .box2 {
                    align-items: center;
                    margin-right: 3rem;
                    img {
                        width: 120px;
                        height: 120px;
                        padding: 0px 0px 0px 125px;
                    }
                    h2 {
                        text-align: center;
                        padding: 0px 0px 0px 55px;
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
                    h2 {
                        text-align: center;
                        padding: 0px 0px 0px 100px;
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

export const Card = styled.div`
    background-color: #fff;
    width: 50%;
    padding: 15px;
    box-shadow: -5px 7px 10px -7px rgba(0,0,0,0.75);

    position: absolute;
    top: 20%;
    left: 20%;

    h1 {
        padding: 10px;
    }

    .icon {
        width: 45px;
        height: 45px;
        margin: 5px;
    }

    .input {
        width: 70%;
        margin: 10px;
    }

    Button {
        width: 30%;
    }
`;