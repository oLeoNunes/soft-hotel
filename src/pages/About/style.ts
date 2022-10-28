import styled from "styled-components";

export const StyledAbout = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: var(--color_6);
  height: 100%;

  .content {
    width: 100%;
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
    background-color: inherit;
    justify-content: flex-start;
  }

  main {
    display: flex;
    width: 100%;
    flex-direction: column;
    background: inherit;

    .headerMobile {
      width: 100%;
      height: 100vw;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      position: relative;
    }

    .imgCont {
      width: 100%;
      height: 100%;
      display: flex;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .img-header-form {
      width: 100%;
      height: 100%;
    }
    .contentDesktop {
      display: none;
      background-color: inherit;
    }

    .infoContainer {
      width: 100%;
      height: max-content;
      min-height: 15.6875rem;
      display: flex;
      .titleAbout{
        display:flex;
        flex-direction:column;
        align-items:center;

        .mainTitle{
            font-family:var(--font--main);
            font-size:45px;
            font-weight:500;
        }
        .paragraphTitle{
            font-family:var(--font--main);
            font-size:20px;
            font-weight:500;
        }

      }
      ul {
        padding: 0.625rem 0.625rem;
        list-style: none;
        display: flex;
        overflow-x: auto;
        background-color: inherit;
        gap: 1rem;

        > li {
          min-width: 200px;
          height: 220px;
          border-radius: 8px;
          background-color: var(--color_white);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;

          .paragraphContent {
            max-width: 170px;
            font-family: var(--font--main);
            font-size: 11px;
            align-items: center;
          }
        }
      }
    }

    .btnMobile {
      background-color: inherit;
    }

    @media screen and (max-width: 48rem) {
      .infoContainer::-webkit-scrollbar {
        background: initial;
      }
      .infoContainer::-webkit-scrollbar-corner {
        background: var(--color_6);
      }
    }

    .navBox {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 4.25rem;
      padding: 0 0.625rem;
      position: relative;
      bottom: 40px;
    }
    nav {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100%;
      max-height: 4.25rem;
      border-radius: 0.3125rem;
      height: 100%;
      background-color: var(--color_white);
      box-shadow: 0rem 0.25rem 2rem -0.75rem rgba(0, 0, 0, 0.25);
      .icon {
        font-size: 3.4375rem;
        max-width: 3.3125rem;
      }
    }

    .btnMobile {
      height: 5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: inherit;
    }

    @media (min-width: 48rem) {
      align-items: center;
      background-color: var(--color_white);
      .content {
        background-color: var(--color_white);
      }
      nav {
        display: none;
      }
      .img-header-form {
        display: none;
      }
      .btnMobile {
        display: none;
      }

      .infoContainer {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      }

      .contentDesktop {
        display: flex;
        margin-bottom: 2%;
        align-items: center;
        justify-content: center;
        width: 100%;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: space-between;
      }
      .mainDescktop {
        display: flex;
        flex-direction: column;
        align-items: center;
        bottom: 0;
        z-index: 2;
      }
      .mainDescktop h1 {
        font-family: var(--font--secondary);
        font-weight: 500;
        max-width: 34.5rem;
        font-size: 3.75rem;
        text-align: center;
      }
      .hotelAbout {
        display: flex;

        width: 100%;
      }
      .headerMobile {
        display: none;
      }

      .infoContainer {
        > ul {
          height: 250px;
          > li {
            min-width: 200px;
            height: 220px;
          }
        }
      }
    }

    @media (min-width: 64rem) {
      align-items: center;
      justify-content: center;

      main {
        height: 100%;
        align-items: center;
        justify-content: center;
      }

      .content {
        align-items: center;
        justify-content: center;
      }

      .contentDesktop {
        flex-direction: row;

        justify-content: center;
      }

      .mainDescktop h1 {
        font-family: var(--font--secondary);
        font-weight: 500;
        max-width: 34.5rem;
        font-size: 4rem;
        text-align: center;
      }
      .cottageImg {
        display: flex;
        max-width: 100%;
        width: 20rem;
      }

      .infoContainer {
        width: 100%;
      }

      .infoContainer {
        ul {
          height: 250px;
          > li {
            min-width: 200px;
            height: 220px;
          }
        }
      }
    }

    @media screen and (min-width: 80rem) {

      .mainDescktop h1 {
        font-family: var(--font--secondary);
        font-weight: 500;
        max-width: 34.5rem;
        font-size: 4rem;
        text-align: center;
      }
      .cottageImg {
        display: flex;
        max-width: 100%;
        width: 20rem;
      }

      .infoContainer {
        height: 220px;
        ul {
          height: 250px;
          > li {
            min-width: 200px;
            height: 200px;
          }
        }
      }
    }

    @media screen And (min-width: 90rem) {

      .mainDescktop {
        gap: 1rem;
      }

      .mainDescktop h1 {
        font-family: var(--font--secondary);
        font-weight: 500;
        max-width: 34.5rem;
        font-size: 4rem;
        text-align: center;
      }
      .cottageImg {
        display: flex;
        max-width: 100%;
        width: 26rem;
        max-height: 26rem;
      }

      .infoContainer {
        height: 350px;
        display: flex;
        ul {
          height: 300px;
          > li {
            min-width: 230px;
            height: 280px;
          }
        }
      }
    }
  }
  footer {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: flex-end;
    background-color: var(--color_6);
  }
  @media (min-width: 48rem) {
    footer {
      background-color: var(--color_white);
      height: 100%;
      width: 100%;
      display: flex;
      align-items: flex-end;
    }
  }
`;
