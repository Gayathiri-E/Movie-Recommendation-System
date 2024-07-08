import React from 'react';
import MovieDetails from './MovieDetails';

const MovieRecommendations = ({ recommendations }) => {
  return (
    <div className="movie-recommendations">
      {recommendations.length > 0 && <h2>Recommended Movies</h2>}
      <div className="movie-list">
        {recommendations.map(movie => (
          <MovieDetails key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieRecommendations;
