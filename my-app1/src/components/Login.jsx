import  { useState, useEffect } from 'react';

function Login() {
  // Step 1: Define state variables using useState
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Step 2: Predefined valid users and passwords
  const validCredentials = {
    user1: 'password123',
    user2: 'mypassword456',
  };

  // Step 3: Use useEffect to handle side effects (display login success)
  useEffect(() => {
    if (isLoggedIn) {
      alert('You have successfully logged in!');
    }
  }, [isLoggedIn]); // Runs when `isLoggedIn` state changes

  // Step 4: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation: check if username and password are filled
    if (username === '' || password === '') {
      setErrorMessage('Both fields are required.');
      return;
    }
    
    // Check if username exists in validCredentials and password matches
    if (validCredentials[username] && validCredentials[username] === password) {
      setIsLoggedIn(true);
      setErrorMessage('');
    } else {
      setErrorMessage('Invalid username or password.');
    }
  };

  // Step 5: Handle input changes
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Enter username"
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter password"
          />
        </div>

        <button type="submit">Login</button>
      </form>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
}

export default Login;