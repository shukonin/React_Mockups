import React from 'react';
import './Styles/Styles.css';
import './Styles/Fonts.css';
import { MainContainer } from './Layouts/PageLayout';
import { Header } from './Layouts/Header';
import { Hero } from './Layouts/Hero';
import { OurSupport } from './Layouts/OurSupport';
import { ExclusiveOffer } from './Layouts/ExclusiveOffer/';
import { CommunityWorldwide } from './Layouts/CommunityWorldwide';
import { DownloadApp } from './Layouts/DownloadApp';
import { About } from './Layouts/About';
import { Footer } from './Layouts/Footer';

const SinglePage = () => {
  return (
    <MainContainer>
      <Header />
      <Hero />
      <OurSupport />
      <ExclusiveOffer />
      <CommunityWorldwide />
      <DownloadApp />
      <About />
      <Footer />
    </MainContainer>
  );
};

export { SinglePage };
