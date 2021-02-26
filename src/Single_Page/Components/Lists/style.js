import styled from 'styled-components';

const StyledAboutListContainer = styled.div``;
const StyledAboutListTitle = styled.h3`
  color: var(--darkblue);
`;
const StyledAboutList = styled.ul`
  list-style: none;
  padding: 0;
`;
const StyledAboutListItem = styled.li`
  color: var(--darkblue);
  margin: 0.5rem 0;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export {
  StyledAboutListContainer,
  StyledAboutListTitle,
  StyledAboutList,
  StyledAboutListItem,
};
