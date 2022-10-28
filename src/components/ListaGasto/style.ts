import styled from "styled-components";

export const ConteinerListaGasto = styled.div`
  display: flex;
  width: 100%;
  border-radius: 1rem;
  flex-direction: column;
  box-shadow: 0.625rem 0.625rem 1.25rem rgba(0, 0, 0, 0.06);

  .headerListaGasto {
    background-color: var(--color_3);
    border-radius: 1rem 1rem 0 0;
    padding: 0.625rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > button {
      background-color: transparent;
      border: none;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .conteinerlista {
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: inherit;
    justify-content: space-between;
    gap: 0.625rem;
    padding: 0.625rem;

    .consumoitem {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      cursor: pointer;
      border: 1px solid var(--color_white);

      font-family: "Montserrat";
      font-weight: 700;
      font-size: 0.75rem;
      padding: 0.25rem;

      .item__box {
        width: 12.5rem;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .item--name {
        text-align: start;
      }
      .item--type {
        display: none;
      }
      .item--price {
        text-align: end;
      }

      transition: 3000;
    }
  }
  .consumototal {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    font-weight: 700;
    font-size: 1rem;
    padding: 0.875rem;
  }
  .trashTech{
    cursor: pointer;
    border: none;
    background-color: #ffff;
    padding-left: 3px;
  }

  @media (min-width: 768px) {
    .item--type {
      display: block !important;
    }
  }
`;
