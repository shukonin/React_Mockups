import React from "react";
import { StyledSocialButton, GoogleIcon, FacebookIcon } from "./style";
import googlelogo from "../../Assets/google-icon.jpg";
import facebooklogo from "../../Assets/facebook-icon.jpg";

const GoogleSignUpButton = () => {
  return (
    <StyledSocialButton>
      <GoogleIcon src={googlelogo} alt="Google Icon" />
      Continue with Google
    </StyledSocialButton>
  );
};

const FacebookSignUpButton = () => {
  return (
    <StyledSocialButton>
      <FacebookIcon src={facebooklogo} />
      Continue with Facebook
    </StyledSocialButton>
  );
};

export { GoogleSignUpButton, FacebookSignUpButton };
