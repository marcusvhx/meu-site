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
  font-size: ${({ size }) => size || "1.2rem"};
  display: inline;
  margin: ${({ margin }) => margin || "0"};
  text-align: ${({ align }) => align || "center"};
  color: ${({ color }) => Theme[color || "fg"]};
`;

export default Text;
