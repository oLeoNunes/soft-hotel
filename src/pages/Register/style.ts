import styled from "styled-components";

export const StyledRegister = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  position: relative;

  .container__dropbox {
    width: 100%;
  }

  .img-header-form {
    width: 100%;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 483px;
    width: 100%;
    margin-top: -120px;
    background: var(--color_white);
    border-radius: 64px 64px 0px 0px;
  }

  .title-login {
    font-family: var(--font--secondary);
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 74px;
    display: flex;
    align-items: center;
    text-align: center;
    color: var(--color_1);
    margin-top: 29px;
  }

  .container__info {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 1.5rem;
  }

  .container--input {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 24px;
  }
  .label-text {
    display: flex;
    justify-content: left;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: var(--color_1);
    width: 100%;
  }

  .input-text {
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
    margin-top: 8px;
  }

  .footer_box {
    display: flex;
    align-items: center;
    width: 100vw;
    min-height: 50px;
    height: 200px;
  }

  @media (min-width: 768px) {
    .container__dropbox {
      display: none;
    }
    .img-header-form {
      display: none;
    }
    form {
      margin-top: 0;
      max-width: 718px;
    }
  }
`;

export const ContainerRegister = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
