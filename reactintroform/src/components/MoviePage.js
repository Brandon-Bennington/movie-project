import React from 'react';
import { useParams } from 'react-router-dom';

function MoviePage({ movies }) {
  const { filmTitle } = useParams();
  const selectedMovie = movies.find((movie) => movie.title === filmTitle);

  return (
    <div>
      <h1>{selectedMovie.title}</h1>
      <p>Actors: {selectedMovie.actors.join(', ')}</p>
      <p>Plot: {selectedMovie.plot}</p>
      <p>Genre: {selectedMovie.genre}</p>
      <p>IMDb Rating: {selectedMovie.imdbRating}</p>
      <p>Director: {selectedMovie.director}</p>
      <p>Year: {selectedMovie.year}</p>
    </div>
  );
}

export default MoviePage;
