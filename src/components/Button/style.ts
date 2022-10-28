import styled from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 13.75rem;
  height: 4rem;

  background: var(--color_4);
  border-radius: 0.5rem;
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.438rem;
  color: var(--color_white);
  cursor: pointer;
  border: none;

  :hover {
    opacity: 0.75;
  }
`;
