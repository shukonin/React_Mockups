import React from 'react';
import { StyledLeftParagraph, StyledNoteParagraph } from './style';

const LeftParagraph = (props) => {
  return <StyledLeftParagraph>{props.text}</StyledLeftParagraph>;
};

const NoteParagraph = (props) => {
  return <StyledNoteParagraph>{props.text}</StyledNoteParagraph>;
};

export { LeftParagraph, NoteParagraph };
