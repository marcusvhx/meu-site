import Container from "../atoms/Container";
import ProjectButton from "../atoms/Button";

import InlineSVG from "react-inlinesvg";

import landingPage from "/src/assets/icons/landing-page.svg";
import webSystem from "/src/assets/icons/web-system.svg";
import saas from "/src/assets/icons/saas.svg";

const btnSrc = [landingPage, webSystem, saas];

export default function SelectionPanel({
  projectIdx,
  setProjectIdx,
}: {
  projectIdx: number;
  setProjectIdx: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <Container
      id="panel"
      direction="column"
      gap="2rem"
      h="100%"
      content="space-evenly"
      margin="2rem 0"
    >
      {btnSrc.map((src, idx) => (
        <ProjectButton
          isOn={projectIdx === idx}
          key={`key${idx}`}
          onClick={() => setProjectIdx(idx)}
        >
          <div />
          <InlineSVG src={src} />
        </ProjectButton>
      ))}
    </Container>
  );
}
