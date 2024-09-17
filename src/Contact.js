import React, { useState } from 'react';
import styled from 'styled-components';
import DetailsBar from './components/DetailsBar';
import InputSide from './components/InputSide';
import Layout from './Layout';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  background-color: whitesmoke;
  padding-bottom: 50px;
  padding-top: 50px;  /* Added padding to top for better centering */
  justify-content: center;  /* Center content vertically */
`;

const PageHeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px; /* Adjusted for fullscreen */
`;

const FormContainer = styled.div`
  width: 65%;
  min-width: 600px;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  background-color: #fff;
  padding: 20px;  /* Increased padding for better spacing */
  border-radius: 10px;  /* Slightly increased border radius */
  grid-gap: 20px;  /* Increased gap for better layout */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 90%;
    max-width: 500px;
    min-width: 0px;
    grid-gap: 10px;  /* Adjusted for mobile view */
  }
`;

const TextOne = styled.b`
  font-size: 32px;  /* Slightly increased font size */
  color: rgb(4, 4, 59);
  text-align: center;
`;

const TextTwo = styled.p`
  color: rgb(4, 4, 34);
  font-size: 18px;  /* Slightly increased font size */
  text-align: center;
`;

const MessageWrapper = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SuccessMessage = styled.h2`
  font-size: 25px;
  color: rgb(8, 8, 63);
  text-align: center;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const CheckCircleIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgb(8, 8, 63);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 30px;
`;

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <Layout>
    <PageWrapper>
      {!isSubmitted ? (
        <>
          <PageHeadingWrapper>
            <TextOne>Contact US</TextOne>
            <TextTwo>Any Question or remarks? Just write us a message</TextTwo>
          </PageHeadingWrapper>
          <FormContainer>
            <DetailsBar />
            <InputSide onSubmit={handleFormSubmit} />
          </FormContainer>
        </>
      ) : (
        <MessageWrapper>
          <CheckCircleIcon>✔</CheckCircleIcon>
          <SuccessMessage>MESSAGE SENT SUCCESSFULLY</SuccessMessage>
        </MessageWrapper>
      )}
    </PageWrapper></Layout>
  );
};

export default Contact;
