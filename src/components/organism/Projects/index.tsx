import SelectionPanel from "../../molecules/SelectionPanel";
import Section from "../../templates/Section";
import Title from "../../atoms/Title";
import styled from "styled-components";
import ProjectDetails from "../../molecules/ProjectDetails";
import { Theme } from "../../../Theme";
import pdpDesktop from "/src/assets/previews/pais-de-pet-desktop.png";
import pdpDesktop2 from "/src/assets/previews/pais-de-pet-desktop-2.png";
import next from "/src/assets/icons/stack/next.svg";
import tailwind from "/src/assets/icons/stack/tailwind.svg";
import lucide from "/src/assets/icons/stack/lucide.svg";
import TitledIcon from "../../molecules/TitledIcon";
import { useState } from "react";

const projectsData = [
  {
    forNormals: {
      image: pdpDesktop,
      title: "Pais de Pet",
      text: "A pais de pet é um centro de cuidados para pets. A empresa queria fortalecer sua preseça digital e fornecer uma imagem mais profissional para os clientes, para solucionar isso, com o auxílio de uma designer, construi um site com visual moderno e amigável, enfatizando a missão da empresa.\n O objetivo principal do desse projeto era criar uma carta de apresentação para que os clientes entandam os valores e conheçam seus profissionais, serviços e opiniões de pessoas que já foram atendidas.",
    },
    forDevs: {
      image: pdpDesktop2,
      title: "Para Devs",
      text: "",
      stack: [
        { icon: next, title: "NextJs" },
        { icon: tailwind, title: "TailwindCss" },
        { icon: lucide, title: "Lucide" },
      ],
    },
  },
  {
    forNormals: { title: "", text: "", image: "" },
    forDevs: { title: "", text: "", image: "", stack: [] },
  },
  {
    forNormals: { title: "", text: "", image: "" },
    forDevs: { title: "", text: "", image: "", stack: [] },
  },
];

const ProjectsSection = styled(Section)`
  padding: 2rem;
  display: grid;
  align-items: center;
  column-gap: max(3rem, 10dvw);
  row-gap: 5rem;
  grid-template-columns: min-content auto;
  /**
  5rem -> tamanho do header
  5rem -> row-gap
  clamp() -> tamanho do titulo
  calc(50dvh - 5rem - 5rem - clamp(2.2rem, calc(3.6dvw - 0.1rem), 3.8rem))
   */
  grid-template-rows: min-content repeat(
      2,
      auto
    );

  grid-template-areas: "title title" "panel detail1" "panel detail2";
  #title {
    grid-area: title;
    justify-self: center;
    /* padding-bottom: 1rem; */
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

  return (
    <ProjectsSection id="projects">
      <Title id="title">Conheça meu trabalho</Title>

      <SelectionPanel projectIdx={projectType} setProjectIdx={setProjectType} />

      <ProjectDetails
        title={projectsData[projectType].forNormals.title}
        image={projectsData[projectType].forNormals.image}
        text={projectsData[projectType].forNormals.text}
        id="datail1"
      />

      <ProjectDetails
        title={projectsData[projectType].forDevs.title}
        image={projectsData[projectType].forDevs.image}
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
