import React from 'react';
import './Styles/Styles.css';
import './Styles/Fonts.css';
import { MainContainer } from './Layouts/PageLayout';
import { Header } from './Layouts/Header';
import { Hero } from './Layouts/Hero';
import { OurSupport } from './Layouts/OurSupport';
import { ExclusiveOffer } from './Layouts/ExclusiveOffer/';
import { CommunityWorldwide } from './Layouts/CommunityWorldwide';

const SinglePage = () => {
  return (
    <MainContainer>
      <Header />
      <Hero />
      <OurSupport />
      <ExclusiveOffer />
      <CommunityWorldwide />
    </MainContainer>
  );
};

export { SinglePage };
