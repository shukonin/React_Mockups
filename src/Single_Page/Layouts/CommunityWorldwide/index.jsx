import React from 'react';

import Worldmap from '../../Assets/Images/world-map.png';
import {
  StyledCommunityWorldwideContainer,
  StyledWorldMapContainer,
  StyledWorldMapImage,
} from './style';
import { SectionTitle, SectionUpperTitle } from '../../Components/Titles';
import { Avatar } from '../../Components/Avatars';
import { CommunityReferenceCard } from '../../Components/Cards';

const CommunityWorldwide = () => {
  return (
    <StyledCommunityWorldwideContainer>
      <SectionUpperTitle text="Community worldwide" />
      <SectionTitle text="Join the biggest travellers community" />
      <StyledWorldMapContainer>
        <StyledWorldMapImage src={Worldmap} />
        <Avatar avatarID="1" />
        <Avatar avatarID="2" />
        <Avatar avatarID="3" />
        <Avatar avatarID="4" />
        <Avatar avatarID="5" />
        <Avatar avatarID="6" />
        <Avatar avatarID="7" />
        <Avatar avatarID="8" />
        <CommunityReferenceCard
          name="Mario"
          content='"Travelling is like oxygen to me. Is great to be in this community"'
          top="40"
          left="-1"
        />
        <CommunityReferenceCard
          name="Louis"
          content='"Nature always refreshes my mind. That is why I travel more"'
          top="35"
          left="84"
        />
        <CommunityReferenceCard
          name="Joseph"
          content='"They have the best if you want to travel the world"'
          top="80"
          left="54"
        />
      </StyledWorldMapContainer>
    </StyledCommunityWorldwideContainer>
  );
};

export { CommunityWorldwide };
