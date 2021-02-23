import React from 'react';
import {
  StyledSquareCardContainer,
  StyledSquareCardIcon,
  StyledCommunityReferenceCardContainer,
} from './style';
import { SquareCardTitle } from '../Titles';
import {
  SquareCardParagraph,
  CommunityReferenceCardParagraph,
} from '../Paragraphs';

const SquareCard = (props) => {
  return (
    <StyledSquareCardContainer>
      <StyledSquareCardIcon className={props.icon} />
      <SquareCardTitle text={props.title} />
      <SquareCardParagraph text={props.content} />
    </StyledSquareCardContainer>
  );
};

const CommunityReferenceCard = (props) => {
  return (
    <StyledCommunityReferenceCardContainer top={props.top} left={props.left}>
      <CommunityReferenceCardParagraph text={props.content} name={props.name} />
    </StyledCommunityReferenceCardContainer>
  );
};

export { SquareCard, CommunityReferenceCard };
