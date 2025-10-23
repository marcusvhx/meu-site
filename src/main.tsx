import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles.ts";
import { Theme } from "./Theme.ts";
import Header from "./components/molecules/Header.tsx";
import Home from "./components/organism/Home/index.tsx";
import AboutMe from "./components/organism/AboutMe/index.tsx";
import Projects from "./components/organism/Projects/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Header />
      <Home  />
      <AboutMe />
      <Projects/>
    </ThemeProvider>
  </StrictMode>
);
