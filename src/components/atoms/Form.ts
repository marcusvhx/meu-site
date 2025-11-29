import styled from "styled-components";
import { Theme } from "../../Theme";

const Form = styled.form`
  width: min(90dvw, 35rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  border: ${Theme.colors.emerald} solid 0.3rem;
  border-radius: 1rem;

  padding: 1rem;
`;

export default Form