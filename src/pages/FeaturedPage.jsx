import MovieCard from "../components/MovieCard";

function FeaturedPage({ movies }) {
  const renderedMovies = movies.map((movie) => {
    return <MovieCard key={movie.id} movie={movie} />;
  });

  return (
    <div className="container">
      <div className="featured">
        <h2 className="heading--tertiary">Featured Movie</h2>

        <div className="cards">{renderedMovies}</div>
      </div>
    </div>
  );
}

export default FeaturedPage;
