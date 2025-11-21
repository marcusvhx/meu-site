import styled from "styled-components";

const Wrapper = styled.div<{ show: boolean }>`
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  z-index: ${({ show }) => (show ? "10" : "-3")};

  position: fixed;
  top: 0;
  left: 0;

  width: 100dvw;
  height: 100dvh;

  display: flex;
  justify-content: center;
  align-items: center;
  gap:1rem;
  background-color: #0008;

  @media screen and (max-width: 51.2rem) {
    flex-direction: column;
    & .desktop{
      display:none;
    }
  }
`;

export default Wrapper