import Icon from "../atoms/Icon";
import styled from "styled-components";

const Tooltip = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.6rem;

  height: 3.5rem;
  min-width: 1rem;
  padding: 0 1rem;
  border-radius: 0.4rem;

  position: absolute;
  top: -110%;
  left: 50%;
  translate: -50% -50%;

  background-color: #121212;

  visibility: hidden;
  opacity: 0;
  transition: all 0.3s linear;

  pointer-events: none;
  text-transform: capitalize;
  white-space: nowrap;

  &::after {
    content: "";
    display: flex;
    width: 2rem;
    height: 2rem;

    position: absolute;
    top: 70%;
    left: 50%;
    z-index: -1;

    rotate: 45deg;
    translate: -50%;
    border-bottom-right-radius: 0.5rem;

    background-color: #121212;
  }

    @media screen and (max-width: 768px) {
    font-size: 1.2rem;

    height: 3rem;
    min-width: 0.5rem;

  &::after {
    width: 1.5rem;
    height: 1.5rem;
    top: 75%;
    
  }
  }

`;

const Wrapper = styled.div`
  display: flex;
  width: min-content;
  height: min-content;
  position: relative;
  z-index: 5;

  &:hover div {
    visibility: visible;
    opacity: 1;
    z-index: 5;
  }
`;

export default function TitledIcon({
  color,
  size,
  src,
  title,
}: {
  color: string;
  size: string;
  src: string;
  title: string;
}) {
  return (
    <Wrapper>
      <Icon color={color} size={size} src={src} />
      <Tooltip>{title}</Tooltip>
    </Wrapper>
  );
}
