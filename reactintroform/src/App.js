
import './App.css';

//returns JSX that contains a 'div' tag enclosing an'h2' tag with the text "Movie Form"
function MovieForm(props) {
  return (
    <div>
      <h2>Movie Form</h2>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <MovieForm />
    </div>
  );
}

export default App;