import React from 'react';

import passportImage from '../../Assets/Images/passport.png';

import { MidRedButton } from '../../Components/Buttons';
import { LeftParagraph } from '../../Components/Paragraphs';
import { SectionTitle, SectionUpperTitle } from '../../Components/Titles';

import {
  StyledExclusiveOfferContainer,
  StyledExclusiveOfferBackground,
  StyledExclusiveOfferContent,
  StyledExclusiveOfferImage,
} from './style';

const ExclusiveOffer = () => {
  return (
    <StyledExclusiveOfferContainer>
      <StyledExclusiveOfferBackground />
      <StyledExclusiveOfferContent>
        <SectionUpperTitle text="Exclusive offer" />
        <SectionTitle text="Travel around the world in just 80 days" />
        <LeftParagraph text="We offer our clients an exclusive tariff for travel around the world in just 80 days. Until now many of our clients praised this super offer to travel the world. Travel is oxygen for anyone." />
        <MidRedButton text="Book now" />
      </StyledExclusiveOfferContent>
      <StyledExclusiveOfferImage src={passportImage} />
    </StyledExclusiveOfferContainer>
  );
};

export { ExclusiveOffer };
