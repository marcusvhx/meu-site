import styled from "styled-components";

const Container = styled.div<{
  direction: "row" | "column";
  w?: string;
  h?: string;
  items?: "center" | "start" | "end";
  content?:
    | "center"
    | "start"
    | "end"
    | "space-between"
    | "space-evenly"
    | "space-around";
  gap?: string;
  margin?: string;
  relative?: boolean;
}>`
  width: ${({ w }) => w};
  height: ${({ h }) => h};

  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ content }) => content};
  align-items: ${({ items }) => items};
  gap: ${({ gap }) => gap};

  margin: ${({ margin }) => margin};
  position: ${({ relative }) => (relative ? "relative" : "static")};
`;

export default Container;
