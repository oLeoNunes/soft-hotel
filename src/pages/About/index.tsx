import React from "react";
import { useNavigate } from "react-router-dom";

import { StyledAbout} from "./style";

import GoodHotel from "../../assets/svg-login/GoodHotel.svg";
import aboutAb from "../../assets/svg-login/about.svg"

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

const About = () => {
  const navigation = useNavigate();

  function goLogin() {
    navigation("/login", { replace: true });
  }

  return (
    <StyledAbout>
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
            <img src={aboutAb} alt="" className="hotelAbout" />
          </div>
          <div className="infoContainer">
            <ul className="room__list">
              <li className="cardAbout">
                <div className="titleAbout">
                  <h2 className="mainTitle">QUEM</h2>
                  <p className="paragraphTitle">SOMOS?</p>
                </div>
                <p className="paragraphContent">
                  et netus et malesuada fames ac turpis egestas integer eget
                  aliquet nibh praesent tristique magna sit amet purus gravida
                  quis blandit turpis
                </p>
              </li>
              <li className="cardAbout">
                <div className="titleAbout">
                  <h2 className="mainTitle">O QUE</h2>
                  <p className="paragraphTitle">FAZEMOS?</p>
                </div>
                <p className="paragraphContent">
                  et netus et malesuada fames ac turpis egestas integer eget
                  aliquet nibh praesent tristique magna sit amet purus gravida
                  quis blandit turpis
                </p>
              </li>
              <li className="cardAbout">
                <div className="titleAbout">
                  <h2 className="mainTitle">COMO</h2>
                  <p className="paragraphTitle">ALUGAR?</p>
                </div>
                <p className="paragraphContent">
                  et netus et malesuada fames ac turpis egestas integer eget
                  aliquet nibh praesent tristique magna sit amet purus gravida
                  quis blandit turpis
                </p>
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
    </StyledAbout>
  );
};

export default About;
