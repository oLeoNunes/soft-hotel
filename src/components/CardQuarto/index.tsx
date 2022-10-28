import { CardContainer } from "./style";
import { v4 as uuid } from "uuid";
import { MdOutlineStar } from "react-icons/md";
import { IRoom } from "../../services/interfaces";

interface IProps {
  room: IRoom;
}

const CardQuarto = ({ room }: IProps) => {
  function callStar(rank: number) {
    const stars = Array.from({ length: rank }).map(() => (
      <MdOutlineStar key={uuid()} color="gold" />
    ));
    return stars;
  }
  return (
    <CardContainer>
      <div>
        <div className="box__img">
          <img src={room.img} alt="" />
        </div>
        <div className="box__infoCard">
          <p>{room.title}</p>
          <p>Notas: {callStar(room.rank)}</p>
          <span>Aproveite seu quarto</span>
        </div>
      </div>
    </CardContainer>
  );
};

export default CardQuarto;
