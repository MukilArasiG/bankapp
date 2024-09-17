import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    setError('');

    if (username && password) {
      try {
        // Send POST request to login the user
        const response = await axios.post('http://localhost:5000/auth/login', {
          username,
          password
        });

        localStorage.setItem('token', response.data.token); // Store JWT token
        alert('Login successful');
        navigate('/home'); // Redirect to the home page
      } catch (error) {
        console.error(error);
        setError('Login failed. Invalid credentials.');
      }
    } else {
      setError('Please fill in all fields');
    }

    setLoading(false);
  };

  return (
    <Content>
      <Title>LOGIN</Title>
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
      <Button onClick={handleLogin} disabled={loading}>
        {loading ? 'Logging in...' : 'LOGIN'}
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

export default Login;
