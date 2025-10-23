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
import styled from "/src/assets/icons/stack/styled.svg";
import tailwind from "/src/assets/icons/stack/tailwind.svg";
import typescript from "/src/assets/icons/stack/typescript.svg";
import vite from "/src/assets/icons/stack/vite.svg";
const stackIconsList = [
  { src: html, name: "html" },
  { src: css, name: "css" },
  { src: styled, name: "styled components" },
  { src: tailwind, name: "tailwind" },
  { src: typescript, name: "typescript" },
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

export default function StackSteam({}: {}) {
  return (
    <FloatingContainer
      direction="row"
      w="100%"
      h="4rem"
      left="0"
      bottom="1rem"
      content="space-around"
      items="center"
    >
      {stackIconsList.map(({ name, src }, idx) => (
        <TitledIcon
          title={name}
          key={name + idx}
          color={Theme.emerald}
          size="min(4dvw, 4rem)"
          src={src}
        />
      ))}
    </FloatingContainer>
  );
}
