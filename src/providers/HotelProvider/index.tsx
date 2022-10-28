import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { requestRooms } from "../../services/api";
import { IRoom } from "../../services/interfaces";

interface IHotelContextData {
  roomlist: IRoom[];
}

export const HotelContex = createContext<IHotelContextData>(
  {} as IHotelContextData
);

const HotelProvider = () => {
  const [roomlist, setRoomList] = useState<IRoom[]>([]);

  async function getRoomList() {
    const newRoomList = await requestRooms();
    setRoomList(newRoomList);

  }

  useEffect(() => {
    getRoomList();
  }, []);

  return (
    <HotelContex.Provider value={{ roomlist }}>
      <Outlet />
    </HotelContex.Provider>
  );
};

export default HotelProvider;
