import React, { useContext, useEffect } from "react";
import AuthProvider, {
  AuthContext,
} from "../../providers/AuthProvider/AuthProvider";
import { UserContext } from "../../providers/UserProvider/UserProvider";
import { ConteinerListaGasto } from "./style";
import { FaTrash } from "react-icons/fa";

interface IHotel {
  name: string;
}

const hotel: IHotel = {
  name: "Good Hotel",
};

const ListaGasto = () => {
  const { hotelSpents, deleteBooking } = useContext(UserContext);
  const { user } = useContext(AuthContext);

  function totalSpents() {
    const total = hotelSpents.reduce((acc, spent) => {
      return acc + Number(spent.price);
    }, 0);

    return total.toFixed(2).replace(".", ",");
  }

  function deleteHospedagem(index) {
    const token = localStorage.getItem("softHotel:token");
    if (token) {
      deleteBooking(index, token);
    }
  }

  return (
    <ConteinerListaGasto>
      <div>
        <h2 className="headerListaGasto">Gasto {hotel.name} </h2>
      </div>
      <ul className="conteinerlista">
        {hotelSpents.map((spent, index) => {
          return (
            <li key={index} className="consumoitem">
              <p className="item__box item--name">{spent.name}</p>
              <p className="item__box item--type">{spent.type}</p>
              <p className="item__box item--price">
                R$ {Number(spent.price).toFixed(2).replace(".", ",")}
              </p>
              <button
                className="trashTech"
                onClick={() => deleteHospedagem(user.id)}
              >
                <FaTrash />
              </button>
            </li>
          );
        })}
      </ul>
      <div className="consumototal">
        <p>total</p>
        <p>R$ {totalSpents()}</p>
      </div>
    </ConteinerListaGasto>
  );
};

export default ListaGasto;
