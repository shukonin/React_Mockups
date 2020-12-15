import React from "react";

import CompanyLogo from "../../Assets/Company-logo.png";
import "../../Styles/fonts.css";
import {
  NavbarContainer,
  OptionsContainer,
  CompanyLogoContainer,
  Icon,
} from "./style";

const Navbar = () => {
  return (
    <NavbarContainer>
      <CompanyLogoContainer src={CompanyLogo} alt="Company logo" />
      <OptionsContainer>
        <Icon className="icon-home" />
        <Icon className="icon-clipboard" />
        <Icon className="icon-credit-card" />
        <Icon className="icon-calendar" />
        <Icon className="icon-cog" />
      </OptionsContainer>
    </NavbarContainer>
  );
};

export { Navbar };
