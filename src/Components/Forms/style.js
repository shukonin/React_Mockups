import styled from "styled-components";

const StyledSignUpForm = styled.form`
  display: grid;
  grid-auto-flow: row;
  gap: 1rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 0;
`;

const Label = styled.label`
  font-size: 0.8rem;
  font-weight: bold;
  display: flex;
  flex-direction: column;
`;

const CheckboxLabel = styled.label`
  font-size: 0.8rem;
  color: black;
  line-height: 1.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: 0.8rem;
  background-color: #eee;
`;

const PasswordsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const PasswordDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const ConfirmPasswordDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Checkbox = styled.input``;

const CreateAccountButton = styled.button`
  background-color: #4af;
  color: white;
  border: none;
  border-radius: 1rem;
  padding: 1rem 5rem;

  &:hover {
    cursor: pointer;
    background-color: #5bf;
  }
`;

export {
  StyledSignUpForm,
  Title,
  Label,
  CheckboxLabel,
  Input,
  PasswordsContainer,
  PasswordDiv,
  ConfirmPasswordDiv,
  Checkbox,
  CreateAccountButton,
};
