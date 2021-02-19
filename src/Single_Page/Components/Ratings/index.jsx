import React from 'react';
import { StyledHeartsIcon, RatingContainer } from './style';

const HeartsRating = () => {
  return (
    <RatingContainer>
      <StyledHeartsIcon className="ci-heart_fill" />
      <StyledHeartsIcon className="ci-heart_fill" />
      <StyledHeartsIcon className="ci-heart_fill" />
      <StyledHeartsIcon className="ci-heart_fill" />
      <StyledHeartsIcon className="ci-heart_outline" />
    </RatingContainer>
  );
};

export { HeartsRating };
