
import './MovieList.css';

import Movie from '../components/MovieSummary';

function MovieList(props) {


const deleteMovie = (id) => {
    console.log(`Deleting movie with id: ${id}`);
    const updatedMovies = props.moviesToDisplay.filter((movie) => movie.id !== id);
    props.setMoviesToDisplay(updatedMovies);
  };


  return (
    <section className="movie-list">
      <h1>{props.moviesToDisplay.length} movies found</h1>
      <div className="movies-container">
        {props.moviesToDisplay.map((movie) => (
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

