import styled from 'styled-components';

const StyledHeroBackgroundCircle = styled.div`
  height: 55rem;
  width: 55rem;
  position: absolute;
  border-radius: 100%;
  border: none;
  background-color: var(--blue);
  left: -15rem;
  top: -15rem;
`;

const StyledDownloadAppBackgroundCircle = styled.div`
  position: absolute;
  height: 90rem;
  width: 90rem;
  left: -30rem;
  top: -30rem;
  border-radius: 50%;
  border: none;
  background-color: var(--blue);
  z-index: 1;
`;

export { StyledHeroBackgroundCircle, StyledDownloadAppBackgroundCircle };
