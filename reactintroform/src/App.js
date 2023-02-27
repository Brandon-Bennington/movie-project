
import { configure } from '@testing-library/react';
import React, { useState } from 'react';
import './App.css';


  // State variables for each field in the form
function App() {
    const [movies, setMovies] = useState([]);
    const [title, setTitle] = useState('');
    const [director, setDirector] = useState('');
    const [actors, setActors] = useState('');
    const [plot, setPlot] = useState('');
    const [year, setYear] = useState(0);
    const [imdbRating, setImdbRating] = useState(0);

  // Event handler that is called when the form is submitted. Prevents default. Creates object with movies properties. Resets all of the form input fields. 
  const handleSubmit = (event) => {
    event.preventDefault();
    const newMovie = { title, director, actors, plot, year, imdbRating };
    setMovies([...movies, newMovie]);
    setTitle('');
    setDirector('');
    setActors('');
    setPlot('');
    setYear(0);
    setImdbRating(0);
  };

  const handleDelete = (index) => {
    const updatedMovies = movies.filter((movie, i) => i !== index);
    setMovies(updatedMovies);
  };
//need labels to correspond to the fields in the form

//need labels to correspond to the fields in the form
return (
  <div className="App">
    <form onSubmit={handleSubmit}>
      <h2>Add Movie</h2>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <label htmlFor="director">Director:</label>
      <input
        type="text"
        id="director"
        value={director}
        onChange={(event)=>setDirector(event.target.value)}
      />

      <label htmlFor="actors">Actors:</label>
      <input
        type="text"
        id="actors"
        value={actors}
        onChange={(event)=>setActors(event.target.value)}
      />

      <label htmlFor="plot">Plot:</label>
      <input
        type="text"
        id="plot"
        value={plot}
        onChange={(event) => setPlot(event.target.value)}
      />

      <label htmlFor="year">Year:</label>
      <input
        type="number"
        id="year"
        value={year}
        onChange={(event) => setYear(parseInt(event.target.value))}
      />

      <label htmlFor="imdbRating">IMDB Rating:</label>
      <input
        type="number"
        id="imdbRating"
        value={imdbRating}
        step={0.1}
        onChange={(event) => setImdbRating(parseFloat(event.target.value))}
      />

      <button type="submit">Add Movie</button>
      <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Director</th>
          <th>Actors</th>
          <th>Plot</th>
          <th>Year</th>
          <th>IMDB Rating</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie, index) => (
          <tr key={index}>
            <td>{movie.title}</td>
            <td>{movie.director}</td>
            <td>{movie.actors}</td>
            <td>{movie.plot}</td>
            <td>{movie.year}</td>
            <td>{movie.imdbRating}</td>
            <td>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </form>
  </div>
);
}

export default App; 

