import styled from "styled-components";

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CompanyLogoContainer = styled.img`
  width: 70%;
  height: auto;
  margin: 1rem 0 5rem;

  &:hover {
    cursor: pointer;
  }
`;

const Icon = styled.i`
  font-size: 2rem;
  color: gray;
  margin: 1rem 0;

  &.icon-home {
    color: black;
  }

  &:hover {
    color: orange;
    cursor: pointer;
  }
`;

export { NavbarContainer, OptionsContainer, CompanyLogoContainer, Icon };
