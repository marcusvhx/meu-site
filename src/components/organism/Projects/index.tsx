import SelectionPanel from "../../molecules/SelectionPanel";
import Section from "../../templates/Section";
import Title from "../../atoms/Title";
import styled from "styled-components";
import ProjectDetails from "../../molecules/ProjectDetails";
import { Theme } from "../../../Theme";
import TitledIcon from "../../molecules/TitledIcon";
import { useState } from "react";
import ImageGalery from "../../molecules/ImageGalery";
import { projectsData } from "./projectsData";

const ProjectsSection = styled(Section)`
  padding: 1rem;
  display: grid;
  align-items: center;
  column-gap: max(3rem, 10dvw);
  row-gap: 2rem;
  grid-template-columns: min-content auto;
  grid-template-rows: min-content repeat(2, auto);

  grid-template-areas: "title title" "panel detail1" "panel detail2";
  #title {
    grid-area: title;
    justify-self: center;
    padding-bottom: 1rem;
  }
  #panel {
    grid-area: panel;
  }
  #detail1 {
    grid-area: detail1;
  }
  #detail2 {
    grid-area: detail2;
  }
`;
export default function Projects() {
  const [projectType, setProjectType] = useState(0);
  const [showPics, setShowPics] = useState(false);

  const handleShowPics = (e: React.MouseEvent<HTMLDivElement>) => {    
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

      <ImageGalery
        imgs={projectsData[projectType].forNormals.imgs}
        show={showPics}
        closeWrapper={handleShowPics}
      />
      <ProjectDetails
        onClick={handleShowPics}
        title={projectsData[projectType].forNormals.title}
        image={projectsData[projectType].forNormals.previewImg}
        text={projectsData[projectType].forNormals.text}
        id="datail1"
      />

      <ProjectDetails
        title={projectsData[projectType].forDevs.title}
        image={projectsData[projectType].forDevs.previewImg}
        text={projectsData[projectType].forDevs.text}
        isForDevs
        id="datail2"
      >
        {projectsData[projectType].forDevs.stack?.map((tech) => (
          <TitledIcon
            title={tech.title}
            src={tech.icon}
            size="min(3dvw, 3rem)"
            color={Theme.emerald}
          />
        ))}
      </ProjectDetails>
    </ProjectsSection>
  );
}
