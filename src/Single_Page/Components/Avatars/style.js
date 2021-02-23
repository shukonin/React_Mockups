import styled from 'styled-components';

const StyledAvatar = styled.img`
  width: 3rem;
  height: auto;
  border-radius: 50%;
  box-shadow: 1px 1px 10px 3px var(--lightred);
  position: absolute;
  left: ${(props) => props.left + '%'};
  top: ${(props) => props.top + '%'};
  z-index: 1;
`;

export { StyledAvatar };
