export interface IUser {
  name: string;
  email: string;
  birthday: string;
  cpf: string;
  address: IAddress;
  password: string;
  age: number;
  room: IRoom;
  id: string;
  gastos: IUserSpent;
}

export interface IUserSpent {
  gastosHotel: IHotelSpent[];
}

export interface IAddress {
  cep: string;
  street: string;
  district: string;
  number: string;
  country: string;
  state: string;
  city: string;
}

export interface IloginData {
  email: string;
  password: string;
}

export interface IResponseLogin {
  accessToken: string;
  user: IUser;
}

export interface IRegisterData {
  name: string;
  email: string;
  birthday: string;
  cpf: string;
  address: IAddress;
  password: string;
  age: number;
  room: IRoom;
}

export interface IRoom {
  img: string;
  title: string;
  rank: number;
  price?: number;
  checkin?: string;
  checkout?: string;
}

export interface ISpent {
  id: number;
  name: string;
  price: number;
  type: string;
  userId: string;
}

export interface INewSpent {
  userId: string;
  name: string;
  price: number;
  type: string;
}

export interface IEditSpent {
  name: string;
  price: number;
  type: string;
}

export interface IListRestaurant {
  img: string;
  category: string;
  id: string;
  district: string;
  name: string;
}

export interface INewBooking {
  days: number;
  room: IRoom;
  user?: IUser;
}

export interface IHotelSpent {
  name: string;
  price: string;
  type: string;
}
