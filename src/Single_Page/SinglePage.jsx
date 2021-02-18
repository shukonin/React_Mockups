import React from 'react';
import './Styles/Styles.css';
import { MainContainer, HeroContainer } from './Layouts/PageLayout';
import { Header } from './Components/Header';
import { HeroTitle, HeroUpperTitle, HorizontalLine } from './Components/SectionTitles';

const SinglePage = () => {
  return (
    <MainContainer>
      <Header />
      <HeroContainer>
        <div>
          <HeroUpperTitle />
          <HeroTitle />
          <HorizontalLine />
        </div>
      </HeroContainer>
    </MainContainer>
  );
};

export { SinglePage };
