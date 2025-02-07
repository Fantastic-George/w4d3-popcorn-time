import './GenreCard.css';

const GenreCard = ({ title, genres }) => {
    return (
      <div className="p-4 border rounded-lg shadow-sm">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <div className="flex flex-wrap">
          {genres.map((genre, index) => (
            <GenreTag key={index} genre={genre} />
          ))}
        </div>
      </div>
    );
  };

export default GenreCard;