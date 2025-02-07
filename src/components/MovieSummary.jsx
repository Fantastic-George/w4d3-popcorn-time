import './Movie.css';
import { Link } from 'react-router-dom';

function MovieSummary(props) {
    return (
        <div className="movie-card">
            <img className="card-image" src={props.imgURL} alt={props.title} />
            <h2>{props.title}</h2>
            <p>Rating: {props.rating}/10</p>
            <p>{props.genre.join(', ')}</p>
            <button onClick={() => props.onDelete(props.id)}>
                <span>Delete Movie</span>
                <span>🗑️</span>
            </button>
            
                
            <Link to={`/movie/${props.id}`} className="button details-button">
                <button>More details</button>
            </Link>
        </div>
    )
}

export default MovieSummary;