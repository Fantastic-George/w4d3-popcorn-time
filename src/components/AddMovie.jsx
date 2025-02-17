import { useState } from 'react';

function AddMovie(props) {
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [genre, setGenre] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validate inputs
        if (!title || !rating || !imageURL || !genre) {
            alert('Please fill in all fields');
            return;
        }

        // Convert rating to number and validate
        const numRating = Number(rating);
        if (isNaN(numRating) || numRating < 1 || numRating > 10) {
            alert('Rating must be a number between 1 and 10');
            return;
        }

        const movieDetails = {
            title: title,
            rating: numRating,
            imgURL: imageURL,
            genres: genre.split(',').map(g => g.trim()) // Convert comma-separated string to array
        };
        
        props.callbackToCreate(movieDetails);
        
        // Clear form after submission
        setTitle('');
        setRating('');
        setImageURL('');
        setGenre('');
    }

    return (
        <div>
            <h1>Add Movie</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Title" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    required
                />
                <input 
                    type="number" 
                    placeholder="Rating (1-10)" 
                    value={rating} 
                    onChange={(e) => setRating(e.target.value)}
                    min="1"
                    max="10"
                    required
                />
                <input 
                    type="text" 
                    placeholder="Image URL" 
                    value={imageURL} 
                    onChange={(e) => setImageURL(e.target.value)}
                    required
                />
                <input 
                    type="text" 
                    placeholder="Genres (comma-separated)" 
                    value={genre} 
                    onChange={(e) => setGenre(e.target.value)}
                    required
                />
                <button type="submit">Add Movie</button>
            </form>
        </div>
    )
}

export default AddMovie;

