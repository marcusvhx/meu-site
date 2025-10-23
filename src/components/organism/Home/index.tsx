import { Theme } from "../../../Theme";
import Avatar from "../../atoms/Avatar";
import Container from "../../atoms/Container";
import Icon from "../../atoms/Icon";
import Subtitle from "../../atoms/SubTitle";
import Title from "../../atoms/Title";
import linkedin from "/src/assets/icons/linkedin.svg";
import instagram from "/src/assets/icons/instagram.svg";
import github from "/src/assets/icons/github.svg";
import Section from "../../templates/Section";
import StackSteam from "../../molecules/StackSteam";

const linksList = [
  { href: "https://marcusvhx.vercel.app", src: linkedin },
  {
    href: "https://instagram.com/marcus.xavier.dev",
    src: instagram,
  },
  { href: "https://github.com/marcusvhx", src: github },
];

export default function Home() {
  return (
    <Section id="home" content="center" >
      <Container style={{translate:"0 -5rem"}} gap="5rem" direction="row" items="center">
        <Avatar src="https://avatars.githubusercontent.com/u/110700931?v=4" />

        <Container direction="column" items="center">
          <Title>Marcus Xavier</Title>
          <Subtitle>Desenvolvedor Web</Subtitle>

          <Container direction="row" gap="5rem" margin="2rem 0 0 0">
            {linksList.map(({ href, src }, idx) => (
              <a key={`link${idx}`} href={href} target="_blank">
                <Icon color={Theme.fg} size={"min(4dvw, 6rem)"} src={src} />
              </a>
            ))}
          </Container>
        </Container>
      </Container>

      <StackSteam />
    </Section>
  );
}
