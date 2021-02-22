import React from 'react';

import Worldmap from '../../Assets/Images/world-map.png';
import {
  StyledCommunityWorldwideContainer,
  StyledWorldMapContainer,
  StyledWorldMapImage,
} from './style';
import { SectionTitle, SectionUpperTitle } from '../../Components/Titles';

const CommunityWorldwide = () => {
  return (
    <StyledCommunityWorldwideContainer>
      <SectionUpperTitle text="Community worldwide" />
      <SectionTitle text="Join the biggest travellers community" />
      <StyledWorldMapContainer>
        <StyledWorldMapImage src={Worldmap} />
      </StyledWorldMapContainer>
    </StyledCommunityWorldwideContainer>
  );
};

export { CommunityWorldwide };
