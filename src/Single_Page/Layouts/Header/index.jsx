import React from 'react';
import {
  StyledHeader,
  StyledCompanyLogo,
  StyledNav,
  StyledHeaderList,
  StyledHeaderListElement,
} from './style';
import logo from '../../Assets/Images/Company-logo.png';

const Header = () => {
  return (
    <StyledHeader>
      <StyledCompanyLogo src={logo} alt="The company logo"></StyledCompanyLogo>
      <StyledNav>
        <StyledHeaderList>
          <StyledHeaderListElement>Home</StyledHeaderListElement>
          <StyledHeaderListElement>Packages</StyledHeaderListElement>
          <StyledHeaderListElement>Reviews</StyledHeaderListElement>
          <StyledHeaderListElement>Gallery</StyledHeaderListElement>
          <StyledHeaderListElement>Contact</StyledHeaderListElement>
        </StyledHeaderList>
      </StyledNav>
    </StyledHeader>
  );
};

export { Header };
