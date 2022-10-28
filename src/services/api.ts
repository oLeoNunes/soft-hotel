import axios from "axios";
import {
  IEditSpent,
  IListRestaurant,
  IloginData,
  INewSpent,
  IRegisterData,
  IResponseLogin,
  IRoom,
  ISpent,
  IUser,
} from "./interfaces";

const api = axios.create({
  baseURL: "https://softhotelkenzie.herokuapp.com/",
  timeout: 5000,
});

export async function requestLogin(data: IloginData) {
  const response = await api.post<IResponseLogin>("/login", data);

  return response.data;
}

export async function requestRegister(data: IRegisterData) {
  const response = await api.post<IResponseLogin>("/register", data);

  return response.data;
}

export async function requestRooms() {
  const response = await api.get<IRoom[]>("/rooms");
  return response.data;
}
export async function requestListRestaurants() {
  const response = await api.get<IListRestaurant[]>("/listRestaurants");
  return response.data;
}

export async function requestUser(token: string) {
  let teste = true;
  let i = 1;
  let response;

  while (teste && i < 10) {
    response = await api
      .get<IUser>(`/users/${i}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        teste = false;
        console.clear();
        return response;
      })
      .catch(() => {
        i++;
      });
  }

  if (i >= 10) {
    console.clear();
    return false;
  }

  return response.data;
}

export async function requestUserID(token: string, id: string) {
  const response = await api.get<IUser>(`/users/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function requestExtraSpents(token: string) {
  let response = await api.get<ISpent[]>(`/extraSpent`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function requestNewExtraSpents(data: INewSpent, token: string) {
  let response = await api.post<ISpent>("/extraSpent", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function requestEditExtraSpents(
  data: IEditSpent,
  token: string,
  spentId: number
) {
  let response = await api.patch<ISpent>(`/extraSpent/${spentId}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function requestDeleteExtraSpents(token: string, spentId: number) {
  let response = await api.delete(`/extraSpent/${spentId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function requestUpdateRoom(
  id: string,
  data: IRoom,
  token: string
) {
  const newRoom = {
    room: data,
  };

  let response = await api.patch<IUser>(`/users/${id}`, newRoom, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function requestDeleteBooking(id: number, token: string) {
  const newHotelexpend = {
    gastos: {
      gastosHotel: [],
    },
    room: {},
  };

  let response = await api.patch(`/users/${id}`, newHotelexpend, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function requestUptadeHotelSpent(
  id: string,
  data: IRoom,
  token: string,
  days: number
) {
  const precoTotal = Number(data.price) * days;

  const newHotelexpend = {
    gastos: {
      gastosHotel: [
        {
          name: data.title,
          price: precoTotal,
          type: "Hospedagem",
        },
      ],
    },
  };

  let response = await api.patch<IUser>(`/users/${id}`, newHotelexpend, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
export async function requestChecinList(data: IRoom, token: string) {}
