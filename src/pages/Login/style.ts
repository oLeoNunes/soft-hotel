import styled from "styled-components";
import { ButtonContainer } from "../../components/Button/style";

export const StyledLogin = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  position: relative;

  .container-login {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .container__dropbox {
    display: flex;
  }

  .container-login__image {
    display: none;
    width: 602px;
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

  .label-login-password {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    color: var(--color_1);
  }

  .container-text {
    display: flex;
    flex-direction: row;
    width: 255px;
    margin-top: 28px;
  }

  .container-text__register {
    display: flex;
    align-items: center;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: var(--color_1);
  }

  .btn-register {
    border: none;
    background-color: var(--color_white);
    text-decoration: underline;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    display: flex;
    align-items: center;
    text-align: center;
    color: var(--color_1);
    cursor: pointer;
  }
  .erro_Box {
    width: 100%;
    color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }

  @media (min-width: 768px) {
    background-color: var(--color_white);

    align-items: center;
    justify-content: center;

    .container-login {
      display: flex;

      align-items: center;
      justify-content: center;

      width: 100%;
      height: 600px;
      max-width: 64rem;
    }

    .img-header-form {
      display: none;
    }

    .container__dropbox {
      display: none;
    }
    form {
      margin-top: 0px;
      max-width: 425px;
    }
  }

  @media (min-width: 1024px) {
    .container-login {
      justify-content: flex-start;
      flex-direction: row;
    }
    .container-login__image {
      display: flex;
      background: var(--color_white);
      border-radius: 8px 0px 0px 8px;
    }

    form {
      padding-right: 5rem;
    }
  }
  @media screen and (min-width: 1440px) {
    .container-login {
      margin-top: 7.5rem;
    }
    .error__message {
      font-size: 12px;
    }
    form {
      padding-right: 0;
    }
  }

  footer {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: flex-end;
    background-color: inherit;
  }
  @media (min-width: 48rem) {
    footer {
      background-color: inherit;
      height: 100%;
      width: 100%;
      display: flex;
      align-items: flex-end;
    }
  }
`;

export const LoginButton = styled(ButtonContainer)`
  background: var(--color_5);
`;
