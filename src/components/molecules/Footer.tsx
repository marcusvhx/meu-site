import styled from "styled-components";
import { Theme } from "../../Theme";
import Text from "../atoms/Text";
import Link from "../atoms/Link";
import Container from "../atoms/Container";
import Icon from "../atoms/Icon";
import email from "/src/assets/icons/email.svg";
import phone from "/src/assets/icons/phone.svg";

const StyledFooter = styled.footer`
  width: 100%;
  height: 8rem;
  background-color: ${Theme.colors.emeraldDark};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;

  @media screen and (max-width: ${Theme.devices.mobileSm}) {
    flex-direction: column;

  }
`;
export default function Footer() {
  return (
    <StyledFooter>
      <Text>
        &copy; Design & Code by{" "}
        <Link color={Theme.colors.emeraldDark} href="https://instagram.com/marcus.xavier.dev" target="_blank">
          Marcus Xavier
        </Link>
      </Text>
      <Container direction="row" style={{flexWrap: "wrap"}} content="center" gap="1rem 1.5rem">
        <Container direction="row" items="center" gap="0.5rem">
          <Icon color="#fff" size="1.5rem" src={email} />
          <Text>Emial: marcusvyinicius@gmail.com</Text>
        </Container>
        <Container direction="row" items="center" gap="0.5rem">
          <Icon color="#fff" size="1.3rem" src={phone} />
          <Text>Fone: (81) 98448-3883</Text>
        </Container>
      </Container>
    </StyledFooter>
  );
}
