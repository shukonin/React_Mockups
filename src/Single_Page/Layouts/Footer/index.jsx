import React from 'react';

import CompanyLogo from '../../Assets/Images/Company-logo.png';

import {
  StyledFooter,
  StyledFooterCompanyLogo,
  StyledFooterNavList,
  StyledFooterMediaList,
  StyledFooterNavListItem,
  StyledFooterMediaListItem,
  StyledFooterMediaListItemIcon,
} from './style';

const Footer = () => {
  const navList = ['reviews', 'pricing', 'destinations', 'blog'];
  const mediaList = [
    'ci-twitter',
    'ci-instagram',
    'ci-LinkedIn',
    'ci-facebook',
  ];

  return (
    <StyledFooter>
      <StyledFooterCompanyLogo src={CompanyLogo} alt="" />
      <StyledFooterNavList>
        {navList.map((item) => (
          <StyledFooterNavListItem>{item}</StyledFooterNavListItem>
        ))}
      </StyledFooterNavList>
      <StyledFooterMediaList>
        {mediaList.map((item) => (
          <StyledFooterMediaListItem>
            <StyledFooterMediaListItemIcon className={item} />
          </StyledFooterMediaListItem>
        ))}
      </StyledFooterMediaList>
    </StyledFooter>
  );
};

export { Footer };
