import styled from 'styled-components';

const StyledHeader = styled.header`
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10rem;
  z-index: 10;
`;
const StyledCompanyLogo = styled.img`
  width: 5rem;
  height: auto;
`;
const StyledNav = styled.nav``;
const StyledHeaderList = styled.ul`
  list-style: none;
  display: grid;
  grid-auto-flow: column;
  gap: 2rem;
`;
const StyledHeaderListElement = styled.li`
  color: var(--darkblue);

  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
`;

export {
  StyledHeader,
  StyledCompanyLogo,
  StyledNav,
  StyledHeaderList,
  StyledHeaderListElement,
};
