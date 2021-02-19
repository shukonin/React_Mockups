import React from 'react';
import {
  StyledMidRedButton,
  StyledPlayVideoButton,
  StyledButtonIcon,
  StyledButtonText,
} from './style';

const MidRedButton = (props) => {
  return <StyledMidRedButton>{props.text}</StyledMidRedButton>;
};

const PlayVideoButton = () => {
  return (
    <StyledPlayVideoButton>
      <StyledButtonIcon className="ci-play_circle_outline" />
      <StyledButtonText>Play video</StyledButtonText>
    </StyledPlayVideoButton>
  );
};

export { MidRedButton, PlayVideoButton };
