import React from 'react';
import {
  StyledForm,
  StyledInputContainer,
  StyledFormInput,
  StyledFormLabel,
  StyledFormSubmitButton,
  StyledFormSubmitButtonIcon,
} from './style';

const SusbcribeNewsletterForm = () => {
  return (
    <StyledForm>
      <StyledFormLabel for="mail">Subscribe to newsletter</StyledFormLabel>
      <StyledInputContainer>
        <StyledFormInput type="email" id="mail" placeholder="Email address" />
        <StyledFormSubmitButton>
          <StyledFormSubmitButtonIcon className="ci-chevron_big_right" />
        </StyledFormSubmitButton>
      </StyledInputContainer>
    </StyledForm>
  );
};

export { SusbcribeNewsletterForm };
