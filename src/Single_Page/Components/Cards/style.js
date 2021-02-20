import styled from 'styled-components';

const StyledSquareCardContainer = styled.div`
  border: 1px solid var(--red);
  color: var(--darkblue);
  border-radius: 1rem;
  background-color: var(--white);
  text-align: center;
  padding: 2rem 1rem;
  margin: 1rem;
  width: 12rem;
  justify-self: center;

  &:hover {
    cursor: pointer;
    color: white;
    background-color: var(--darkred);
    margin: 0 1rem 2rem;
  }
`;

const StyledSquareCardIcon = styled.i`
  font-size: 3rem;
`;

export { StyledSquareCardContainer, StyledSquareCardIcon };
