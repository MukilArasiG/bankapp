import React, { useState } from 'react';

const PasskeyPage = () => {
  const [passkey, setPasskey] = useState('');

  const handleSubmit = () => {
    // Process the passkey (send it to the server)
    console.log(passkey);
  };

  return (
    <div>
      <h1>Enter Passkey</h1>
      <input
        type="text"
        value={passkey}
        onChange={(e) => setPasskey(e.target.value)}
        placeholder="Enter Passkey"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default PasskeyPage;
