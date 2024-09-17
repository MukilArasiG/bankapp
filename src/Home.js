import React, { useState } from 'react';
import Layout from './Layout';

const Home = () => {
  const [isActive, setIsActive] = useState(false);

  const handleHamburgerMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <Layout>
      {/* Your Home page content goes here */}
      <h1>Welcome to the Home Page</h1>
    </Layout>
  );
};

export default Home;
