import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background-color: #C4C4C4;

    .box {
        text-align: center;

        p {
            padding: 10px 0px;
        }

        .box-area {

            img {
                width: 90px;
                height: 90px;
            }

            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 25px;

            .icons a {
                margin-left: 15px;
                cursor: pointer;
            }

        }
    }
`;