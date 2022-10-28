import React, { useContext, useEffect, useState } from "react";
import Footer from "../../components/Footer";
import CardHotel from "../../components/CardHotel";
import { DashContainer } from "./style";
import { StyledDash } from "./style";
import TotalGraphc from "../../components/TotalGraphc";
import ImagemClick from "../../components/ImagemClick";
import ListaGasto from "../../components/ListaGasto";
import GastoExtra from "../../components/GastoExtra";
import { ModalContext } from "../../providers/ModalProvider";
import ModalUpdate from "../../components/ModalUpdate/ModalUpdate";
import ModalAdd from "../../components/ModalAdd-20220905T120455Z-001/ModalAdd/ModalAdd";
import Header from "../../components/Header";
import ButtonMenu from "../../components/ButtonMenu";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { UserContext } from "../../providers/UserProvider/UserProvider";
import { Link } from "react-router-dom";
import ModalBooking from "../../components/ModalReserva";

export interface IGraficData {
  food: number;
  store: number;
  hotel: number;
  turism: number;
}

const Dashborad = () => {
  const { modalNewSpent, modalEditSpent, modalBooking } =
    useContext(ModalContext);
  const { user } = useContext(AuthContext);
  const { hotelSpents, extraSpents, room } = useContext(UserContext);
  const [graficData, setGraficData] = useState<IGraficData>({} as IGraficData);

  function splitType() {
    const food = extraSpents
      .filter((extra) => extra.type === "Food")
      .reduce((acc, extra) => {
        return acc + Number(extra.price);
      }, 0);

    const store = extraSpents
      .filter((extra) => extra.type === "Store")
      .reduce((acc, extra) => {
        return acc + Number(extra.price);
      }, 0);
    const turism = extraSpents
      .filter((extra) => extra.type === "Turism")
      .reduce((acc, extra) => {
        return acc + Number(extra.price);
      }, 0);

    const hotel = hotelSpents.reduce((acc, spent) => {
      return acc + Number(spent.price);
    }, 0);

    setGraficData({ food: food, store: store, hotel: hotel, turism: turism });
  }

  useEffect(() => {
    splitType();
  }, [extraSpents, hotelSpents]);

  return (
    <DashContainer>
      {modalNewSpent && <ModalAdd />}
      {modalEditSpent && <ModalUpdate />}
      {modalBooking && <ModalBooking />}
      <StyledDash>
        <div className="box__desktopHeader">
          <Header />
        </div>

        <header className="box__mobileHeader">
          <h1 className="UserNameMObile">{user.name}</h1>
        </header>
        <main className="dashmain">
          <div className="cardHotelGraphic">
            <div className="UserNameDesktop">
              <h1>{user.name}</h1>
            </div>
            <CardHotel room={room} />

            <TotalGraphc data={graficData} />
          </div>
          <div className="ImagemListas">
            <Link to="/list">
              <div className="box__Icons">
                <ImagemClick />
              </div>
            </Link>
            <ListaGasto />

            <GastoExtra />
          </div>
        </main>

        <footer>
          <Footer />
        </footer>
        <div className="box__mobileHeader">
          <ButtonMenu />
        </div>
      </StyledDash>
    </DashContainer>
  );
};

export default Dashborad;
