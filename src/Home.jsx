import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Check the following mockups developed with React:</h1>
      <Link to="/signup1">Sign up</Link>
    </>
  );
};

export { Home };
