import React from 'react';
import {
  StyledHeroTitle,
  StyledUpperSubTitle,
  StyledHorizontalLine,
  StyledTravelersTitle,
} from './style';

const HeroTitle = () => {
  return (
    <>
      <StyledHeroTitle>Let's Make Your Best Trip Ever</StyledHeroTitle>
      <StyledHorizontalLine />
    </>
  );
};

const HeroUpperTitle = () => {
  return <StyledUpperSubTitle>Your Travel Guide</StyledUpperSubTitle>;
};

const TravelersTitle = () => {
  return <StyledTravelersTitle>Travellers</StyledTravelersTitle>;
};

export { HeroTitle, HeroUpperTitle, TravelersTitle };
