import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap');

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{

  font-size: 62.5%; // 1rem = 10px
  scroll-behavior: smooth;
  font-family: JetBrains Mono, Arial, sans-serif;
  line-height: 1.6;
  font-weight: 400;
}
  
  html::-webkit-scrollbar{
    display:none;    
  }
  
  #root {
    width:100%;
    display:flex;
    flex-direction:column;

    scroll-behavior:smooth;
    scroll-padding-top: 5rem;
    color-scheme: dark;
    color: #EDEDED;
    background-color: #242424;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
`;
