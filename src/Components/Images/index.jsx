import React from "react";
import { StyledSignUpImage } from "./style";
import photo from "../../Assets/SignUpImage.jpg";

const SignUpImage = () => {
  return <StyledSignUpImage src={photo} alt="Greeting girl with glasses" />;
};

export { SignUpImage };
