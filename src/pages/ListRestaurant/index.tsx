import ButtonMenu from "../../components/ButtonMenu";
import Header from "../../components/Header";
import logoGoodHotel from "../../assets/svg-login/logoGoodHotel.svg";
import { ListContainer, StyledList } from "./style";
import CardList from "../../components/CardList";
import Filtros from "../../components/Filtros";
import { RestaurantContex } from "../../providers/ListRestaurantProvider";
import { useContext } from "react";
import Footer from "../../components/Footer";

const List = () => {
  const { restaurantlist, restaurantFilter, validation } =
    useContext(RestaurantContex);

  return (
    <>
      <ListContainer>
        <StyledList>
          <div className="box__desktopHeader">
            <Header />
          </div>
          <header className="box__mobileHeader">
            <img src={logoGoodHotel} alt="logo" />
          </header>

          <Filtros />
          <main className="listmain">
            {validation
              ? restaurantFilter.map((restaurant) => {
                  return (
                    <CardList key={restaurant.id} restaurant={restaurant} />
                  );
                })
              : restaurantlist.map((restaurant) => {
                  return (
                    <CardList key={restaurant.id} restaurant={restaurant} />
                  );
                })}
          </main>
        </StyledList>
        <div className="box__mobileHeader">
          <ButtonMenu />
        </div>
        <footer>
          <Footer />
        </footer>
      </ListContainer>
    </>
  );
};

export default List;
