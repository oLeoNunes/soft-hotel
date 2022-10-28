import styled from "styled-components";

export const HeaderCotainer = styled.div`
  display: flex;

  width: 100%;

  button,
  a {
    padding: 0;
    margin: 0;
    background: none;
    color: var(--color_black);
    font-weight: 500;
    font-size: 14px;
    font-family: var(--font--main);
  }

  > header {
    display: none;
    justify-content: center;
    width: 100%;
    height: 4.5rem;
    background-color: var(--color_white);

    > .container-header {
      max-width: 80rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      > .container_navBar {
        display: flex;
        gap: 2rem;

        > .navbar__title {
          background-color: transparent;
          border: none;
          a {
            text-decoration: none;
            color: var(--color_black);
            font-size: 1rem;
          }
        }
        .user__box {
          cursor: pointer;
          > button {
            padding: 0;
            margin: 0;
            background: none;
            color: var(--color_black);
            font-weight: 500;
            font-size: 1rem;
            font-family: Arial, Helvetica, sans-serif;
            border: none;
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    background-color: var(--color_white);

    header {
      display: flex;
    }

    .container-header {
      background-color: var(--color_white);
      width: 100%;
      padding: 0 2rem;
    }
  }
`;
