import styled from "styled-components";

const StyledSocialButton = styled.button`
  font-size: 0.9rem;
  font-weight: bold;
  color: black;
  background-color: transparent;
  border: 1px solid lightgray;
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  width: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    border: 1px solid darkgray;
  }
`;

const GoogleIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;
`;

const FacebookIcon = styled(GoogleIcon)``;

export { StyledSocialButton, GoogleIcon, FacebookIcon };
