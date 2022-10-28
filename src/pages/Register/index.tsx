import React, { useContext } from "react";

import { FieldValues, useForm } from "react-hook-form";

import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Input from "../../components/Input";
import InputPassword from "../../components/InputPassword";

import GoodHotel from "../../assets/svg-login/GoodHotel.svg";
import { ContainerRegister, StyledRegister } from "./style";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { RegisterContext } from "../../providers/RegisterProvider/RegisterProvider";
import ButtonMenu from "../../components/ButtonMenu";
import { IRoom } from "../../services/interfaces";

const Register = () => {
  const { registerUser } = useContext(RegisterContext);
  const schema = yup.object({
    name: yup.string().required(" Nome é obrigatório "),

    email: yup
      .string()
      .email(" Deve ser um email ")
      .required(" Email é obrigatório "),

    birthday: yup.string().required(" Data de nascimento é obrigatório "),

    cpf: yup.string().required(" Cpf é obrigatório "),

    cep: yup.string().required(" O cep é obrigatório "),

    street: yup.string().required(" A rua é obrigatória "),

    district: yup.string().required(" O bairro é obrigatório"),

    number: yup.string().required(" O número é obrigatório "),

    country: yup.string().required(" O País é obrigatório "),

    state: yup.string().required(" O estado é obrigatório "),

    city: yup.string().required(" A cidade é obrigatória "),

    password: yup
      .string()
      .min(8, "No minímo 8 caracteres")
      .required("Senha obrigatória")
      .matches(
        /(^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*_-])).{8,}$/,
        "Deve ter 8 letras, uma maiúscula, uma minúscula,um número e um caracter especial."
      ),

    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "A confirmação deve ser igual a senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
    const newRegister = {
      email: data.email,
      password: data.password,
      name: data.name,
      age: 38,
      birthday: data.birthday,
      cpf: data.cpf,
      address: {
        cep: data.cep,
        street: data.street,
        district: data.district,
        number: data.number,
        country: data.country,
        state: data.state,
        city: data.city,
      },
      room: {} as IRoom,
      gastos: {
        gastosHotel: [],
      },
    };
    registerUser(newRegister);
  }
  return (
    <>
      <ContainerRegister>
        <Header />
        <StyledRegister>
          <div className="container__dropbox">
            <ButtonMenu />
            <img
              className="img-header-form"
              src={GoodHotel}
              alt="imagem prime"
            />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="title-login">Register</h2>
            <div className="container__info">
              <Input
                label="Nome Completo:"
                placeholder="Digite seu nome"
                nameInput="name"
                register={register}
                errosMessage={errors.name?.message?.toString()}
              />
            </div>
            <div className="container__info">
              <Input
                label="Email:"
                placeholder="Digite seu email"
                nameInput="email"
                register={register}
                errosMessage={errors.email?.message?.toString()}
              />
            </div>
            <div className="container__info">
              <Input
                label="Data de Nascimento:"
                placeholder="Digite aqui"
                nameInput="birthday"
                register={register}
                type={"date"}
                errosMessage={errors.birthday?.message?.toString()}
              />
            </div>
            <div className="container__info">
              <Input
                label="Cpf:"
                placeholder="Digite email"
                nameInput="cpf"
                register={register}
                errosMessage={errors.cpf?.message?.toString()}
              />
            </div>
            <div className="container__info">
              <Input
                label="Cep:"
                placeholder="Digite seu cep"
                nameInput="cep"
                register={register}
                errosMessage={errors.cep?.message?.toString()}
              />
            </div>
            <div className="container__info">
              <Input
                label="Rua:"
                placeholder="Digite sua rua"
                nameInput="street"
                register={register}
                errosMessage={errors.street?.message?.toString()}
              />
            </div>
            <div className="container__info">
              <Input
                label="Bairro:"
                placeholder="Digite seu bairro"
                nameInput="district"
                register={register}
                errosMessage={errors.district?.message?.toString()}
              />
            </div>
            <div className="container__info">
              <Input
                label="Número:"
                placeholder="Digite seu número"
                nameInput="number"
                register={register}
                errosMessage={errors.number?.message?.toString()}
              />
            </div>
            <div className="container__info">
              <Input
                label="País:"
                placeholder="Digite o nome do País "
                nameInput="country"
                register={register}
                errosMessage={errors.country?.message?.toString()}
              />
            </div>
            <div className="container__info">
              <Input
                label="Estado:"
                placeholder="Digite o nome do estado "
                nameInput="state"
                register={register}
                errosMessage={errors.state?.message?.toString()}
              />
            </div>
            <div className="container__info">
              <Input
                label="Cidade:"
                placeholder="Digite o nome da cidade"
                nameInput="city"
                register={register}
                errosMessage={errors.city?.message?.toString()}
              />
            </div>
            <div className="container__info">
              <InputPassword
                type={"password"}
                label="Senha:"
                nameInput="password"
                placeholder="Digite sua senha"
                register={register}
                errosMessage={errors.password?.message?.toString()}
              />
            </div>
            <div className="container__info">
              <InputPassword
                type={"password"}
                label="Confirme sua Senha:"
                nameInput="confirmPassword"
                placeholder="Confirme sua Senha:"
                register={register}
                errosMessage={errors.confirmPassword?.message?.toString()}
              />
            </div>
            <div className="booton_box">
              <Button>Cadastrar</Button>
            </div>
            <div className="footer_box">
              <Footer />
            </div>
          </form>
        </StyledRegister>
      </ContainerRegister>
    </>
  );
};

export default Register;
