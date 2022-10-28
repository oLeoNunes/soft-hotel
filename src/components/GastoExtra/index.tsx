import { useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { ModalContext } from "../../providers/ModalProvider";
import { UserContext } from "../../providers/UserProvider/UserProvider";

import { ConteinerGastoExtra } from "./style";

const GastoExtra = () => {
  const { openOrCloseModalNewSpent, openOrCloseModalEditSpent } =
    useContext(ModalContext);
  const { extraSpents } = useContext(UserContext);

  function total() {
    const total = extraSpents.reduce((acc, extra1) => {
      return acc + extra1.price;
    }, 0);
    return total;
  }

  function translate(type: string) {
    let traducao;

    switch (type) {
      case "Food":
        traducao = "Alimentação";
        break;
      case "Store":
        traducao = "Compras";
        break;
      case "Turism":
        traducao = "Passeios";
        break;
    }

    return traducao;
  }

  return (
    <ConteinerGastoExtra>
      <div className="headerListaGasto">
        <h2>Gasto Extra </h2>
        <button onClick={openOrCloseModalNewSpent}>
          <AiOutlinePlus />
        </button>
      </div>
      <ul className="conteinerlista">
        {extraSpents?.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                openOrCloseModalEditSpent(item);
              }}
              className="consumoitem"
            >
              <p className="item__box item--name">{item.name}</p>
              <p className="item__box item--type">{translate(item.type)}</p>
              <p className="item__box item--price">
                R$ {Number(item.price)?.toFixed(2).replace(".", ",")}
              </p>
            </li>
          );
        })}
      </ul>
      <div className="consumototal">
        <span>total:</span>
        <span>R${total().toFixed(2).replace(".", ",")}</span>
      </div>
    </ConteinerGastoExtra>
  );
};

export default GastoExtra;
