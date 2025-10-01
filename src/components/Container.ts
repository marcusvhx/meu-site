import styled from "styled-components";

export const Container = styled.div<{
  direction: "row" | "column";
  content?: "center" | "right" | "left";
  items?: "center" | "start" | "end";
  gap?: string;
}>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.content};
  align-items: ${(props) => props.items};
  gap: ${(props) => props.gap}
`;
