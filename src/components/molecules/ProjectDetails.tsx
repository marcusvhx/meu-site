import type { ReactNode } from "react";
import Text from "../atoms/Text";
import Container from "../atoms/Container";
import styled from "styled-components";
import Subtitle from "../atoms/SubTitle";

const ProjectPreview = styled.img <{clickable?:boolean}>`
  cursor: ${({clickable})=> clickable ? 'pointer' : 'default'};
  height: max(10rem, calc(15vw - 0.1rem));
  border: none;
`;
export default function ProjectDetails({
  children,
  image,
  title,
  text,
  isForDevs,
  id,
  onClick,
}: {
  children?: ReactNode; // unicamente para receber os incon da stack
  image: string;
  title: string;
  text: string;
  isForDevs?: boolean;
  id: string;
  onClick?: (e:any) => void;
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
      <ProjectPreview clickable={!!onClick} onClick={onClick} src={image} />
      <Container
        style={{ order: isForDevs ? "-1" : "" }}
        direction="column"
        gap="1rem"
        h="fit-content"
        w="min(52rem, 100%)"
      >
        <Subtitle style={{ textAlign: isForDevs ? "end" : "start" }}>
          {title}
        </Subtitle>
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
