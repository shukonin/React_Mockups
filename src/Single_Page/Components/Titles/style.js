import styled from 'styled-components';

const StyledHeroTitle = styled.h1`
  font-size: 3rem;
  color: var(--darkblue);
  margin: 0;
`;
const StyledUpperSubTitle = styled.h3`
  font-size: 1rem;
  text-transform: uppercase;
  color: var(--darkred);
  margin: 0 0 0.5rem;
`;
const StyledHorizontalLine = styled.hr`
  display: inline-block;
  width: 3rem;
  height: 0px;
  margin: 0;
  color: var(--darkblue);
`;

export { StyledHeroTitle, StyledUpperSubTitle, StyledHorizontalLine };
