import type { ReactNode } from "react";
import Text from "../atoms/Text";
import Container from "../atoms/Container";
import styled from "styled-components";
import Subtitle from "../atoms/SubTitle";

const ProjectPreview = styled.img`
  height: max(10rem, 15vw);
  border: none;
`;
export default function ProjectDetails({
  children,
  image,
  title,
  text,
  isForDevs,
  id,
}: {
  children?: ReactNode; // unicamente para receber os incon da stack
  image: string;
  title: string;
  text: string;
  isForDevs?: boolean;
  id: string;
}) {
  return (
    <Container
      id={id}
      direction="row"
      content={isForDevs ? "end" : "start"}
      gap="1.5rem"
      w="100%"
      h="100%"
    >
      <ProjectPreview src={image} />
      <Container
        style={{ order: isForDevs ? "-1" : "" }}
        direction="column"
        gap="0 0.5rem"
        h="fit-content"
      >
        <Subtitle style={{textAlign:isForDevs?"end":"start"}}>{title}</Subtitle>
        <Text align={isForDevs ? "right" : "left"}>{text}</Text>
        {isForDevs && (
          <Container direction="row" gap="0.8rem" content="end" items="center">
            <Text>Stack:</Text>
            {children}
          </Container>
        )}
      </Container>
    </Container>
  );
}
