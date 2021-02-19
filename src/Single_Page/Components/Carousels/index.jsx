import React, { useState, useEffect } from 'react';
import cocktailImg from '../../Assets/Images/cocktail.png';
import destinationImg from '../../Assets/Images/destination.png';
import kitesurfingImg from '../../Assets/Images/kitesurfing.png';
import landscapeImg from '../../Assets/Images/landscape.png';
import travelcaseImg from '../../Assets/Images/travel-case.png';

import {
  StyledHeroCarouselContainer,
  StyledHeroCarouselImg,
  StyledCarouselButtonsContainer,
  StyledCarouselButtonElement,
  StyledCarouselButton,
} from './style';

const HeroCarousel = () => {
  const images = [
    cocktailImg,
    destinationImg,
    kitesurfingImg,
    landscapeImg,
    travelcaseImg,
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentImage === 4) {
        setCurrentImage(0);
      } else {
        setCurrentImage(currentImage + 1);
      }
    }, 8000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <StyledHeroCarouselContainer>
      <StyledHeroCarouselImg src={images[currentImage]} alt="" />
      <StyledCarouselButtonsContainer>
        <StyledCarouselButtonElement>
          <StyledCarouselButton
            onClick={() => setCurrentImage(0)}
            id="0"
            current={currentImage}
          />
        </StyledCarouselButtonElement>
        <StyledCarouselButtonElement>
          <StyledCarouselButton
            onClick={() => setCurrentImage(1)}
            id="1"
            current={currentImage}
          />
        </StyledCarouselButtonElement>
        <StyledCarouselButtonElement>
          <StyledCarouselButton
            onClick={() => setCurrentImage(2)}
            id="2"
            current={currentImage}
          />
        </StyledCarouselButtonElement>
        <StyledCarouselButtonElement>
          <StyledCarouselButton
            onClick={() => setCurrentImage(3)}
            id="3"
            current={currentImage}
          />
        </StyledCarouselButtonElement>
        <StyledCarouselButtonElement>
          <StyledCarouselButton
            onClick={() => setCurrentImage(4)}
            id="4"
            current={currentImage}
          />
        </StyledCarouselButtonElement>
      </StyledCarouselButtonsContainer>
    </StyledHeroCarouselContainer>
  );
};

export { HeroCarousel };
