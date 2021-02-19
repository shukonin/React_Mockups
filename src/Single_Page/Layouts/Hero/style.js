import styled from 'styled-components';

const HeroContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10rem;
  padding: 8rem 10rem 2rem;
  background-color: var(--lightblue);
  overflow: hidden;
`;

const HeroButtons = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 12rem;
`;

const HeroContent = styled.div`
  z-index: 1;
`;
const HeroRatings = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 9rem;
  margin: 2rem 0 4rem;
`;

const ReviewsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export {
  HeroContainer,
  HeroContent,
  HeroButtons,
  HeroRatings,
  ReviewsContainer,
};
