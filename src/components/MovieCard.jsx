import IMDB from "../svg/imdb.svg";
import RottenTomatoes from "../svg/rot-tomato.svg";
import { useNavigate } from "react-router-dom";
import { getRandomIntAsDecimal } from "../util/helpers";

function MovieCard({ movie }) {
  const navigate = useNavigate();
  const baseUrl = "https://image.tmdb.org/t/p/w500";
  const imageUrl = baseUrl + movie.poster_path;

  const handleClick = function () {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div onClick={handleClick} className="card" data-testid="movie-card">
      <img
        className="card__img"
        src={imageUrl}
        alt="poster image"
        data-testid="movie-poster"
      />
      <p>MOVIE</p>
      <h4 className="title" data-testid="movie-title">
        {movie.title}
      </h4>
      <div className="rating">
        <div className="imdb">
          <img src={IMDB} alt="imdb" />
          <div>{`${getRandomIntAsDecimal(80, 99)}/100`}</div>
        </div>
        <div className="rot">
          <img src={RottenTomatoes} alt="RottenTomatoes" />
          <div>{`${movie.vote_average.toFixed(1) * 10}%`}</div>
        </div>
      </div>
      <p>
        Release Date:{" "}
        <span data-testid="movie-release-date">{movie.release_date}</span>
      </p>
    </div>
  );
}

export default MovieCard;
