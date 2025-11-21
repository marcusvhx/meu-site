import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles.ts";
import { Theme } from "./Theme.ts";
import Header from "./components/molecules/Header.tsx";
import Home from "./components/organism/Home/index.tsx";
import AboutMe from "./components/organism/AboutMe/index.tsx";
import Projects from "./components/organism/Projects/index.tsx";
import Contact from "./components/organism/Contact/index.tsx";
import Footer from "./components/molecules/Footer.tsx";

function App() {
  return (
    <StrictMode>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Header />
        <Home />
        <AboutMe />
        <Projects />
        <Contact />
        <Footer />
      </ThemeProvider>
    </StrictMode>
  );
}
createRoot(document.getElementById("root")!).render(<App />);
