import React from 'react';
import {
  StyledHeroTitle,
  StyledHeroUpperTitle,
  StyledHorizontalLine,
  StyledSectionTitle,
  StyledSectionUpperTitle,
  StyledSquareCardTitle,
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

const HeroUpperTitle = (props) => {
  return <StyledHeroUpperTitle>{props.text}</StyledHeroUpperTitle>;
};

const SectionUpperTitle = (props) => {
  return <StyledSectionUpperTitle>{props.text}</StyledSectionUpperTitle>;
};

const SectionTitle = (props) => {
  return <StyledSectionTitle>{props.text}</StyledSectionTitle>;
};

const SquareCardTitle = (props) => {
  return <StyledSquareCardTitle>{props.text}</StyledSquareCardTitle>;
};

const TravelersTitle = () => {
  return <StyledTravelersTitle>Travellers</StyledTravelersTitle>;
};

export {
  HeroTitle,
  HeroUpperTitle,
  SectionTitle,
  SectionUpperTitle,
  SquareCardTitle,
  TravelersTitle,
};
