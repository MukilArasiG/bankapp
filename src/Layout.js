import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  const handleHamburgerMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <HamburgerContainer
        className={isActive ? 'active' : ''}
        onClick={handleHamburgerMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </HamburgerContainer>
      <Backdrop show={isActive} onClick={handleHamburgerMenu} />
      <Slider show={isActive}>
    
        <NavList>
          <NavItem>
            <NavLink to="/home">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contact">Contact</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/loan">Loan</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/location">Location</NavLink>
          </NavItem>
        </NavList>
        <AccountButton to="/account">Account</AccountButton>
      </Slider>
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </>
  );
};

const HamburgerContainer = styled.div`
  width: 60px;
  height: 60px;
  background-color: black;
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  z-index: 1000;

  .bar {
    width: 35px;
    height: 4px;
    background-color: #fff;
    transition: 0.3s;
  }

  &.active .bar:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  &.active .bar:nth-child(2) {
    opacity: 0;
  }

  &.active .bar:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }
`;

const Backdrop = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
`;

const Slider = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  height: 100%;
  background: black;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out;
  transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')};
  z-index: 999;
  font-family: 'Arial', sans-serif;
  align-items: center;
  padding-top: 60px;
`;



const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const NavItem = styled.li`
  margin: 15px 0;
  width: 100%;
  text-align: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: #333;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 22px;
  display: block;
  padding: 15px;
  transition: color 0.3s;

  &:hover {
    color: blue;
  }
`;

const AccountButton = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 22px;
  background: #333;
  padding: 40px 20px;
  border-radius: 5px;
  transition: background 0.3s, color 0.3s;
  position: absolute;
  bottom: 20px;

  &:hover {
    background: blue;
    color: #fff;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

export default Layout;
