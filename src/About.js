import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import experienceImg from './images/experience-img.jpg';
import freelanceImg from './images/freelance-img.jpg';
import multiple from './images/saving.jpg';
import aboutbg from './images/aboubg.jpg';
import Layout from './Layout';

const About = () => {
  const images = [experienceImg, freelanceImg, multiple];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, [images.length]);

  return (
    <Layout>
    <AboutContainer>
      <LeftContainer>
        <Slideshow>
          <SlideshowImage src={images[currentImage]} alt="Slideshow" />
        </Slideshow>
      </LeftContainer>
      <RightContainer>
        <TextContainer>
          <h1>About Our Bank</h1>
          <p>
            Our bank has been serving the community for over 50 years with a commitment to customer service and innovative solutions.
          </p>
        </TextContainer>
        <ButtonsContainer>
          <NavButton to="/account">Go to Account</NavButton>
          <NavButton to="/contact">Contact Us</NavButton>
        </ButtonsContainer>
      </RightContainer>
    </AboutContainer></Layout>
  );
};

const AboutContainer = styled.div`
  display: flex;
  min-height: 100vh; /* Ensure full height of the viewport */
  box-sizing: border-box;
  background-image: url(${aboutbg});
  background-size: cover;
  background-position: center;
`;

const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const RightContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: #fff;
  font-family: 'Arial', sans-serif;
  text-align: center;
`;

const TextContainer = styled.div`
  margin-bottom: 40px;

  h1 {
    font-size: 36px;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const Slideshow = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
`;

const SlideshowImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const NavButton = styled(Link)`
  background-color: blue;
  color: white;
  padding: 15px 25px;
  text-decoration: none;
  border-radius: 5px;
  font-size: 18px;
  transition: background-color 0.3s;

  &:hover {
    background-color: darkblue;
  }
`;

export default About;
