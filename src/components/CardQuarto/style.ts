import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 14.375rem;
  background-color: var(--color_white);
  box-shadow: 0rem 0.25rem 1.875rem -0.75rem rgba(0, 0, 0, 0.25);
  border-radius: 0.5rem;
  font-family: var(--font--main);
  font-weight: 800;
  width: 100%;
  height: 100%;

  > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .box__img {
      width: 200px;
      height: 200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      > img {
        width: 100%;
        height: 100%;
        border-radius: 0.5rem 0.5rem 0 0;
      }
    }

    .box__infoCard {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 0.625rem;

      > span {
        margin-bottom: 0.5rem;
      }
    }
  }
`;
