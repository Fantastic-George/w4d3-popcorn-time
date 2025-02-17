import './MovieList.css';
import Movie from '../components/MovieSummary';
import { useState } from 'react';
import AddMovie from '../components/AddMovie';

function MovieList({ movies, moviesToDisplay, setMoviesToDisplay, onAddMovie }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [rating, setRating] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredMovies = movies.filter(movie => {
      const matchesTitle = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRating = !rating || movie.rating >= Number(rating);
      return matchesTitle && matchesRating;
    });
    setMoviesToDisplay(filteredMovies);
    setSearchTerm('');
    setRating('');
  }

  const deleteMovie = (id) => {
    console.log(`Deleting movie with id: ${id}`);
    const updatedMovies = moviesToDisplay.filter((movie) => movie.id !== id);
    setMoviesToDisplay(updatedMovies);
  };

  return (
    <section className="movie-list">
      <form onSubmit={handleSearch} id="search-form">
        <input 
          type="text" 
          placeholder="Search for a movie" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <label>Optional: set a minimum rating</label>
        <input
          type="number"
          placeholder="Rating (1-10)"
          value={rating}
          min="1"
          max="10"
          onChange={(e) => setRating(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <h1>{moviesToDisplay.length} movies found</h1>
      <AddMovie callbackToCreate={onAddMovie} />
      <div className="movies-container">
        {moviesToDisplay.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            rating={movie.rating}
            imgURL={movie.imgURL}
            onDelete={deleteMovie}
            genre={movie.genres}
          />
        ))}
      </div>
    </section>
  );
}

export default MovieList;

