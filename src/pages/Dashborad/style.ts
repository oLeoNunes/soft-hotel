import styled from "styled-components";

export const StyledDash = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 1rem;

  .dashmain {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    max-width: 1280px;

    .cardHotelGraphic {
      width: 100%;
      max-width: 300px;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      gap: 2rem;
    }

    .ImagemListas {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 15px;

      > a {
        width: 100%;
        .box__Icons {
          width: 100%;
          cursor: pointer;
        }
      }
    }
  }

  @media (min-width: 768px) {
    .dashmain {
      align-items: flex-start;
      flex-direction: row;

      .ImagemListas {
        width: 100%;
        align-items: start;
        gap: 30px;
        max-width: 440px;
      }
    }
  }

  @media (min-width: 1024px) {
    .dashmain {
      .ImagemListas {
        max-width: 800px;
      }
    }
  }
`;

export const DashContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .box__desktopHeader {
    width: 100%;
    display: none;
  }

  @media screen and (min-width: 768px) {
    .box__desktopHeader {
      display: flex;
    }
  }

  .box__mobileHeader {
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    font-family: var(--font--secondary);

    height: max-content;
  }

  @media screen and (min-width: 768px) {
    .box__mobileHeader {
      display: none;
    }
  }

  .UserNameDesktop {
    display: none;
    width: 100%;
    font-size: 18px;
    font-family: var(--font--secondary);
    height: 50px;
  }

  @media screen and (min-width: 768px) {
    .UserNameDesktop {
      display: flex;
    }
  }
  footer {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: flex-end;
    background-color: inherit;
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
