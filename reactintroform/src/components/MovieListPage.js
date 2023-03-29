import React, { useState } from 'react';
import Table from './Table';
import MovieForm from './MovieForm';
import MoviesData from './MoviesData';

function MovieListPage() {
  const [movies, setMovies] = useState(MoviesData);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const removeMovie = (toDelIdx) => {
    const filteredMovies = movies.filter((_, index) => {
      return index !== toDelIdx;
    });
    setMovies(filteredMovies);
  };

  return (
    <div>
      <h1>Movie List</h1>
      <Table movies={movies} removeMovie={removeMovie} />
      <MovieForm addMovie={addMovie} />
    </div>
  );
}

export default MovieListPage;
