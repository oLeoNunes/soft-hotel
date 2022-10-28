import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  position: relative;
  bottom: 0;

  @media screen and (min-width: 1024px) {
    align-items: flex-end;
    justify-content: flex-end;
  }
`;
