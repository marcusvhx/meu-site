import styled from "styled-components";
import { Theme } from "../../Theme";

const Link = styled.a`
  display: inline;
  text-decoration:none;
  font-size:1.4rem;
  color:${Theme.colors.emeraldLight};
  transition:all;

  &:hover {
    cursor:pointer;
    color: ${Theme.colors.emerald};
    text-decoration: underline;
  }
`;

export default Link