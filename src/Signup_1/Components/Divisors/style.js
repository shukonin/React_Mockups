import styled from "styled-components";

const HorizontalOrDivisor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledSignUpDivisor = styled.p`
  font-size: 0.8rem;
  margin: 1rem;
  color: darkgray;
`;

const HorizontalLine = styled.hr`
  display: inline-block;
  width: 15rem;
  height: 0px;
  margin: 0;
  color: lightgray;
`;

export { StyledSignUpDivisor, HorizontalLine, HorizontalOrDivisor };
