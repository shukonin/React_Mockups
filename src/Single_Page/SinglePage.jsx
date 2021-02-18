import React from 'react';
import { MainContainer, HeroContainer } from './Layouts/PageLayout';
import { Header } from './Components/Header';

const SinglePage = () => {
  return (
    <MainContainer>
      <Header />
      <HeroContainer></HeroContainer>
    </MainContainer>
  );
};

export { SinglePage };
