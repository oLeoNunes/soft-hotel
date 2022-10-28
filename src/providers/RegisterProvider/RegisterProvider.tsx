import { createContext, useContext } from "react";

import { Navigate, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { requestRegister } from "../../services/api";
import { IRegisterData } from "../../services/interfaces";
import { ToastContext } from "../ToastyProvider/ToasyProvider";

interface IcontextProps {
  registerUser: (data: IRegisterData) => void;
}

export const RegisterContext = createContext<IcontextProps>(
  {} as IcontextProps
);

const RegisterProvider = () => {
  const navigation = useNavigate();
  const { toastSucesso, toastErro } = useContext(ToastContext);

  async function registerUser(data: IRegisterData) {
    try {
      const resp = await requestRegister(data);
      console.log(resp.user);
      toastSucesso("Registro Feito com Sucesso");
      navigation("login");
    } catch (error: any) {
      toastErro(error.response.data);
    }
  }

  return (
    <RegisterContext.Provider value={{ registerUser }}>
      <Outlet />
    </RegisterContext.Provider>
  );
};

export default RegisterProvider;
