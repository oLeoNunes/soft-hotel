import { StyleCard } from "./style";
import { AiOutlineStar } from "react-icons/ai";
import { MdPlace } from "react-icons/md";
import { RestaurantContex } from "../../providers/ListRestaurantProvider/index";
import { useContext } from "react";
import { IListRestaurant } from "../../services/interfaces";
import { motion } from "framer-motion";
/*
Icone da estrela do card- AiOutlineStar
Icone do filtro de  restuarante - BiRestaurant
icone da distancia - MdPlace
12h18
Icone do filtro de distancia -AiOutlineAim
Icone do filtro de avaliação- MdStars
Icone do input de busca - BiSearch
*/

interface IProps {
  restaurant?: IListRestaurant;
}

const CardList = ({ restaurant }: IProps) => {
  return (
    <StyleCard>
      <motion.section
        className="container"
        whileHover={{ scale: 1.1, originX: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <figure className="figure">
          <img src={restaurant?.img} alt="" className="img__CardList" />
        </figure>

        <div className="container__box">
          <div className="container__category">
            <div className="div__container__category">
              <h3 className="container__category--title">
                {restaurant?.category}
              </h3>
            </div>
            <div className="container__distance">
              <AiOutlineStar className="style-icon-star" />
              <h3 className="container__distance--title">4.7</h3>
            </div>
          </div>
        </div>

        <div className="container__box2">
          <div className="container__box5">
            <h3 className="container__mark--title"> {restaurant?.district}</h3>

            <p className="container__location--text">{restaurant?.name}</p>
          </div>

          <div className="container__box6">
            <MdPlace className="style-icon-location" />
            <p className="container__location--text2">3.0km</p>
          </div>
        </div>
      </motion.section>
    </StyleCard>
  );
};
export default CardList;
