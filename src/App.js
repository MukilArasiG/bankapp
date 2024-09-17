import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Loan from './Loan';
import Account from './Account';
import PasskeyPage from './PasskeyPage';
import './App.css';

const App = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Container>
            <MaterialContainer>
              <Box className={isRegister ? 'back' : ''}>
                <Front className={isRegister ? 'hidden' : ''}>
                  <Login />
                </Front>
                <Back className={isRegister ? 'visible' : ''}>
                  <Register />
                </Back>
                <MaterialButton onClick={() => setIsRegister(!isRegister)}>
                  <span className="plus">▶︎</span>
                </MaterialButton>
              </Box>
            </MaterialContainer>
          </Container>
        } />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/loan" element={<Loan/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/passkey" element={<PasskeyPage/>}/>
      </Routes>
    </Router>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 460px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const MaterialContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 460px;
  margin: auto;
`;

const Box = styled.div`
  width: 100%;
  height: 400px;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  position: relative;
  transform-style: preserve-3d;
  perspective: 1000px;
  transition: transform 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  &.back {
    transform: rotateY(180deg);
  }
`;

const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(0deg);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease-in-out;
  
  &.hidden {
    opacity: 0;
  }
`;

const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease-in-out;
  
  &.visible {
    opacity: 1;
  }
`;

const MaterialButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  background: #007bff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  font-size: 24px;
  text-align: center;
  line-height: 40px;
  z-index: 10;
`;

export default App;
