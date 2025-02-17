import Header from './components/Header';
import MovieList from './pages/MovieList';
import Footer from './components/Footer';
import movies from './data/movies.json';
import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import MovieDetails from './components/MovieDetails';
import AddMovie from './components/AddMovie';

import './App.css';

function App() {
  const [allMovies, setAllMovies] = useState(movies);
  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);
  const location = useLocation();

  const handleAddMovie = (newMovie) => {
    const updatedMovies = [...allMovies, { ...newMovie, id: allMovies.length + 1 }];
    setAllMovies(updatedMovies);
    setMoviesToDisplay(updatedMovies);
  };

  return (
    <div className="app">
      <Header onResetSearch={() => setMoviesToDisplay(allMovies)} />

      <Routes>
        <Route 
          path="/" 
          element={
            <MovieList 
              movies={allMovies}
              moviesToDisplay={moviesToDisplay}
              setMoviesToDisplay={setMoviesToDisplay}
              onAddMovie={handleAddMovie}
            />
          } 
        />
        <Route path="/movie/:id" element={<MovieDetails moviesarr={allMovies} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="test" element={<h1>This is a test</h1>} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
