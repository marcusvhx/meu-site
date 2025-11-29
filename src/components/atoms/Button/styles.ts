import styled from "styled-components";
import { Theme } from "../../../Theme";

const Button = styled.button<{
  is_selected?: boolean;
}>`
  width: clamp(4rem, calc(15dvw - 0.1rem), 6rem);
  height: clamp(4rem, calc(15dvw - 0.1rem), 6rem);

  position: relative;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 20%;
  border-color: ${Theme.colors.emerald};
  border-width: ${({ is_selected }) =>
    is_selected ? 0 : "clamp(0.3rem, 0.2vw, 0.6rem)"};
  border-style: solid;

  cursor: pointer;
  transition: all ease-in-out 0.2s;
  background-color: transparent;

  &:hover {
    scale: ${({ is_selected }) => (!is_selected ? 1.1 : 1)};
  }

  & div {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: ${({ is_selected }) => (is_selected ? 1 : 0)};
    transition: all ease-in-out 0.2s;
    background: linear-gradient(
      135deg,
      ${Theme.colors.emerald},
      ${Theme.colors.emeraldLight},
      ${Theme.colors.emeraldDark}
    );
  }

  & svg {
    z-index:2;
    width: 85%;
    height: 85%;
  }

  & path {
    fill: ${({ is_selected, color }) =>
      is_selected ? Theme.colors.bg : color || Theme.colors.fg};
  }
`;

export default Button;
