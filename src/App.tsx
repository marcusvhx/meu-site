import styled from "styled-components";
import { Text } from "./components/Text";
import { Theme } from "./Theme";
import { Container } from "./components/Container";

function App() {
  const Main = styled.main`
    width: 100dvw;
  `;
  const Home = styled.div`
    width: 100dvw;
    height: calc(100dvw * 0.721875); // calculo para a proporção 320x231

    line-height: 1.2;
    color: #242424;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    background-image: url("src/assets/bg-home-mobile.svg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  `;

  const Avatar = styled.img`
    width: 30dvw;
  `;

  const Title = styled.h1`
    font-size: 8dvw;
    font-weight: 600;
  `;

  const Subtitle = styled.h2`
    font-size: 6.5dvw;
  `;

  const Icon = styled.img`
    width: 12dvw;
  `;
  const years = new Date().getFullYear() - 2022;

  return (
    <Main>
      <Home>
        <Avatar src="https://avatars.githubusercontent.com/u/110700931?v=4" />

        <Container direction="column" items="center">
          <Title>Marcus Xavier</Title>
          <Subtitle>Desenvolvedor Web</Subtitle>
        </Container>

        <Container direction="row" gap="2rem">
          <a href="https://marcusvhx.vercel.app" target="_blank">
            <Icon src="src/assets/linkedin.svg" alt="linkedin" />
          </a>
          <a href="https://instagram.com/marcus.xavier.dev" target="_blank">
            <Icon src="src/assets/instagram.svg" alt="instagram" />
          </a>
          <a href="https://github.com/marcusvhx" target="_blank">
            <Icon src="src/assets/github.svg" alt="github" />
          </a>
        </Container>
      </Home>

      <Text size="3.8dvw" margin="3rem 1rem 0 4.2dvw">
        <Text size="6.5dvw" color="emerald">
          Olá
        </Text>
        , sou programador há {years} anos, desenvolvendo sites institucionáis e
        sistemas para empresas de pequeno e médio porte.
        <br /> Meu objetivo é aumentar o valor dessas empresas melhorando sua
        imagem e presença digital
      </Text>

      <Container direction="column" items="center">
        <Title>Meus Trabalhos</Title>
      </Container>
    </Main>
  );
}

export default App;
