import styled from "styled-components";

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: max-content;
  background-color: white;
  max-width: 400px;
  gap: 28px;
  border-radius: 8px 8px 0px 0px;

  .button_box {
    display: flex;
    gap: 16px;
    height: max-content;
    padding: 16px 10px;
  }

  .btnExcluir {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 13.75rem;
    height: 4rem;

    background: var(--color_4);
    border-radius: 0.5rem;
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.438rem;
    color: var(--color_white);
    cursor: pointer;
    border: none;

    :hover {
      opacity: 0.75;
    }
  }
`;

export const HeaderForm = styled.div`
  width: 100%;
  background-color: var(--color_3);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px 8px 0px 0px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;

  .span-modal {
    font-family: var(--font--secondary);
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 55px;
    display: flex;
    align-items: center;
    text-align: center;

    color: var(--color_4);
  }
  @media screen and (min-width: 375px) {
    .span-modal {
      font-size: 48px;
    }
  }
`;

export const ContainerInputForm = styled.div`
  width: 100%;
  padding: 0 10px;

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
