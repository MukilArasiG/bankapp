import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const InputSideWrapper = styled.form`
  height: auto;
  padding-bottom: 100px;
  position: relative;
  padding: 10px 10px 100px 10px;
`;

const InputWrapper = styled.div`
  border: 2px solid transparent;
  width: 90%;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  color: #333;
  width: 100%;
  font-size: 18px;  /* Increased font size */
  padding: 10px;  /* Increased padding */
  border-bottom: 1px solid rgb(100, 21, 173);
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  border-top: 1px solid transparent;
  outline: 0px transparent !important;
`;

const MessageInput = styled.textarea`
  width: 100%;
  color: #333;
  font-size: 18px;  /* Increased font size */
  padding: 12px;  /* Increased padding */
  border-bottom: 1px solid rgb(100, 21, 173);
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  border-top: 1px solid transparent;
  outline: 0px transparent !important;
`;

const SubMitButton = styled.input`
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 14px 30px;  /* Increased padding */
  background-color: rgb(8, 8, 63);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;  /* Increased font size */
`;

const LoadingButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 14px 30px;  /* Increased padding */
  background-color: rgb(8, 8, 63);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;  /* Increased font size */
`;

const InputSide = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [buttonLoading, setButtonLoading] = React.useState(false);

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const phoneHandler = (e) => {
    setPhone(e.target.value);
  };
  const messageHandler = (e) => {
    setMessage(e.target.value);
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonLoading(true);
    const response = await fetch('https://formspree.io/f/<your-form-id>', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phone, message }),
    });

    if (response.ok) {
      navigate('/success');
      setButtonLoading(false);
    } else {
      alert('Failed to submit form');
    }
  };

  return (
    <InputSideWrapper onSubmit={handleSubmit}>
      <InputWrapper>
        <p>Name</p>
        <Input
          type="text"
          required
          placeholder="name in your Account"  /* Updated placeholder */
          value={name}
          onChange={nameHandler}
        />
      </InputWrapper>
      <InputWrapper>
        <p>Email</p>
        <Input
          type="email"
          placeholder="bankingchain@gmail.com"  /* Updated placeholder */
          value={email}
          onChange={emailHandler}
          required
        />
      </InputWrapper>
      <InputWrapper>
        <p>Phone</p>
        <Input
          type="tel"
          required
          placeholder="+233546227893"
          value={phone}
          onChange={phoneHandler}
        />
      </InputWrapper>
      <InputWrapper>
        <p>Message</p>
        <MessageInput
          required
          placeholder="Write your message"
          value={message}
          onChange={messageHandler}
        />
      </InputWrapper>
      {buttonLoading ? (
        <LoadingButton>Loading...</LoadingButton>
      ) : (
        <SubMitButton type="submit" value="Send Message" />
      )}
    </InputSideWrapper>
  );
};

export default InputSide;
