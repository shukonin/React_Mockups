import React from 'react';
import mobileImage from '../../Assets/Images/smartphone.png';
import {
  StyledDownloadAppContainer,
  StyledDownloadAppImage,
  StyledDownloadAppContent,
  StyledDownloadAppButtonsContainer,
} from './style';
import { SectionTitle, SectionUpperTitle } from '../../Components/Titles';
import { LeftParagraph } from '../../Components/Paragraphs';
import { AppStoreButton, PlayStoreButton } from '../../Components/Buttons';
import { DownloadAppBackgroundCircle } from '../../Components/BackgroundCircles';

const DownloadApp = () => {
  return (
    <StyledDownloadAppContainer>
      <DownloadAppBackgroundCircle />
      <StyledDownloadAppImage src={mobileImage} />
      <StyledDownloadAppContent>
        <SectionUpperTitle text="Download app" />
        <SectionTitle text="Download travellers community app" />
        <LeftParagraph text="Be the user of one of the best travellers community application. You can customize and create all your travel services through the application. Travelling is like oxygen to anyone who loves it." />
        <StyledDownloadAppButtonsContainer>
          <AppStoreButton />
          <PlayStoreButton />
        </StyledDownloadAppButtonsContainer>
      </StyledDownloadAppContent>
    </StyledDownloadAppContainer>
  );
};

export { DownloadApp };
