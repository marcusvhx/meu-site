import SelectionPanel from "../../molecules/SelectionPanel";
import Section from "../../templates/Section";
import Title from "../../atoms/Title";
import styled from "styled-components";
import ProjectDetails from "../../molecules/ProjectDetails";
import Icon from "../../atoms/Icon";
import { Theme } from "../../../Theme";
import pdpDesktop from "/src/assets/previews/pais-de-pet-desktop.png";
import pdpMobile from "/src/assets/previews/pais-de-pet-mobile.png";
import pdpDesktop2 from "/src/assets/previews/pais-de-pet-desktop-2.png";
import pdpMobile2 from "/src/assets/previews/pais-de-pet-mobile-2.png";
import next from "/src/assets/icons/stack/next.svg";
import tailwind from "/src/assets/icons/stack/tailwind.svg";
import lucide from "/src/assets/icons/stack/lucide.svg";

const texts = {
  pdp: {
    forNormals:
      "A pais de pet é um centro de cuidados para pets. Visando fortalecer a preseça digital da marca, construimos um site com design moderno e amigavel, enfatizano a sua missão.",
    forDevs: "",
  },
};

const ProjectsTemplates = styled.div`
  display: grid;
  padding: 2rem 1rem;
  grid-template-columns: min-content auto;
  grid-template-rows: repeat(2, auto);
  grid-template-areas: "panel detail1" "panel detail2";

  width: 100%;
  height: 100%;
`;
export default function Projects() {
  return (
    <Section id="projects">
      <Title style={{ justifySelf: "self-start" }}>Conheça meu trabalho</Title>
      <ProjectsTemplates>
        <SelectionPanel />

        <ProjectDetails
          imageDesktop={pdpDesktop}
          imageMobile={pdpMobile}
          left="8.5%"
          top="10.8%"
          text={texts.pdp.forNormals}
        />

        <ProjectDetails
          imageDesktop={pdpDesktop2}
          imageMobile={pdpMobile2}
          left="2.5%"
          top="45.5%"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe non dicta repellat cumque deserunt nobis rerum? Sed itaque tempore magnam, fugiat deserunt cupiditate quae quos impedit totam. Obcaecati, nesciunt porro."
          isForDevs
        >
          <Icon title="NextJS" src={next} size="3dvw" color={Theme.emerald} />
          <Icon
            title="TailwindCSS"
            src={tailwind}
            size="4dvw"
            color={Theme.emerald}
          />
          <Icon title="Lucide" src={lucide} size="3dvw" color={Theme.emerald} />
        </ProjectDetails>
      </ProjectsTemplates>
    </Section>
  );
}
