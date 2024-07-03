// import React from 'react';
// import { Link } from 'react-router-dom';

// const MainPage = () => {
//   return (
//     <div className="main-page">
//       <h1>Welcome to the Movie Recommendation System</h1>
//       <Link to="/login">Login</Link> | <Link to="/signup">Sign Up</Link> | <Link to="/movies">Movies</Link>
//     </div>
//   );
// };

// export default MainPage;
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Movie Recommendation System</h1>
      <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link> | <Link to="/movies">View Movies</Link>
    </div>
  );
};

export default Home;
