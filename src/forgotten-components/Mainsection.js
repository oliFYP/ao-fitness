import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

function Mainsection() {
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSendPasswordResetEmail = () => {
    const auth = getAuth();

    // Set the 'no-reply' email address as the 'from' address
    const actionCodeSettings = {
      url: 'https://example.com/reset-password',
      handleCodeInApp: true,
    };

    sendPasswordResetEmail(auth, email, actionCodeSettings)
      .then(() => {
        setEmailSent(true);
      })
      .catch((error) => {
        console.error('Error sending password reset email:', error);
        // Handle the error (e.g., display an error message to the user)
      });
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <p>Enter your email to reset your password.</p>

      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Enter your email"
      />

      <button onClick={handleSendPasswordResetEmail}>Send Reset Email</button>

      {emailSent && <p>Password reset email sent. Check your email inbox.</p>}
    </div>
  );
}

export default Mainsection;