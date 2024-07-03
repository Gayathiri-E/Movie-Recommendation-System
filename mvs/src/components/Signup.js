// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

// const Signup = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const history = useHistory();

//   const handleSignup = (e) => {
//     e.preventDefault();
//     // Add signup logic here
//     history.push('/login');
//   };

//   return (
//     <div className="signup-page">
//       <h1>Sign Up</h1>
//       <form onSubmit={handleSignup}>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//           required
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//           required
//         />
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;


import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Registration logic here
    history.push('/movies');
  };

  return (
    <div className="signup">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
