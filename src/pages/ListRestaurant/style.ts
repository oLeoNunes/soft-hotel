import styled from "styled-components";

export const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  .box__desktopHeader {
    width: 100%;
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
  @media (min-width: 768px) {
    .box__mobileHeader {
      display: none;
    }
  }
`;
export const StyledList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 10px;

  .listmain {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    max-width: 1280px;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  @media (min-width: 768px) {
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
