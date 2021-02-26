import React from 'react';
import {
  StyledAboutListContainer,
  StyledAboutList,
  StyledAboutListItem,
  StyledAboutListTitle,
} from './style';

const AboutList = (props) => {
  return (
    <StyledAboutListContainer>
      <StyledAboutListTitle>{props.list.title}</StyledAboutListTitle>
      <StyledAboutList>
        {props.list.items.map((item) => (
          <StyledAboutListItem>{item}</StyledAboutListItem>
        ))}
      </StyledAboutList>
    </StyledAboutListContainer>
  );
};

export { AboutList };
