import React, { useContext } from "react";

import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Link } from "react-router-dom";

import { LoginButton, StyledLogin } from "./style";
import { Container } from "../../style/GlobalStyle";

import GoodHotel from "../../assets/svg-login/GoodHotel.svg";

import imageBeach from "../../assets/svg-login/g10.svg";

import { LoginContext } from "../../providers/LoginProviders/LoginProviders";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Input from "../../components/Input";
import InputPassword from "../../components/InputPassword";
import ButtonMenu from "../../components/ButtonMenu";

export interface IData {
  email: string;
  password: string;
  message: string;
}

const Login = () => {
  const { login, loginError } = useContext(LoginContext);

  function onSubmit(data) {
    login(data);
  }

  const validationUser = yup.object().shape({
    email: yup
      .string()
      .required("O email é obrigatório")
      .email("E-mail inválido"),
    password: yup
      .string()
      .required("A senha é obrigatória")
      .min(8, "A senha deve conter no minímo 8 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(validationUser),
  });

  return (
    <>
      <Container>
        <Header />
        <StyledLogin>
          <section className="container-login">
            <div className="container-login__image">
              <figure>
                <img src={imageBeach} alt="" />
              </figure>
            </div>
            <div className="container__dropbox">
              <ButtonMenu />
              <img
                className="img-header-form"
                src={GoodHotel}
                alt="Imagem Marca"
              />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2 className="title-login">Login</h2>
              <div className="container__info">
                <Input
                  label="Email :"
                  placeholder="Digite email"
                  nameInput="email"
                  register={register}
                  errosMessage={errors.email?.message?.toString()}
                />
              </div>
              <div className="container__info">
                <InputPassword
                  type={"password"}
                  label="Senha :"
                  nameInput="password"
                  placeholder="Digite sua senha"
                  register={register}
                  errosMessage={errors.password?.message?.toString()}
                />
              </div>
              <div className="erro_Box">
                {loginError && (
                  <p className="erroLogin">Email e senha não confere</p>
                )}
              </div>
              <LoginButton>Entrar</LoginButton>
              <div className="container-text">
                <p className="container-text__register">
                  Não tem usuário ainda?
                </p>
                <Link className="btn-register" to="/register">
                  cadastre-se agora
                </Link>
              </div>
            </form>
          </section>

          <footer>
            <Footer />
          </footer>
        </StyledLogin>
      </Container>
    </>
  );
};

export default Login;
