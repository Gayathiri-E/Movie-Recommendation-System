
import React, { useState } from 'react';
import axios from 'axios';

const SignUp = ({onSignUp}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSignUp(username, password, email);

    try {
      console.log("signup");
      const response = await axios.post('http://localhost:5000/api/auth/signup', { username, password, email });
      console.log(response); // User created successfully
      window.location.href = '/login'; // Navigate to login page after successful signup
    } catch (error) {
      console.error(error.response.data.error);
    }
  };

  return (
    <div className='background' style={{ backgroundImage: 'url("https://img.freepik.com/free-photo/movie-background-collage_23-2149876030.jpg?ga=GA1.1.906887392.1694617096&semt=ais_user")' }}>
      <h1>Movie Recommendation System</h1>
      <div className="signup">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;


