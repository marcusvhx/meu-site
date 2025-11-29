import styled from "styled-components";
import { Theme } from "../../Theme";

const Input = styled.input<{ h: string }>`
  width: 100%;
  min-height: ${({ h }) => h};
  background-color: ${Theme.colors.fg};
  color: #000;
  padding-left: 0.5rem;
  font-size: 1.2rem;

  border-radius: 0.6rem;
  border: none;
  text-align: start;
  outline: none;

  &:focus {
    outline: ${Theme.colors.emeraldLight} 0.3rem solid;
  }
`;

export default Input