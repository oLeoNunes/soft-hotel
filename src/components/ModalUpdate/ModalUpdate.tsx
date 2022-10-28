import { ContainerForm, ContainerInputForm, HeaderForm } from "./style";
import { AiOutlineClose } from "react-icons/ai";
import { FieldValues, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import { BackGroundModal } from "../BackgroundModal/style";
import Button from "../Button";
import { useContext } from "react";
import { ModalContext } from "../../providers/ModalProvider";
import { UserContext } from "../../providers/UserProvider/UserProvider";
import { IEditSpent, ISpent } from "../../services/interfaces";

export interface IAddTech {
  local: string;
  valor: string;
  categoria: string;
}

const schema = yup.object({
  name: yup.string().required("Local Obrigatório"),
  price: yup.string().required("Valor obrigatório"),
});

const ModalUpdate = () => {
  const { openOrCloseModalEditSpent, dataModalEditspent } =
    useContext(ModalContext);

  const { EditSpent, deleteExtraSpent } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(schema),
  });

  const handleFormUpdate = (data) => {
    const editData: IEditSpent = {
      name: data.name,
      price: Number(Number(data.price?.replace(",", ".")).toFixed(2)),
      type: data.type,
    };

    EditSpent(editData as IEditSpent);
  };

  return (
    <BackGroundModal>
      <ContainerForm onSubmit={handleSubmit(handleFormUpdate)}>
        <HeaderForm>
          <span className="span-modal">Editar gasto</span>
          <AiOutlineClose
            size={24}
            onClick={() => {
              openOrCloseModalEditSpent({} as ISpent);
            }}
          />
        </HeaderForm>
        <ContainerInputForm>
          <div className="div-input">
            <Input
              defaultValue={dataModalEditspent.name}
              label={"Local"}
              nameInput={"name"}
              register={register}
              placeholder={"Ex: Restaurante"}
              errosMessage={errors.local?.message?.toString()}
            />
          </div>
          <div className="div-input">
            <Input
              defaultValue={
                dataModalEditspent.price
                  ? dataModalEditspent.price.toFixed(2).replace(".", ",")
                  : "0,00"
              }
              label={"Valor"}
              nameInput={"price"}
              register={register}
              placeholder={"Ex: 35.50"}
              errosMessage={errors.valor?.message?.toString()}
            />
          </div>
          <div className="div-input">
            <label htmlFor="" className="label">
              Categoria
            </label>
            <select
              defaultValue={dataModalEditspent.type}
              className="select"
              placeholder="Category"
              {...register("type")}
            >
              <option id="1" value="Food">
                {" "}
                Alimentação
              </option>
              <option id="2" value="Store">
                Compras
              </option>
              <option id="3" value="Turism">
                Passeios
              </option>
            </select>
          </div>
        </ContainerInputForm>
        <div
          className="button_box
        "
        >
          <Button type="submit">Editar</Button>
          <button
            className="btnExcluir"
            onClick={(event) => {
              event?.preventDefault();
              deleteExtraSpent();
            }}
            type="button"
          >
            Excluir
          </button>
        </div>
      </ContainerForm>
    </BackGroundModal>
  );
};
export default ModalUpdate;
