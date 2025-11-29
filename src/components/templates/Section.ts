import styled from "styled-components";
import { Theme } from "../../Theme";

/**
 * gap - string
 */
const Section = styled.section<{
  direction?: "row" | "column";
  items?: string;
  content?: string;
  gap?: string;
}>`
  width: 100%;
  min-height: calc(100dvh - 5rem);
  display: flex;
  flex-direction: ${({ direction }) => direction || "column"};
  justify-content: ${({ content }) => content};
  align-items: ${({ items }) => items || "center"};
  gap: ${({ gap }) => gap};

  position: relative;
  padding: 2rem;
  margin-top: 5rem;

  @media screen and (max-width:${Theme.devices.tablet}) {
    padding: 1rem;
    min-height: calc(40rem);
  }
`;

export default Section;
