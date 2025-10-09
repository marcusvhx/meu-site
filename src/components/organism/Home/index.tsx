import { Theme } from "../../../Theme";
import Avatar from "../../atoms/Avatar";
import Background from "../../atoms/Background";
import Container from "../../atoms/Container";
import Icon from "../../atoms/Icon";
import Subtitle from "../../atoms/SubTitle";
import Title from "../../atoms/Title";
import linkedin from "/src/assets/icons/linkedin.svg";
import instagram from "/src/assets/icons/instagram.svg";
import github from "/src/assets/icons/github.svg";

const linksList = [
  { href: "https://marcusvhx.vercel.app", src: linkedin },
  {
    href: "https://instagram.com/marcus.xavier.dev",
    src: instagram,
  },
  { href: "https://github.com/marcusvhx", src: github },
];

export default function HomeSection() {
  return (
    <Background
      src={"/backgrounds/home-mobile.svg"}
      width="100%"
      height="calc(100dvw * 0.7228571428571429)" // calculo para a proporção 700*506 (tamanho da imagem)
      direction="column"
      items="center"
      content="center"
      gap="0.5rem"
    >
      <Avatar src="https://avatars.githubusercontent.com/u/110700931?v=4" />

      <Container direction="column" items="center">
        <Title>Marcus Xavier</Title>
        <Subtitle>Desenvolvedor Web</Subtitle>
      </Container>

      <Container direction="row" gap="5dvw">
        {linksList.map(({ href, src }, idx) => (
          <a key={`link${idx}`} href={href} target="_blank">
            <Icon color={Theme.bg} size={"10dvw"} src={src} />
          </a>
        ))}
      </Container>
    </Background>
  );
}
