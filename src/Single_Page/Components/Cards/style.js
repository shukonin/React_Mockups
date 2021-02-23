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

const StyledCommunityReferenceCardContainer = styled.div`
  position: absolute;
  width: 15vw;
  height: auto;
  padding: 0 1rem;
  border-radius: 1rem;
  box-shadow: 1px 1px 10px 1px lightgrey;
  left: ${(props) => props.left + '%'};
  top: ${(props) => props.top + '%'};
  background-color: whitesmoke;
  color: --var(darkred);
`;

export {
  StyledSquareCardContainer,
  StyledSquareCardIcon,
  StyledCommunityReferenceCardContainer,
};
