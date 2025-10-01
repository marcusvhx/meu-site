import { createGlobalStyle } from "styled-components";
import { Theme } from "./Theme";

export const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
    font-size: 62.5%; // 1rem = 10px
    scroll-behavior: smooth;
}

:root {
  font-family: JetBrains Mono, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: dark;
  color: #EDEDED;
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  color: ${Theme.emerald};
  cursor: pointer;
  display: flex;
}
a:hover {
  color: ${Theme.emeraldDark};
}`;
