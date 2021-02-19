import styled from 'styled-components';

const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  padding: 8rem 10rem 2rem;
  background-color: var(--lightblue);
`;

const HeroButtons = styled.div`
  display: grid;
  grid-auto-flow: column;
`;

const HeroContent = styled.div``;
const HeroRatings = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
`;

const ReviewsContainer = styled.div`
  display: flex;
  align-items: center;
`;
const HeroCarousel = styled.div``;

export {
  HeroContainer,
  HeroContent,
  HeroCarousel,
  HeroButtons,
  HeroRatings,
  ReviewsContainer,
};
