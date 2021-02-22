import styled from 'styled-components';

const StyledExclusiveOfferContainer = styled.section`
  position: relative;
  padding: 5rem 10rem;
  background-color: var(--whitered);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5rem;
  overflow: hidden;
`;
const StyledExclusiveOfferBackground = styled.div`
  position: absolute;
  background-color: var(--lightred);
  border-radius: 50%;
  width: 60rem;
  height: 60rem;
  top: -15rem;
  right: -25rem;
  z-index: 1;
`;
const StyledExclusiveOfferContent = styled.div`
  z-index: 10;
`;
const StyledExclusiveOfferImage = styled.img`
  z-index: 10;
  height: 20rem;
  justify-self: end;
`;

export {
  StyledExclusiveOfferContainer,
  StyledExclusiveOfferBackground,
  StyledExclusiveOfferContent,
  StyledExclusiveOfferImage,
};
