import styled from "styled-components";
import { Theme } from "../../Theme";

const Text = styled.p<{
  /** font-size */
  size?: string;
  /** obrigatoriamente uma cor que esteja no tema */
  color?: string;
  /** text-align */
  align?: string;
  margin?: string;
}>`
  font-size: ${({ size }) =>
    size || "clamp(1.2rem,calc(0.4vw + 0.1rem),1.4rem)"};
  display: inline;
  margin: ${({ margin }) => margin || "0"};
  text-align: ${({ align }) => align || "center"};
  color: ${({ color }) => color || Theme.colors.fg};
  white-space: pre-line;
`;

export default Text;
