import styled from "styled-components";

const StyledLoginConection = styled.p`
  font-size: 0.9rem;
  color: darkgray;
  margin-right: 1rem;
`;

const StyledLoginAnchorText = styled.a`
  text-decoration: none;
  color: blue;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export { StyledLoginAnchorText, StyledLoginConection };
