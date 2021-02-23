import React from 'react';
import {
  StyledLeftParagraph,
  StyledNoteParagraph,
  StyledSquareCardParagraph,
  StyledCommunityCardParagraph,
  StyledSpan,
} from './style';

const LeftParagraph = (props) => {
  return <StyledLeftParagraph>{props.text}</StyledLeftParagraph>;
};

const NoteParagraph = (props) => {
  return <StyledNoteParagraph>{props.text}</StyledNoteParagraph>;
};

const SquareCardParagraph = (props) => {
  return <StyledSquareCardParagraph>{props.text}</StyledSquareCardParagraph>;
};

const CommunityReferenceCardParagraph = (props) => {
  return (
    <StyledCommunityCardParagraph>
      {props.text}
      <br />
      <StyledSpan> -- {props.name}</StyledSpan>
    </StyledCommunityCardParagraph>
  );
};

export {
  LeftParagraph,
  NoteParagraph,
  SquareCardParagraph,
  CommunityReferenceCardParagraph,
};
