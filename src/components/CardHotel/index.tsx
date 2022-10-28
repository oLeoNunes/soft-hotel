import React, { useContext } from "react";
import { CardHotelConteiner } from "./style";
import { IRoom } from "../../services/interfaces";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { ModalContext } from "../../providers/ModalProvider";
import { v4 as uuid } from "uuid";
import { MdOutlineStar } from "react-icons/md";

interface IProps {
  room?: IRoom;
}

const CardHotel = ({ room }: IProps) => {
  const { openOrCloseModalBooking } = useContext(ModalContext);

  function callStar(rank: number) {
    const stars = Array.from({ length: rank }).map(() => (
      <MdOutlineStar key={uuid()} color="gold" />
    ));
    return stars;
  }

  return (
    <>
      {room?.title ? (
        <CardHotelConteiner>
          <img className="img-cardhotel" src={room.img} alt="hotel" />
          <div className="info-cardhotel">
            <h3>{room.title}</h3>
            <span>Nota: {callStar(room.rank)}</span>
            {room.price && (
              <p>
                Preço: R$ {Number(room.price).toFixed(2).replace(".", ",")}{" "}
              </p>
            )}
            {room.checkin && <p>Checkin {room.checkin}</p>}
            {room.checkout && <p>CheckOut {room.checkout}</p>}
          </div>
        </CardHotelConteiner>
      ) : (
        <CardHotelConteiner
          onClick={() => {
            openOrCloseModalBooking();
          }}
        >
          <div className="img-semQuarto">
            <AiOutlinePlusCircle size={64} />
          </div>
          <div className="info-cardhotel semQuarto">
            <h3>Reserve Agora</h3>
          </div>
        </CardHotelConteiner>
      )}
    </>
  );
};

export default CardHotel;
