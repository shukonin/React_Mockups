import React from "react";
import { StyledCompanyLogo } from "./style";
import logo from "../../Assets/Company-logo.png";

const CompanyLogo = () => {
  return <StyledCompanyLogo src={logo} alt="Company-logo" />;
};

export { CompanyLogo };
