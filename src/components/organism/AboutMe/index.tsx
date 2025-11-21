import styled from "styled-components";
import Container from "../../atoms/Container";
import Icon from "../../atoms/Icon";
import Subtitle from "../../atoms/SubTitle";
import Text from "../../atoms/Text";
import Title from "../../atoms/Title";
import Section from "../../templates/Section";

import comunication from "/src/assets/icons/comunication.svg";
import suport from "/src/assets/icons/suport.svg";
import { Theme } from "../../../Theme";

const AboutSection = styled(Section)`
  flex-direction: row;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TextIconContainer = styled.div<{ align: "left" | "right" }>`
  display: grid;
  align-items: center;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  column-gap: 2rem;
  width: 100%;

  svg {
    height: 100%;
    width: max(4rem, 7dvw);
    grid-row: 1 / span 2;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;

    svg {
      display: none;
      /* width: calc(8vw - 0.1rem);
      height: calc(8vw - 0.1rem);
      position: absolute;
      top: -1rem;
      left: ${({ align }) => align == "right" && "1rem"};
      right: ${({ align }) => align == "left" && "1rem"}; */
    }

    h2 {
      width: 100%;
    }
  }
`;

const PlaceHolder = styled.div`
  width: max(11rem, calc(16dvw - 0.1rem));
  height: max(10rem, 15dvw);
  border-radius: 1.5rem;
  background-color: ${Theme.bg};
  border: solid 0.5rem ${Theme.emerald};

  place-self: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export default function AboutMe() {
  const year = new Date().getFullYear() - 2022;
  return (
    <AboutSection id="about-me" direction="row">
      <Container
        direction="column"
        relative
        style={{ minWidth: "40%" }}
        h="100%"
      >
        <PlaceHolder />
      </Container>

      <Container gap="2rem" direction="column" items="center">
        <Title>Sobre mim</Title>

        <Container direction="column" gap="1rem 0">
          <Text align="left">
            <Text style={{ fontSize: "1.6rem", color: Theme.emerald }}>
              Olá
            </Text>
            , sou programador há {year} anos, desenvolvo sites institucionais e
            sistemas para solucionar problemas de empresas de pequeno e médio
            porte que desejam, desde, fortalecer sua presença digital a
            implementar sistemas mais complexos.
          </Text>
          <Text>
            Meu foco está na experiência do cliente, e para isso considero
            importante:
          </Text>
        </Container>

        <TextIconContainer align="left">
          <Icon color="#fff" size="12rem" src={comunication} />
          <Subtitle>Comunicação</Subtitle>
          <Text align="left">
            Para a criação de um site é preciso conhecer profundamente as
            necessidades do cliente, eu acredito na importância de manter uma
            comunicação clara e constante durante o desenvolvimento de um
            projeto. Por isso disponibilizo relatórios diários, simples e
            diretos, para que o cliente possa acompanhar o desenvolvimento.
          </Text>
        </TextIconContainer>

        <TextIconContainer align="right">
          <Subtitle style={{ textAlign: "right" }}>Suporte</Subtitle>
          <Text align="right">
            O projeto não acaba ao fim do desenvolvimento, quando um sistema
            fica pronto é necessário prestar suporte constante durante seu uso,
            sejam falhas em bancos de dados ou adicionar elementos visuais em
            datas festivas. Sabendo disso, disponibilizo um suporte de longa
            data para qualquer necessidade do cliente.
          </Text>
          <Icon
            style={{ gridColumn: 2 }}
            color="#fff"
            size="12rem"
            src={suport}
          />
        </TextIconContainer>
      </Container>
    </AboutSection>
  );
}
