import React, { useState } from 'react';
import './style.css';
import { Navigate } from 'react-router-dom';

export default function Signin(props) {
  const [username, setUsername] = useState(''); // State variable to store the username input
  const [password, setPassword] = useState(''); // State variable to store the password input

  const handleSignin = () => {
    if (username === 'prince pranjul' && password === 'precom') {
      props.setSignedUser(username); // Set the signed-in user in the parent component
      console.log('signed in success');
    } else {
      console.log('Sign in failed');
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value); // Update the username state when the input value changes
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value); // Update the password state when the input value changes
  };

  if (props.signedUser) {
    return <Navigate to="/" />; // Redirect to home page if the user is signed in
  } else {
    return (
      <div className="container">
        <h1>Enter Your Details</h1>
        <div id="container-one">
          <input
            id="username"
            value={username}
            onChange={handleUsernameChange}
            placeholder="username"
          />
          <input
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="password"
          />
          <button onClick={handleSignin}>Signin</button>
        </div>
      </div>
    );
  }
}
