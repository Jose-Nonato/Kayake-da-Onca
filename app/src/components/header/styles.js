import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 20px 100px;
    background: rgba(0, 153, 255, 0.52);
    box-shadow: -5px 7px 10px -7px rgba(0,0,0,0.75);

    margin-bottom: 50px;

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
            margin-left: 20px;
            transition: .3s ease-in-out;
            &:hover {
                color: #fff;
            }
        }
    }
`;