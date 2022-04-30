import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;

    padding: 20px 100px;
    background: rgba(0, 153, 255, 0.52);
    box-shadow: 0px 10px 18px -7px rgba(0,0,0,0.75);

    .menu
    {
        display: flex;
        align-items:center;
        ul
        {
            list-style: none;
            display: flex;
            a
            {
                text-decoration: none;
                color: #333;
                font-weight:600;

                transition: .5s ease;
                &:hover{
                    color:#fff;
                }
            }
            
        }
        .nav__item__1
        {
            li{ margin-left: 2rem; }
        }
        .nav__item__2
        {
            li{ margin-left: 2rem }

            
        }
        
    }   

    img
    {
        width: 90px; 
    }
`;

