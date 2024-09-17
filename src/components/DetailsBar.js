import React from 'react';
import styled from 'styled-components';
// Removed react-feather import

const DetailsBarWrapper = styled.div`
  background-color: rgb(8, 8, 63);
  border-radius: 7px;
  position: relative;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  padding-bottom: 100px;
  @media (max-width: 768px) {
    padding-bottom: 80px;
    grid-row: 2;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextOne = styled.p`
  text-align: center;
  color: #fff;
  font-size: 22px;  /* Increased font size */
  font-weight: bold;
`;

const TextTwo = styled.p`
  text-align: center;
  color: #fff;
  font-size: 16px;  /* Increased font size */
  line-height: 22px;
`;

const BigCircle = styled.div`
  height: 60px;  /* Increased size */
  margin-top: 30px;
  width: 60px;   /* Increased size */
  background-color: rgb(100, 21, 173);
  border-radius: 100%;
  z-index: 22;
  margin-left: 10px;
`;

const SmallCircle = styled.div`
  position: absolute;
  margin-left: 10px;
  background-color: rgb(252, 113, 137);
  border-radius: 100%;
  height: 40px;  /* Increased size */
  width: 40px;   /* Increased size */
`;

const ContactsWrapper = styled.a`
  display: flex;
  width: 250px;  /* Increased width */
  height: 20px;  /* Increased height */
  margin-top: 50px;
  cursor: pointer;
  text-decoration: none;
`;

const ContactText = styled.div`
  color: #fff;
  font-size: 18px;  /* Increased font size */
  margin-left: 10px;
`;

const SocialsWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 20px;  /* Increased height */
  bottom: 30px;
  position: absolute;
  cursor: pointer;
`;

const SocialIconWrapper = styled.a`
  width: 40px;  /* Increased size */
  height: 40px;  /* Increased size */
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: rgb(252, 113, 137);
  }
`;

const DetailsBar = () => {
  return (
    <DetailsBarWrapper>
      <TextWrapper>
        <TextOne>Contact Information</TextOne>
        <TextTwo>Fill up the form and our team will get back to you within 24 hours</TextTwo>
      </TextWrapper>
      <div>
        <ContactsWrapper href="tel:+233543201893">
          {/* Replace Icon with another icon solution or SVG */}
          <ContactText>+233543201893</ContactText>
        </ContactsWrapper>

        <ContactsWrapper href="mailto:bankingchain@gmail.com">
          {/* Replace Icon with another icon solution or SVG */}
          <ContactText>bankingchain@gmail.com</ContactText>
        </ContactsWrapper>
      </div>

      <div>
        <BigCircle></BigCircle>
        <SmallCircle></SmallCircle>
      </div>

      <SocialsWrapper>
        <SocialIconWrapper href="https://www.facebook.com/profile.php?id=100021937291259">
          {/* Replace Icon with another icon solution or SVG */}
        </SocialIconWrapper>
        <SocialIconWrapper href="https://www.instagram.com/_bankingchain/">
          {/* Replace Icon with another icon solution or SVG */}
        </SocialIconWrapper>
        <SocialIconWrapper href="https://www.linkedin.com/in/banking-chain/">
          {/* Replace Icon with another icon solution or SVG */}
        </SocialIconWrapper>
      </SocialsWrapper>
    </DetailsBarWrapper>
  );
};

export default DetailsBar;
