import React from 'react';
import {
  StyledHeroTitle,
  StyledUpperSubTitle,
  StyledHorizontalLine,
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

export { HeroTitle, HeroUpperTitle };
