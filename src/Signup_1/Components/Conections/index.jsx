import React from "react";
import { StyledLoginAnchorText, StyledLoginConection } from "./style";

const LoginConection = () => {
  return (
    <StyledLoginConection>
      Already have an account?{" "}
      <StyledLoginAnchorText>Login</StyledLoginAnchorText>
    </StyledLoginConection>
  );
};

export { LoginConection };
