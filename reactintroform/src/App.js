import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import MovieListPage from './components/MovieListPage';
import MoviePage from './components/MoviePage';

function App() {
  const [movies, setMovies] = useState([]);

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
          <Route path="/" element={<MovieListPage movies={movies} addMovie={addMovie} removeMovie={removeMovie} />} />
          <Route path="/movie/:id" element={<MoviePage movies={movies} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
