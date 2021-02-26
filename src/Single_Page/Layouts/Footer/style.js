import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10rem;
  background-color: var(--white);
  border-top: 1px solid var(--darkblue);
`;

const StyledFooterCompanyLogo = styled.img`
  height: 5rem;
  margin-left: 2rem;
`;

const StyledFooterNavList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
`;

const StyledFooterNavListItem = styled.li`
  text-transform: capitalize;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const StyledFooterMediaList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-auto-flow: column;
  gap: 0.5rem;
`;

const StyledFooterMediaListItem = styled.li`
  &:hover {
    cursor: pointer;
    scale: 1.3;
  }
`;

const StyledFooterMediaListItemIcon = styled.i`
  font-size: 2rem;
`;

export {
  StyledFooter,
  StyledFooterCompanyLogo,
  StyledFooterNavList,
  StyledFooterNavListItem,
  StyledFooterMediaList,
  StyledFooterMediaListItem,
  StyledFooterMediaListItemIcon,
};
