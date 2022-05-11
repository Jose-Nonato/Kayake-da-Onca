import styled from 'styled-components';

export const Container = styled.div`
    
    background: #FFF;

    .boxOverall{
        position: relative;
        display:flex;
        overflow: hidden;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100%;
    }

    img{
        position: absolute;
        opacity: .5;
        left: 0;
        top: 0;
        index-z: -1;
        object-fit: cover;
        width: 100%;
    }

    .historic__menu{
        background: #e1eafc;
        padding: 8px 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    section{
        position: relative;
        index-z: 10;
        display: flex;
        align-items:center;
        justify-content: center;
        flex-direction: column;

        .userInfo{
            width: 100%;
            border: 1px solid #333;

            th{
                color: #333;
                text-align: start;
                letter-spacing: 2px;
                border-bottom: 1px solid #333;
                border-right: 1px solid #333;
            }
            td{
                border-right: 1px solid #333;
                
            }
        }
        
    }
    
    .box{
        
        width: 50vw;
        height: 80vh;
            background: #F1F4F9;
            border-radius: 10px;  
            box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.25); 
            overflow: hidden;
        .iconHome{
            cursor: pointer;
            color:#333;
        }
        h1{
            color: #333;
            padding: 4px 8px;

        }

        .recent__buy {
            table {
                border: none;

                th {
                    border: none;
                    text-align: center;
                    padding: 10px;
                }

                td {
                    border: none;
                    text-align: center;
                    padding: 10px;
                }
            }
        }
        
    }


`