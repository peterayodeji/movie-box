import PlayIcon from "../svg/play.svg";
import HeaderBar from "../components/HeaderBar";
import { getUTCDate } from "../util/helpers";
import Footer from "./Footer";

function Details({ movieDetails }) {
  const baseUrl = "https://image.tmdb.org/t/p/original";

  if (!movieDetails.backdrop_path) return;
  const backdropUrl = baseUrl + movieDetails.backdrop_path;

  const containerStyle = {
    backgroundImage: `linear-gradient(to right bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url('${backdropUrl}')`,
  };

  return (
    <>
      <div className="heading-movie">
        <HeaderBar />
      </div>

      <div>
        <div className="banner" style={containerStyle}>
          <div className="banner__play">
            <img src={PlayIcon} alt="play" />
            <div>Watch Trailer</div>
          </div>
        </div>

        <div className="details">
          <h3 className="heading--tertiary movie-title">
            {movieDetails.title}
          </h3>
          <div className="release-date">
            Release Date: {getUTCDate(movieDetails.release_date)}
          </div>
          <div className="runtime">Runtime: {movieDetails.runtime} minutes</div>
          <p className="movie-text">{movieDetails.overview}</p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Details;
