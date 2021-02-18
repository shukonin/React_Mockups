import React from 'react';
import {
  StyledHeroTitle,
  StyledUpperSubTitle,
  StyledHorizontalLine,
} from './style';

const HeroTitle = () => {
  return <StyledHeroTitle>Let's Make Your Best Trip Ever</StyledHeroTitle>;
};

const HeroUpperTitle = () => {
  return <StyledUpperSubTitle>Your Travel Guide</StyledUpperSubTitle>;
};

const HorizontalLine = () => {
  return <StyledHorizontalLine />;
};

export { HeroTitle, HeroUpperTitle, HorizontalLine };
