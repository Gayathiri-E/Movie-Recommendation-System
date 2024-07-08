
// import React, { useState } from 'react';

// const LoginForm = ({ onLogin, onShowSignUp }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onLogin(username, password);
//   };

//   return (
//     <div className='login-bg'>
//       <div className="login">
//         <h1>Login</h1>
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
//           <button type="submit">Login</button>
//           <button type="button" onClick={onShowSignUp}>Sign Up</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;




import React, { useState } from 'react';

const LoginForm = ({ onLogin, onShowSignUp }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  
  return (
    <div className='background' style={{ backgroundImage: 'url("//img.freepik.com/free-photo/movie-background-collage_23-2149876028.jpg")' }}>
      <h1>Movie Recommendation System</h1>
      <div className="login">
        <h1>Login</h1>
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
          <button type="submit">Login</button>
          <button type="button" onClick={onShowSignUp}>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;


