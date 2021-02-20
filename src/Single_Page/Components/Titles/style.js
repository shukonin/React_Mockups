import styled from 'styled-components';

const StyledHeroTitle = styled.h1`
  font-size: 3rem;
  color: var(--darkblue);
  margin: 0;
`;
const StyledHeroUpperTitle = styled.h3`
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

const StyledSectionTitle = styled.h2`
  font-size: 2.5rem;
  color: var(--darkblue);
  margin: 0;
  text-transform: capitalize;
`;
const StyledSectionUpperTitle = styled(StyledHeroUpperTitle)`
  text-transform: capitalize;
`;

const StyledSquareCardTitle = styled.h4`
  text-transform: capitalize;
`;

const StyledTravelersTitle = styled.p`
  font-size: 5rem;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 900;
  position: absolute;
  bottom: -1rem;
  left: 0;
  margin: 0;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: lightslategray;
`;

export {
  StyledHeroTitle,
  StyledHeroUpperTitle,
  StyledHorizontalLine,
  StyledSectionTitle,
  StyledSectionUpperTitle,
  StyledSquareCardTitle,
  StyledTravelersTitle,
};
