
// import React, { useState } from 'react';

// const SignUp = ({ onSignUp }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSignUp(username, password, email);
//   };

//   return (
//     <div className='signup-bg'>
//       <div className="signup">
//         <h1>Sign Up</h1>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label>Username:</label>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label>Password:</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label>Email:</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit">Sign Up</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;



import React, { useState } from 'react';

const SignUp = ({ onSignUp }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignUp(username, password, email);
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

