import styled from "styled-components";
import { Theme, type tColor } from "../Theme";

export const Text = styled.p<{ size: string; color?: tColor; margin?:string}>`
  display: inline-block;
  margin: ${(props) => props.margin || "0"};
  font-size: clamp(1.3rem, ${(props) => props.size},2.6rem);
  font-weight: 250;
  color: ${(props) => Theme[props.color || "fg"]};
`;
