import React from 'react';
import {
  StyledHeader,
  StyledCompanyLogo,
  StyledHeaderList,
  StyledHeaderListElement,
} from './style';
import logo from '../../Assets/Company-logo.png';

const Header = () => {
  return (
    <StyledHeader>
      <StyledCompanyLogo src={logo} alt="The company logo"></StyledCompanyLogo>
      <StyledHeaderList>
        <StyledHeaderListElement>Home</StyledHeaderListElement>
        <StyledHeaderListElement>Packages</StyledHeaderListElement>
        <StyledHeaderListElement>Reviews</StyledHeaderListElement>
        <StyledHeaderListElement>Gallery</StyledHeaderListElement>
        <StyledHeaderListElement>Contact</StyledHeaderListElement>
      </StyledHeaderList>
    </StyledHeader>
  );
};

export { Header };
