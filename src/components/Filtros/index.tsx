import { BiSearch } from "react-icons/bi";
import { FiltrosContainer } from "./style";
import { AiOutlineAim, AiOutlineDown } from "react-icons/ai";
import { BiRestaurant } from "react-icons/bi";
import { MdStars } from "react-icons/md";
import { RestaurantContex } from "../../providers/ListRestaurantProvider";
import { useContext } from "react";
const Filtros = () => {
  const {
    restaurantlist,
    showCardList,
    restaurantFilter,
    InputValue,
    setInputValue,
  } = useContext(RestaurantContex);

  return (
    <FiltrosContainer>
      <div className="container__filtros">
        <div className="container__filtros--distancia">
          <AiOutlineAim />
          <h2 className="text-filtros">distância</h2>
          <AiOutlineDown className="style__icon--filterInfo" />
        </div>

        <div className="container__filtros--categoria">
          <BiRestaurant />
          <h2 className="text-filtros">categoria</h2>
          <AiOutlineDown className="style__icon--filterInfo" />
        </div>

        <div className="container__filtros--avaliacao">
          <MdStars />
          <h2 className="text-filtros">avaliação</h2>
          <AiOutlineDown className="style__icon--filterInfo" />
        </div>
      </div>
      <div className="container__barraPesquisa">
        <BiSearch className="style__icon--search" />
        <input
          className="input"
          type="text"
          placeholder="Nome do restaurante"
          onChange={(e) => {
            setInputValue(e.target.value);
            showCardList(InputValue);
          }}
        />
      </div>
    </FiltrosContainer>
  );
};

export default Filtros;
