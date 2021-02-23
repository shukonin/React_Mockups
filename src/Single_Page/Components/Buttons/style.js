import styled from 'styled-components';

const StyledStandardButton = styled.button`
  border-radius: 0.5rem;
  border: none;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  width: 10rem;
  text-transform: capitalize;

  &:hover {
    cursor: pointer;
  }
`;

const StyledMidRedButton = styled(StyledStandardButton)`
  background-color: var(--darkred);
  color: white;

  &:hover {
    box-shadow: 10px 15px 40px 1px var(--red);
  }
`;

const StyledPlayVideoButton = styled(StyledStandardButton)`
  border: 1px solid var(--darkblue);
  color: var(--darkblue);
  background-color: transparent;
  display: flex;
  align-items: center;

  &:hover {
    background-color: var(--darkblue);
    color: white;
    box-shadow: 10px 15px 40px 1px var(--darkblue);
  }
`;

const StyledAppStoreButton = styled(StyledStandardButton)`
  border: 1px solid var(--darkblue);
  color: var(--white);
  background-color: var(--darkblue);
  display: flex;
  align-items: center;

  &:hover {
    color: white;
    box-shadow: 10px 15px 40px 1px var(--darkblue);
  }
`;

const StyledPlayStoreButton = styled(StyledStandardButton)`
  font-size: 1rem;
  border: 1px solid var(--darkblue);
  color: var(--white);
  background-color: var(--darkblue);
  display: flex;
  align-items: center;

  &:hover {
    color: white;
    box-shadow: 10px 15px 40px 1px var(--darkblue);
  }
`;

const StyledButtonIcon = styled.i`
  margin: 0;
  font-size: 1.5rem;
`;

const StyledButtonText = styled.p`
  margin: 0 0 0 1rem;
`;

export {
  StyledMidRedButton,
  StyledPlayVideoButton,
  StyledAppStoreButton,
  StyledPlayStoreButton,
  StyledButtonIcon,
  StyledButtonText,
};
