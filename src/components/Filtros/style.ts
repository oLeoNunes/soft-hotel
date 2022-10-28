import styled from "styled-components";

export const FiltrosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1280px;

  .style__icon--filterInfo {
    width: 12px;
    height: 12px;
  }
  .text-filtros {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 20px;
    color: #000000;
  }

  .container__filtros--avaliacao {
    display: flex;
    flex-direction: row;

    justify-content: center;
    align-items: center;
    gap: 3px;
  }

  .container__filtros--distancia {
    display: flex;
    flex-direction: row;

    justify-content: center;
    align-items: center;
    gap: 3px;
  }
  .container__filtros--categoria {
    display: flex;
    flex-direction: row;

    justify-content: center;
    align-items: center;
    gap: 3px;
  }

  .container__barraPesquisa {
    width: 100%;
    min-width: 260px;
    height: 40px;
    display: flex;
    background-color: #fdf2f2;

    align-items: center;
  }
  .style__icon--search {
    margin: 5px;
  }

  .input {
    background-color: transparent;
    border: none;
    display: flex;
    text-align: center;
    padding: 15px;
    width: 100%;
  }

  .input:focus {
    outline: none;
  }

  .container__filtros {
    width: 100%;
    height: 40px;
    background-color: #fdf2f2;

    flex-direction: row;
    display: flex;
    gap: 10px;
    justify-content: space-between;
    padding: 0 5px;
  }
  .text-filtros {
    font-size: 12px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    width: 100%;

    .container__filtros {
      width: 50%;
      display: flex;
      justify-content: flex-start;
      gap: 2rem;

      border-bottom: 1px solid #d9d9d9;
      padding: 10px;
    }
    .container__barraPesquisa {
      width: 50%;
      justify-content: flex-end;
    }
    .input {
      width: 50%;
      text-align: start;
    }
  }

  @media (min-width: 1200px) {
    .container__filtros {
      width: 1146px;
    }
    .container__barraPesquisa {
      width: 1146px;
    }
    .listmain {
      align-items: flex-start;
      flex-direction: row;
      gap: 2rem;

      .ImagemListas {
        align-items: start;
        gap: 30px;
        max-width: 800px;
      }
    }
  }
`;
