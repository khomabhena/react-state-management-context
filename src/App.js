
import AddMovie from './AddMovie';
import './App.css';
import { MovieContext, MovieProvider } from './MovieContext';
import MovieList from './MovieList';
import Nav from './Nav';

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
