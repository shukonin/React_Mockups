import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;
const StyledInputContainer = styled.div``;

const StyledFormLabel = styled.label`
  color: var(--darkblue);
  font-weight: bold;
  font-size: 1.2rem;
  margin: 1.2rem 0;
  text-transform: capitalize;
`;

const StyledFormInput = styled.input`
  border: none;
  padding: 0.5rem;
  width: 70%;
  box-shadow: 1px 1px 1px 1px lightgray;

  &:focus {
    outline: none;
  }
`;

const StyledFormSubmitButton = styled.button`
  position: relative;
  left: -2rem;
  background-color: var(--red);
  border: none;
  height: 80%;

  &:hover {
    cursor: pointer;
    background-color: var(--darkred);
  }
`;

const StyledFormSubmitButtonIcon = styled.i`
  font-weight: bold;
`;

export {
  StyledForm,
  StyledInputContainer,
  StyledFormLabel,
  StyledFormInput,
  StyledFormSubmitButton,
  StyledFormSubmitButtonIcon,
};
