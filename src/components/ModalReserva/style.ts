import styled from "styled-components";
import { ButtonContainer } from "../Button/style";

export const ModalContainer = styled.div`
  width: 100%;
  max-width: 550px;
  height: 600px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: white;
  border-radius: 0.5rem;
  position: relative;

  > header {
    width: 100%;
    background-color: var(--color_3);
    box-shadow: 0px 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
    border-radius: 0.5rem 0.5rem 0px 0px;
    height: 60px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem;
    align-items: center;
    font-family: var(--font--secondary);
    color: var(--color_4);
  }
  > main {
    width: 100%;
    ul {
      list-style: none;
      width: 100%;
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      overflow-y: auto;
      max-height: 540px;

      &::-webkit-scrollbar {
        width: 8px;
      }

      &::-webkit-scrollbar-track {
        position: absolute;
        right: 10px;
        background: none; /* color of the tracking area */
      }

      &::-webkit-scrollbar-thumb {
        position: absolute;
        right: 10px;
        background-color: var(--color_4);
        border-radius: 20px;
      }
    }
  }
`;

export const ReservaButton = styled(ButtonContainer)`
  height: 50px;
`;

export const LiRoom = styled.li`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  > .framer-motion {
    width: 100%;
    > div {
      width: 100%;
      > .card__cointainer {
        width: 100%;
      }
    }
  }
  @media screen and (min-width: 768px) {
    > .framer-motion {
      width: 250px;

      gap: 10px;
      > div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        > .card__cointainer {
          width: 250px;
        }
      }
    }
  }
`;

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    gap: 1rem;
  }

  .data__container {
    width: 100%;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    height: 100px;
    align-items: flex-start;
    gap: 10px;
    .input__box {
      display: flex;
      align-items: center;
      > label {
        width: 100px;
      }
      > input {
        height: 35px;
        border-radius: 8px;
        border: 1px solid lightgrey;
      }
    }
  }

  @media screen and (min-width: 768px) {
    .data__container {
      gap: 1rem;
    }
  }
`;
