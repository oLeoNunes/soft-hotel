import { useContext, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HotelContex } from "../../providers/HotelProvider";
import { BackGroundModal } from "../BackgroundModal/style";
import CardHotel from "../CardHotel";
import { ContainerForm, ModalContainer, ReservaButton } from "./style";
import { motion } from "framer-motion";
import { LiRoom } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, useForm } from "react-hook-form";
import { ToastContext } from "../../providers/ToastyProvider/ToasyProvider";
import { ModalContext } from "../../providers/ModalProvider";
import { INewBooking } from "../../services/interfaces";
import { UserContext } from "../../providers/UserProvider/UserProvider";

const schema = yup.object({
  checkin: yup.string().required("Local Obrigatório"),
  checkout: yup.string().required("Valor obrigatório"),
});

const ModalBooking = () => {
  const { openOrCloseModalBooking } = useContext(ModalContext);
  const { newBookin } = useContext(UserContext);

  const { roomlist } = useContext(HotelContex);
  const [ativo, setAtivo] = useState<string>("");
  const { toastErro } = useContext(ToastContext);

  function bookingRoom(data) {
    const checkinDate = new Date(data.checkin);
    const checkoutDate = new Date(data.checkout);
    const dias = (checkoutDate.getTime() - checkinDate.getTime()) / 86400000;

    let checkinStr = data.checkin.split("-");
    checkinStr = `${checkinStr[2]}/${checkinStr[1]}/${checkinStr[0]}`;
    let checkoutStr = data.checkout.split("-");
    checkoutStr = `${checkoutStr[2]}/${checkoutStr[1]}/${checkoutStr[0]}`;

    if (dias < 1) {
      toastErro("Data de Checkout é menor que data de Checkin");
    } else {
      const newData: INewBooking = {
        days: dias,
        room: {
          checkin: checkinStr,
          checkout: checkoutStr,
          title: data.title,
          rank: data.rank,
          price: data.price,
          img: data.img,
        },
      };
      newBookin(newData);
    }
  }

  const { register, handleSubmit } = useForm<FieldValues>({
    resolver: yupResolver(schema),
  });

  function chooseRoom(name: string) {
    if (ativo === name) {
      setAtivo("");
    } else {
      setAtivo(name);
    }
  }

  return (
    <BackGroundModal>
      <ModalContainer>
        <header>
          <h2>Reserve Agora</h2>
          <AiOutlineClose
            size={24}
            onClick={() => {
              openOrCloseModalBooking();
            }}
          />
        </header>
        <main>
          <ul>
            {roomlist.map((room) => {
              return (
                <LiRoom key={room.title}>
                  <motion.div
                    layout
                    transition={{
                      layout: { duration: 0.5 },
                    }}
                    className="framer-motion"
                  >
                    <div>
                      <div
                        className="card__cointainer"
                        onClick={() => {
                          chooseRoom(room.title);
                        }}
                      >
                        <CardHotel key={room.title} room={room} />
                      </div>

                      {ativo === room.title && (
                        <ContainerForm onSubmit={handleSubmit(bookingRoom)}>
                          <div className="data__container">
                            <div className="input__box ">
                              <label htmlFor="checkin">Checkin:</label>
                              <input {...register("checkin")} type={"date"} />
                            </div>
                            <div className="input__box">
                              <label htmlFor="checkout">Checkout:</label>
                              <input {...register("checkout")} type={"date"} />
                            </div>
                            <div className="input__box">
                              <input
                                hidden
                                value={room.title}
                                type={"text"}
                                {...register("title")}
                              />
                            </div>
                            <div className="input__box">
                              <input
                                hidden
                                value={room.img}
                                type={"text"}
                                {...register("img")}
                              />
                            </div>
                            <div hidden className="input__box">
                              <input
                                hidden
                                value={room.rank}
                                type={"text"}
                                {...register("rank")}
                              />
                            </div>
                            <div hidden className="input__box">
                              <input
                                hidden
                                value={room.price}
                                type={"text"}
                                {...register("price")}
                              />
                            </div>
                          </div>
                          <ReservaButton type="submit">Reservar</ReservaButton>
                        </ContainerForm>
                      )}
                    </div>
                  </motion.div>
                </LiRoom>
              );
            })}
          </ul>
        </main>
      </ModalContainer>
    </BackGroundModal>
  );
};

export default ModalBooking;
