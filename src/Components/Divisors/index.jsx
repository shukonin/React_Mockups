import React from "react";
import {
  HorizontalLine,
  StyledSignUpDivisor,
  HorizontalOrDivisor,
} from "./style";

const SignUpDivisor = () => {
  return (
    <HorizontalOrDivisor>
      <HorizontalLine />
      <StyledSignUpDivisor>Or</StyledSignUpDivisor>
      <HorizontalLine />
    </HorizontalOrDivisor>
  );
};

export { SignUpDivisor };
