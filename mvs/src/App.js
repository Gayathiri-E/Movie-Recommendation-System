// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import MovieList from './components/MovieList';
import MovieRecommendations from './components/MovieRecommendations';
import SearchBar from './components/SearchBar';
import './App.css';

const moviesData = [
  // Tamil Movies
  {
    id: 1,
    title: 'Baahubali: The Beginning',
    director: 'S.S. Rajamouli',
    language: 'Tamil',
    genre: 'Action, Drama',
    year: 2015,
    rating: 8.1,
    image: 'https://static.hollywoodreporter.com/sites/default/files/2015/07/bahubali_warrior_poster_p_15.jpg'
  },
  {
    id: 2,
    title: 'Vikram Vedha',
    director: 'Pushkar-Gayathri',
    language: 'Tamil',
    genre: 'Action, Crime, Thriller',
    year: 2017,
    rating: 8.5,
    image: 'http://moviegalleri.net/wp-content/uploads/2017/02/Madhavan-Vijay-Sethupathi-Vikram-Veda-Movie-First-Look-Poster.jpg'
  },
  {
    id: 3,
    title: 'Asuran',
    director: 'Vetrimaaran',
    language: 'Tamil',
    genre: 'Action, Drama',
    year: 2019,
    rating: 8.5,
    image: 'https://image.tmdb.org/t/p/w500/3XqgONtLalKoGfKPVa7bRirBEW7.jpg'
  },
  {
    id: 4,
    title: 'Super Deluxe',
    director: 'Thiagarajan Kumararaja',
    language: 'Tamil',
    genre: 'Comedy, Crime, Drama',
    year: 2019,
    rating: 8.4,
    image: 'https://image.tmdb.org/t/p/w500/9zH2YjP0sVg5GmpJdHgfhz2O8Bq.jpg'
  },
  {
    id: 5,
    title: 'Pariyerum Perumal',
    director: 'Mari Selvaraj',
    language: 'Tamil',
    genre: 'Drama',
    year: 2018,
    rating: 8.4,
    image: 'https://image.tmdb.org/t/p/w500/6aumP0MooMAmoxkYT0yfGW3IyUZ.jpg'
  },
  {
    id: 6,
    title: 'Kabali',
    director: 'Pa. Ranjith',
    language: 'Tamil',
    genre: 'Action, Crime, Drama',
    year: 2016,
    rating: 6.2,
    image: 'https://image.tmdb.org/t/p/w500/x6LNzrCO1s84W3X5eL8ZC0DQ6TY.jpg'
  },
  {
    id: 7,
    title: 'Kaala',
    director: 'Pa. Ranjith',
    language: 'Tamil',
    genre: 'Action, Drama',
    year: 2018,
    rating: 6.8,
    image: 'https://image.tmdb.org/t/p/w500/yZ7LFQHA0EeUPUL4Bv4bdhlsVK3.jpg'
  },
  {
    id: 8,
    title: 'Thani Oruvan',
    director: 'Mohan Raja',
    language: 'Tamil',
    genre: 'Action, Crime, Thriller',
    year: 2015,
    rating: 8.5,
    image: 'https://image.tmdb.org/t/p/w500/5m7zzP8FgspGceg3WxeXVjMBVOa.jpg'
  },
  {
    id: 9,
    title: 'Aruvi',
    director: 'Arun Prabhu Purushothaman',
    language: 'Tamil',
    genre: 'Drama',
    year: 2017,
    rating: 8.4,
    image: 'https://image.tmdb.org/t/p/w500/xhx5UcdvpNb1R53RzfyIBnkZgkK.jpg'
  },
  {
    id: 10,
    title: 'Soodhu Kavvum',
    director: 'Nalan Kumarasamy',
    language: 'Tamil',
    genre: 'Comedy, Crime, Thriller',
    year: 2013,
    rating: 8.3,
    image: 'https://image.tmdb.org/t/p/w500/lq0J39ceVpdKZw6JRyWrQR8rkbB.jpg'
  },
  {
    id: 11,
    title: 'Visaaranai',
    director: 'Vetrimaaran',
    language: 'Tamil',
    genre: 'Crime, Drama, Thriller',
    year: 2015,
    rating: 8.1,
    image: 'https://image.tmdb.org/t/p/w500/sS1nG1MAx6a4mdVR7I9VzB9upq7.jpg'
  },
  {
    id: 12,
    title: '96',
    director: 'C. Prem Kumar',
    language: 'Tamil',
    genre: 'Drama, Romance',
    year: 2018,
    rating: 8.6,
    image: 'https://image.tmdb.org/t/p/w500/1tI4ATRpn6EneFR9AcljZdS9MrY.jpg'
  },
  {
    id: 13,
    title: 'Jigarthanda',
    director: 'Karthik Subbaraj',
    language: 'Tamil',
    genre: 'Action, Crime, Drama',
    year: 2014,
    rating: 8.3,
    image: 'https://image.tmdb.org/t/p/w500/2JxhMiTpsxLmj7XX4b1bMUBKcQz.jpg'
  },
  {
    id: 14,
    title: 'Pizza',
    director: 'Karthik Subbaraj',
    language: 'Tamil',
    genre: 'Horror, Thriller',
    year: 2012,
    rating: 7.6,
    image: 'https://image.tmdb.org/t/p/w500/bfQyHL8NlZg7QfET36XqFGeGlvt.jpg'
  },
  {
    id: 15,
    title: 'Sethupathi',
    director: 'S.U. Arun Kumar',
    language: 'Tamil',
    genre: 'Action, Crime, Drama',
    year: 2016,
    rating: 7.1,
    image: 'https://image.tmdb.org/t/p/w500/7AUpS1d2yfb2Vu95T1BoXw7pgiA.jpg'
  },
  {
    id: 16,
    title: 'Mersal',
    director: 'Atlee Kumar',
    language: 'Tamil',
    genre: 'Action, Drama, Thriller',
    year: 2017,
    rating: 7.7,
    image: 'https://image.tmdb.org/t/p/w500/fdBB0iHxUmY3pNoF3jXB8V5rxdr.jpg'
  },
  {
    id: 17,
    title: 'Irudhi Suttru',
    director: 'Sudha Kongara',
    language: 'Tamil',
    genre: 'Drama, Sport',
    year: 2016,
    rating: 7.7,
    image: 'https://image.tmdb.org/t/p/w500/bm8Q0qfTDj5LxH39c5GWXb6f3n6.jpg'
  },
  {
    id: 18,
    title: 'Vada Chennai',
    director: 'Vetrimaaran',
    language: 'Tamil',
    genre: 'Action, Crime, Drama',
    year: 2018,
    rating: 8.4,
    image: 'https://image.tmdb.org/t/p/w500/9PZZG6inD5acxLJ5eF7JHQlF4Tm.jpg'
  },
  {
    id: 19,
    title: 'Thuppakki',
    director: 'A.R. Murugadoss',
    language: 'Tamil',
    genre: 'Action, Thriller',
    year: 2012,
    rating: 7.8,
    image: 'https://image.tmdb.org/t/p/w500/sKfCQlH6dxiKUtUSzaWeXI7hEsy.jpg'
  },
  {
    id: 20,
    title: 'Indian',
    director: 'S. Shankar',
    language: 'Tamil',
    genre: 'Drama, Action, Thriller',
    year: 1996,
    rating: 8.1,
    image: 'https://image.tmdb.org/t/p/w500/qzA87Wf4jo1h8JMkZ5o2gV6hZvZ.jpg'
  },

  // English Movies
  {
    id: 21,
    title: 'The Shawshank Redemption',
    director: 'Frank Darabont',
    language: 'English',
    genre: 'Drama',
    year: 1994,
    rating: 9.3,
    image: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg'
  },
  {
    id: 22,
    title: 'The Godfather',
    director: 'Francis Ford Coppola',
    language: 'English',
    genre: 'Crime',
    year: 1972,
    rating: 9.2,
    image: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg'
  },
  {
    id: 23,
    title: 'The Dark Knight',
    director: 'Christopher Nolan',
    language: 'English',
    genre: 'Action',
    year: 2008,
    rating: 9.0,
    image: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg'
  },
  {
    id: 24,
    title: 'Pulp Fiction',
    director: 'Quentin Tarantino',
    language: 'English',
    genre: 'Crime',
    year: 1994,
    rating: 8.9,
    image: 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg'
  },
  {
    id: 25,
    title: 'Forrest Gump',
    director: 'Robert Zemeckis',
    language: 'English',
    genre: 'Drama',
    year: 1994,
    rating: 8.8,
    image: 'https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg'
  },

  // Malayalam Movies
  {
    id: 26,
    title: 'Drishyam',
    director: 'Jeethu Joseph',
    language: 'Malayalam',
    genre: 'Crime, Drama, Thriller',
    year: 2013,
    rating: 8.7,
    image: 'https://image.tmdb.org/t/p/w500/y90cJjfR2uS3WpSjryPBoUifI.jpg'
  },
  {
    id: 27,
    title: 'Premam',
    director: 'Alphonse Puthren',
    language: 'Malayalam',
    genre: 'Comedy, Drama, Romance',
    year: 2015,
    rating: 8.3,
    image: 'https://image.tmdb.org/t/p/w500/nnPPLlEVh4GGOo7NOwQl3p6PNdF.jpg'
  },

  // Hindi Movies
  {
    id: 28,
    title: 'Dilwale Dulhania Le Jayenge',
    director: 'Aditya Chopra',
    language: 'Hindi',
    genre: 'Drama, Romance',
    year: 1995,
    rating: 8.1,
    image: 'https://image.tmdb.org/t/p/w500/2CAL2433ZeIihfX1Hb2139CX0pW.jpg'
  },
  {
    id: 29,
    title: '3 Idiots',
    director: 'Rajkumar Hirani',
    language: 'Hindi',
    genre: 'Comedy, Drama',
    year: 2009,
    rating: 8.4,
    image: 'https://image.tmdb.org/t/p/w500/fB4lLlR8zZ800vvaZAKzd8eOidu.jpg'
  },

  // Telugu Movies
  {
    id: 30,
    title: 'Baahubali: The Beginning',
    director: 'S.S. Rajamouli',
    language: 'Telugu',
    genre: 'Action, Drama',
    year: 2015,
    rating: 8.1,
    image: 'https://image.tmdb.org/t/p/w500/jf8e8x4NAAofKJrLhxKPQK4Km8G.jpg'
  },
  {
    id: 31,
    title: 'Arjun Reddy',
    director: 'Sandeep Reddy Vanga',
    language: 'Telugu',
    genre: 'Drama, Romance',
    year: 2017,
    rating: 8.1,
    image: 'https://image.tmdb.org/t/p/w500/aqH1y6WQLCmfgDS2gT2hZgF5yDv.jpg'
  },
  {
    id: 32,
    title: 'Ala Vaikunthapurramuloo',
    director: 'Trivikram Srinivas',
    language: 'Telugu',
    genre: 'Action, Drama',
    year: 2020,
    rating: 7.9,
    image: 'https://image.tmdb.org/t/p/w500/8hFVls4jZjzV0LAHKo5sDTfHh42.jpg'
  },
  {
    id: 33,
    title: 'Jersey',
    director: 'Gowtam Tinnanuri',
    language: 'Telugu',
    genre: 'Drama, Sport',
    year: 2019,
    rating: 8.3,
    image: 'https://image.tmdb.org/t/p/w500/2g3HjHgkCXEjWpU5ZlpMzU8rRgH.jpg'
  },
  {
    id: 34,
    title: 'Rangasthalam',
    director: 'Sukumar',
    language: 'Telugu',
    genre: 'Action, Drama',
    year: 2018,
    rating: 8.4,
    image: 'https://image.tmdb.org/t/p/w500/fbPKxqoZq18T0J6DlYUfrj6refy.jpg'
  },
];




function App() {
  const [movies, setMovies] = useState(moviesData);
  const [searchResults, setSearchResults] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  const searchMovies = (query) => {
    const results = moviesData.filter(movie =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
    if (results.length > 0) {
      recommendMovies(results[0].genre);
    }
  };

  const recommendMovies = (genre) => {
    const results = moviesData.filter(movie =>
      movie.genre.toLowerCase() === genre.toLowerCase()
    );
    setRecommendations(results);
  };

  return (
    <div className="App">
      <h1>Movie Recommendation System</h1>
      <SearchBar searchMovies={searchMovies} />
      <MovieList movies={searchResults.length ? searchResults : movies} />
      <MovieRecommendations recommendations={recommendations} />
    </div>
  );
}

export default App;
