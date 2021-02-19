import React from 'react';
import {
  HeroButtons,
  HeroCarousel,
  HeroContainer,
  HeroRatings,
  ReviewsContainer,
  HeroContent,
} from './style';
import { HeroTitle, HeroUpperTitle } from '../../Components/Titles';
import { LeftParagraph, NoteParagraph } from '../../Components/Paragraphs';
import { MidRedButton, PlayVideoButton } from '../../Components/Buttons';
import { HeartsRating } from '../../Components/Ratings';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroUpperTitle />
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
      </HeroContent>
      <HeroCarousel></HeroCarousel>
    </HeroContainer>
  );
};

export { Hero };
