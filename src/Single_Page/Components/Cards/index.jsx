import React from 'react';
import { StyledSquareCardContainer, StyledSquareCardIcon } from './style';
import { SquareCardTitle } from '../Titles';
import { SquareCardParagraph } from '../Paragraphs';

const SquareCard = (props) => {
  return (
    <StyledSquareCardContainer>
      <StyledSquareCardIcon className={props.icon} />
      <SquareCardTitle text={props.title} />
      <SquareCardParagraph text={props.content} />
    </StyledSquareCardContainer>
  );
};

export { SquareCard };
