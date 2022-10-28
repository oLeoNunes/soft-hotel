import React from "react";
import { useNavigate } from "react-router-dom";

import { StyledContacts } from "./style";

import GoodHotel from "../../assets/svg-login/GoodHotel.svg";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import ButtonMenu from "../../components/ButtonMenu";

import {
  MdWifi,
  MdOutlineDinnerDining,
  MdOutlinePool,
  MdOutlineAcUnit,
  MdOutlineMailOutline,
} from "react-icons/md";
import { BsTelephone, BsWhatsapp } from "react-icons/bs";

const Contacts = () => {
  const navigation = useNavigate();


  function goLogin() {
    navigation("/login", { replace: true });
  }

  return (
    <StyledContacts>
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
            <h1 className="titleContent">Como você prefere falar com a gente?</h1>
          </div>
          <div className="contactContainer">
            <ul className="contact__list">
              <li className="cardInfo">
                <MdOutlineMailOutline className="cardIcon" />
                <p className="titleCard">EMAIL</p>
                <span className="sloganCard">Tem alguma dúvida?</span>
                <p className="infoCard">ajudagoodhotel@email.com</p>
              </li>
              <li className="cardInfo">
                <BsTelephone className="cardIcon" />
                <p className="titleCard">TELEFONE</p>
                <span className="sloganCard">
                  Você pode ligar a qualquer hora.
                </span>
                <p className="infoCard">(11) 3136-8935</p>
              </li>
              <li className="cardInfo">
                <BsWhatsapp className="cardIcon" />
                <p className="titleCard">Whatsapp</p>
                <span className="sloganCard">
                  Precisa de ajuda agora? Mande uma mensagem
                </span>
                <p className="infoCard">(11) 98884-3822</p>
              </li>
            </ul>
          </div>
          <div className="btnMobile">
            <Button onClick={goLogin}>Entrar</Button>
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </StyledContacts>
  );
};

export default Contacts;
