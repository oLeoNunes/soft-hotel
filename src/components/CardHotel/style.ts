import styled from "styled-components";

export const CardHotelConteiner = styled.div`
  width: 100%;
  max-height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;

  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  height: 100px;

  .img-cardhotel {
    width: 100px;
    height: 100%;
    border-radius: 4px;
  }

  .img-semQuarto {
    width: 100px;
    height: 100px;
    border-radius: 4px;
    background: blue;
  }
  .info-cardhotel {
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 0.25rem;
    padding: 0 16px;

    h3 {
      font-family: "Montserrat";
      font-weight: 700;
      font-size: 18px;
    }
    span {
      font-weight: bold;
      font-size: 12px;
    }
    p {
      font-family: "Montserrat";
      font-size: 12px;
    }
  }
  h1 {
    font-family: var(--font--secondary);
    font-size: 18px;
  }
  button {
    width: 50%;
    height: 100%;
    background: var(--color_3);
    border: none;
    cursor: pointer;
    border-radius: 8px 0 0 8px;
  }

  @media (min-width: 768px) {
    width: 250px;
    max-height: 300px;
    height: max-content;
    flex-direction: column;
    border-radius: 16px;

    .img-cardhotel {
      height: 150px;
      width: 100%;
      border-radius: 16px 16px 0 0;
    }

    .info-cardhotel {
      text-align: left;
      width: 100%;
      padding: 1rem;
      min-height: 150px;

      h3 {
        font-family: "Montserrat";
        font-weight: 700;
        font-size: 16px;
      }
      span {
        font-weight: bold;
        font-size: 14px;
      }
      p {
        font-family: "Montserrat";
        font-size: 14px;
      }
    }
  }

  .img-semQuarto {
    color: var(--color_4);
    cursor: pointer;
    width: 250px;
    height: 100px;
    border-radius: 4px;
    background: var(--color_3);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px 0 0 8px;
  }

  .semQuarto {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (min-width: 768px) {
    .img-semQuarto {
      height: 150px;
      border-radius: 8px 8px 0 0;
    }
  }
`;
