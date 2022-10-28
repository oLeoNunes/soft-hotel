import styled from "styled-components";

export const ContainerForm = styled.form`
  width: 100%;
  height: max-content;
  background-color: white;
  max-width: 400px;

  gap: 28px;

  .button-add {
    width: 220px;
    height: 51px;
    background: #0b3b2d;
    border-radius: 8px;
    color: #ffffff;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .button__box {
    width: 100%;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const HeaderForm = styled.div`
  width: 100%;
  background-color: var(--color_3);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;

  .span-modal {
    font-family: "Elsie Swash Caps";
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 55px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #0b3b2d;
  }
`;

export const ContainerInputForm = styled.div`
  width: 100%;
  max-width: 400px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 36px;
  padding: 1rem;

  .div-input {
    display: flex;
    flex-direction: column;
    height: 76px;
    gap: 0.3rem;

    .label {
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 20px;
      display: flex;
      align-items: center;
      text-align: center;
      color: var(--color_1);
    }

    .select {
      width: 100%;
      border: none;
      font-style: normal;
      font-weight: 300;
      font-size: 16px;

      display: flex;
      outline: 0;
      height: 3rem;
      min-height: 3rem;

      border: 1px solid var(--color_4);
      border-radius: 8px;

      color: var(--color_6);
      color: var(--color_1);

      padding: 0 1rem;
    }
  }
`;
