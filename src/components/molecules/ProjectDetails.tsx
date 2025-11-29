import type { ReactNode } from "react";
import Text from "../atoms/Text";
import Container from "../atoms/Container";
import Subtitle from "../atoms/SubTitle";
import FloatingContainer from "../atoms/FloatingContainer";
import Icon from "../atoms/Icon";
import fullscreen from "/src/assets/icons/fullscreen.svg";
import link from "/src/assets/icons/link.svg";
import { Theme } from "../../Theme";
import Link from "../atoms/Link";
import ProjectPreview from "../atoms/ProjectPreview";
import type { iMouseClickEvent } from "./ImageGalery";

export default function ProjectDetails({
  children,
  image,
  title,
  text,
  isForDevs,
  id,
  toggleFullscreen,
  projectLink,
}: {
  children?: ReactNode; // unicamente para receber os incon da stack
  image: string;
  title: string;
  text: string;
  isForDevs?: boolean;
  id: string;
  toggleFullscreen?: (e: iMouseClickEvent) => void;
  projectLink?: string;
}) {
  return (
    <Container
      id={id}
      direction="row"
      content={isForDevs ? "end" : "start"}
      gap="1.5rem"
      w="100%"
      h="100%"
      className={`projectsContainer ${isForDevs && "forDevs"}`}
    >
      <Container className="projectsImageContainer" style={{placeSelf:"center"}} direction="row" h="max(10rem, calc(16vw - 0.1rem))" relative>
        {!isForDevs && (
          <FloatingContainer
            direction="row"
            right="1rem"
            top="0.5rem"
            gap="1rem"
          >
            <Link target="_blank" href={projectLink}>
              <Icon
                style={{
                  cursor: "pointer",
                }}
                color={Theme.colors.bg}
                size="2rem"
                src={link}
              />
            </Link>
            <Icon
              onClick={(e)=> toggleFullscreen && toggleFullscreen(e)}
              style={{
                cursor: "pointer",
              }}
              color={Theme.colors.bg}
              size="2rem"
              src={fullscreen}
            />
          </FloatingContainer>
        )}
        <ProjectPreview className="projectsImage" src={image} />
      </Container>
      <Container
        style={{ order: isForDevs ? "-1" : "" }}
        direction="column"
        gap="1rem"
        w="100%"
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
