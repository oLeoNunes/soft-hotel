import React from "react";
import Mall from "../../assets/dashboard/Group 67.svg";
import Bier from "../../assets/dashboard/beer_3 1.svg";
import Rest from "../../assets/dashboard/peopleBeach.svg";
import { ImagemConteiner } from "./style";
import { Link, useNavigate } from "react-router-dom";

// import { Container } from './styles';

const ImagemClick = () => {
  const navigate = useNavigate();
  return (
    <ImagemConteiner>
      <Link to="/list">
      <img
        src={Mall}
        onClick={() => console.log("vai para lista de Lojas")}
        alt="Mall"
        ></img>
      <img
        src={Bier}
        onClick={() => console.log("vai para lista de bares")}
        alt="Bier"
        ></img>
      <img
        src={Rest}
        onClick={() => console.log("vai para lista de Restaurantes")}
        alt="Rest"
        ></img>
        </Link>
    </ImagemConteiner>
  );
};

export default ImagemClick;
