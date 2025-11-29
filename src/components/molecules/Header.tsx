import styled from "styled-components";
import Container from "../atoms/Container";
import Link from "../atoms/Link";
import Icon from "../atoms/Icon";

import logo from "/src/assets/icons/logo.svg";
import { Theme } from "../../Theme";
import { useState } from "react";

/**
 * tag de cabeçalho estilizado
 */
const THeader = styled.header`
  --header-height: 5rem;
  height: var(--header-height);
  width: 100%;
  display: flex;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  background-color: #181818;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;
const LinksContainer = styled(Container)<{ is_open: boolean }>`
  --link-height: 4rem;

  background-color: #181818;
  gap: 3rem;

  @media screen and (max-width: ${Theme.devices.mobileSm}) {
    position: absolute;
    top: 100%;
    left: 0;

    width: 100%;
    height: ${({ is_open }) => (is_open ? "calc(var(--link-height) * 4)" : 0)};
    overflow:hidden;

    flex-direction: column;
    align-items:center;
    gap: 0;
    transition: all 0.3s ease-in-out;

    a {
      width: 100%;
      height: 4rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
const LinesContainer = styled(Container)<{ is_open: boolean }>`
  @media screen and (min-width: ${Theme.devices.mobileSm}) {
    display: none;
  }
  justify-content: ${({ is_open }) => (is_open ? "center" : "space-between")};
  align-items: center;
  width: 3.5rem;
  height: 2.8rem;

  .line1 {
    transform: ${({ is_open }) =>
      is_open && "rotate(45deg) translate(0.4rem, 0.4rem)"};
    transition: all 0.3s ease-in-out;
  }
  .line2 {
    height: ${({ is_open }) => (is_open ? 0 : "0.6rem")};
    transition: all 0.3s ease-in-out;
  }
  .line3 {
    transform: ${({ is_open }) => is_open && "rotate(-45deg)"};
    transition: all 0.3s ease-in-out;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 0.6rem;
  border-radius: 1rem;
  background-color: #fff;
`;

export default function Header() {
  const [linksTogggle, setLinksTogggle] = useState(false);

  const toggleLinks = () => {
    setLinksTogggle(!linksTogggle);
  };
  return (
    <THeader>
      <Icon src={logo} color="" size="3rem" />
      <LinksContainer onClick={toggleLinks}  is_open={linksTogggle} direction="row">
        <Link href="#home">Home</Link>
        <Link href="#about-me">Sobre Mim</Link>
        <Link href="#projects">Projetos</Link>
        <Link href="#contact">Contato</Link>
      </LinksContainer>
      <LinesContainer
        onClick={toggleLinks}
        is_open={linksTogggle}
        direction="column"
      >
        <Line className="line1" />
        <Line className="line2" />
        <Line className="line3" />
      </LinesContainer>
    </THeader>
  );
}
