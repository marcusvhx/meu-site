import styled from "styled-components";
import { Theme } from "../../Theme";

const Link = styled.a`
  display: inline;
  text-decoration:none;
  font-size:1.4rem;
  color:${Theme.emeraldLight};
  transition:all;

  &:hover {
    cursor:pointer;
    color: ${Theme.emerald};
    text-decoration: underline;
  }
`;

export default Link