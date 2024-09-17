import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = async () => {
    setLoading(true);
    setError('');

    if (username.trim() === '' || password.trim() === '') {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    try {
      // Send POST request to register the user
      const response = await axios.post('http://localhost:5000/auth/register', {
        username,
        password
      });

      if (response.status === 201) {
        alert('Registration successful!');
        setUsername('');
        setPassword('');
      } else {
        setError('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setError('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Content>
      <Title>REGISTER</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Input>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Input>
      <Input>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Input>
      <Button onClick={handleRegister} disabled={loading}>
        {loading ? 'Registering...' : 'REGISTER'}
      </Button>
    </Content>
  );
};

const Content = styled.div`
  width: 85%;
  max-width: 400px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Input = styled.div`
  margin-bottom: 15px;
  label {
    display: block;
    margin-bottom: 5px;
  }
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
  &:disabled {
    background-color: #a0a0a0;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  margin-bottom: 15px;
`;

export default Register;
