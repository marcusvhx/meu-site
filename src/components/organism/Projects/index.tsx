import SelectionPanel from "../../molecules/SelectionPanel";
import Section from "../../templates/Section";
import Title from "../../atoms/Title";
import styled from "styled-components";
import ProjectDetails from "../../molecules/ProjectDetails";
import { Theme } from "../../../Theme";
import TitledIcon from "../../molecules/TitledIcon";
import { useState, type MouseEvent } from "react";
import ImageGalery from "../../molecules/ImageGalery";
import { projectsData } from "./projectsData";
import Container from "../../atoms/Container";
import Text from "../../atoms/Text";
import Subtitle from "../../atoms/SubTitle";
import FloatingContainer from "../../atoms/FloatingContainer";

const ProjectsSection = styled(Section)`
  display: grid;
  align-items: center;
  column-gap: 3rem;
  row-gap: 1.5rem;
  grid-template-columns: min-content auto;
  grid-template-rows: repeat(4, min-content);

  grid-template-areas: "title title" "panel detail1" "panel detail2" "showBtn showBtn";
  #title {
    grid-area: title;
    justify-self: center;
    padding-bottom: 1rem;
  }
  #panel {
    grid-area: panel;
    @media screen and (min-width: ${Theme.devices.tablet}) {
      min-height: 35rem;
    }
  }
  #detail1 {
    grid-area: detail1;
  }
  #detail2 {
    grid-area: detail2;
  }
  #devInfoBtn {
    grid-area: showBtn;
  }

  @media screen and (max-width: ${Theme.devices.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;

    #panel {
      flex-direction: row;
    }

    #detail1 {
      width: 100%;
    }
    @media screen and (max-width: ${Theme.devices.mobileLg}) {
      .projectsContainer {
        flex-direction: column;
      }

      .projectsImage {
        width: 100%;
      }

      .projectsImageContainer {
        width: 100%;
        height: max(10rem, 20dvw);
        background-color: #ececec;
      }
      .forDevs > .projectsImageContainer {
        display: none;
      }
    }
  }
`;

const DevInfoBox = styled(Container)<{ isOpen: boolean }>`
  @media screen and (max-width: ${Theme.devices.mobileLg}) {
    height: ${({ isOpen }) => (isOpen ? "fit-content" : 0)};
    overflow: hidden;
  }
`;

const ShowDevInfo = styled(Text)`
  @media screen and (min-width: ${Theme.devices.mobileLg}) {
    display: none;
  }
  cursor: pointer;
  text-decoration: underline;
  color: ${Theme.colors.emeraldLight};
  justify-self: end;
`;
export default function Projects() {
  const [projectType, setProjectType] = useState(0);
  const [showPics, setShowPics] = useState(false);
  const [showDevInfo, setShowDevInfo] = useState(false);

  const handleShowPics = (e: MouseEvent) => {
    //@ts-ignore
    if (showPics && e.target.classList.contains("wrapper")) {
      setShowPics(false);
      document.getElementsByTagName("body")[0].style.overflow = "auto";
    } else {
      setShowPics(true);
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    }
  };
  return (
    <ProjectsSection id="projects">
      <Title id="title">Conheça meu trabalho</Title>

      <SelectionPanel projectIdx={projectType} setProjectIdx={setProjectType} />
      {projectsData[projectType].forNormals.title == "" ? (
        <FloatingContainer
          direction="row"
          content="center"
          items="center"
          w="100%"
          top="50%"
          left="50%"
          style={{ transform: "translate(-50%)" }}
        >
          <Subtitle>Ainda em desenvolvimento</Subtitle>
        </FloatingContainer>
      ) : (
        <>
          <ImageGalery
            imgs={projectsData[projectType].forNormals.imgs}
            show={showPics}
            closeWrapper={handleShowPics}
          />
          <ProjectDetails
            title={projectsData[projectType].forNormals.title}
            image={projectsData[projectType].forNormals.previewImg}
            text={projectsData[projectType].forNormals.text}
            projectLink={projectsData[projectType].forNormals.link}
            id="datail1"
            toggleFullscreen={handleShowPics}
          />

          <DevInfoBox direction="row" isOpen={showDevInfo}>
            <ProjectDetails
              title={projectsData[projectType].forDevs.title}
              image={projectsData[projectType].forDevs.previewImg}
              text={projectsData[projectType].forDevs.text}
              isForDevs
              id="datail2"
            >
              {projectsData[projectType].forDevs.stack?.map((tech, idx) => (
                <TitledIcon
                  key={tech.title + idx}
                  title={tech.title}
                  src={tech.icon}
                  size="clamp(2rem, 4dvw, 3rem)"
                  color={Theme.colors.emerald}
                />
              ))}
            </ProjectDetails>
          </DevInfoBox>

          <ShowDevInfo
            id="devInfoBtn"
            onClick={() => setShowDevInfo((old) => !old)}
          >
            {showDevInfo ? "Ocultar informações" : "Informações para devs..."}
          </ShowDevInfo>
        </>
      )}
    </ProjectsSection>
  );
}
