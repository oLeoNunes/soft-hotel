import { createContext, ReactNode } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ToastContextData {
  toastSucesso: (mensagem: string) => void;
  toastErro: (mensagem: string) => void;
}

export const ToastContext = createContext<ToastContextData>(
  {} as ToastContextData
);

interface IProps {
  children: ReactNode;
}

const ToastProvider = ({ children }: IProps) => {
  function toastSucesso(mensagem: string | any): void {
    toast.success(mensagem, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  function toastErro(mensagem: string | any): void {
    toast.error(mensagem, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <ToastContext.Provider value={{ toastSucesso, toastErro }}>
      <ToastContainer />
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
