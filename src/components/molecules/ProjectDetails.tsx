import type { ReactNode } from "react";
import FloatingContainer from "../atoms/FloatingContainer";
import Text from "../atoms/Text";
import Container from "../atoms/Container";

export default function ProjectDetails({
  children,
  imageDesktop,
  imageMobile,
  text,
  isForDevs,
  top,
  left,
}: {
  children?: ReactNode; // unicamente para receber os incon da stack
  imageDesktop: string;
  imageMobile: string;
  text: string;
  top: string;
  left: string;
  isForDevs?: boolean;
}) {
  return (
    <FloatingContainer
      top={top}
      left={left}
      direction="row"
      items="center"
      gap="1rem"
      w="88%"
      h="30%"
    >
      <img src={imageDesktop} />
      <Container
        style={{ order: isForDevs ? "-1" : "" }}
        direction="column"
        gap="0.5rem"
        h="fit-content"
      >
        <Text
          style={{
            display:"-webkit-box",
            WebkitLineClamp:5,
            WebkitBoxOrient:"vertical",
            overflow: "hidden",
            maxWidth: "100%",
            textOverflow: "ellipsis",
            
          }}
          align={isForDevs ? "right" : "left"}
        >
          {text}
        </Text>
        {isForDevs && (
          <Container direction="row" gap="0.8rem" content="end" items="center">
            <Text>Stack:</Text>
            {children}
          </Container>
        )}
      </Container>
    </FloatingContainer>
  );
}
