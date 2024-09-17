import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from './Layout';

const Loan = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
    duration: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <Layout>
      <LoanContainer>
        <Heading>Loan Information</Heading>
        <InfoSection>
          <h2>Our Loan Offerings</h2>
          <p>
            We offer a variety of loan options to suit your needs, including personal loans, home loans, and auto loans. Whether you need funds for a new home, a car, or personal expenses, we have competitive rates and flexible terms to help you achieve your financial goals.
          </p>
          <h3>Eligibility Criteria</h3>
          <ul>
            <li>Must be 18 years or older</li>
            <li>Proof of income or employment</li>
            <li>Good credit history</li>
            <li>Valid ID and address proof</li>
          </ul>
        </InfoSection>
        <FormSection>
          <h2>Apply for a Loan</h2>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <label htmlFor="name">Full Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="amount">Loan Amount:</label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="duration">Loan Duration (months):</label>
              <input
                type="number"
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <SubmitButton type="submit">Submit Application</SubmitButton>
          </Form>
        </FormSection>
      </LoanContainer>
    </Layout>
  );
};

const LoanContainer = styled.div`
  padding: 20px;
  background-color: #f4f4f4;
  min-height: 100vh;
`;

const Heading = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const InfoSection = styled.div`
  margin-bottom: 40px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 10px;
  }

  h3 {
    margin-top: 20px;
    margin-bottom: 10px;
  }

  ul {
    list-style-type: disc;
    padding-left: 20px;
  }
`;

const FormSection = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export default Loan;
