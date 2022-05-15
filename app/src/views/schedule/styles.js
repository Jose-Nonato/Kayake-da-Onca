import styled from "styled-components";

export const Container= styled.div`

    section{
        margin-bottom: 3rem;
    }
    h1{
        margin-left: 10%;
    }
    .mg-5{
        margin-top: 1rem;
    }
    .agengaCard{
        margin: 0 auto;
        width: 1080px;

        padding: 8px 16px;
        background: linear-gradient(92.29deg, #0099FF 0%, #165AB4 100%);
        box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.25);
        text-align: center;

        h2{
            color: white;
            letter-spacing: 2px;
            
        }
        .chooseAct{
            color: #fff;
            margin-top: 2rem;
        }
        .date{
            padding: 5px 16px;
            margin-left: 1rem;
            border-radius: 20px;
            border:0;
        }
        .btnBuy{
            padding: 8px 16px;
            border:0;
            margin-top: 1rem;
            font-weight: bold;
            border-radius: 20px;
            letter-spacing:2px;
            color: #fff;
            background: #333;
            cursor: pointer;
        }
        .tableItems{
            
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center; 

            .item{
                margin-left: 2rem;
                padding: 0px 16px;
                border-right: 2px solid #333;
            }
            .btnRemove{
                display:flex;
                justify-content: center;
                align-items: center;
                background: crimson;
                font-size: 1.5rem;
                font-weight: 500;
                background:none;
                border: 0;
                width: 36px;
                height: 36px;
                line-height: 36px;
                text-align: center;
                border-radius: 50%;
                cursor:pointer;
                background: #db143c;
            }
        }
    }
   
    .title{
        margin-top: 2rem;
    }
    .how__go{
        margin-top: 1rem;
        display:flex;
        justify-content: space-evenly; 
    }
    .card__how__go{
        position: relative;
        width: 450px;
        height: 300px;
        background-color: white;
        box-shadow: 8px 8px 12px rgba(0, 0, 0, 0.25);
        margin-left: 2rem;
        margin-top: 1rem;
  }
   .imgBx{
        position: relative;
        width: 100%;
        height: 120px;
        overflow: hidden;
  }
   .imgBx img
  {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
  }
   .content{
        position: absolute;
        bottom: 1rem;
        padding: 8px 16px;
        display: flex;

        
  }
  .infoText{
      h3{
          margin-bottom: 8px;
      }
  }
   .infoBtn{
       display: flex;
       justify-content: center;
       align-items: center;
        cursor: pointer;
        position: absolute;
        right: 20px;
        top: 46%;
        width: 36px;
        height: 36px;
        border-radius: 50%;

        button{
            background-color: #333;
            border: none;
            font-size: 1rem;
            color: #fff;
            padding: 10px;
            width: 36px;
            height: 36px;
            border-radius: 50px;
            cursor: pointer;
            z-index: 100;
        }
  }

  .activities{
      display: flex;
      justify-content: space-evenly;
  }
  .card__activities{
      position: relative;
        padding: 8px 16px;
      width: 300px;
      background: #FFFFFF;
        box-shadow: 5px 12px 8px rgba(0, 0, 0, 0.25);
        border-radius: 20px;

        img{
            width:100px;
        }
        .title__activities{
            display: flex;
            align-items:center;
        }
        .btn{
            display: flex;
            flex-direction: column;

            .btn-func{
                display: flex;
                align-items:center;
            
            }
        }
        button{
            border: 0;
            border-radius: 50%;
            background: #333;
            width: 48px;
            margin-top: 1rem;
            height: 48px;
            color: #fff;
            font-size: 2rem;
            cursor: pointer;
            display: flex;
            justify-content:center;
            align-items: center;
            
        }
        span{
            font-weight: 500;
            margin-left: .5rem;
            margin-top: 15px;
            text-align: center;
        }
        .footer{
            margin-top: 2rem;
        }
  }
`;

export const Card = styled.div`
    background-color: #fff;
    width: 40%;
    padding: 15px;
    box-shadow: -5px 7px 10px -7px rgba(0,0,0,0.75);

    position: absolute;
    top: 15%;
    left: 30%;
    border-radius: 10px;

    h1 {
        padding: 10px;
    }

    p {
        text-align: center;
        padding: 10px;
    }

    img {
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