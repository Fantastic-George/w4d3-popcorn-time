import movies from '../data/movies.json';
import './MovieList.css';
import { useState } from 'react';

function MovieList() {

const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

const deleteMovie = (id) => {
    console.log(`Deleting movie with id: ${id}`);
    const updatedMovies = moviesToDisplay.filter((movie) => movie.id !== id);
    setMoviesToDisplay(updatedMovies);
  };


  return (

    <div className="MovieList">
      <h1>{moviesToDisplay.length} movies found</h1>
      {moviesToDisplay.map((movie) => (
        <div key={movie.id} className="card">
          <div className="card-image">  
            <img src={movie.imgURL} alt={movie.title} />
          </div>
          <div className="card-content">
            <h2>{movie.title}</h2>
            <p>{movie.rating}</p>
            <button onClick={() => deleteMovie(movie.id)}> Delete this movie 🗑️</button>
          </div>

          
        </div>
      ))}
    </div>
  );
}

export default MovieList;