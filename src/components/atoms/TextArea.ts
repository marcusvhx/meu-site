import styled from "styled-components";
import { Theme } from "../../Theme";

const TextArea = styled.textarea`
  &:focus {
    outline: ${Theme.emeraldLight} 0.3rem solid;
  }

  max-width: 100%;
  width: 100%;

  height: 15rem;

  border-radius: 0.6rem;
  padding: 0.5rem;

  resize: none;

  background-color: ${Theme.fg};
  color: #000;
`;
export default TextArea;