import React from 'react';
import {
  StyledLeftParagraph,
  StyledNoteParagraph,
  StyledSquareCardParagraph,
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

export { LeftParagraph, NoteParagraph, SquareCardParagraph };
