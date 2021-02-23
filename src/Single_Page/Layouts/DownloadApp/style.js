import styled from 'styled-components';

const StyledDownloadAppContainer = styled.section`
  position: relative;
  padding: 5rem 10rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5rem;
  background-color: var(--lightblue);
  overflow: hidden;
`;

const StyledDownloadAppImage = styled.img`
  width: 20rem;
  height: auto;
  justify-self: center;
  z-index: 10;
`;

const StyledDownloadAppContent = styled.div`
  z-index: 10;
`;

const StyledDownloadAppButtonsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
`;

export {
  StyledDownloadAppContainer,
  StyledDownloadAppImage,
  StyledDownloadAppContent,
  StyledDownloadAppButtonsContainer,
};
