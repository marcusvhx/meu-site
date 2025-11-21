import styled, { keyframes } from "styled-components";
import { Theme } from "../../Theme";
import FloatingContainer from "../atoms/FloatingContainer";
import TitledIcon from "./TitledIcon";
import css from "/src/assets/icons/stack/css.svg";
import git from "/src/assets/icons/stack/git.svg";
import html from "/src/assets/icons/stack/html.svg";
import java from "/src/assets/icons/stack/java.svg";
import lucide from "/src/assets/icons/stack/lucide.svg";
import next from "/src/assets/icons/stack/next.svg";
import node from "/src/assets/icons/stack/node.svg";
import postgre from "/src/assets/icons/stack/postgre.svg";
import react from "/src/assets/icons/stack/react.svg";
import spring from "/src/assets/icons/stack/spring.svg";
import styledIcon from "/src/assets/icons/stack/styled.svg";
import tailwind from "/src/assets/icons/stack/tailwind.svg";
import typescript from "/src/assets/icons/stack/typescript.svg";
import vite from "/src/assets/icons/stack/vite.svg";

const stackIconsList = [
  { src: html, name: "html" },
  { src: css, name: "css" },
  { src: typescript, name: "typescript" },
  { src: styledIcon, name: "styled components" },
  { src: tailwind, name: "tailwind" },
  { src: react, name: "react" },
  { src: vite, name: "vite" },
  { src: next, name: "next" },
  { src: git, name: "git" },
  { src: lucide, name: "lucide" },
  { src: node, name: "node" },
  { src: postgre, name: "postgre" },
  { src: spring, name: "spring" },
  { src: java, name: "java" },
];
const times = [0, 1, 2];

const scroll = keyframes`
  to{
    transform:translateX(-100%)
  }`;

const SteamContainer = styled(FloatingContainer)`
  --gap: 4rem;

  overflow-x: hidden;
  width: 100%;
  height: 10rem;
  left: 0;
  bottom: 1rem;
  align-items: end;

  span {
    padding-right: var(--gap);
    width: calc(
      (clamp(3rem, calc(4vw - 0.1rem), 3.5rem) + var(--gap)) * ${stackIconsList.length}
    );

    display: flex;
    gap: var(--gap);

    animation: ${scroll} 8s linear infinite;
  }

  &:hover span {
    animation-play-state: paused;
  }
`;

export default function StackSteam({}: {}) {
  return (
    <SteamContainer direction="row">
      {times.map(() => (
        <span>
          {stackIconsList.map(({ name, src }, idx) => (
            <TitledIcon
              title={name}
              key={name + idx}
              color={Theme.emerald}
              // size="max(3rem, 5vw)"
              size="clamp(3rem, calc(4vw - 0.1rem), 3.5rem)"
              src={src}
            />
          ))}
        </span>
      ))}
    </SteamContainer>
  );
}
