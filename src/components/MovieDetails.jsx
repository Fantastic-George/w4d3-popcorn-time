import { useParams } from 'react-router-dom';
import movies from '../data/movies.json';
import './MovieDetails.css';

function MovieDetails(props) {
    const result = useParams();
    console.log(result);
const movie = props.moviesarr.find(movie => movie.id === parseInt(result.id));
  if (!movie) {
   return <div>Movie not found!</div>;
  }

    return (
        <div className="movie-details">
            <h1>{movie.title}</h1>
            <img src={movie.imgURL} alt={movie.title} className='movie-poster'/>

            <p>{movie.description}</p>
            <p>Rating: {movie.rating}/10</p>
            <p>Genre: {movie.genres?.join(', ')}</p>
       
            
        </div>
    )
}

export default MovieDetails;

