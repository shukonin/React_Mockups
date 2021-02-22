import React from 'react';
import {
  HeroButtons,
  HeroContainer,
  HeroRatings,
  ReviewsContainer,
  HeroContent,
} from './style';
import {
  HeroTitle,
  HeroUpperTitle,
  TravelersTitle,
} from '../../Components/Titles';
import { LeftParagraph, NoteParagraph } from '../../Components/Paragraphs';
import { MidRedButton, PlayVideoButton } from '../../Components/Buttons';
import { HeartsRating } from '../../Components/Ratings';
import { HeroBackgroundCircle } from '../../Components/BackgroundCircles';
import { HeroCarousel } from '../../Components/Carousels';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBackgroundCircle />
      <HeroContent>
        <HeroUpperTitle text="Your travel guide" />
        <HeroTitle />
        <LeftParagraph text="Your ultimate travel companion. Carries all the information you need while travelling." />
        <HeroButtons>
          <MidRedButton text="Let's Explore" />
          <PlayVideoButton />
        </HeroButtons>
        <HeroRatings>
          <NoteParagraph text="3k+ tour events done" />
          <ReviewsContainer>
            <HeartsRating />
            <NoteParagraph text="(2.5k reviews)" />
          </ReviewsContainer>
        </HeroRatings>
        <TravelersTitle />
      </HeroContent>
      <HeroCarousel />
    </HeroContainer>
  );
};

export { Hero };
