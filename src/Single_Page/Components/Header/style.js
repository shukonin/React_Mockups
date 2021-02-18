import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const StyledCompanyLogo = styled.img`
  width: 5rem;
  height: auto;
`;
const StyledHeaderList = styled.ul`
  list-style: none;
  display: flex;
`;
const StyledHeaderListElement = styled.li`
  margin: 0 1rem;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export {
  StyledHeader,
  StyledCompanyLogo,
  StyledHeaderList,
  StyledHeaderListElement,
};
