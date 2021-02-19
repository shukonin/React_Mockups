import React from 'react';
import './Styles/Styles.css';
import './Styles/Fonts.css';
import { MainContainer } from './Layouts/PageLayout';
import { Header } from './Layouts/Header';
import { Hero } from './Layouts/Hero';

const SinglePage = () => {
  return (
    <MainContainer>
      <Header />
      <Hero />
    </MainContainer>
  );
};

export { SinglePage };
