import React from 'react';
import './Styles/Styles.css';
import { MainContainer, HeroContainer } from './Layouts/PageLayout';
import { Header } from './Layouts/Header';
import { HeroTitle, HeroUpperTitle } from './Components/Titles';

const SinglePage = () => {
  return (
    <MainContainer>
      <Header />
      <HeroContainer>
        <div>
          <HeroUpperTitle />
          <HeroTitle />
        </div>
      </HeroContainer>
    </MainContainer>
  );
};

export { SinglePage };
