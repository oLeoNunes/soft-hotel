import { createContext, useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import {
  requestDeleteBooking,
  requestDeleteExtraSpents,
  requestEditExtraSpents,
  requestExtraSpents,
  requestNewExtraSpents,
  requestUpdateRoom,
  requestUptadeHotelSpent,
  requestUserID,
} from "../../services/api";
import {
  IEditSpent,
  IHotelSpent,
  INewBooking,
  INewSpent,
  IRoom,
  ISpent,
} from "../../services/interfaces";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ModalContext } from "../ModalProvider";
import { ToastContext } from "../ToastyProvider/ToasyProvider";

interface IUserContextData {
  extraSpents: ISpent[];
  newSpent: (data: INewSpent) => void;
  EditSpent: (data: IEditSpent) => void;
  deleteExtraSpent: () => void;
  deleteBooking: (id:number, token:string) => void;
  newBookin: (data: INewBooking) => void;
  getRoom: () => void;
  room: IRoom;
  hotelSpents: IHotelSpent[];
}

export const UserContext = createContext({} as IUserContextData);

const UserProvider = () => {
  const { token, user } = useContext(AuthContext);
  const [extraSpents, setExtraSpents] = useState<ISpent[]>([]);
  const [hotelSpents, setHotelspents] = useState<IHotelSpent[]>([]);
  const [extraSpentsVazio, setExtraSpentsVazio] = useState<boolean>(true);
  const { toastSucesso, toastErro } = useContext(ToastContext);
  const {
    openOrCloseModalNewSpent,
    openOrCloseModalEditSpent,
    openOrCloseModalBooking,
    dataModalEditspent,
  } = useContext(ModalContext);

  const [room, setRoom] = useState<IRoom>({} as IRoom);

  async function getRoom() {
    const userRoom = await (await requestUserID(token, user.id)).room;
    setRoom(userRoom);
  }

  async function getSpents(token: string) {
    try {
      const response = await requestExtraSpents(token);
      const userSpents = response.filter((spent) => {
        return spent.userId === user.id;
      });
      setExtraSpents(userSpents);
      setExtraSpentsVazio(false);
    } catch (error: any) {
      if (error.response.status) {
        if (error.response.status === 403) {
          setExtraSpents([]);
          setExtraSpentsVazio(false);
        }
      }
    }
  }

  async function getHotelSpent() {
    try {
      const userHotelspent = await requestUserID(token, user.id);
      setHotelspents(userHotelspent.gastos.gastosHotel);
    } catch (error) {
      console.log(error);
    }
  }

  async function newSpent(data: INewSpent) {
    const newData: INewSpent = {
      userId: user.id,
      name: data.name,
      price: data.price,
      type: data.type,
    };

    try {
      await requestNewExtraSpents(newData, token);
      toastSucesso("Gasto adicionado com sucesso");
      openOrCloseModalNewSpent();
      await getSpents(token);
    } catch (error) {
      toastErro("Aconteceu algum problema");
    }
  }

  async function EditSpent(data: IEditSpent) {
    const editData: IEditSpent = {
      name: data.name,
      price: data.price,
      type: data.type,
    };

    try {
      await requestEditExtraSpents(editData, token, dataModalEditspent.id);
      toastSucesso("Gasto Editado com sucesso");
      openOrCloseModalEditSpent({} as ISpent);
      await getSpents(token);
    } catch (error) {
      toastErro("Aconteceu algum problema");
    }
  }

  async function deleteExtraSpent() {
    try {
      await requestDeleteExtraSpents(token, dataModalEditspent.id);
      toastSucesso("Gasto excluido com sucesso");
      getSpents(token);
      openOrCloseModalEditSpent({} as ISpent);
      
    } catch (error) {
      toastErro("Aconteceu algum problema");
    }
  }

  async function deleteBooking(id:number, token:string) {
    try {
      await requestDeleteBooking( id, token);
      toastSucesso("Reserva exluida com sucesso");
      getRoom();
      getHotelSpent();
    } catch (error) {
      toastErro("Aconteceu algum problema");
    }
  }
  async function newBookin(data: INewBooking) {
    try {
      await requestUpdateRoom(user.id, data.room, token);
      await requestUptadeHotelSpent(user.id, data.room, token, data.days);
      openOrCloseModalBooking();
      getRoom();
      getHotelSpent();
      toastSucesso("Quarto Reservado Com sucesso");
    } catch (error) {
      console.log(error);
      toastSucesso("Algo deu erro, tente novamente");
    }
  }

  useEffect(() => {
    if (user.id) {
      if (extraSpentsVazio) {
        getSpents(token);
        getRoom();
        getHotelSpent();
      }
    }
  });

  return (
    <UserContext.Provider
      value={{
        extraSpents,
        newSpent,
        EditSpent,
        deleteExtraSpent,
        deleteBooking,
        newBookin,
        getRoom,
        room,
        hotelSpents,
      }}
    >
      <Outlet />
    </UserContext.Provider>
  );
};
export default UserProvider;
