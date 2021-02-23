import React from 'react';
import {
  StyledMidRedButton,
  StyledPlayVideoButton,
  StyledAppStoreButton,
  StyledPlayStoreButton,
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

const AppStoreButton = () => {
  return (
    <StyledAppStoreButton>
      <StyledButtonIcon className="ci-app_store" />
      <StyledButtonText>App Store</StyledButtonText>
    </StyledAppStoreButton>
  );
};

const PlayStoreButton = () => {
  return (
    <StyledPlayStoreButton>
      <StyledButtonIcon className="ci-play_store" />
      <StyledButtonText>Google Play</StyledButtonText>
    </StyledPlayStoreButton>
  );
};

export { MidRedButton, PlayVideoButton, AppStoreButton, PlayStoreButton };
