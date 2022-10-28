import React, { createContext, useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import { requestLogin } from "../../services/api";
import { IloginData, IUser } from "../../services/interfaces";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContext } from "../ToastyProvider/ToasyProvider";

interface IcontextProps {
  login: (data: IloginData) => void;
  loginError: boolean;
}

export const LoginContext = createContext<IcontextProps>({} as IcontextProps);

const LoginProvider = () => {
  const { toastSucesso } = useContext(ToastContext);
  const { addToken } = useContext(AuthContext);
  const [loginError, setLoginError] = useState(false);

  async function login(data: IloginData) {
    try {
      const resp = await requestLogin(data);
      localStorage.setItem("softHotel:token", resp.accessToken);
      addToken();
      toastSucesso("Login Feito com Sucesso");
      setLoginError(false);
    } catch (error) {
      setLoginError(true);
    }
  }

  return (
    <LoginContext.Provider value={{ login, loginError }}>
      <Outlet />
    </LoginContext.Provider>
  );
};

export default LoginProvider;
