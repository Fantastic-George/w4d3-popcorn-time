import Header from './components/Header';
import MovieList from './pages/MovieList';
import Footer from './components/Footer';
import movies from './data/movies.json';
import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import MovieDetails from './components/MovieDetails';
import './App.css';

function App() {
  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredMovies = movies.filter(movie => 
      movie && movie.title && movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setMoviesToDisplay(filteredMovies);
    setSearchTerm('');
  }

  return (
    <div className="app">
      <Header onResetSearch={() => setMoviesToDisplay(movies)} />

      {location.pathname === '/' && (
        <section>
          <form onSubmit={handleSearch} id="search-form">
            <input 
              type="text" 
              placeholder="Search for a movie" 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
            />
            <button type="submit">Search</button>
          </form>
        </section>
      )}

      <Routes>
        <Route 
          path="/" 
          element={
            <MovieList 
              moviesToDisplay={moviesToDisplay} 
            />
          } 
        />
        <Route path="/movie/:id" element={<MovieDetails moviesarr={moviesToDisplay} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="test" element={<h1>This is a test</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
