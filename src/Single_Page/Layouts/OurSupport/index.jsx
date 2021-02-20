import React from 'react';
import {
  StyledOurSupportContainer,
  StyledTitlesContainer,
  StyledCardsContainer,
} from './style';
import { SectionTitle, SectionUpperTitle } from '../../Components/Titles';
import { SquareCard } from '../../Components/Cards';

const OurSupport = () => {
  return (
    <StyledOurSupportContainer>
      <StyledTitlesContainer>
        <SectionUpperTitle text="Our support" />
        <SectionTitle text="We make your travel more comfortable" />
      </StyledTitlesContainer>
      <StyledCardsContainer>
        <SquareCard
          icon="ci-mobile_alt"
          title="World wide connect"
          content="We are connected to a world wide travel community. That helps you a lot always."
        />
        <SquareCard
          icon="ci-id_card"
          title="Expert tour guide"
          content="Our expert tour guide knows the best about travelling. They will guide you all time."
        />
        <SquareCard
          icon="ci-credit_card_alt"
          title="Saves your money"
          content="We have exclusive access to special travel fares hotels. So you don't have to worry."
        />
      </StyledCardsContainer>
    </StyledOurSupportContainer>
  );
};

export { OurSupport };
