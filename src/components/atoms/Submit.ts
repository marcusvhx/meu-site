import styled from "styled-components";
import { Theme } from "../../Theme";

const Submit = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  font-size: 1.2rem;
  width: min(22rem, 100%);
  height: 3rem;
  background-color: ${Theme.colors.emerald};
  border: none;
  border-radius: 0.4rem;

  &:hover {
    background-color: ${Theme.colors.emeraldDark};
    cursor: pointer;
  }
`;
export default Submit;