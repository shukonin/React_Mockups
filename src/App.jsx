import React from "react";

import {
  MainContainer,
  GraphicSection,
  FormSection,
  LoginConectionContainer,
  SignUpFormContainer,
  SocialSignUpContainer,
} from "./Layouts/App-style";

import { CompanyLogo } from "./Components/Logos/";
import { SignUpImage } from "./Components/Images/";
import { LoginConection } from "./Components/Conections/";
import { SignUpForm } from "./Components/Forms/";
import { SignUpDivisor } from "./Components/Divisors";
import { GoogleSignUpButton, FacebookSignUpButton } from "./Components/Buttons";

function App() {
  return (
    <div className="App">
      <MainContainer>
        <GraphicSection>
          <CompanyLogo />
          <SignUpImage />
        </GraphicSection>
        <FormSection>
          <LoginConectionContainer>
            <LoginConection />
          </LoginConectionContainer>
          <SignUpFormContainer>
            <SignUpForm />
          </SignUpFormContainer>
          <SignUpDivisor />
          <SocialSignUpContainer>
            <GoogleSignUpButton />
            <FacebookSignUpButton />
          </SocialSignUpContainer>
        </FormSection>
      </MainContainer>
    </div>
  );
}

export default App;
