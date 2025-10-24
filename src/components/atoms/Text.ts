import styled from "styled-components";
import { Theme, type tColor } from "../../Theme";

const Text = styled.p<{
  /** font-size */
  size?: string;
  /** obrigatoriamente uma cor que esteja no tema */
  color?: tColor;
  /** text-align */
  align?: string;
  margin?: string;
}>`
  font-size: clamp(1rem, 0.2vw, 1.4rem);
  display: inline;
  margin: ${({ margin }) => margin || "0"};
  text-align: ${({ align }) => align || "center"};
  color: ${Theme.fg};
  white-space: pre-line;
`;

export default Text;
