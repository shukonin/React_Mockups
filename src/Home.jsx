import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1>Check the following mockups developed with React:</h1>
      <ul>
        <li>
          <Link to="/React_Mockups/signup1">Sign up</Link>
        </li>
        <li>
          <Link to="/React_Mockups/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/React_Mockups/SinglePage">Single Page</Link>
        </li>
      </ul>
    </>
  );
};

export { Home };
