import styled from 'styled-components';

const StyledHeroCarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledHeroCarouselImg = styled.img`
  width: 24rem;
  height: auto;
`;

const StyledCarouselButtonsContainer = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin-top: 2rem;
`;

const StyledCarouselButtonElement = styled.li``;

const StyledCarouselButton = styled.div`
  border: 3px solid white;
  box-shadow: 1px 1px 1px 1px darkgray;
  border-radius: 50%;
  background-color: ${(props) =>
    parseInt(props.id) === props.current ? 'var(--red)' : 'gray'};
  margin: 0 0.4rem;
  height: 0.4rem;
  width: 0.4rem;

  &:hover {
    cursor: pointer;
    background-color: var(--darkred);
    scale: 1.5;
  }
`;

export {
  StyledHeroCarouselContainer,
  StyledHeroCarouselImg,
  StyledCarouselButtonsContainer,
  StyledCarouselButtonElement,
  StyledCarouselButton,
};
