import React from 'react';
import { AboutList } from '../../Components/Lists';

import { StyledAboutContainer } from './style';

const About = () => {
  const companyList = {
    title: 'Company',
    items: [
      'Career',
      'About us',
      'Blog',
      'Press Info',
      'Features',
      'Successes',
    ],
  };

  const travellersList = {
    title: 'Travellers',
    items: [
      'Why travellers',
      'Enterprise',
      'Customer stories',
      'Pricing',
      'Security',
    ],
  };

  const resourcesList = {
    title: 'Resources',
    items: [
      'Download',
      'Help center',
      'Guides',
      'Events',
      'Developers',
      'Partners',
    ],
  };

  return (
    <StyledAboutContainer>
      <AboutList list={companyList} />
      <AboutList list={travellersList} />
      <AboutList list={resourcesList} />
    </StyledAboutContainer>
  );
};

export { About };
