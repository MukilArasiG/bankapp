import React from 'react';
import styled from 'styled-components';

// Your Typeform link
const typeformLink = 'https://y00drw0b30s.typeform.com/to/PSIjZRog';

const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f4f4f4;
  min-height: 100vh;
`;

const QRCodeImage = styled.img`
  margin-top: 20px;
  border: 2px solid #ccc;
  border-radius: 10px;
`;

const Account = () => {
  return (
    <AccountContainer>
      <h1>Scan the QR Code to Enter Your Email</h1>
      <p>Scan the QR code below with your mobile device. It will direct you to a form where you can enter your email address.</p>
      <QRCodeImage
        src={`https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=${encodeURIComponent(typeformLink)}`}
        alt="QR Code"
        width="256"
        height="256"
      />
    </AccountContainer>
  );
};

export default Account;
