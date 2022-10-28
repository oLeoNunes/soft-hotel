import { createContext, ReactNode, useState } from "react";
import { ISpent } from "../../services/interfaces";

interface IModalContext {
  dataModalEditspent: ISpent;
  modalNewSpent: boolean;
  modalEditSpent: boolean;
  openOrCloseModalNewSpent: () => void;
  openOrCloseModalBooking: () => void;
  openOrCloseModalEditSpent: (data: ISpent) => void;
  modalBooking: boolean;
}

interface IModalProps {
  children: ReactNode;
}

export const ModalContext = createContext<IModalContext>({} as IModalContext);

const ModalProvider = ({ children }: IModalProps) => {
  const [dataModalEditspent, setDataModalEditspent] = useState<ISpent>(
    {} as ISpent
  );

  const [modalNewSpent, setModalNewSpent] = useState(false);
  const [modalEditSpent, setModalEditSpent] = useState(false);
  const [modalBooking, setModalBooking] = useState(false);

  const openOrCloseModalBooking = () => {
    setModalBooking(!modalBooking);
  };

  const openOrCloseModalNewSpent = () => {
    setModalNewSpent(!modalNewSpent);
  };

  const openOrCloseModalEditSpent = (data: ISpent) => {
    setDataModalEditspent(data);
    setModalEditSpent(!modalEditSpent);
  };

  return (
    <ModalContext.Provider
      value={{
        dataModalEditspent,
        modalNewSpent,
        modalEditSpent,
        openOrCloseModalNewSpent,
        openOrCloseModalEditSpent,
        modalBooking,
        openOrCloseModalBooking,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
