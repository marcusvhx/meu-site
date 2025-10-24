import styled from "styled-components";

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
  margin-top:5rem;
`;

export default Section;
