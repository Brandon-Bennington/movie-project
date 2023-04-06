import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import MovieListPage from './components/MovieListPage';
import MoviePage from './components/MoviePage';
import HomePage from './components/HomePage'; 
import moviesData from './components/MoviesData';

function App() {
  const [movies, setMovies] = useState(moviesData);
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
    <div className='App'>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} /> {}
          <Route path="/movies" element={<MovieListPage movies={movies} addMovie={addMovie} removeMovie={removeMovie} />} />
          <Route path="/movies/:filmTitle" element={<MoviePage movies={movies} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
