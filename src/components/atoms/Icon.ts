import InlineSVG from "react-inlinesvg";
import styled from "styled-components";

const Icon = styled(InlineSVG)<{ size: string; color: string }>`
  display: flex;
  width: ${({ size }) => size};
  height: ${({ size }) => size};

  & path {
    fill: ${({ color }) => color};
  }
`;
export default Icon;
