import { Routes, Route, Navigate } from "react-router-dom";
import Dashborad from "../pages/Dashborad";
import Home from "../pages/Home";
import Login from "../pages/Login/index";
import Register from "../pages/Register";
import PaginaTeste from "../pages/PaginaTeste";
import AuthProvider from "../providers/AuthProvider/AuthProvider";
import LoginProvider from "../providers/LoginProviders/LoginProviders";
import RegisterProvider from "../providers/RegisterProvider/RegisterProvider";
import About from "../pages/About";
import HotelProvider from "../providers/HotelProvider";

import UserProvider from "../providers/UserProvider/UserProvider";
import List from "../pages/ListRestaurant";
import RestaurantProvider from "../providers/ListRestaurantProvider";
import Contacts from "../pages/Contacts";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/" element={<Navigate to="/home" />} />

      <Route path="/" element={<AuthProvider />}>
        <Route path="/list" element={<RestaurantProvider />}>
          <Route path="/list" element={<List />} />
        </Route>
        <Route element={<HotelProvider />}>
          <Route path="/about" element={<About />} />
          <Route element={<RegisterProvider />}>
            <Route path="/register" element={<Register />} />
          </Route>
          <Route path="/home" element={<Home />} />
          <Route path="/contatos" element={<Contacts />} />
          <Route element={<LoginProvider />}>
            <Route path="/login" element={<Login />} />
            <Route element={<UserProvider />}>
              <Route path="/teste" element={<PaginaTeste />} />
              <Route path="/dashboard" element={<Dashborad />} />
            </Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default RoutesMain;
