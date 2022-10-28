import styled from "styled-components";
import { string } from "yup";
import card from "../../assets/svg-login/card.svg";
import card2 from "../../assets/svg-login/card2.svg";

export const StyleCard = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 32px;
  margin-top: 32px;

  .style-icon-star {
    height: 16px;
    width: 16px;
    color: white;
  }
  .style-icon-location {
    height: 16px;
    width: 16px;
    color: red;
  }
  .img__CardList {
    width: 100%;
    height: 200px;
    border-radius: 8px;
  }
  .figure {
    width: 260px;
    height: 200px;
  }

  .container {
    width: 260px;
    height: 200px;
    position: relative;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    filter: drop-shadow(10px 10px 20px px rgba(0, 0, 0, 0.1));
  }
  .container__box {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 12px;
    gap: 20px;
    justify-content: center;
  }

  .container__category {
    align-items: center;
    width: 111px;
    height: 40px;
    margin-left: 12px;
    position: absolute;
    top: 40px;
    width: 90%;
    top: 10px;
    left: -1px;

    border-radius: 8px;
    justify-content: space-between;
    display: flex;
  }
  .container__mark {
    width: 90px;
    height: 40px;
    background: #000000;
    position: absolute;
  }
  .container__category--title {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: white;
    margin: 8px 12px;
    width: 90px;
    height: 40px;
  }

  .div__container__category {
    width: 120px;
    height: 40px;
    background: #000000;
    display: flex;
    border-radius: 8px;
    justify-content: center;
    top: 9px;
    left: -1px;
    text-align: center;
  }

  .container__distance {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 40px;
    background: #000000;
    border-radius: 8px;
    gap: 10px;
  }

  .container__distance--title {
    color: white;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  }

 

 
    .container__box2 {
      display: flex;
      flex: row;
      height: 60px;
      bottom: 1px;
      width: 100%;
      position: absolute;
      background: rgba(217, 217, 217, 0.4);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      justify-content: space-around;
    align-items: center;
    }

 .container__box5{
  display: flex;
  flex-direction: column;

 }
.container__box6{
  display: flex;
}


    .container__mark--title {
      display: flex;
      flex: row;
    }
    .container__location {
      display: flex;
      flex: row;
    }
  }
  .container__location--text {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
  }

  .container__location--text2 {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
  }
`;
