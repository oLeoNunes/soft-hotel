import { ContainerForm, ContainerInputForm, HeaderForm } from "./style";
import { AiOutlineClose } from "react-icons/ai";
import { useContext, useState } from "react";
import { ModalContext } from "../../../providers/ModalProvider";

import Input from "../../Input";
import * as yup from "yup";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { BackGroundModal } from "../../BackgroundModal/style";
import Button from "../../Button";
import { UserContext } from "../../../providers/UserProvider/UserProvider";
import { INewSpent } from "../../../services/interfaces";

const schema = yup.object({
  name: yup.string().required("Local Obrigatório"),
  price: yup.string().required("Valor obrigatório"),
});

const ModalAdd = () => {
  const { openOrCloseModalNewSpent } = useContext(ModalContext);
  const { newSpent } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    const newData = {
      name: data.name,
      price: Number(Number(data.price.replace(",", ".")).toFixed(2)),
      type: data.type,
    };
    newSpent(newData as INewSpent);
  }
  return (
    <BackGroundModal>
      <ContainerForm onSubmit={handleSubmit(onSubmit)}>
        <HeaderForm>
          <span className="span-modal">Add Custo</span>
          <AiOutlineClose
            size={24}
            onClick={() => openOrCloseModalNewSpent()}
          />
        </HeaderForm>
        <ContainerInputForm>
          <div className="div-input">
            <Input
              label="Local"
              nameInput="name"
              register={register}
              placeholder={"Ex:Restaurante"}
              errosMessage={errors.local?.message?.toString()}
            />
          </div>
          <div className="div-input">
            <Input
              label="Valor"
              nameInput="price"
              placeholder="ex: 35,60"
              register={register}
              errosMessage={errors.value?.message?.toString()}
            />
          </div>

          <div className="div-input">
            <label htmlFor="" className="label">
              Categoria
            </label>
            <select
              className="select"
              placeholder="Category"
              {...register("type")}
            >
              <option id="1" value="Food">
                Alimentacao
              </option>
              <option id="2" value="Store">
                Compras
              </option>
              <option id="3" value="Turism">
                Passeios
              </option>
            </select>
          </div>
          <div className="button__box">
            <Button type="submit">Adicionar</Button>
          </div>
        </ContainerInputForm>
      </ContainerForm>
    </BackGroundModal>
  );
};
export default ModalAdd;
