import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

import { StyledHome } from "./style";

import GoodHotel from "../../assets/svg-login/GoodHotel.svg";
import room from "../../assets/svg-login/Room2.svg";
import cottage from "../../assets/svg-login/cottage.svg";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import ButtonMenu from "../../components/ButtonMenu";

import {
  MdWifi,
  MdOutlineDinnerDining,
  MdOutlinePool,
  MdOutlineAcUnit,
} from "react-icons/md";
import CardQuarto from "../../components/CardQuarto";
import { HotelContex } from "../../providers/HotelProvider";

const Home = () => {
  const navigation = useNavigate();

  const { roomlist } = useContext(HotelContex);

  function goLogin() {
    navigation("/login", { replace: true });
  }

  const cardQuartos = roomlist?.map((quarto) => (
    <li key={`${uuid()}-${quarto.title}`}>
      <CardQuarto room={quarto} />
    </li>
  ));

  return (
    <StyledHome>
      <div className="content">
        <Header />
        <main>
          <div className="headerMobile">
            <ButtonMenu />
            <div className="imgCont">
              <img className="img-header-form" src={GoodHotel} alt="" />
            </div>
            <div className="navBox">
              <nav>
                <MdWifi className="icon" />
                <MdOutlineDinnerDining className="icon" />
                <MdOutlinePool className="icon" />
                <MdOutlineAcUnit className="icon" />
              </nav>
            </div>
          </div>
          <div className="contentDesktop">
            <div className="mainDescktop">
              <h1>Aproveite as férias dos seus sonhos</h1>
              <Button onClick={goLogin}>Entrar</Button>
            </div>
            <img src={cottage} alt="" className="cottageImg" />
          </div>
          <div className="quartosContainer">
            <ul className="room__list">{cardQuartos}</ul>
          </div>
          <div className="btnMobile">
            <Button onClick={goLogin}>Entrar</Button>
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </StyledHome>
  );
};

export default Home;
